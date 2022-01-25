import { BlogTypes } from '~/features/Blog';
import { Link } from '~/components';

export interface CreditsProps {
  user: BlogTypes.UnsplashUser;
}

export function Credits({ user }: CreditsProps) {
  return (
    <span className="absolute right-4 top-2 z-10">
      <Link.External
        href={user.portfolio_url ?? 'https://unsplash.com'}
        externalIndicator={false}
        title={`Photo by ${user.name} on Unsplash`}
      >
        <span className="shadowed-text text-xs text-light-snow-storm3">
          Photo by {user.name} on Unsplash
        </span>
      </Link.External>
    </span>
  );
}
