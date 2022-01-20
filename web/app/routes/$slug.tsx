import { json, LinksFunction, LoaderFunction, MetaFunction, redirect, useLoaderData } from 'remix';
import { GitHubProfile } from 'remix-auth-github';
import { BlogApi, BlogTypes, Post, UnsplashApi } from '~/features/Blog';
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
  profile?: GitHubProfile;
}

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<LoaderData | Response> => {
  const requestUrl = new URL(request?.url);
  const preview = requestUrl?.searchParams?.get('preview') === process.env.SANITY_PREVIEW_SECRET;
  const post = await BlogApi.getPost(params.slug);
  const [picture] = await UnsplashApi.getPictures({ quantity: 1 });
  const profile = (await auth.isAuthenticated(request))?.profile;

  if (!post || post.length === 0) {
    return redirect('/');
  }

  return json<LoaderData>({ post, preview, picture, profile });
};

export default function Index() {
  const { post, preview, picture, profile } = useLoaderData<LoaderData>();

  return (
    <Post
      post={filterDataToSingleItem(post, preview)}
      preview={preview}
      picture={picture}
      profile={profile}
    />
  );
}
