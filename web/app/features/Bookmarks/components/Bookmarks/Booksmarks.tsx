import { Bookmark } from '@prisma/client';
import { route } from 'routes-gen';
import { Prose, Link } from '~/components';
import { DateTimeUtils } from '~/util';
import { Headings } from '~/components';

export interface BookmarksProps {
  bookmarks: Bookmark[];
}

export function Bookmarks({ bookmarks }: BookmarksProps) {
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
