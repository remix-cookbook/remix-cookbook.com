import { createCookieSessionStorage } from 'remix';

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SECRET_KEY!],
    secure: process.env.NODE_ENV === 'production',
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
