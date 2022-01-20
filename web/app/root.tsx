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
  json,
  useLoaderData,
} from 'remix';
import { Header, Footer, Glow, Authenticated } from './components';
import { domain } from './config';
import { ScrollToTop } from './features/Blog';
import { globalMeta, globalLinks } from './util/header/header';
import { auth } from './services';
import { GitHubProfile } from 'remix-auth-github';

export const links: LinksFunction = globalLinks;

export const meta: MetaFunction = globalMeta;

export interface LoaderData {
  profile?: GitHubProfile;
}

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({ profile: (await auth.isAuthenticated(request))?.profile });
};

export default function App() {
  // const { profile } = useLoaderData<LoaderData>();
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
          {/* <Authenticated profile={profile} /> */}
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
