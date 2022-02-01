import shuffle from 'lodash/shuffle';
import { json, LinksFunction, LoaderFunction, useLoaderData } from 'remix';
import { ErrorBoundary as GeneralErrorBoundary } from '~/components';
import { languageCookie, parseCookie } from '~/cookies';
import { BlogApi, BlogTypes, Posts, UnsplashApi } from '~/features/Blog';
import card from '~/styles/card.css';

export interface LoaderData {
  posts: BlogTypes.Post[];
  pictures: BlogTypes.Picture[];
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: card }];

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const { language } = await parseCookie(request, languageCookie);
    const posts = (await BlogApi.getPosts({ language })) ?? [];
    const pictures = shuffle(await UnsplashApi.getPictures({ quantity: 30 }));

    return json<LoaderData>({ posts, pictures });
  } catch (error) {
    throw new Response('Server error', { status: 500 });
  }
};

export default function Index() {
  const { posts, pictures } = useLoaderData<LoaderData>();

  return <Posts posts={posts} pictures={pictures} />;
}

export const ErrorBoundary = () => (
  <GeneralErrorBoundary>
    We could not load the list of posts. Please try again.
  </GeneralErrorBoundary>
);
