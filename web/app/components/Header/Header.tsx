import { route } from 'routes-gen';
import { TopNav, Link } from '~/components';

export function Header() {
  return (
    <section className="header flex flex-col items-center justify-between border-b border-dark-polar-night1 bg-dark-midnight p-4 text-light-snow-storm3 md:flex-row">
      <h1 data-testid="site-name" className="antialiased md:text-2xl">
        <Link.Internal
          href={route('/')}
          className="flex-cols flex flex-col items-center md:flex-row"
        >
          <img src="/img/logo.png" width="40" height="40" alt="Return to the homepage" />
          <span className="ml-2 block pl-2 text-2xl text-gray-500 ">Remix.run Cookbook</span>
        </Link.Internal>
      </h1>
      <TopNav />
    </section>
  );
}
