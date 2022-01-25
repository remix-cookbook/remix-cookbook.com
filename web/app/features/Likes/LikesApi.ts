import { Like } from '@prisma/client';
import { db } from '~/util/db/db.server';

export async function getLike(like: Pick<Like, 'postId' | 'userId'>) {
  return await db.like.findFirst({
    where: {
      postId: like.postId,
      userId: like.userId,
    },
  });
}

export async function createLike(like: Pick<Like, 'postId' | 'userId'>) {
  const exists = await getLike(like);

  if (!exists) {
    await db.like.create({
      data: {
        postId: like.postId as string,
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

export async function likeQuantity({ postId = '' }: { postId: string }) {
  return db.like.count({
    where: {
      postId,
    },
  });
}
