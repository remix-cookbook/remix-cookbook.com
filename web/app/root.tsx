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
import { Header, Footer, Glow, ScrollToTop } from './components';
import { domain } from './config';
import { globalMeta, globalLinks } from './util/header/header';
import { auth } from './services';
import { GitHubProfile } from 'remix-auth-github';
import { createContext } from 'react';
import { BookmarksApi } from './features/Bookmarks';
import { useBuildServiceWorker } from './hooks/useBuildServiceWorker';

export const links: LinksFunction = globalLinks;

export const meta: MetaFunction = globalMeta;

export interface LoaderData {
  profile?: GitHubProfile;
  hasBookmarks: boolean;
}

export const loader: LoaderFunction = async ({ request }) => {
  const profile = (await auth.isAuthenticated(request))?.profile;
  const hasBookmarks = (await BookmarksApi.bookmarkQuantity(profile!)) > 0;

  return json<LoaderData>({ profile, hasBookmarks });
};

export const AuthenticationContext = createContext<Pick<LoaderData, 'profile'>>({});
export const BookmarksContext = createContext<Pick<LoaderData, 'hasBookmarks'>>({
  hasBookmarks: false,
});

export default function App() {
  useBuildServiceWorker();

  const { profile, hasBookmarks } = useLoaderData<LoaderData>();
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
          <AuthenticationContext.Provider value={{ profile }}>
            <BookmarksContext.Provider value={{ hasBookmarks }}>
              <Header />
              <Outlet />
              <Footer />
            </BookmarksContext.Provider>
          </AuthenticationContext.Provider>
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
