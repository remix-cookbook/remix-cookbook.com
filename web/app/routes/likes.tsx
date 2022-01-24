import { Like } from '@prisma/client';
import { ActionFunction, LoaderFunction, redirect } from 'remix';
import { route } from 'routes-gen';
import { LikesApi } from '~/features/Likes';

export interface LoaderData {
  likes: Like[];
}

export const loader: LoaderFunction = async () => {
  return redirect('Not found', { status: 404 });
};

export const action: ActionFunction = async ({ request }) => {
  const params = Object.fromEntries(await request.formData());

  if (params.likeId) {
    await LikesApi.deleteLike(params.likeId as string);
  } else {
    await LikesApi.createLike({
      postTitle: params.postTitle as string,
      postSlug: params.postSlug as string,
      userId: params.userId as string,
    });
  }

  if (!!params.likeId) {
    return redirect(String(params.referrer));
  }

  return redirect(route('/:slug', { slug: params.postSlug as string }));
};
