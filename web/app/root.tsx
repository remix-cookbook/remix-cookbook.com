import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
} from 'remix';
import { Header, Footer, Glow } from './components';
import { domain } from './config';
import { globalMeta, globalLinks } from './util/header/header';

export const links: LinksFunction = globalLinks;

export const meta: MetaFunction = globalMeta;

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <Meta />
        <Links />
        {/* /js/analytics.js doesn't exist. It is a Netlify redirect to the plausible CDN served file */}
        {/* See /public/_redirects */}
        <script defer data-domain={domain} src="/js/analytics.js"></script>
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
