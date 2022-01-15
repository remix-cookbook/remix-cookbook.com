import { BlogTypes } from '.';

export async function getPictures(): Promise<BlogTypes.Picture[]> {
  // const nature = `https://api.unsplash.com/photos/random?query=nature&client_id=${process.env.UNSPLASH_ACCESS_KEY}&orientation=landscape&count=30`
  const space = `https://api.unsplash.com/photos/random?query=space&client_id=${process.env.UNSPLASH_ACCESS_KEY}&orientation=landscape&count=30`;
  // const justen = `https://api.unsplash.com/users/willianjusten/photos?orientation=landscape&count=999&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const res = await fetch(space);
  const pictures = (await res.json()).map(({ alt_description, urls, user }) => ({
    regular: urls.regular,
    small: urls.small,
    alt_description,
    user: {
      name: user.name,
      portfolio_url: user.portfolio_url,
    },
  }));

  return pictures;
}
