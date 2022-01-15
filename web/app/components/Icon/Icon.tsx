import { FaTwitter, FaGithub } from 'react-icons/fa';

export enum Icons {
  twitter,
  github,
}

export interface IconProps {
  icon: Icons;
  className?: string;
}

const IconsMap = (className?: string) => ({
  [Icons.github]: <FaGithub className={className} />,
  [Icons.twitter]: <FaTwitter className={className} />,
});

export function Icon({ icon, className }: IconProps) {
  return IconsMap(className)[icon] ?? null;
}
