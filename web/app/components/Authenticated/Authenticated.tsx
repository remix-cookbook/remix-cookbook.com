import { GitHubProfile } from 'remix-auth-github';
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
        className="flex items-center gap-4 p-6 text-white"
      >
        <img src={profile._json.avatar_url} className="w-12 h-12 rounded-full" />
        <p>{profile.name.familyName}</p>
        <button type="submit">logout</button>
      </form>
    );
  }
  return (
    <form action={route('/auth/github')} method="post" className="p-6 text-white">
      <button>Login with GitHub</button>
    </form>
  );
}
