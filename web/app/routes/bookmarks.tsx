import { Bookmark } from '@prisma/client';
import { ActionFunction, json, LoaderFunction, redirect, useLoaderData } from 'remix';
import { route } from 'routes-gen';
import { Bookmarks, BookmarksApi } from '~/features/Bookmarks';
import { auth } from '../services/auth.server';

export interface LoaderData {
  bookmarks: Bookmark[];
}

export const loader: LoaderFunction = async ({ request }) => {
  const profile = (await auth.isAuthenticated(request))?.profile;

  if ((await BookmarksApi.bookmarkQuantity(profile!)) === 0) {
    return redirect(route('/'));
  }

  return json<LoaderData>({ bookmarks: await BookmarksApi.getBookmarks(profile!) });
};

export const action: ActionFunction = async ({ request }) => {
  const params = Object.fromEntries(await request.formData());

  if (params.bookmarkId) {
    await BookmarksApi.deleteBookmark(params.bookmarkId as string);
  } else {
    await BookmarksApi.createBookmark({
      postTitle: params.postTitle as string,
      postSlug: params.postSlug as string,
      userId: params.userId as string,
    });
  }

  if (params.bookmarkId) {
    return redirect(route('/bookmarks'));
  }

  return redirect(route('/:slug', { slug: params.postSlug as string }));
};

export default function () {
  const { bookmarks } = useLoaderData<LoaderData>();

  return <Bookmarks bookmarks={bookmarks} />;
}
