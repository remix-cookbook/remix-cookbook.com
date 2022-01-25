import { useEffect, useState } from 'react';
import { Icon, Icons } from '~/components';
import { useAuthenticationDialog, useProfile } from '~/hooks';
import { BlogTypes } from '~/features/Blog';
import { route } from 'routes-gen';
import { Like } from '@prisma/client';
import { Form } from 'remix';
import classNames from 'classnames';
import { useDisabled } from '~/hooks/useDisabled';

export interface LikeButtonProps {
  post: BlogTypes.Post;
  like: Like | null;
  likeQuantity: number;
}

export function LikeButton({ post, like, likeQuantity }: LikeButtonProps) {
  const [likeLabel, setLikeLabel] = useState<string>('likes');
  const { dialog: AuthenticationDialog, setOpen } = useAuthenticationDialog({ post });
  const { profile } = useProfile();
  const [referrer, setReferrer] = useState<string>('');
  const disabled = useDisabled('likeId', like?.id ?? '');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);

  useEffect(() => {
    setLikeLabel('likes');
    if (likeQuantity === 1) {
      setLikeLabel('like');
    }
  }, [setLikeLabel, likeQuantity]);

  return (
    <>
      <AuthenticationDialog />
      <Form method="post" action={route('/likes')} className="flex items-center gap-2 text-sm">
        <input type="hidden" name="postId" value={post._id} />
        <input type="hidden" name="likeId" value={like?.id ?? ''} />
        <input type="hidden" name="userId" value={`${profile?.provider}-${profile?.id}`} />
        <input type="hidden" name="referrer" value={referrer} />
        {profile ? (
          <button type="submit" title="Like this post" disabled={disabled}>
            {like ? (
              <Icon
                data-testid="like-icon"
                icon={Icons.thumbsUp}
                className={classNames('w-6 h-6 text-yellow-500', {
                  'text-inherit opacity-40': disabled,
                })}
              />
            ) : (
              <Icon
                data-testid="like-icon"
                icon={Icons.thumbsUp}
                className={classNames('w-6 h-6 opacity-40', {
                  'text-yellow-500 opacity-100': disabled,
                })}
              />
            )}
          </button>
        ) : (
          <a href="#" title="Like this post" onClick={() => setOpen(true)}>
            <Icon data-testid="like-icon" icon={Icons.thumbsUp} className="w-6 h-6 opacity-40" />
          </a>
        )}
        <span>
          {likeQuantity} {likeLabel}
        </span>
      </Form>
    </>
  );
}
