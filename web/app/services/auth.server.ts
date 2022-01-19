import { Authenticator } from 'remix-auth';
import { GitHubStrategy } from 'remix-auth-github';
import { login, User } from '~/models/user';
import { sessionStorage } from '~/services/session.server';

export const authenticator = new Authenticator<User>(sessionStorage);

if (!process.env.GITHUB_APP_CLIENT_ID) {
  throw new Error('Missing GITHUB_APP_CLIENT_ID env');
}

if (!process.env.GITHUB_APP_CLIENT_SECRET) {
  throw new Error('Missing GITHUB_APP_CLIENT_SECRET env');
}

if (!process.env.HOST) {
  throw new Error('Missing HOST env');
}

authenticator.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
      callbackURL: `http://${process.env.HOST}/auth/github/callback`,
    },
    async response => login(response.profile.emails[0].value)
  )
);
