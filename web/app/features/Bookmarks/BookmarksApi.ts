import { Bookmark } from '@prisma/client';
import { GitHubProfile } from 'remix-auth-github';
import { db } from '~/util/db/db.server';

export function getBookmarks(profile: GitHubProfile): Promise<Bookmark[]> {
  return db.bookmark.findMany({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}

export async function createBookmark(
  bookmark: Pick<Bookmark, 'postTitle' | 'postSlug' | 'userId'>
) {
  const exists = await db.bookmark.findFirst({
    where: {
      postSlug: bookmark.postSlug,
      userId: bookmark.userId,
    },
  });

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

export function deleteBookmark(id: string) {}

export async function bookmarkQuantity(profile: GitHubProfile): Promise<number> {
  return db.bookmark.count({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}
