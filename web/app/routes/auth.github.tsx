import type { ActionFunction } from 'remix';
import { route } from 'routes-gen';
import { auth } from '~/services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  return await auth.authenticate('github', request, {
    successRedirect: route('/'),
    failureRedirect: route('/'),
  });
};
