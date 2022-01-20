import { ActionFunction, json, LoaderFunction } from 'remix';
import { auth } from '../services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/' });
};

export const loader: LoaderFunction = () => {
  throw json({}, { status: 404 });
};
