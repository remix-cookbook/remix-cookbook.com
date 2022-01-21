import { FaTwitter, FaGithub, FaAngleDoubleUp } from 'react-icons/fa';
import { RssIcon, BookmarkIcon } from '@heroicons/react/solid';

export enum Icons {
  twitter,
  github,
  feed,
  caretUp,
  bookmark,
}

export interface IconProps {
  icon: Icons;
  className?: string;
}

const IconsMap = (className?: string) => ({
  [Icons.github]: <FaGithub className={className} />,
  [Icons.twitter]: <FaTwitter className={className} />,
  [Icons.feed]: <RssIcon className={className} />,
  [Icons.caretUp]: <FaAngleDoubleUp className={className} />,
  [Icons.bookmark]: <BookmarkIcon className={className} />,
});

export function Icon({ icon, className }: IconProps) {
  return IconsMap(className)[icon] ?? null;
}
