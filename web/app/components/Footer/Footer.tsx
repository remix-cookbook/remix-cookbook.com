import { Link } from '~/components';

const links = [
  { title: 'Remix.run', href: 'https://remix.run' },
  { title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { title: 'Sanity.io', href: 'https://sanity.io' },
  { title: 'Netlify', href: 'https://netlify.com' },
];

export function Footer() {
  return (
    <footer className="mt-8 mb-12 text-sm text-center text-gray-400 md:flex md:justify-center">
      <div className="mb-2 md:mr-4 md:mb-auto">Happily built with</div>
      <nav className="flex justify-center">
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
