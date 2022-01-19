import { LoaderFunction } from 'remix';
import { authenticator } from '~/services/auth.server';

export const loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate('github', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  });
};
