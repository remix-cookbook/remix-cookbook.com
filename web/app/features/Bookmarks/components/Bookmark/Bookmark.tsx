import { useState } from 'react';
import { Authentication, Icon, Icons } from '~/components';
import { useProfile } from '~/hooks';

export function Bookmark() {
  const [open, setOpen] = useState(false);
  const { profile } = useProfile();

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
