import shuffle from 'lodash/shuffle';
import { json, LinksFunction, LoaderFunction, useLoaderData } from 'remix';
import { languageCookie, parseCookie } from '~/cookies';
import { BlogApi, BlogTypes, Posts } from '~/features/Blog';
import pictures from '~/features/Blog/components/Posts/pictures-space.json';
import card from '~/styles/card.css';

export interface LoaderData {
  posts: BlogTypes.Post[];
  pictures: BlogTypes.Picture[];
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: card }];

export const loader: LoaderFunction = async ({ request }) => {
  const { language } = await parseCookie(request, languageCookie);
  const posts = (await BlogApi.getPosts({ language })) ?? [];

  // console.log(JSON.stringify(await UnsplashApi.getPictures()));

  return json<LoaderData>({ posts, pictures: shuffle(pictures) });
};

export default function Index() {
  const { posts, pictures } = useLoaderData<LoaderData>();

  return <Posts posts={posts} pictures={pictures} />;
}
