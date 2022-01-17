import { FaTwitter, FaGithub } from 'react-icons/fa';
import { RssIcon } from '@heroicons/react/solid';

export enum Icons {
  twitter,
  github,
  feed,
}

export interface IconProps {
  icon: Icons;
  className?: string;
}

const IconsMap = (className?: string) => ({
  [Icons.github]: <FaGithub className={className} />,
  [Icons.twitter]: <FaTwitter className={className} />,
  [Icons.feed]: <RssIcon className={className} />,
});

export function Icon({ icon, className }: IconProps) {
  return IconsMap(className)[icon] ?? null;
}
