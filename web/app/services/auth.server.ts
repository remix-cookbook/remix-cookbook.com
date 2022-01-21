import { createCookieSessionStorage } from 'remix';
import { Authenticator } from 'remix-auth';
import type { GitHubProfile } from 'remix-auth-github';
import { GitHubStrategy } from 'remix-auth-github';

if (!process.env.GITHUB_APP_CLIENT_ID) {
  throw new Error('GITHUB_APP_CLIENT_ID is required');
}

if (!process.env.GITHUB_APP_CLIENT_SECRET) {
  throw new Error('GITHUB_APP_CLIENT_SECRET is required');
}

if (!process.env.BASE_URL) {
  throw new Error('BASE_URL is required');
}

const BASE_URL = process.env.BASE_URL;

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [process.env.SECRET_KEY!],
    secure: process.env.NODE_ENV === 'production',
  },
});

export const auth = new Authenticator<{
  profile: GitHubProfile;
}>(sessionStorage);

auth.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_APP_CLIENT_ID!,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET!,
      callbackURL: new URL('/auth/github/callback', BASE_URL).toString(),
    },
    async ({ profile }) => {
      return { profile };
    }
  )
);
