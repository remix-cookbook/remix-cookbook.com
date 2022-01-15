import { BlogTypes } from '~/features/Blog';
import { Link } from '~/components';

export interface CreditsProps {
  user: BlogTypes.UnsplashUser;
}

export function Credits({ user }: CreditsProps) {
  return (
    <span className="absolute z-10 right-4 top-2">
      <Link.External
        href={user.portfolio_url ?? 'https://unsplash.com'}
        externalIndicator={false}
        title={`Photo by ${user.name} on Unsplash`}
      >
        <span className="text-xs text-light-snow-storm3 shadowed-text">
          Photo by {user.name} on Unsplash
        </span>
      </Link.External>
    </span>
  );
}
