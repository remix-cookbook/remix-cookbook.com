import { Bookmark } from '@prisma/client';
import { route } from 'routes-gen';
import { Prose, Link } from '~/components';
import { DateTimeUtils } from '~/util';
import { Headings } from '~/components';
import { useEffect, useState } from 'react';
import { DeleteBookmark } from './DeleteBookmark';

export interface BookmarksProps {
  bookmarks: Bookmark[];
}

export function Bookmarks({ bookmarks }: BookmarksProps) {
  const [referrer, setReferrer] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);

  return (
    <Prose>
      <>
        <Headings.Content>Bookmarks</Headings.Content>
        {bookmarks.map(bookmark => {
          return (
            <dl key={bookmark.id} className="mb-6">
              <dt>
                <Link.Internal href={route('/:slug', { slug: bookmark.postSlug })}>
                  {bookmark.postTitle}
                </Link.Internal>
              </dt>
              <dd>
                Bookmarked on {DateTimeUtils.date(bookmark.createdAt)}
                <DeleteBookmark bookmark={bookmark} referrer={referrer} />
              </dd>
            </dl>
          );
        })}
      </>
    </Prose>
  );
}
