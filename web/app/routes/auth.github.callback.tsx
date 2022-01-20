import type { LoaderFunction } from 'remix';
import { route } from 'routes-gen';
import { auth } from '~/services/auth.server';

export const loader: LoaderFunction = async ({ request, params }) => {
  return auth.authenticate('github', request, {
    successRedirect: route('/'),
    failureRedirect: route('/'),
  });
};
