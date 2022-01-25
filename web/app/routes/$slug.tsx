import { Bookmark, Like } from '@prisma/client';
import { json, LinksFunction, LoaderFunction, MetaFunction, redirect, useLoaderData } from 'remix';
import { BlogApi, BlogTypes, Post, UnsplashApi } from '~/features/Blog';
import { BookmarksApi } from '~/features/Bookmarks';
import { LikesApi } from '~/features/Likes';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
import { auth } from '~/services';
import highlighter from '~/styles/highlighter.css';
import { postMeta } from '~/util/header/header';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: highlighter,
  },
];

export const meta: MetaFunction = ({ data }) => {
  return postMeta(data);
};

export interface LoaderData {
  post: BlogTypes.Post;
  preview: boolean;
  picture: BlogTypes.Picture;
  bookmark: Bookmark | null;
  like: Like | null;
  likeQuantity?: number;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const post = await BlogApi.getPost(params.slug);

  if (!post || post.length === 0) {
    return redirect('/');
  }

  const requestUrl = new URL(request?.url);
  const preview = requestUrl?.searchParams?.get('preview') === process.env.SANITY_PREVIEW_SECRET;
  const [picture] = await UnsplashApi.getPictures({ quantity: 1 });
  const profile = (await auth.isAuthenticated(request))?.profile;

  const bookmark = await BookmarksApi.getBookmark({
    userId: `${profile?.provider}-${profile?.id}`,
    postSlug: params.slug!,
  });

  const like = await LikesApi.getLike({
    userId: `${profile?.provider}-${profile?.id}`,
    postSlug: params.slug!,
  });

  const likeQuantity = await LikesApi.likeQuantity({ slug: params.slug! });

  return json<LoaderData>({ post, preview, picture, bookmark, like, likeQuantity });
};

export default function Index() {
  const { post, preview, picture, bookmark, like, likeQuantity } = useLoaderData<LoaderData>();

  return (
    <Post
      post={filterDataToSingleItem(post, preview)}
      preview={preview}
      picture={picture}
      bookmark={bookmark}
      like={like}
      likeQuantity={likeQuantity}
    />
  );
}
