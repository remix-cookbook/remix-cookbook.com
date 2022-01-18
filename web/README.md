# Welcome to Remix!

Before start using this project, please refer to `.env.example` to check the variables required by the project. The file contains links to the places in which you can get the values.

After updating it, create a copy and name it `.env`. This file should never be committed to Git, as it contains sensitive data.

## Working in the project

Please refer to `package.json` script list to get in touch with everything that is possible to do.

## Deployment

Netlify supports both deployments triggered by the client ([Netlify CLI](https://docs.netlify.com/cli/get-started/)) or by a merge on main ([Github Repository](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)). In this project, I am using the CLI.

The scripts found on `/web/scripts/` contain all the relevant NPM scripts required to a successful deployment.

## Automated Tests

This project is configured to use [Cypress](https://cypress.io) for integration tests. There are no unit tests with Jest and no plans to include them, as I believe Cypress is doing a good job at the moment.

## Tools

- [Remix.run](https://Remix.run)
- [Tailwind CSS](https://tailwindcss.com) (with [Typography Plugin](https://tailwindcss.com/docs/typography-plugin))
- [Headless UI](https://headlessui.dev/) and [HeroIcons](https://heroicons.com/)
- [Netify](https://netlify.com)
- [routes-gen](https://www.npmjs.com/package/routes-gen) - to bring type-safety to routes
- [Plausible Analytics](https://plausible.io/)

## Installation and running

Please refer to the instructions below. Before running this application for the first time, you should build it with `yarn build` (or `npm run build`), otherwise you could get an error. This happens on the very first run only.

## More about Remix.run

- [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
