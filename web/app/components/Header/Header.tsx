import { route } from 'routes-gen';
import { TopNav, Link } from '~/components';

export function Header() {
  return (
    <section className="flex flex-col items-center justify-between p-4 border-b header md:flex-row text-light-snow-storm3 bg-dark-midnight border-dark-polar-night1">
      <h1 data-testid="site-name" className="antialiased md:text-2xl">
        <Link.Internal
          href={route('/')}
          className="flex flex-col items-center md:flex-row flex-cols"
        >
          <img src="/img/logo.png" width="40" height="40" alt="Return to the homepage" />
          <span className="block pl-2 ml-2 text-2xl text-gray-500 ">Remix.run Cookbook</span>
        </Link.Internal>
      </h1>
      <TopNav />
    </section>
  );
}
