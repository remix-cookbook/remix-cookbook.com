import { Like } from '@prisma/client';
import { GitHubProfile } from 'remix-auth-github';
import { db } from '~/util/db/db.server';

export async function getLikes(profile: GitHubProfile) {
  return await db.like.findMany({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}

export async function getLike(like: Pick<Like, 'postSlug' | 'userId'>) {
  return await db.like.findFirst({
    where: {
      postSlug: like.postSlug,
      userId: like.userId,
    },
  });
}

export async function createLike(like: Pick<Like, 'postTitle' | 'postSlug' | 'userId'>) {
  const exists = await getLike(like);

  console.log(exists);

  if (!exists) {
    await db.like.create({
      data: {
        postTitle: like.postTitle as string,
        postSlug: like.postSlug as string,
        userId: like.userId as string,
      },
    });
  }
}

export async function deleteLike(id: string) {
  await db.like.delete({
    where: {
      id,
    },
  });
}

export async function likeQuantity(profile: GitHubProfile) {
  return db.like.count({
    where: {
      userId: `${profile?.provider}-${profile?.id}`,
    },
  });
}
