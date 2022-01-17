import { Link } from '~/components';

export const links = [
  { title: 'Remix.run', href: 'https://remix.run' },
  { title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { title: 'Sanity.io', href: 'https://sanity.io' },
  { title: 'Netlify', href: 'https://netlify.com' },
  { title: 'Nord Theme', href: 'https://www.nordtheme.com' },
  { title: 'Unsplash API', href: 'https://unsplash.com/developers' },
];

export function Footer() {
  return (
    <footer className="mt-8 mb-12 text-sm text-center text-gray-400 md:flex md:justify-center">
      <div className="mb-2 md:mr-4 md:mb-auto">Happily built with</div>
      <nav className="flex flex-wrap justify-center footer-nav">
        {links.map(({ title, href }) => (
          <div
            key={href}
            className="after:ml-2 after:mr-2 after:content-['-'] last:after:content-['']"
          >
            <Link.External href={href} externalIndicator={false}>
              {title}
            </Link.External>
          </div>
        ))}
      </nav>
    </footer>
  );
}
