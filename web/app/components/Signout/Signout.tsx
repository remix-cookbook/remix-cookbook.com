import { route } from 'routes-gen';

export function Signout() {
  return (
    <form action={route('/logout')} method="post">
      <button type="submit" className="underline decoration-dotted underline-offset-4">
        Sign out
      </button>
    </form>
  );
}
