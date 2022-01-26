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
  userLike: Like | null;
  likeQuantity?: number;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const requestUrl = new URL(request?.url);
  const preview = requestUrl?.searchParams?.get('preview') === process.env.SANITY_PREVIEW_SECRET;
  let post = await BlogApi.getPost(params.slug, preview);

  if (!post || post.length === 0) {
    return redirect('/');
  }

  post = filterDataToSingleItem(post, preview);
  const [picture] = await UnsplashApi.getPictures({ quantity: 1 });
  const profile = (await auth.isAuthenticated(request))?.profile;

  const bookmark = await BookmarksApi.getBookmark({
    userId: `${profile?.provider}-${profile?.id}`,
    postSlug: params.slug!,
  });

  const userLike = await LikesApi.getLike({
    userId: `${profile?.provider}-${profile?.id}`,
    postId: post._id!,
  });

  const likeQuantity = await LikesApi.likeQuantity({ postId: post._id });

  return json<LoaderData>({ post, preview, picture, bookmark, userLike, likeQuantity });
};

export default function Index() {
  const {
    post,
    preview,
    picture,
    bookmark,
    userLike,
    likeQuantity = 0,
  } = useLoaderData<LoaderData>();

  return (
    <Post
      post={post}
      preview={preview}
      picture={picture}
      bookmark={bookmark}
      userLike={userLike}
      likeQuantity={likeQuantity}
    />
  );
}
