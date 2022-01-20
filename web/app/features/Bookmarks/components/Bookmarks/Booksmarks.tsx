import { route } from 'routes-gen';
import { Prose, Link } from '~/components';
import { BlogTypes } from '~/features/Blog';
import { DateTimeUtils } from '~/util';
import { Headings } from '../../../../components/Headings/Headings';

export interface BookmarksProps {
  bookmarks: BlogTypes.Bookmark[];
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
            <dd>Bookmarked on {DateTimeUtils.date(bookmark.createdAt)}</dd>
          </dl>
        ))}
      </>
    </Prose>
  );
}
