import { Bookmark } from '@prisma/client';
import { json, LinksFunction, LoaderFunction, MetaFunction, redirect, useLoaderData } from 'remix';
import { BlogApi, BlogTypes, Post, UnsplashApi } from '~/features/Blog';
import { BookmarksApi } from '~/features/Bookmarks';
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

  return json<LoaderData>({ post, preview, picture, bookmark });
};

export default function Index() {
  const { post, preview, picture, bookmark } = useLoaderData<LoaderData>();

  return (
    <Post
      post={filterDataToSingleItem(post, preview)}
      preview={preview}
      picture={picture}
      bookmark={bookmark}
    />
  );
}
