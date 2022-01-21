import type { LoaderFunction } from 'remix';
import { route } from 'routes-gen';
import { parseCookie, signinRedirectCookie } from '~/cookies';
import { auth } from '~/services/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  const cookie = await parseCookie(request, signinRedirectCookie);

  return auth.authenticate('github', request, {
    successRedirect: `/${cookie}` ?? '/',
    failureRedirect: route('/'),
  });
};
