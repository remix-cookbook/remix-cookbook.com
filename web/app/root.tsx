import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
  LoaderFunction,
} from 'remix';
import { Header, Footer, Glow, Login } from './components';
import { domain } from './config';
import { ScrollToTop } from './features/Blog';
import { globalMeta, globalLinks } from './util/header/header';
import { authenticator } from './services';
import { useLoaderData } from 'remix';

export const links: LinksFunction = globalLinks;

export const meta: MetaFunction = globalMeta;

export let loader: LoaderFunction = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request);
  return { message: 'this is awesome 😎', user };
};

export default function App() {
  const auth = useLoaderData();
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
      <body className="bg-slate-900">
        <div className="min-h-screen">
          <Header />
          <Login auth={auth} />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </div>
        <Glow />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
