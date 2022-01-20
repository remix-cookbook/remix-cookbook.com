import { ActionFunction, json, LoaderFunction, redirect, useLoaderData } from 'remix';
import { route } from 'routes-gen';
import { BlogTypes } from '~/features/Blog';
import { Bookmarks } from '~/features/Bookmarks';
import { db } from '~/util/db/db.server';

export interface LoaderData {
  bookmarks: BlogTypes.Bookmark[];
}

export const loader: LoaderFunction = async ({ params }) => {
  const bookmarks = await db.favorite.findMany({
    where: {
      userId: 'github-151001',
    },
  });

  return json<LoaderData>({ bookmarks });
};

export const action: ActionFunction = async ({ request }) => {
  const params = Object.fromEntries(await request.formData());

  await db.favorite.create({
    data: {
      postTitle: params.postTitle as string,
      postSlug: params.postSlug as string,
      userId: params.userId as string,
    },
  });

  return redirect(route('/:slug', { slug: params.postSlug as string }));
};

export default function () {
  const { bookmarks } = useLoaderData<LoaderData>();

  return <Bookmarks bookmarks={bookmarks} />;
}
