import { Like } from '@prisma/client';
import { ActionFunction, LoaderFunction, redirect } from 'remix';
import { LikesApi } from '~/features/Likes';

export interface LoaderData {
  likes: Like[];
}

export const loader: LoaderFunction = async () => {
  return redirect('Not found', { status: 404 });
};

export const action: ActionFunction = async ({ request }) => {
  const payload = Object.fromEntries(await request.formData());

  if (payload.likeId) {
    await LikesApi.deleteLike(payload.likeId as string);
  } else {
    await LikesApi.createLike({
      postId: payload.postId as string,
      userId: payload.userId as string,
    });
  }

  return redirect(String(payload.referrer));
};
