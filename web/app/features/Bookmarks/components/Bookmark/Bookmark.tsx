import { useState } from 'react';
import { GitHubProfile } from 'remix-auth-github';
import { Authentication, Icon, Icons } from '~/components';

export interface BookmarkProps {
  profile?: GitHubProfile;
}

export function Bookmark({ profile }: BookmarkProps) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Authentication open={open} onClose={() => setOpen(false)} />
      <form>
        {profile ? (
          <button type="submit" title="Bookmark this post">
            <Icon icon={Icons.bookmark} className="w-8 h-8 opacity-40" />
          </button>
        ) : (
          <button type="button" title="Bookmark this post" onClick={() => setOpen(true)}>
            <Icon icon={Icons.bookmark} className="w-8 h-8 opacity-40" />
          </button>
        )}
      </form>
    </>
  );
}
