import { BlogTypes } from '.';

interface getPicturesProps {
  quantity?: number;
}

export async function getPictures({ quantity }: getPicturesProps): Promise<BlogTypes.Picture[]> {
  const space = `https://api.unsplash.com/photos/random?query=space&client_id=${process.env.UNSPLASH_ACCESS_KEY}&orientation=landscape&count=${quantity}`;
  const res = await fetch(space);
  const pictures = (await res.json()).map(
    ({ alt_description, urls, user }: BlogTypes.UnplashApiResponse) => ({
      regular: urls.regular,
      small: urls.small,
      alt_description,
      user: {
        name: user.name,
        portfolio_url: user.links.html,
      },
    })
  );

  return pictures;
}
