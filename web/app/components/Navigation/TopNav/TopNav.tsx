import { route } from 'routes-gen';
import { Link, Feed, Github, Signout } from '~/components';
import { useBookmarksContext, useProfile } from '~/hooks';

export function TopNav() {
  const { profile } = useProfile();
  const { hasBookmarks } = useBookmarksContext();

  return (
    <ul className="flex flex-wrap items-center justify-evenly gap-4 py-4">
      <li className="hidden md:inline-block">
        <Link.Internal
          className="underline decoration-dotted underline-offset-4"
          href={route('/resources')}
        >
          Remix Resources
        </Link.Internal>
      </li>
      <li className="md:hidden">
        <Link.Internal
          className="underline decoration-dotted underline-offset-4"
          href={route('/resources')}
        >
          Resources
        </Link.Internal>
      </li>
      <li>
        <Link.Internal
          className="underline decoration-dotted underline-offset-4"
          href={route('/about')}
        >
          About
        </Link.Internal>
      </li>
      {hasBookmarks ? (
        <li>
          <Link.Internal
            className="underline decoration-dotted underline-offset-4"
            href={route('/bookmarks')}
          >
            Bookmarks
          </Link.Internal>
        </li>
      ) : null}
      <li>
        <Link.External
          className="underline decoration-dotted underline-offset-4"
          href="https://skilled-builder-1623.ck.page/60595207f8"
          title="Sign up to our newsletter"
        >
          Newsletter
        </Link.External>
      </li>
      {profile ? <Signout /> : null}
      <li className="flex gap-4">
        <Feed />
        <Github />
      </li>
    </ul>
  );
}
