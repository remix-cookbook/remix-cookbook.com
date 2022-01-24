import { useEffect, useState } from 'react';
import { AuthenticationDialog, Icon, Icons } from '~/components';
import { useProfile } from '~/hooks';
import { BlogTypes } from '~/features/Blog';
import { route } from 'routes-gen';
import { Like } from '@prisma/client';
import { Form } from 'remix';
import classNames from 'classnames';
import { useDisabled } from '~/hooks/useDisabled';

export interface LikeButtonProps {
  post: BlogTypes.Post;
  like: Like | null;
}

export function LikeButton({ post, like }: LikeButtonProps) {
  const [open, setOpen] = useState(false);
  const { profile } = useProfile();
  const [referrer, setReferrer] = useState<string>('');
  const disabled = useDisabled('likeId', like?.id ?? '');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);

  return (
    <>
      <AuthenticationDialog open={open} onClose={() => setOpen(false)} post={post} />
      <Form method="post" action={route('/likes')}>
        <input type="hidden" name="postTitle" value={post.title} />
        <input type="hidden" name="postSlug" value={post.slug.current} />
        <input type="hidden" name="likeId" value={like?.id ?? ''} />
        <input type="hidden" name="userId" value={`${profile?.provider}-${profile?.id}`} />
        <input type="hidden" name="referrer" value={referrer} />
        {profile ? (
          <button type="submit" title="Like this post" disabled={disabled}>
            {like ? (
              <Icon
                data-testid="like-icon"
                icon={Icons.thumbsUp}
                className={classNames('w-8 h-8 text-yellow-500', {
                  'text-inherit opacity-40': disabled,
                })}
              />
            ) : (
              <Icon
                data-testid="like-icon"
                icon={Icons.thumbsUp}
                className={classNames('w-8 h-8 opacity-40', {
                  'text-yellow-500 opacity-100': disabled,
                })}
              />
            )}
          </button>
        ) : (
          <a href="#" title="Like this post" onClick={() => setOpen(true)}>
            <Icon data-testid="like-icon" icon={Icons.thumbsUp} className="w-8 h-8 opacity-40" />
          </a>
        )}
      </Form>
    </>
  );
}
