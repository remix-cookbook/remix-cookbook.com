import { useEffect, useState } from 'react';
import { AuthenticationDialog, Icon, Icons } from '~/components';
import { useLoading, useProfile } from '~/hooks';
import { BlogTypes } from '~/features/Blog';
import { route } from 'routes-gen';
import { Bookmark } from '@prisma/client';
import { Form } from 'remix';
import classNames from 'classnames';

export interface BookmarkProps {
  post: BlogTypes.Post;
  bookmark: Bookmark;
}

export function Bookmark({ post, bookmark }: BookmarkProps) {
  const [open, setOpen] = useState(false);
  const { profile } = useProfile();
  const [originator, setOriginator] = useState<string>('');
  const loading = useLoading();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOriginator(window.location.pathname);
    }
  }, [setOriginator]);

  return (
    <>
      <AuthenticationDialog open={open} onClose={() => setOpen(false)} post={post} />
      <Form method="post" action={route('/bookmarks')}>
        <input type="hidden" name="postTitle" value={post.title} />
        <input type="hidden" name="postSlug" value={post.slug.current} />
        <input type="hidden" name="bookmarkId" value={bookmark?.id ?? ''} />
        <input type="hidden" name="userId" value={`${profile?.provider}-${profile?.id}`} />
        <input type="hidden" name="originator" value={originator} />
        {profile ? (
          <button type="submit" title="Bookmark this post" disabled={loading}>
            {bookmark ? (
              <Icon
                data-testid="bookmark-icon"
                icon={Icons.bookmark}
                className={classNames('w-8 h-8 text-yellow-500', {
                  'text-inherit opacity-40': loading,
                })}
              />
            ) : (
              <Icon
                data-testid="bookmark-icon"
                icon={Icons.bookmark}
                className={classNames('w-8 h-8 opacity-40', {
                  'text-yellow-500 opacity-100': loading,
                })}
              />
            )}
          </button>
        ) : (
          <a href="#" title="Bookmark this post" onClick={() => setOpen(true)}>
            <Icon
              data-testid="bookmark-icon"
              icon={Icons.bookmark}
              className="w-8 h-8 opacity-40"
            />
          </a>
        )}
      </Form>
    </>
  );
}
