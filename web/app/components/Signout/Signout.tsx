import { route } from 'routes-gen';

export function Signout() {
  return (
    <form action={route('/logout')} method="post">
      <button type="submit" className="underline underline-offset-4 decoration-dotted">
        Signout
      </button>
    </form>
  );
}
