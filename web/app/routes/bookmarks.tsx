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
  const payload = Object.fromEntries(await request.formData());

  if (payload.bookmarkId) {
    await BookmarksApi.deleteBookmark(payload.bookmarkId as string);
  } else {
    await BookmarksApi.createBookmark({
      postTitle: payload.postTitle as string,
      postSlug: payload.postSlug as string,
      userId: payload.userId as string,
    });
  }

  if (!!payload.bookmarkId) {
    return redirect(String(payload.referrer));
  }

  return redirect(route('/:slug', { slug: payload.postSlug as string }));
};

export default function () {
  const { bookmarks } = useLoaderData<LoaderData>();

  return <Bookmarks bookmarks={bookmarks} />;
}
