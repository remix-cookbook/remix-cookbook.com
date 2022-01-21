import type { ActionFunction } from 'remix';
import { route } from 'routes-gen';
import { auth } from '~/services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  // async function login(request: Request) {
  //   let url = new URL(request.url);
  //   let returnTo = url.searchParams.get("returnTo") as string | null;
  //   try {
  //     return await auth.authenticate("auth0", request, {
  //       successRedirect: returnTo ?? "/home",
  //       failureRedirect: "/",
  //     });
  //   } catch (error) {
  //     if (!returnTo) throw error;
  //     if (error instanceof Response && isRedirect(error)) {
  //       error.headers.append(
  //         "Set-Cookie",
  //         await returnToCookie.serialize(returnTo)
  //       );
  //       return error;
  //     }
  //     throw error;
  //   }
  // }
  return await auth.authenticate('github', request, {
    successRedirect: route('/:slug', { slug: data.slug as string }),
    failureRedirect: route('/'),
  });
};
