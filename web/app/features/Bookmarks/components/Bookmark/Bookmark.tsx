import { useEffect, useState } from 'react';
import { Icon, Icons } from '~/components';
import { useProfile, useAuthenticationDialog } from '~/hooks';
import { BlogTypes } from '~/features/Blog';
import { route } from 'routes-gen';
import { Bookmark } from '@prisma/client';
import { Form } from 'remix';
import classNames from 'classnames';
import { useDisabled } from '~/hooks/useDisabled';

export interface BookmarkProps {
  post: BlogTypes.Post;
  bookmark: Bookmark | null;
}

export function Bookmark({ post, bookmark }: BookmarkProps) {
  const { profile } = useProfile();
  const [referrer, setReferrer] = useState<string>('');
  const disabled = useDisabled('bookmarkId', bookmark?.id ?? '');
  const { dialog: AuthenticationDialog, setOpen } = useAuthenticationDialog({ post });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);

  return (
    <>
      <AuthenticationDialog />
      <Form method="post" action={route('/bookmarks')}>
        <input type="hidden" name="postTitle" value={post.title} />
        <input type="hidden" name="postSlug" value={post.slug.current} />
        <input type="hidden" name="bookmarkId" value={bookmark?.id ?? ''} />
        <input type="hidden" name="userId" value={`${profile?.provider}-${profile?.id}`} />
        <input type="hidden" name="referrer" value={referrer} />
        {profile ? (
          <button type="submit" title="Bookmark this post" disabled={disabled}>
            {bookmark ? (
              <Icon
                data-testid="bookmark-icon"
                icon={Icons.bookmark}
                className={classNames('h-8 w-8 text-yellow-500', {
                  'text-inherit opacity-40': disabled,
                })}
              />
            ) : (
              <Icon
                data-testid="bookmark-icon"
                icon={Icons.bookmark}
                className={classNames('h-8 w-8 opacity-40', {
                  'text-yellow-500 opacity-100': disabled,
                })}
              />
            )}
          </button>
        ) : (
          <a href="#" title="Bookmark this post" onClick={() => setOpen(true)}>
            <Icon
              data-testid="bookmark-icon"
              icon={Icons.bookmark}
              className="h-8 w-8 opacity-40"
            />
          </a>
        )}
      </Form>
    </>
  );
}
