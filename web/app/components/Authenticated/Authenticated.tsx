import { route } from 'routes-gen';
import { User } from '~/models';

export interface LoginProps {
  user: User;
}

export function Authenticated({ user }: LoginProps) {
  if (user) {
    return (
      <form action={route('/logout')} method="post" className="p-6 text-white">
        <p>{user.email}</p>
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
