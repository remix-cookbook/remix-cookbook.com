import classNames from 'classnames';
import { Form } from 'remix';
import { route } from 'routes-gen';
import { useDisabled } from '~/hooks';
import { Bookmark } from '@prisma/client';

export interface DeleteBookmarkProps {
  bookmark: Bookmark;
  referrer: string;
}

export function DeleteBookmark({ bookmark, referrer }: DeleteBookmarkProps) {
  const disabled = useDisabled('bookmarkId', bookmark.id);
  return (
    <Form action={route('/bookmarks')} method="post">
      <input type="hidden" name="bookmarkId" value={bookmark.id ?? ''} />
      <input type="hidden" name="referrer" value={referrer} />
      <button
        type="submit"
        className={classNames('text-sm text-red-500', {
          'opacity-50': disabled,
        })}
        disabled={disabled}
      >
        [delete]
      </button>
    </Form>
  );
}
