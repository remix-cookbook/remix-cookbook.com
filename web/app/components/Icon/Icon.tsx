import { FaTwitter, FaGithub, FaAngleDoubleUp } from 'react-icons/fa';
import { RssIcon, BookmarkIcon, ThumbUpIcon, HomeIcon } from '@heroicons/react/solid';

export enum Icons {
  twitter,
  github,
  feed,
  caretUp,
  bookmark,
  thumbsUp,
  home,
}

export interface IconProps {
  'icon': Icons;
  'className'?: string;
  'data-testid'?: string;
}

const IconsMap = (props: Omit<IconProps, 'icon'>) => ({
  [Icons.github]: <FaGithub {...props} />,
  [Icons.twitter]: <FaTwitter {...props} />,
  [Icons.feed]: <RssIcon {...props} />,
  [Icons.caretUp]: <FaAngleDoubleUp {...props} />,
  [Icons.bookmark]: <BookmarkIcon {...props} />,
  [Icons.thumbsUp]: <ThumbUpIcon {...props} />,
  [Icons.home]: <HomeIcon {...props} />,
});

export function Icon(props: IconProps) {
  const { icon, ...rest } = props;
  return IconsMap(rest)[icon] ?? null;
}
