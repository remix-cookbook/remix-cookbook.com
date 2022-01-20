declare module "routes-gen" {
  export function route<
    T extends
      | ["/auth/github/callback"]
      | ["/auth/github"]
      | ["/bookmarks"]
      | ["/resources"]
      | ["/logout"]
      | ["/:slug", { slug: string }]
      | ["/about"]
      | ["/"]
  >(...args: T): typeof args[0];
}
