declare module 'routes-gen' {
  export type RouteParams = {
    '/resources': {};
    '/:slug': { slug: string };
    '/about': {};
    '/': {};
  };

  export function route<
    T extends
      | ['/auth/github/callback']
      | ['/auth/github']
      | ['/resources']
      | ['/logout']
      | ['/:slug', RouteParams['/:slug']]
      | ['/about']
      | ['/']
  >(...args: T): typeof args[0];
}
