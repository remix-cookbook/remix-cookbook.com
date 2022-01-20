import { useState } from 'react';
import { Authentication, Icon, Icons } from '~/components';
import { useProfile } from '~/hooks';
import { BlogTypes } from '~/features/Blog';
import { route } from 'routes-gen';
import { Bookmark } from '@prisma/client';

export interface BookmarkProps {
  post: BlogTypes.Post;
  bookmark: Bookmark;
}

export function Bookmark({ post, bookmark }: BookmarkProps) {
  const [open, setOpen] = useState(false);
  const { profile } = useProfile();

  return (
    <>
      <Authentication open={open} onClose={() => setOpen(false)} />
      <form method="post" action={route('/bookmarks')}>
        <input type="hidden" name="postTitle" value={post.title} />
        <input type="hidden" name="postSlug" value={post.slug.current} />
        <input type="hidden" name="bookmarkId" value={bookmark?.id} />
        <input type="hidden" name="userId" value={`${profile?.provider}-${profile?.id}`} />
        {profile ? (
          <button type="submit" title="Bookmark this post">
            {bookmark ? (
              <Icon icon={Icons.bookmark} className="w-8 h-8 text-yellow-500" />
            ) : (
              <Icon icon={Icons.bookmark} className="w-8 h-8 opacity-40" />
            )}
          </button>
        ) : (
          <a href="#" title="Bookmark this post" onClick={() => setOpen(true)}>
            <Icon icon={Icons.bookmark} className="w-8 h-8 opacity-40" />
          </a>
        )}
      </form>
    </>
  );
}
