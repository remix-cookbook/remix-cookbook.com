import type { ActionFunction } from 'remix';
import { auth } from '~/services/auth.server';
import { signinRedirectCookie } from '../cookies';

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  const returnTo = String(data.slug ?? '');
  try {
    return await auth.authenticate('github', request, {
      successRedirect: returnTo ?? '/',
      failureRedirect: '/',
    });
  } catch (error) {
    // error is a Response which is vital for the flow to continue
    if (!returnTo) throw error;
    if (error instanceof Response) {
      error.headers.append(
        'Set-Cookie',
        await signinRedirectCookie.serialize(returnTo, {
          httpOnly: true,
        })
      );

      return error;
    }
    throw error;
  }
};
