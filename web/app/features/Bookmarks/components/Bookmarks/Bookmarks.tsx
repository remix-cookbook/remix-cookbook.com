import { Bookmark } from '@prisma/client';
import { route } from 'routes-gen';
import { Prose, Link } from '~/components';
import { DateTimeUtils } from '~/util';
import { Headings } from '~/components';
import { useEffect, useState } from 'react';

export interface BookmarksProps {
  bookmarks: Bookmark[];
}

export function Bookmarks({ bookmarks }: BookmarksProps) {
  const [originator, setOriginator] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOriginator(window.location.pathname);
    }
  }, [setOriginator]);

  return (
    <Prose>
      <>
        <Headings.Content>Bookmarks</Headings.Content>
        {bookmarks.map(bookmark => (
          <dl key={bookmark.id} className="mb-6">
            <dt>
              <Link.Internal href={route('/:slug', { slug: bookmark.postSlug })}>
                {bookmark.postTitle}
              </Link.Internal>
            </dt>
            <dd>
              Bookmarked on {DateTimeUtils.date(bookmark.createdAt)}
              <form action={route('/bookmarks')} method="post">
                <input type="hidden" name="bookmarkId" value={bookmark.id} />
                <input type="hidden" name="originator" value={originator} />
                <button type="submit" className="text-sm text-red-500">
                  [delete]
                </button>
              </form>
            </dd>
          </dl>
        ))}
      </>
    </Prose>
  );
}
