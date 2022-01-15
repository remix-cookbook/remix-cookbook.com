declare module "routes-gen" {
  export function route<
    T extends
      | ["/resources"]
      | ["/:slug", { slug: string }]
      | ["/about"]
      | ["/"]
  >(...args: T): typeof args[0];
}
