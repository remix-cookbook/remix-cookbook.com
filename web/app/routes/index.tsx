import { LinksFunction, LoaderFunction, useLoaderData } from 'remix';
import { BlogApi, UnsplashApi } from '~/features/Blog';
import { BlogTypes, Posts } from '~/features/Blog';
import pictures from '~/features/Blog/components/Posts/pictures-space.json';
import shuffle from 'lodash/shuffle';
import card from '~/styles/card.css';
import { languageCookie, parseCookie } from '~/cookies';

export interface LoaderData {
  posts: BlogTypes.Post[];
  pictures: BlogTypes.Picture[];
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: card }];

export const loader: LoaderFunction = async ({ request }) => {
  const { language } = await parseCookie(request, languageCookie);
  const posts = (await BlogApi.getPosts({ language })) ?? [];
  // const tempPictures = (await UnsplashApi.getPictures()) ?? [];

  // console.log(JSON.stringify(tempPictures));

  return { posts, pictures: shuffle(pictures) };
};

export default function Index() {
  const { posts, pictures } = useLoaderData<LoaderData>();

  return <Posts posts={posts} pictures={pictures} />;
}
