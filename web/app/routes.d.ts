declare module "routes-gen" {
  export type RouteParams = {
    "/auth/github/callback": {};
    "/auth/github": {};
    "/bookmarks": {};
    "/resources": {};
    "/logout": {};
    "/:slug": { slug: string };
    "/about": {};
    "/": {};
  };

  export function route<
    T extends
      | ["/auth/github/callback"]
      | ["/auth/github"]
      | ["/bookmarks"]
      | ["/resources"]
      | ["/logout"]
      | ["/:slug", RouteParams["/:slug"]]
      | ["/about"]
      | ["/"]
  >(...args: T): typeof args[0];
}
