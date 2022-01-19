import { ActionFunction, json, LoaderFunction, redirect } from 'remix';
import { destroySession, getSession } from '~/services';

export const action: ActionFunction = async ({ request }) => {
  const cookie = request.headers.get('Cookie');
  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(await getSession(cookie)),
    },
  });
};

export const loader: LoaderFunction = () => {
  throw json({}, { status: 404 });
};
