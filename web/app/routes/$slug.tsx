import { json, LinksFunction, LoaderFunction, MetaFunction, redirect, useLoaderData } from 'remix';
import { BlogApi, BlogTypes, Post } from '~/features/Blog';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
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
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const requestUrl = new URL(request?.url);
  const preview = requestUrl?.searchParams?.get('preview') === process.env.SANITY_PREVIEW_SECRET;
  const post = await BlogApi.getPost(params.slug, preview);

  if (!post || post.length === 0) {
    return redirect('/');
  }

  return json<LoaderData>({ post, preview });
};

export default function Index() {
  const { post, preview } = useLoaderData<LoaderData>();

  return <Post post={filterDataToSingleItem(post, preview)} preview={preview} />;
}
