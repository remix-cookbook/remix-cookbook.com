import { Cookie, createCookie } from 'remix';

export const languageCookie = createCookie('language');
export const signinRedirectCookie = createCookie('signinRedirect');

export interface Cookies {
  language: string;
}

export const parseCookie = async (request: Request, cookie: Cookie): Promise<Cookies> => {
  const cookieHeader = request.headers.get('Cookie');
  const parsedCookie = (await cookie.parse(cookieHeader)) || {};
  return parsedCookie;
};
