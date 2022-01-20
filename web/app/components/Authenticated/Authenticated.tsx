import type { GitHubProfile } from 'remix-auth-github';
import { Icon, Icons } from '~/components';
import { route } from 'routes-gen';

export interface AuthenticatedProps {
  profile?: GitHubProfile;
}

export function Authenticated({ profile }: AuthenticatedProps) {
  if (profile) {
    return (
      <form
        action={route('/logout')}
        method="post"
        className="flex items-center gap-3 px-6 pt-6 text-light-snow-storm3"
      >
        <img src={profile._json.avatar_url} className="w-12 h-12 rounded-full" />
        <div>
          <p className="antialiased font-semibold">{profile.name.familyName}</p>
          <button type="submit" className="text-xs">
            Signout
          </button>
        </div>
      </form>
    );
  }
  return (
    <form action={route('/auth/github')} method="post" className="px-6 pt-6 text-light-snow-storm3">
      <button className="flex items-center gap-2">
        Signin with GitHub <Icon icon={Icons.github} className="w-6 h-6" />
      </button>
    </form>
  );
}
