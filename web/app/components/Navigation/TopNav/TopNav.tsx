import { route } from 'routes-gen';
import { Link, Feed, Github, Signout } from '~/components';
import { useProfile } from '~/hooks';

export function TopNav() {
  const { profile } = useProfile();

  return (
    <ul className="flex flex-wrap items-center gap-4 py-4 justify-evenly">
      <li className="hidden md:inline-block">
        <Link.Internal
          className="underline underline-offset-4 decoration-dotted"
          href={route('/resources')}
        >
          Remix Resources
        </Link.Internal>
      </li>
      <li className="md:hidden">
        <Link.Internal
          className="underline underline-offset-4 decoration-dotted"
          href={route('/resources')}
        >
          Resources
        </Link.Internal>
      </li>
      <li>
        <Link.Internal
          className="underline underline-offset-4 decoration-dotted"
          href={route('/about')}
        >
          About
        </Link.Internal>
      </li>
      <li>
        <Link.Internal
          className="underline underline-offset-4 decoration-dotted"
          href={route('/bookmarks')}
        >
          Bookmarks
        </Link.Internal>
      </li>
      <li>
        <Link.External
          className="underline underline-offset-4 decoration-dotted"
          href="https://skilled-builder-1623.ck.page/60595207f8"
          title="Sign up to our newsletter"
        >
          Newsletter
        </Link.External>
      </li>
      {profile ? <Signout /> : null}
      <li>
        <Feed />
      </li>
      <li>
        <Github />
      </li>
    </ul>
  );
}
