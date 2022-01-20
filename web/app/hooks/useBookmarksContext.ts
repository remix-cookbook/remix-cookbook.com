import { useContext } from 'react';
import { BookmarksContext } from '~/root';

export const useBookmarksContext = () => {
  const { hasBookmarks } = useContext(BookmarksContext);

  return { hasBookmarks };
};
