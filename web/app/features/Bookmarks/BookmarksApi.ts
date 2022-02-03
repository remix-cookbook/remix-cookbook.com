import { Bookmark } from '@prisma/client';
import { GitHubProfile } from 'remix-auth-github';
import { db } from '~/util/db/db.server';

export async function getBookmarks(profile: GitHubProfile) {
  return await db.bookmark.findMany({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}

export async function getBookmark(bookmark: Pick<Bookmark, 'postSlug' | 'userId'>) {
  return await db.bookmark.findFirst({
    where: {
      postSlug: bookmark.postSlug,
      userId: bookmark.userId,
    },
  });
}

export async function createBookmark(
  bookmark: Pick<Bookmark, 'postTitle' | 'postSlug' | 'userId'>
) {
  const exists = await getBookmark(bookmark);

  if (!exists) {
    await db.bookmark.create({
      data: {
        postTitle: bookmark.postTitle as string,
        postSlug: bookmark.postSlug as string,
        userId: bookmark.userId as string,
      },
    });
  }
}

export async function deleteBookmark(id: string) {
  await db.bookmark.delete({
    where: {
      id,
    },
  });
}

export async function bookmarkQuantity(profile: GitHubProfile) {
  if (!profile) return false;

  return db.bookmark.count({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}
