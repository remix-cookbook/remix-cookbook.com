import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
} from 'remix';
import { Header, Footer, Glow } from './components';
import { globalMeta, globalLinks } from './util/header/header';
import { domain } from '~/config';

console.log(domain);

export const links: LinksFunction = globalLinks;

export const meta: MetaFunction = globalMeta;

export const loader: LoaderFunction = async ({ request }) => {
  return {};
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <Meta />
        <Links />
        {/* /js/analytics.js doesn't exist. It is a Netlify redirect to the plausible CDN served file */}
        {/* See /public/_redirects */}
        <script defer data-domain={`domain`} src="/js/analytics.js"></script>
      </head>
      <body className=" bg-dark-polar-night4">
        <div className="min-h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <Glow />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
