var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
__export(exports, {
  handler: () => handler
});
init_react();
var import_netlify = __toModule(require("@remix-run/netlify"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_dotenv = __toModule(require("dotenv"));
var import_server = __toModule(require("react-dom/server"));
var import_remix3 = __toModule(require_remix());

// app/cookies.ts
init_react();
var import_remix = __toModule(require_remix());
var languageCookie = (0, import_remix.createCookie)("language");
var signinRedirectCookie = (0, import_remix.createCookie)("signinRedirect");
var parseCookie = async (request, cookie) => {
  const cookieHeader = request.headers.get("Cookie");
  const parsedCookie = await cookie.parse(cookieHeader) || {};
  return parsedCookie;
};

// app/services/auth.server.ts
init_react();
var import_remix2 = __toModule(require_remix());
var import_remix_auth = __toModule(require("remix-auth"));
var import_remix_auth_github = __toModule(require("remix-auth-github"));
if (!process.env.GH_APP_CLIENT_ID) {
  throw new Error("GH_APP_CLIENT_ID is required");
}
if (!process.env.GH_APP_CLIENT_SECRET) {
  throw new Error("GH_APP_CLIENT_SECRET is required");
}
if (!process.env.BASE_URL) {
  throw new Error("BASE_URL is required");
}
var BASE_URL = process.env.BASE_URL;
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SECRET_KEY],
    secure: false
  }
});
var auth = new import_remix_auth.Authenticator(sessionStorage);
auth.use(new import_remix_auth_github.GitHubStrategy({
  clientID: process.env.GH_APP_CLIENT_ID,
  clientSecret: process.env.GH_APP_CLIENT_SECRET,
  callbackURL: new URL("/auth/github/callback", BASE_URL).toString()
}, async ({ profile }) => {
  return { profile };
}));

// app/services/geo.ts
init_react();
var import_axios = __toModule(require("axios"));
function getGeoInformation({ cookie }) {
  const promise = new Promise((resolve) => resolve({ data: { country: "Germany" } }));
  try {
    if (cookie.language) {
      console.log("Saving API quota for geo location");
      return promise;
    }
    return import_axios.default.get("http://ipwhois.app/json/");
  } catch (error) {
    console.log(error);
    console.log("Geo API call error. Returning Germany as country...");
    return promise;
  }
}

// app/config.ts
init_react();
var siteName = "remix-cookbook";
var siteFullName = "Remix Cookbook";
var domain = `${siteName}.com`;
var portugueseSpeakingCountries = ["brazil", "portugal", "angola"];
var availableLanguages = {
  en: "en",
  pt: "pt"
};
var defaultLanguage = "en";

// app/entry.server.tsx
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  import_dotenv.default.config();
  const cookie = await parseCookie(request, languageCookie);
  const country = (await getGeoInformation({ cookie })).data.country;
  cookie.language = portugueseSpeakingCountries.includes(country) ? availableLanguages.pt : availableLanguages.en;
  responseHeaders.set("Set-Cookie", await languageCookie.serialize(cookie, {
    httpOnly: true
  }));
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix3.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/root.tsx
var root_exports = {};
__export(root_exports, {
  AuthenticationContext: () => AuthenticationContext2,
  BookmarksContext: () => BookmarksContext2,
  default: () => App,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix11 = __toModule(require_remix());

// app/components/Feed/Feed.tsx
init_react();
var import_react = __toModule(require("react"));
var import_react2 = __toModule(require("@headlessui/react"));
var import_classnames = __toModule(require("classnames"));
function Feed() {
  return /* @__PURE__ */ React.createElement(import_react2.Menu, {
    as: "div",
    className: "relative ml-1"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.Menu.Button, {
    title: "RSS",
    "data-testid": "feed-icon",
    className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.feed,
    className: "text-light-snow-storm4 h-6 w-6"
  }))), /* @__PURE__ */ React.createElement(import_react2.Transition, {
    as: import_react.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react2.Menu.Items, {
    "data-testid": "feed-overlay",
    className: "absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, /* @__PURE__ */ React.createElement(import_react2.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: `https://${domain}/rss.xml`,
    className: (0, import_classnames.default)(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, "RSS")), /* @__PURE__ */ React.createElement(import_react2.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: `https://${domain}/atom.xml`,
    className: (0, import_classnames.default)(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Atom")), /* @__PURE__ */ React.createElement(import_react2.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: `https://${domain}/feed.json`,
    className: (0, import_classnames.default)(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, "JSON")))));
}

// app/components/Footer/Footer.tsx
init_react();
var links = [
  { title: "Remix.run", href: "https://remix.run" },
  { title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { title: "Sanity.io", href: "https://sanity.io" },
  { title: "Netlify", href: "https://netlify.com" },
  { title: "Nord Theme", href: "https://www.nordtheme.com" },
  { title: "Unsplash API", href: "https://unsplash.com/developers" }
];
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "mx-5 mt-8 mb-12 text-center text-sm text-gray-400 md:flex md:justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-2 md:mr-4 md:mb-auto"
  }, "Happily built with"), /* @__PURE__ */ React.createElement("nav", {
    className: "footer-nav flex flex-wrap justify-center"
  }, links.map(({ title, href }) => /* @__PURE__ */ React.createElement("div", {
    key: href,
    className: "after:ml-2 after:mr-2 after:content-['-'] last:after:content-['']"
  }, /* @__PURE__ */ React.createElement(Link.External, {
    href,
    externalIndicator: false
  }, title)))));
}

// app/components/Glow/Glow.tsx
init_react();
function Glow() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "glow glow-tr"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "glow glow-tl"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "glow glow-bl"
  }));
}

// app/components/Header/Header.tsx
init_react();
var import_routes_gen = __toModule(require("routes-gen"));
function Header() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "header flex flex-col items-center justify-between border-b border-dark-polar-night1 bg-dark-midnight p-4 text-light-snow-storm3 md:flex-row"
  }, /* @__PURE__ */ React.createElement("h1", {
    "data-testid": "site-name",
    className: "antialiased md:text-2xl"
  }, /* @__PURE__ */ React.createElement(Link.Internal, {
    href: (0, import_routes_gen.route)("/"),
    className: "flex-cols flex flex-col items-center md:flex-row"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/img/logo.png",
    width: "40",
    height: "40",
    alt: "Return to the homepage"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 block pl-2 text-2xl text-gray-500 "
  }, "Remix.run Cookbook"))), /* @__PURE__ */ React.createElement(TopNav, null));
}

// app/components/Headings/Headings.tsx
init_react();

// app/components/Headings/Separator/Separator.tsx
init_react();
var import_react3 = __toModule(require("react"));
function Separator({ children }) {
  return /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "border-b border-dark-polar-night2 pb-2 text-light-snow-storm3"
  }, children);
}

// app/components/Headings/Content/Content.tsx
init_react();
var import_react4 = __toModule(require("react"));
function Content({ children }) {
  return /* @__PURE__ */ import_react4.default.createElement("h2", {
    className: "border-b border-dark-polar-night1 pb-6 text-light-snow-storm1"
  }, children);
}

// app/components/Headings/Headings.tsx
function Headings() {
  return null;
}
Headings.Separator = Separator;
Headings.Content = Content;

// app/components/Icon/Icon.tsx
init_react();
var import_fa = __toModule(require("react-icons/fa"));
var import_solid = __toModule(require("@heroicons/react/solid"));
var Icons;
(function(Icons2) {
  Icons2[Icons2["twitter"] = 0] = "twitter";
  Icons2[Icons2["github"] = 1] = "github";
  Icons2[Icons2["feed"] = 2] = "feed";
  Icons2[Icons2["caretUp"] = 3] = "caretUp";
  Icons2[Icons2["bookmark"] = 4] = "bookmark";
  Icons2[Icons2["thumbsUp"] = 5] = "thumbsUp";
  Icons2[Icons2["home"] = 6] = "home";
})(Icons || (Icons = {}));
var IconsMap = (props) => ({
  [1]: /* @__PURE__ */ React.createElement(import_fa.FaGithub, __spreadValues({}, props)),
  [0]: /* @__PURE__ */ React.createElement(import_fa.FaTwitter, __spreadValues({}, props)),
  [2]: /* @__PURE__ */ React.createElement(import_solid.RssIcon, __spreadValues({}, props)),
  [3]: /* @__PURE__ */ React.createElement(import_fa.FaAngleDoubleUp, __spreadValues({}, props)),
  [4]: /* @__PURE__ */ React.createElement(import_solid.BookmarkIcon, __spreadValues({}, props)),
  [5]: /* @__PURE__ */ React.createElement(import_solid.ThumbUpIcon, __spreadValues({}, props)),
  [6]: /* @__PURE__ */ React.createElement(import_solid.HomeIcon, __spreadValues({}, props))
});
function Icon(props) {
  const _a = props, { icon } = _a, rest = __objRest(_a, ["icon"]);
  return IconsMap(rest)[icon] ?? null;
}

// app/components/Links/Link.tsx
init_react();

// app/components/Links/Internal/Internal.tsx
init_react();
var import_react5 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());
function Internal(_a) {
  var _b = _a, { href, children, className } = _b, props = __objRest(_b, ["href", "children", "className"]);
  return /* @__PURE__ */ import_react5.default.createElement(import_remix4.Link, __spreadValues({
    prefetch: "intent",
    to: href,
    className
  }, props), children);
}

// app/components/Links/External/External.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_fa2 = __toModule(require("react-icons/fa"));
function External({
  children,
  href,
  externalIndicator = true,
  title = "",
  className
}) {
  return /* @__PURE__ */ import_react6.default.createElement("a", {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: `inline-flex items-center ${className}`,
    title
  }, children, " ", externalIndicator ? /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "ml-2 text-dark-polar-night1"
  }, /* @__PURE__ */ import_react6.default.createElement(import_fa2.FaExternalLinkAlt, null)) : null);
}

// app/components/Links/Link.tsx
function Link() {
  return null;
}
Link.Internal = Internal;
Link.External = External;

// app/components/Navigation/TopNav/TopNav.tsx
init_react();
var import_routes_gen7 = __toModule(require("routes-gen"));

// app/hooks/useProfile.ts
init_react();
var import_react12 = __toModule(require("react"));

// app/root.tsx
init_react();

// app/util/header/header.ts
init_react();
var import_lodash = __toModule(require("lodash"));

// app/features/Blog/index.ts
init_react();

// app/features/Blog/BlogApi.ts
var BlogApi_exports = {};
__export(BlogApi_exports, {
  getPost: () => getPost,
  getPosts: () => getPosts
});
init_react();

// app/features/Blog/service/sanity/util.ts
init_react();
function filterDataToSingleItem(data = [], preview = false) {
  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }
  if (!Array.isArray(data)) {
    return data;
  }
  if (data.length === 1) {
    return data[0];
  }
  return data[0];
}

// app/features/Blog/service/sanity/client.ts
init_react();
var import_picosanity = __toModule(require("picosanity"));

// app/features/Blog/service/sanity/config.ts
init_react();
var config = {
  apiVersion: process.env.SANITY_API_VERSION,
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: Boolean(process.env.SANITY_USE_CDN),
  token: process.env.SANITY_API_TOKEN
};

// app/features/Blog/service/sanity/client.ts
var getClient = () => {
  return new import_picosanity.default(config);
};

// app/features/Blog/BlogApi.ts
function getPosts({ language }) {
  const query = `*[!(_id in path('drafts.**')) && _type=='post'  && language == '${language ?? defaultLanguage}' && type == 'post'] | order(_createdAt desc)`;
  return getClient().fetch(query);
}
function getPost(slug, preview = false) {
  const queryParams = { slug };
  const query = preview ? `*[_type == "post" && slug.current ==  $slug]` : `*[!(_id in path('drafts.**')) && _type == "post" && slug.current ==  $slug]`;
  return getClient().fetch(query, queryParams);
}

// app/features/Blog/UnsplashApi.ts
var UnsplashApi_exports = {};
__export(UnsplashApi_exports, {
  getPictures: () => getPictures
});
init_react();
async function getPictures({ quantity }) {
  const space = `https://api.unsplash.com/photos/random?query=space&client_id=${process.env.UNSPLASH_ACCESS_KEY}&orientation=landscape&count=${quantity}`;
  const res = await fetch(space);
  const pictures = (await res.json()).map(({ alt_description, urls, user }) => ({
    regular: urls.regular,
    small: urls.small,
    alt_description,
    user: {
      name: user.name,
      portfolio_url: user.links.html
    }
  }));
  return pictures;
}

// app/features/Blog/components/Post/Post.tsx
init_react();
var import_minutes_to_read = __toModule(require("minutes-to-read"));

// app/features/Bookmarks/index.ts
init_react();

// app/features/Bookmarks/components/Bookmark/Bookmark.tsx
init_react();
var import_react7 = __toModule(require("react"));
var import_routes_gen2 = __toModule(require("routes-gen"));
var import_remix6 = __toModule(require_remix());
var import_classnames2 = __toModule(require("classnames"));

// app/hooks/useDisabled.ts
init_react();
var import_remix5 = __toModule(require_remix());
function useDisabled(verificationKey, verificationData) {
  const transition = (0, import_remix5.useTransition)();
  return !!transition.submission && transition.submission.formData.get(verificationKey) === verificationData;
}

// app/features/Bookmarks/components/Bookmark/Bookmark.tsx
function Bookmark({ post, bookmark }) {
  const { profile } = useProfile();
  const [referrer, setReferrer] = (0, import_react7.useState)("");
  const disabled = useDisabled("bookmarkId", (bookmark == null ? void 0 : bookmark.id) ?? "");
  const { dialog: AuthenticationDialog2, setOpen } = useAuthenticationDialog({ post });
  (0, import_react7.useEffect)(() => {
    if (typeof window !== "undefined") {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AuthenticationDialog2, null), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post",
    action: (0, import_routes_gen2.route)("/bookmarks")
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "postTitle",
    value: post.title
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "postSlug",
    value: post.slug.current
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "bookmarkId",
    value: (bookmark == null ? void 0 : bookmark.id) ?? ""
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userId",
    value: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "referrer",
    value: referrer
  }), profile ? /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    title: "Bookmark this post",
    disabled
  }, bookmark ? /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "bookmark-icon",
    icon: Icons.bookmark,
    className: (0, import_classnames2.default)("h-8 w-8 text-yellow-500", {
      "text-inherit opacity-40": disabled
    })
  }) : /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "bookmark-icon",
    icon: Icons.bookmark,
    className: (0, import_classnames2.default)("h-8 w-8 opacity-40", {
      "text-yellow-500 opacity-100": disabled
    })
  })) : /* @__PURE__ */ React.createElement("button", {
    title: "Bookmark this post",
    onClick: () => setOpen(true)
  }, /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "bookmark-icon",
    icon: Icons.bookmark,
    className: "w-8 h-8 opacity-40"
  }))));
}

// app/features/Bookmarks/components/Bookmarks/Bookmarks.tsx
init_react();
var import_routes_gen4 = __toModule(require("routes-gen"));

// app/util/index.ts
init_react();

// app/util/datetime/datetime.ts
var datetime_exports = {};
__export(datetime_exports, {
  date: () => date
});
init_react();
function date(date2) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date2));
}

// app/util/db/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/features/Bookmarks/components/Bookmarks/Bookmarks.tsx
var import_react8 = __toModule(require("react"));

// app/features/Bookmarks/components/Bookmarks/DeleteBookmark.tsx
init_react();
var import_classnames3 = __toModule(require("classnames"));
var import_remix7 = __toModule(require_remix());
var import_routes_gen3 = __toModule(require("routes-gen"));
function DeleteBookmark({ bookmark, referrer }) {
  const disabled = useDisabled("bookmarkId", bookmark.id);
  return /* @__PURE__ */ React.createElement(import_remix7.Form, {
    action: (0, import_routes_gen3.route)("/bookmarks"),
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "bookmarkId",
    value: bookmark.id ?? ""
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "referrer",
    value: referrer
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: (0, import_classnames3.default)("text-sm text-red-500", {
      "opacity-50": disabled
    }),
    disabled
  }, "[delete]"));
}

// app/features/Bookmarks/components/Bookmarks/Bookmarks.tsx
function Bookmarks({ bookmarks }) {
  const [referrer, setReferrer] = (0, import_react8.useState)("");
  (0, import_react8.useEffect)(() => {
    if (typeof window !== "undefined") {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);
  return /* @__PURE__ */ React.createElement(Prose, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Headings.Content, null, "Bookmarks"), bookmarks.map((bookmark) => {
    return /* @__PURE__ */ React.createElement("dl", {
      key: bookmark.id,
      className: "mb-6"
    }, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Link.Internal, {
      href: (0, import_routes_gen4.route)("/:slug", { slug: bookmark.postSlug })
    }, bookmark.postTitle)), /* @__PURE__ */ React.createElement("dd", null, "Bookmarked on ", datetime_exports.date(bookmark.createdAt), /* @__PURE__ */ React.createElement(DeleteBookmark, {
      bookmark,
      referrer
    })));
  })));
}

// app/features/Bookmarks/BookmarksApi.ts
var BookmarksApi_exports = {};
__export(BookmarksApi_exports, {
  bookmarkQuantity: () => bookmarkQuantity,
  createBookmark: () => createBookmark,
  deleteBookmark: () => deleteBookmark,
  getBookmark: () => getBookmark,
  getBookmarks: () => getBookmarks
});
init_react();
async function getBookmarks(profile) {
  return await db.bookmark.findMany({
    where: {
      userId: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`
    }
  });
}
async function getBookmark(bookmark) {
  return await db.bookmark.findFirst({
    where: {
      postSlug: bookmark.postSlug,
      userId: bookmark.userId
    }
  });
}
async function createBookmark(bookmark) {
  const exists = await getBookmark(bookmark);
  if (!exists) {
    await db.bookmark.create({
      data: {
        postTitle: bookmark.postTitle,
        postSlug: bookmark.postSlug,
        userId: bookmark.userId
      }
    });
  }
}
async function deleteBookmark(id) {
  await db.bookmark.delete({
    where: {
      id
    }
  });
}
async function bookmarkQuantity(profile) {
  if (!profile)
    return false;
  return db.bookmark.count({
    where: {
      userId: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`
    }
  });
}

// app/features/Likes/components/LikeButton/LikeButton.tsx
init_react();
var import_react9 = __toModule(require("react"));
var import_routes_gen5 = __toModule(require("routes-gen"));
var import_remix8 = __toModule(require_remix());
var import_classnames4 = __toModule(require("classnames"));
function LikeButton({ post, userLike, likeQuantity: likeQuantity2 }) {
  const [likeLabel, setLikeLabel] = (0, import_react9.useState)("likes");
  const { dialog: AuthenticationDialog2, setOpen } = useAuthenticationDialog({ post });
  const { profile } = useProfile();
  const [referrer, setReferrer] = (0, import_react9.useState)("");
  const disabled = useDisabled("likeId", (userLike == null ? void 0 : userLike.id) ?? "");
  (0, import_react9.useEffect)(() => {
    if (typeof window !== "undefined") {
      setReferrer(window.location.pathname);
    }
  }, [setReferrer]);
  (0, import_react9.useEffect)(() => {
    setLikeLabel("likes");
    if (likeQuantity2 === 1) {
      setLikeLabel("like");
    }
  }, [setLikeLabel, likeQuantity2]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AuthenticationDialog2, null), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    action: (0, import_routes_gen5.route)("/likes"),
    className: "flex items-center gap-2 text-sm"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "postId",
    value: post._id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "likeId",
    value: (userLike == null ? void 0 : userLike.id) ?? ""
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "userId",
    value: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "referrer",
    value: referrer
  }), profile ? /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    title: "Like this post",
    disabled
  }, userLike ? /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "like-icon",
    icon: Icons.thumbsUp,
    className: (0, import_classnames4.default)("h-6 w-6 text-yellow-500", {
      "text-inherit opacity-40": disabled
    })
  }) : /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "like-icon",
    icon: Icons.thumbsUp,
    className: (0, import_classnames4.default)("h-6 w-6 opacity-40", {
      "text-yellow-500 opacity-100": disabled
    })
  })) : /* @__PURE__ */ React.createElement("button", {
    title: "Like this post",
    onClick: () => setOpen(true)
  }, /* @__PURE__ */ React.createElement(Icon, {
    "data-testid": "like-icon",
    icon: Icons.thumbsUp,
    className: "w-6 h-6 opacity-40"
  })), /* @__PURE__ */ React.createElement("span", null, likeQuantity2, " ", likeLabel)));
}

// app/features/Blog/components/Card/Credits.tsx
init_react();
function Credits({ user }) {
  return /* @__PURE__ */ React.createElement("span", {
    className: "absolute right-4 top-2 z-10"
  }, /* @__PURE__ */ React.createElement(Link.External, {
    href: user.portfolio_url ?? "https://unsplash.com",
    externalIndicator: false,
    title: `Photo by ${user.name} on Unsplash`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "shadowed-text text-xs text-light-snow-storm3"
  }, "Photo by ", user.name, " on Unsplash")));
}

// app/features/Blog/components/Content/index.ts
init_react();

// app/features/Blog/components/Content/Content.jsx
init_react();
var import_block_content_to_react = __toModule(require("@sanity/block-content-to-react"));

// app/features/Blog/components/Content/util.jsx
var util_exports = {};
__export(util_exports, {
  blocksToText: () => blocksToText,
  serializers: () => serializers
});
init_react();
var import_react_refractor = __toModule(require("react-refractor"));
var import_javascript = __toModule(require("refractor/lang/javascript"));
var import_jsx = __toModule(require("refractor/lang/jsx"));
var import_tsx = __toModule(require("refractor/lang/tsx"));
var import_bash = __toModule(require("refractor/lang/bash"));
var import_typescript = __toModule(require("refractor/lang/typescript"));
var import_markdown = __toModule(require("refractor/lang/markdown"));
var import_json = __toModule(require("refractor/lang/json"));
var import_css = __toModule(require("refractor/lang/css"));
import_react_refractor.default.registerLanguage(import_bash.default);
import_react_refractor.default.registerLanguage(import_css.default);
import_react_refractor.default.registerLanguage(import_javascript.default);
import_react_refractor.default.registerLanguage(import_json.default);
import_react_refractor.default.registerLanguage(import_jsx.default);
import_react_refractor.default.registerLanguage(import_markdown.default);
import_react_refractor.default.registerLanguage(import_tsx.default);
import_react_refractor.default.registerLanguage(import_typescript.default);
var serializers = {
  types: {
    code: (props) => /* @__PURE__ */ React.createElement("div", {
      className: "syntax-highlighter"
    }, /* @__PURE__ */ React.createElement(import_react_refractor.default, {
      language: props.node.language,
      value: props.node.code,
      markers: props.node.highlightedLines
    }))
  },
  marks: {
    highlight: (props) => {
      return /* @__PURE__ */ React.createElement("span", {
        style: { backgroundColor: props.mark.color }
      }, props.children);
    }
  }
};
function blocksToText(blocks) {
  return blocks.filter(({ _type }) => _type === "block").map((block) => block.children.map((child) => child.text).join(""));
}

// app/features/Blog/components/Content/Content.jsx
function Content2({ blocks }) {
  return /* @__PURE__ */ React.createElement(import_block_content_to_react.default, {
    blocks,
    serializers,
    projectId: "4njl7vlm",
    dataset: "blog-contents"
  });
}

// app/features/Blog/components/Post/Post.tsx
function Post({
  post,
  preview = false,
  picture,
  bookmark,
  userLike,
  likeQuantity: likeQuantity2
}) {
  const content = util_exports.blocksToText(post.content).join(" ");
  const minutesToRead = (0, import_minutes_to_read.default)(content);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative w-full h-48 md:h-80"
  }, /* @__PURE__ */ React.createElement(Credits, {
    user: picture.user
  }), /* @__PURE__ */ React.createElement("img", {
    src: picture.regular,
    className: "object-cover w-full h-full",
    alt: `${post.title} - Cover`
  })), /* @__PURE__ */ React.createElement(Prose, null, /* @__PURE__ */ React.createElement(React.Fragment, null, preview ? /* @__PURE__ */ React.createElement("div", {
    className: "p-2 antialiased font-semibold text-center text-normal bg-light-snow-storm1 bg-opacity-70 text-dark-polar-night3"
  }, "Preview Mode Enabled") : null, /* @__PURE__ */ React.createElement(Headings.Content, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start justify-between gap-3 mb-3"
  }, post.title, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(Bookmark, {
    post,
    bookmark
  }))), /* @__PURE__ */ React.createElement(LikeButton, {
    post,
    userLike,
    likeQuantity: likeQuantity2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "pb-6 text-sm border-b border-dark-polar-night1 text-light-snow-storm3"
  }, /* @__PURE__ */ React.createElement("p", null, "By ", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, post.author), " -", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: `https://${post.author_url}`
  }, post.author_url)), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dd", null, "Created: ", datetime_exports.date(post._createdAt))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dd", null, "Last update: ", datetime_exports.date(post._updatedAt))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dd", {
    className: "inline-block mt-6 text-base"
  }, "\u23F3 \xA0\xA0", minutesToRead, ", not taking into consideration the code examples."))), /* @__PURE__ */ React.createElement(Content2, {
    blocks: post.content
  }), /* @__PURE__ */ React.createElement(Comments, null))));
}

// app/features/Blog/components/Posts/Posts.tsx
init_react();

// app/features/Blog/components/Card/Card.tsx
init_react();
var import_routes_gen6 = __toModule(require("routes-gen"));
var import_classnames5 = __toModule(require("classnames"));
function Card({ post, excerpt, picture, small = false }) {
  const { user, regular: pictureRG, small: pictureSM, alt_description } = picture;
  const { slug, _createdAt, title } = post;
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-full border border-gray-800 shadow-lg rounded-xl bg-light-snow-storm3 bg-opacity-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames5.default)({
      "card-image-box": small,
      "card-image-box-highlight": !small
    })
  }, /* @__PURE__ */ React.createElement(Credits, {
    user
  }), /* @__PURE__ */ React.createElement("img", {
    src: small ? pictureSM : pictureRG,
    className: "object-cover w-full h-full rounded-t-xl",
    alt: alt_description
  })), /* @__PURE__ */ React.createElement("div", {
    className: "p-6 text-light-snow-storm3"
  }, /* @__PURE__ */ React.createElement(Link.Internal, {
    href: (0, import_routes_gen6.route)("/:slug", {
      slug: slug.current
    }),
    "data-testid": "post-link"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-1 text-sm text-gray-300"
  }, datetime_exports.date(_createdAt)), /* @__PURE__ */ React.createElement("p", {
    className: "mb-3 text-xl antialiased font-semibold shadowed-text"
  }, title), excerpt ? /* @__PURE__ */ React.createElement("p", {
    className: "hidden text-base shadowed-text md:block"
  }, excerpt) : null)));
}

// app/features/Blog/components/Posts/Posts.tsx
function Posts({ posts, pictures }) {
  const [firstPost, ...remainingPosts] = posts;
  const [firstPicture, ...remainingPictures] = pictures;
  const [excerpt] = util_exports.blocksToText(firstPost.content);
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-6 max-w-6xl px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement(Card, {
    post: firstPost,
    excerpt,
    picture: firstPicture
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
  }, remainingPosts.map((post, index) => /* @__PURE__ */ React.createElement("li", {
    key: post._id
  }, /* @__PURE__ */ React.createElement(Card, {
    post,
    picture: remainingPictures[index],
    small: true
  })))));
}

// app/features/Blog/components/Comments/Comments.tsx
init_react();
function Comments() {
  return /* @__PURE__ */ React.createElement("section", {
    style: { width: "100%" },
    ref: (element) => {
      if (!element) {
        return;
      }
      const scriptElement = document.createElement("script");
      scriptElement.setAttribute("src", "https://utteranc.es/client.js");
      scriptElement.setAttribute("repo", `${siteName}/${domain}-comments`);
      scriptElement.setAttribute("issue-term", "pathname");
      scriptElement.setAttribute("theme", "github-light");
      scriptElement.setAttribute("crossorigin", "anonymous");
      scriptElement.setAttribute("async", "true");
      element.replaceChildren(scriptElement);
    }
  });
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-RMLOC3UK.css";

// app/styles/background.css
var background_default = "/build/_assets/background-3MDCFITO.css";

// app/styles/global.css
var global_default = "/build/_assets/global-3QR5HMXI.css";

// app/util/header/header.ts
function description(content) {
  return (0, import_lodash.truncate)(content, { length: 150 });
}
function globalMeta() {
  return {
    "theme-color": "#2E3440",
    "title": `${siteFullName} - Easy to follow recipes for Remix.run`,
    "description": "Easy to follow recipes for the Remix.run framework",
    "author": "Fabio Vedovelli",
    "og:type": "website",
    "og:site_name": siteFullName,
    "og:title": `${siteFullName} - Easy to follow recipes for Remix.run`,
    "og:description": "Easy to follow recipes for the Remix.run framework",
    "og:url": `https://${domain}`,
    "og:image": `https://${domain}/img/social-banner.jpg`,
    "twitter:image": `https://${domain}/img/social-banner.jpg`,
    "twitter:card": "summary_large_image",
    "twitter:site": "@RemixCookbook",
    "twitter:creator": "@vedovelli74",
    "twitter:description": "Easy to follow recipes for the Remix.run framework"
  };
}
function globalLinks() {
  return [
    { rel: "manifest", href: "/manifest.json" },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: background_default },
    { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png", sizes: "180x180" },
    { rel: "icon", href: "/img/favicon-32x32.png", type: "image/png" },
    { rel: "icon", href: "/img/favicon-16x16.png", type: "image/png" },
    { rel: "mask-icon", href: "/img/safari-pinned-tab.svg", color: "#5bbad5" },
    {
      rel: "alternate",
      type: "application/rss+xml",
      href: `https://${domain}/rss.xml`,
      title: `${siteFullName}'s XML Feed`
    },
    {
      rel: "alternate",
      type: "application/atom+xml",
      href: `https://${domain}/atom.xml`,
      title: `${siteFullName}'s Atom Feed`
    },
    {
      rel: "alternate",
      type: "application/feed+json",
      href: `https://${domain}/feed.json`,
      title: `${siteFullName}'s JSON Feed`
    }
  ];
}
function postMeta(data) {
  const content = util_exports.blocksToText(data.post.content);
  const desc = description(content.join(" "));
  return {
    "title": `${siteFullName} - ${data.post.title}`,
    "description": desc,
    "og:title": `${siteFullName} - ${data.post.title}`,
    "og:description": desc,
    "og:url": `https://${domain}/${data.post.slug.current}`,
    "twitter:description": desc,
    "og:image": `https://${domain}/img/${data.post.slug.current}.jpeg`,
    "twitter:image": `https://${domain}/img/${data.post.slug.current}.jpeg`
  };
}

// app/root.tsx
var import_react11 = __toModule(require("react"));

// app/hooks/useBuildServiceWorker.ts
init_react();
var import_remix9 = __toModule(require_remix());
var import_react10 = __toModule(require("react"));
var isMount = true;
function useBuildServiceWorker() {
  const matches = (0, import_remix9.useMatches)();
  const location = (0, import_remix9.useLocation)();
  (0, import_react10.useEffect)(() => {
    var _a;
    const mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        (_a = navigator.serviceWorker.controller) == null ? void 0 : _a.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest
        });
      } else {
        const listener = async () => {
          var _a2;
          await navigator.serviceWorker.ready;
          (_a2 = navigator.serviceWorker.controller) == null ? void 0 : _a2.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener("controllerchange", listener);
        };
      }
    }
  }, [location, matches]);
}

// app/root.tsx
var AuthenticationContext = (0, import_react11.createContext)({});
var BookmarksContext = (0, import_react11.createContext)({
  hasBookmarks: false
});

// app/hooks/useProfile.ts
var useProfile = () => {
  const { profile } = (0, import_react12.useContext)(AuthenticationContext);
  return { profile };
};

// app/hooks/useBookmarksContext.ts
init_react();
var import_react13 = __toModule(require("react"));
var useBookmarksContext = () => {
  const { hasBookmarks } = (0, import_react13.useContext)(BookmarksContext);
  return { hasBookmarks };
};

// app/hooks/useAuthenticationDialog.tsx
init_react();
var import_react14 = __toModule(require("react"));
var useAuthenticationDialog = ({ post }) => {
  const [open, setOpen] = (0, import_react14.useState)(false);
  return {
    dialog: () => /* @__PURE__ */ React.createElement(AuthenticationDialog, {
      open,
      onClose: () => setOpen(false),
      post
    }),
    setOpen
  };
};

// app/components/Navigation/TopNav/TopNav.tsx
function TopNav() {
  const { profile } = useProfile();
  const { hasBookmarks } = useBookmarksContext();
  return /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-wrap items-center gap-4 py-4 justify-evenly"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "hidden md:inline-block"
  }, /* @__PURE__ */ React.createElement(Link.Internal, {
    className: "underline decoration-dotted underline-offset-4",
    href: (0, import_routes_gen7.route)("/resources")
  }, "Remix Resources")), /* @__PURE__ */ React.createElement("li", {
    className: "md:hidden"
  }, /* @__PURE__ */ React.createElement(Link.Internal, {
    className: "underline decoration-dotted underline-offset-4",
    href: (0, import_routes_gen7.route)("/resources")
  }, "Resources")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.Internal, {
    className: "underline decoration-dotted underline-offset-4",
    href: (0, import_routes_gen7.route)("/about")
  }, "About")), hasBookmarks ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.Internal, {
    className: "underline decoration-dotted underline-offset-4",
    href: (0, import_routes_gen7.route)("/bookmarks")
  }, "Bookmarks")) : null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    className: "underline decoration-dotted underline-offset-4",
    href: "https://skilled-builder-1623.ck.page/60595207f8",
    title: "Sign up to our newsletter"
  }, "Newsletter")), profile ? /* @__PURE__ */ React.createElement(Signout, null) : null, /* @__PURE__ */ React.createElement("li", {
    className: "flex gap-4"
  }, /* @__PURE__ */ React.createElement(Feed, null), /* @__PURE__ */ React.createElement(Github, null)));
}

// app/components/Prose/Prose.tsx
init_react();
var import_react15 = __toModule(require("react"));
function Prose({ children }) {
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: "prose prose-lime mx-auto mb-auto px-6 py-10 text-light-snow-storm3 prose-h4:text-light-snow-storm1 prose-a:text-sky-400 prose-blockquote:text-light-snow-storm3 prose-strong:text-light-snow-storm1 lg:prose-lg"
  }, children);
}

// app/components/Github/Github.tsx
init_react();
var import_react16 = __toModule(require("react"));
var import_react17 = __toModule(require("@headlessui/react"));
var import_classnames6 = __toModule(require("classnames"));
function Github() {
  return /* @__PURE__ */ React.createElement(import_react17.Menu, {
    as: "div",
    className: "relative ml-1"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react17.Menu.Button, {
    title: "RSS",
    "data-testid": "github-icon",
    className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.github,
    className: "text-light-snow-storm4 h-6 w-6"
  }))), /* @__PURE__ */ React.createElement(import_react17.Transition, {
    as: import_react16.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react17.Menu.Items, {
    "data-testid": "github-overlay",
    className: "absolute right-0 z-20 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, /* @__PURE__ */ React.createElement(import_react17.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: `https://github.com/${siteName}/${domain}`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: (0, import_classnames6.default)(active ? "bg-gray-100" : "", "flex gap-2 px-4 py-2 text-sm text-gray-700")
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.github,
    className: "h-5 w-5 text-gray-700"
  }), "This blog's source code")), /* @__PURE__ */ React.createElement(import_react17.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: `https://github.com/${siteName}`,
    target: "_blank",
    rel: "noopener noreferrer",
    className: (0, import_classnames6.default)(active ? "bg-gray-100" : "", "flex gap-2 px-4 py-2 text-sm text-gray-700")
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.github,
    className: "h-5 w-5 text-gray-700"
  }), "Our organization")))));
}

// app/components/AuthenticationDialog/AuthenticationDialog.tsx
init_react();
var import_react18 = __toModule(require("react"));
var import_react19 = __toModule(require("@headlessui/react"));
var import_routes_gen8 = __toModule(require("routes-gen"));
function AuthenticationDialog({ open, onClose, post }) {
  return /* @__PURE__ */ React.createElement(import_react19.Transition.Root, {
    show: open,
    as: import_react18.Fragment
  }, /* @__PURE__ */ React.createElement(import_react19.Dialog, {
    as: "div",
    "data-testid": "authentication-dialog",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
  }, /* @__PURE__ */ React.createElement(import_react19.Transition.Child, {
    as: import_react18.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react19.Dialog.Overlay, {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "hidden sm:inline-block sm:h-screen sm:align-middle",
    "aria-hidden": "true"
  }, "\u200B"), /* @__PURE__ */ React.createElement(import_react19.Transition.Child, {
    as: import_react18.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-block transform overflow-hidden rounded-lg bg-slate-900 px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-light-snow-storm3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dark-polar-night1"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.github,
    className: "h-20 w-20"
  }))), /* @__PURE__ */ React.createElement("form", {
    action: (0, import_routes_gen8.route)("/auth/github"),
    method: "post",
    className: "mt-5 sm:mt-6"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "slug",
    value: post.slug.current
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    "data-testid": "github-signin-button",
    className: "inline-flex w-full justify-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 sm:text-sm"
  }, "Sign in with Github")))))));
}

// app/components/Signout/Signout.tsx
init_react();
var import_routes_gen9 = __toModule(require("routes-gen"));
function Signout() {
  return /* @__PURE__ */ React.createElement("form", {
    action: (0, import_routes_gen9.route)("/logout"),
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "underline decoration-dotted underline-offset-4"
  }, "Sign out"));
}

// app/components/Boundaries/ErrorBoundary.tsx
init_react();
function ErrorBoundary({ children }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "px-12 py-24 text-2xl antialiased font-semibold text-center text-light-snow-storm3"
  }, children);
}

// app/components/MobileNavigationItem/MobileNavigationItem.tsx
init_react();
var import_react20 = __toModule(require("react"));
var import_react21 = __toModule(require("@headlessui/react"));
var import_classnames7 = __toModule(require("classnames"));
var import_remix10 = __toModule(require_remix());
var Variant;
(function(Variant2) {
  Variant2[Variant2["ScrollToTop"] = 0] = "ScrollToTop";
  Variant2[Variant2["Home"] = 1] = "Home";
})(Variant || (Variant = {}));
function MobileNavigationItem({ variant }) {
  const [visible, setvisible] = (0, import_react20.useState)(false);
  const threshold = 800;
  const location = (0, import_remix10.useLocation)();
  const hideHomeButton = variant === 1 && location.pathname === "/";
  (0, import_react20.useEffect)(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > threshold) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return /* @__PURE__ */ React.createElement(import_react21.Transition, {
    show: visible,
    enter: "transition-opacity durantion-1000",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    className: (0, import_classnames7.default)("visible fixed h-16 w-16 bg-white  bg-opacity-40  shadow-md lg:invisible", {
      "-bottom-3 -right-3 rounded-tl-full": variant === 0,
      "-bottom-3 -left-3 rounded-tr-full": variant === 1,
      "invisible": hideHomeButton
    })
  }, variant === 0 ? /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex items-center justify-center w-full h-full",
    "data-testid": "scroll-to-top"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.caretUp
  })) : null, variant === 1 ? /* @__PURE__ */ React.createElement(Link.Internal, {
    href: "/",
    className: "flex items-center justify-center w-full h-full",
    "data-testid": "navigate-home"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.home,
    className: "w-6 h-6"
  })) : null);
}
MobileNavigationItem.variant = Variant;

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/root.tsx
var import_react22 = __toModule(require("react"));
var links2 = globalLinks;
var meta = globalMeta;
var loader = async ({ request }) => {
  var _a;
  const profile = (_a = await auth.isAuthenticated(request)) == null ? void 0 : _a.profile;
  const hasBookmarks = await BookmarksApi_exports.bookmarkQuantity(profile) > 0;
  return (0, import_remix11.json)({ profile, hasBookmarks });
};
var AuthenticationContext2 = (0, import_react22.createContext)({});
var BookmarksContext2 = (0, import_react22.createContext)({
  hasBookmarks: false
});
function App() {
  useBuildServiceWorker();
  const { profile, hasBookmarks } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "scroll-smooth"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "UTF-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix11.Meta, null), /* @__PURE__ */ React.createElement(import_remix11.Links, null), /* @__PURE__ */ React.createElement("script", {
    defer: true,
    "data-domain": domain,
    src: "/js/analytics.js"
  })), /* @__PURE__ */ React.createElement("body", {
    className: "bg-slate-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen"
  }, /* @__PURE__ */ React.createElement(AuthenticationContext2.Provider, {
    value: { profile }
  }, /* @__PURE__ */ React.createElement(BookmarksContext2.Provider, {
    value: { hasBookmarks }
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_remix11.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null))), /* @__PURE__ */ React.createElement(MobileNavigationItem, {
    variant: MobileNavigationItem.variant.ScrollToTop
  }), /* @__PURE__ */ React.createElement(MobileNavigationItem, {
    variant: MobileNavigationItem.variant.Home
  })), /* @__PURE__ */ React.createElement(Glow, null), /* @__PURE__ */ React.createElement(import_remix11.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix11.Scripts, null), /* @__PURE__ */ React.createElement(import_remix11.LiveReload, null)));
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/auth.github.callback.tsx
var auth_github_callback_exports = {};
__export(auth_github_callback_exports, {
  loader: () => loader2
});
init_react();
var import_routes_gen10 = __toModule(require("routes-gen"));
var loader2 = async ({ request }) => {
  const cookie = await parseCookie(request, signinRedirectCookie);
  return auth.authenticate("github", request, {
    successRedirect: `/${cookie}` ?? "/",
    failureRedirect: (0, import_routes_gen10.route)("/")
  });
};

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/auth.github.tsx
var auth_github_exports = {};
__export(auth_github_exports, {
  action: () => action,
  loader: () => loader3
});
init_react();
var import_remix12 = __toModule(require_remix());
var loader3 = () => {
  throw (0, import_remix12.json)({}, { status: 404 });
};
var action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const returnTo = String(data.slug ?? "");
  try {
    return await auth.authenticate("github", request, {
      successRedirect: returnTo ?? "/",
      failureRedirect: "/"
    });
  } catch (error) {
    if (!returnTo)
      throw error;
    if (error instanceof Response) {
      error.headers.append("Set-Cookie", await signinRedirectCookie.serialize(returnTo, {
        httpOnly: true
      }));
      return error;
    }
    throw error;
  }
};

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/bookmarks.tsx
var bookmarks_exports = {};
__export(bookmarks_exports, {
  action: () => action2,
  default: () => bookmarks_default,
  loader: () => loader4
});
init_react();
var import_remix13 = __toModule(require_remix());
var import_routes_gen11 = __toModule(require("routes-gen"));
var loader4 = async ({ request }) => {
  var _a;
  const profile = (_a = await auth.isAuthenticated(request)) == null ? void 0 : _a.profile;
  if (await BookmarksApi_exports.bookmarkQuantity(profile) === 0) {
    return (0, import_remix13.redirect)((0, import_routes_gen11.route)("/"));
  }
  return (0, import_remix13.json)({ bookmarks: await BookmarksApi_exports.getBookmarks(profile) });
};
var action2 = async ({ request }) => {
  const payload = Object.fromEntries(await request.formData());
  if (payload.bookmarkId) {
    await BookmarksApi_exports.deleteBookmark(payload.bookmarkId);
  } else {
    await BookmarksApi_exports.createBookmark({
      postTitle: payload.postTitle,
      postSlug: payload.postSlug,
      userId: payload.userId
    });
  }
  if (payload.bookmarkId) {
    return (0, import_remix13.redirect)(String(payload.referrer));
  }
  return (0, import_remix13.redirect)((0, import_routes_gen11.route)("/:slug", { slug: payload.postSlug }));
};
function bookmarks_default() {
  const { bookmarks } = (0, import_remix13.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Bookmarks, {
    bookmarks
  });
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => resources_default
});
init_react();
function resources_default() {
  return /* @__PURE__ */ React.createElement(Prose, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Headings.Content, null, "Remix Resources"), /* @__PURE__ */ React.createElement("div", {
    className: "not-prose"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list-none text-sm text-gray-400 md:flex md:items-center md:gap-4"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "mb-2 md:mb-auto"
  }, "\u{1F4BF} \xA0officially maintained resource"), /* @__PURE__ */ React.createElement("li", null, "\u{1F4BB} \xA0community maintained resource"))), /* @__PURE__ */ React.createElement("blockquote", {
    className: "text-base text-gray-400"
  }, "Have a suggestion? Drop a line to vedovelli@gmail.com \u{1F48C}"), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BF} Remix.run website")), /* @__PURE__ */ React.createElement("dd", null, "This website is awesome \u{1F929} -", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://remix.run"
  }, "https://remix.run"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BF} Remix.run documentation")), /* @__PURE__ */ React.createElement("dd", null, "The official Remix.run documentation -", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://remix.run/docs"
  }, "https://remix.run/docs"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BF} Remix.run curated examples")), /* @__PURE__ */ React.createElement("dd", null, "A collection of small examples from the official Remix.run repository. Anyone can contribute withe the list, by following the instruction in the README.", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://github.com/remix-run/remix/tree/main/examples"
  }, "https://github.com/remix-run/remix/tree/main/examples"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BB} Discord Community")), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://discord.gg/cAM6EDHJDK"
  }, "Click here to join"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BB} Remix Guide")), /* @__PURE__ */ React.createElement("dd", null, "A comprehensive list of learning material related to Remix. Anyone can contribute with the list by forking the repository, adding the content and submitting a pull request.", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://remix.guide/"
  }, "https://remix.guide"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BB} Sergio Xalambr\xED")), /* @__PURE__ */ React.createElement("dd", null, "From Argentina he blogs about Remix among other interesting things.", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://sergiodxa.com/"
  }, "https://sergiodxa.com"))), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("dt", null, /* @__PURE__ */ React.createElement(Headings.Separator, null, "\u{1F4BB} People to follow")), /* @__PURE__ */ React.createElement("dd", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/remix_run"
  }, "Remix")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/ryanflorence"
  }, "Ryan Florence")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/mjackson"
  }, "Michael Jackson")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/kentcdodds"
  }, "Kent C. Dodds")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/sergiodxa"
  }, "Sergio Xalambr\xED")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/vedovelli74"
  }, "Fabio Vedovelli"), " ", "for Portuguese speakers"))))));
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader5
});
init_react();
var import_remix14 = __toModule(require_remix());
var action3 = async ({ request }) => {
  await auth.logout(request, { redirectTo: "/" });
};
var loader5 = () => {
  throw (0, import_remix14.json)({}, { status: 404 });
};

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader6,
  meta: () => meta2
});
init_react();
var import_remix15 = __toModule(require_remix());

// app/features/Likes/index.ts
init_react();

// app/features/Likes/LikesApi.ts
var LikesApi_exports = {};
__export(LikesApi_exports, {
  createLike: () => createLike,
  deleteLike: () => deleteLike,
  getLike: () => getLike,
  likeQuantity: () => likeQuantity
});
init_react();
async function getLike(like) {
  return await db.like.findFirst({
    where: {
      postId: like.postId,
      userId: like.userId
    }
  });
}
async function createLike(like) {
  const exists = await getLike(like);
  if (!exists) {
    await db.like.create({
      data: {
        postId: like.postId,
        userId: like.userId
      }
    });
  }
}
async function deleteLike(id) {
  await db.like.delete({
    where: {
      id
    }
  });
}
async function likeQuantity({ postId = "" }) {
  return db.like.count({
    where: {
      postId
    }
  });
}

// app/styles/highlighter.css
var highlighter_default = "/build/_assets/highlighter-BEVWBNK3.css";

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/$slug.tsx
var links3 = () => [
  {
    rel: "stylesheet",
    href: highlighter_default
  }
];
var meta2 = ({ data }) => {
  return postMeta(data);
};
var loader6 = async ({
  request,
  params
}) => {
  var _a, _b;
  const requestUrl = new URL(request == null ? void 0 : request.url);
  const preview = ((_a = requestUrl == null ? void 0 : requestUrl.searchParams) == null ? void 0 : _a.get("preview")) === process.env.SANITY_PREVIEW_SECRET;
  let post = await BlogApi_exports.getPost(params.slug, preview);
  if (!post || post.length === 0) {
    return (0, import_remix15.redirect)("/");
  }
  post = filterDataToSingleItem(post, preview);
  const profile = (_b = await auth.isAuthenticated(request)) == null ? void 0 : _b.profile;
  const picturePromise = UnsplashApi_exports.getPictures({ quantity: 1 });
  const likeQuantityPromise = LikesApi_exports.likeQuantity({ postId: post._id });
  const bookmarkPromise = BookmarksApi_exports.getBookmark({
    userId: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`,
    postSlug: params.slug
  });
  const likePromise = LikesApi_exports.getLike({
    userId: `${profile == null ? void 0 : profile.provider}-${profile == null ? void 0 : profile.id}`,
    postId: post._id
  });
  const [picture, bookmark, userLike, likeQuantity2] = await Promise.all([
    picturePromise,
    bookmarkPromise,
    likePromise,
    likeQuantityPromise
  ]);
  return (0, import_remix15.json)({ post, preview, picture: picture[0], bookmark, userLike, likeQuantity: likeQuantity2 });
};
function Index() {
  const {
    post,
    preview,
    picture,
    bookmark,
    userLike,
    likeQuantity: likeQuantity2 = 0
  } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Post, {
    post,
    preview,
    picture,
    bookmark,
    userLike,
    likeQuantity: likeQuantity2
  });
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
function about_default() {
  return /* @__PURE__ */ React.createElement(Prose, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Headings.Content, null, "About"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Created and maintained by", " ", /* @__PURE__ */ React.createElement("span", {
    className: "lead text-light-snow-storm3"
  }, "Fabio Vedovelli"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://github.com/vedovelli"
  }, "github.com/vedovelli")), /* @__PURE__ */ React.createElement("p", null, "For content suggestions please drop a line: ", ` `, /* @__PURE__ */ React.createElement("span", {
    className: "lead text-light-snow-storm3"
  }, "vedovelli@gmail.com"))), /* @__PURE__ */ React.createElement(Headings.Separator, null, "Site Stats"), /* @__PURE__ */ React.createElement("p", null, "Our site stats are public and can be accessed on Plausible.io:", " ", /* @__PURE__ */ React.createElement(Link.External, {
    href: `https://plausible.io/${domain}`
  }, `plausible.io/${domain}`)), /* @__PURE__ */ React.createElement(Headings.Separator, null, "Social Media"), /* @__PURE__ */ React.createElement("p", {
    className: "md:flex md:items-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.twitter,
    className: "mb-2 mr-2 h-6 w-6 md:mb-auto"
  }), "Follow us on Twitter:\xA0", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/RemixCookbook"
  }, "twitter.com/RemixCookbook")), /* @__PURE__ */ React.createElement("p", {
    className: "md:flex md:items-center"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: Icons.github,
    className: "mb-2 mr-2 h-6 w-6 md:mb-auto"
  }), "Github:\xA0", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://github.com/remix-cookbook"
  }, "github.com/remix-cookbook")), /* @__PURE__ */ React.createElement(Headings.Separator, null, "Special Thanks \u{1F917}"), /* @__PURE__ */ React.createElement("p", null, "Special thanks to Taisa Soares for the lovely logo!\xA0", /* @__PURE__ */ React.createElement(Link.External, {
    href: "https://twitter.com/gnoma_robotica"
  }, "twitter.com/gnoma_robotica"))));
}

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index2,
  links: () => links4,
  loader: () => loader7
});
init_react();
var import_shuffle = __toModule(require("lodash/shuffle"));
var import_remix16 = __toModule(require_remix());

// app/styles/card.css
var card_default = "/build/_assets/card-ICAWLSBC.css";

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/index.tsx
var links4 = () => [{ rel: "stylesheet", href: card_default }];
var loader7 = async ({ request }) => {
  try {
    const { language } = await parseCookie(request, languageCookie);
    const posts = await BlogApi_exports.getPosts({ language }) ?? [];
    const pictures = (0, import_shuffle.default)(await UnsplashApi_exports.getPictures({ quantity: 30 }));
    return (0, import_remix16.json)({ posts, pictures });
  } catch (error) {
    throw new Response("Server error", { status: 500 });
  }
};
function Index2() {
  const { posts, pictures } = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Posts, {
    posts,
    pictures
  });
}
var ErrorBoundary2 = () => /* @__PURE__ */ React.createElement(ErrorBoundary, null, "We could not load the list of posts. Please try again.");

// route:/Users/fabio.vedovelli/Personal/remix-cookbook.com/web/app/routes/likes.tsx
var likes_exports = {};
__export(likes_exports, {
  action: () => action4,
  loader: () => loader8
});
init_react();
var import_remix17 = __toModule(require_remix());
var loader8 = async () => {
  return (0, import_remix17.redirect)("Not found", { status: 404 });
};
var action4 = async ({ request }) => {
  const payload = Object.fromEntries(await request.formData());
  if (payload.likeId) {
    await LikesApi_exports.deleteLike(payload.likeId);
  } else {
    await LikesApi_exports.createLike({
      postId: payload.postId,
      userId: payload.userId
    });
  }
  return (0, import_remix17.redirect)(String(payload.referrer));
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b04494f2", "entry": { "module": "/build/entry.client-6IO2ISDM.js", "imports": ["/build/_shared/chunk-QK2BYU5X.js", "/build/_shared/chunk-U3ZHIDHB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CCWGASOF.js", "imports": ["/build/_shared/chunk-ZENEBWCI.js", "/build/_shared/chunk-7QQQ45CC.js", "/build/_shared/chunk-IOMFCBEH.js", "/build/_shared/chunk-2GU3PVEJ.js", "/build/_shared/chunk-G5ULRLSQ.js", "/build/_shared/chunk-BCM7H3BH.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$slug": { "id": "routes/$slug", "parentId": "root", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$slug-Y5MJKTHS.js", "imports": ["/build/_shared/chunk-DXU6KFVM.js", "/build/_shared/chunk-UNNUAGD6.js", "/build/_shared/chunk-OW4XN5FR.js", "/build/_shared/chunk-Y4SMU4WO.js", "/build/_shared/chunk-2HMFJO3X.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-2Q72I24D.js", "imports": ["/build/_shared/chunk-2HMFJO3X.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth.github": { "id": "routes/auth.github", "parentId": "root", "path": "auth/github", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth.github-V3IHK5YZ.js", "imports": ["/build/_shared/chunk-QIOW36RW.js", "/build/_shared/chunk-NYKSDPCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth.github.callback": { "id": "routes/auth.github.callback", "parentId": "root", "path": "auth/github/callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth.github.callback-EA2I4AEH.js", "imports": ["/build/_shared/chunk-QIOW36RW.js", "/build/_shared/chunk-NYKSDPCA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/bookmarks": { "id": "routes/bookmarks", "parentId": "root", "path": "bookmarks", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/bookmarks-VRM6E6NT.js", "imports": ["/build/_shared/chunk-AHP7HKEN.js", "/build/_shared/chunk-OW4XN5FR.js", "/build/_shared/chunk-Y4SMU4WO.js", "/build/_shared/chunk-2HMFJO3X.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-MUPYV6X7.js", "imports": ["/build/_shared/chunk-NYKSDPCA.js", "/build/_shared/chunk-DXU6KFVM.js", "/build/_shared/chunk-OW4XN5FR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/likes": { "id": "routes/likes", "parentId": "root", "path": "likes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/likes-YHOUTMBW.js", "imports": ["/build/_shared/chunk-UNNUAGD6.js", "/build/_shared/chunk-Y4SMU4WO.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-GFJUT45U.js", "imports": ["/build/_shared/chunk-AHP7HKEN.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/resources": { "id": "routes/resources", "parentId": "root", "path": "resources", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/resources-22FE4CAI.js", "imports": ["/build/_shared/chunk-2HMFJO3X.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B04494F2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth.github.callback": {
    id: "routes/auth.github.callback",
    parentId: "root",
    path: "auth/github/callback",
    index: void 0,
    caseSensitive: void 0,
    module: auth_github_callback_exports
  },
  "routes/auth.github": {
    id: "routes/auth.github",
    parentId: "root",
    path: "auth/github",
    index: void 0,
    caseSensitive: void 0,
    module: auth_github_exports
  },
  "routes/bookmarks": {
    id: "routes/bookmarks",
    parentId: "root",
    path: "bookmarks",
    index: void 0,
    caseSensitive: void 0,
    module: bookmarks_exports
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/likes": {
    id: "routes/likes",
    parentId: "root",
    path: "likes",
    index: void 0,
    caseSensitive: void 0,
    module: likes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vLi4vLi4vYXBwL2Nvb2tpZXMudHMiLCAiLi4vLi4vLi4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9nZW8udHMiLCAiLi4vLi4vLi4vYXBwL2NvbmZpZy50cyIsICJyb3V0ZTovVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0ZlZWQvRmVlZC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvR2xvdy9HbG93LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9IZWFkaW5ncy9IZWFkaW5ncy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGluZ3MvU2VwYXJhdG9yL1NlcGFyYXRvci50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGluZ3MvQ29udGVudC9Db250ZW50LnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9JY29uL0ljb24udHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0xpbmtzL0xpbmsudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0xpbmtzL0ludGVybmFsL0ludGVybmFsLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9MaW5rcy9FeHRlcm5hbC9FeHRlcm5hbC50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9Ub3BOYXYvVG9wTmF2LnRzeCIsICIuLi8uLi8uLi9hcHAvaG9va3MvdXNlUHJvZmlsZS50cyIsICIuLi8uLi8uLi9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vYXBwL3V0aWwvaGVhZGVyL2hlYWRlci50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9CbG9nQXBpLnRzIiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9CbG9nL3NlcnZpY2Uvc2FuaXR5L3V0aWwudHMiLCAiLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL0Jsb2cvc2VydmljZS9zYW5pdHkvY2xpZW50LnRzIiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9CbG9nL3NlcnZpY2Uvc2FuaXR5L2NvbmZpZy50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9VbnNwbGFzaEFwaS50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giLCAiLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL0Jvb2ttYXJrcy9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQm9va21hcmtzL2NvbXBvbmVudHMvQm9va21hcmsvQm9va21hcmsudHN4IiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VEaXNhYmxlZC50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQm9va21hcmtzL2NvbXBvbmVudHMvQm9va21hcmtzL0Jvb2ttYXJrcy50c3giLCAiLi4vLi4vLi4vYXBwL3V0aWwvaW5kZXgudHMiLCAiLi4vLi4vLi4vYXBwL3V0aWwvZGF0ZXRpbWUvZGF0ZXRpbWUudHMiLCAiLi4vLi4vLi4vYXBwL3V0aWwvZGIvZGIuc2VydmVyLnRzIiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9Cb29rbWFya3MvY29tcG9uZW50cy9Cb29rbWFya3MvRGVsZXRlQm9va21hcmsudHN4IiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9Cb29rbWFya3MvQm9va21hcmtzQXBpLnRzIiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9MaWtlcy9jb21wb25lbnRzL0xpa2VCdXR0b24vTGlrZUJ1dHRvbi50c3giLCAiLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL0Jsb2cvY29tcG9uZW50cy9DYXJkL0NyZWRpdHMudHN4IiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9CbG9nL2NvbXBvbmVudHMvQ29udGVudC9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9jb21wb25lbnRzL0NvbnRlbnQvQ29udGVudC5qc3giLCAiLi4vLi4vLi4vYXBwL2ZlYXR1cmVzL0Jsb2cvY29tcG9uZW50cy9Db250ZW50L3V0aWwuanN4IiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9CbG9nL2NvbXBvbmVudHMvUG9zdHMvUG9zdHMudHN4IiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9CbG9nL2NvbXBvbmVudHMvQ2FyZC9DYXJkLnRzeCIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvQmxvZy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLnRzeCIsICIuLi8uLi8uLi9hcHAvaG9va3MvdXNlQnVpbGRTZXJ2aWNlV29ya2VyLnRzIiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VCb29rbWFya3NDb250ZXh0LnRzIiwgIi4uLy4uLy4uL2FwcC9ob29rcy91c2VBdXRoZW50aWNhdGlvbkRpYWxvZy50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUHJvc2UvUHJvc2UudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0dpdGh1Yi9HaXRodWIudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0F1dGhlbnRpY2F0aW9uRGlhbG9nL0F1dGhlbnRpY2F0aW9uRGlhbG9nLnRzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TaWdub3V0L1NpZ25vdXQudHN4IiwgIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0JvdW5kYXJpZXMvRXJyb3JCb3VuZGFyeS50c3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTW9iaWxlTmF2aWdhdGlvbkl0ZW0vTW9iaWxlTmF2aWdhdGlvbkl0ZW0udHN4IiwgInJvdXRlOi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL2F1dGguZ2l0aHViLmNhbGxiYWNrLnRzeCIsICJyb3V0ZTovVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy9hdXRoLmdpdGh1Yi50c3giLCAicm91dGU6L1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvYm9va21hcmtzLnRzeCIsICJyb3V0ZTovVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy9yZXNvdXJjZXMudHN4IiwgInJvdXRlOi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL2xvZ291dC50c3giLCAicm91dGU6L1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvJHNsdWcudHN4IiwgIi4uLy4uLy4uL2FwcC9mZWF0dXJlcy9MaWtlcy9pbmRleC50cyIsICIuLi8uLi8uLi9hcHAvZmVhdHVyZXMvTGlrZXMvTGlrZXNBcGkudHMiLCAicm91dGU6L1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy9saWtlcy50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL25ldGxpZnknO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbJ3gtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmUnXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdCgnICcpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvYXV0aC5naXRodWIuY2FsbGJhY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL2F1dGguZ2l0aHViLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy9ib29rbWFya3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL3Jlc291cmNlcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2ZhYmlvLnZlZG92ZWxsaS9QZXJzb25hbC9yZW1peC1jb29rYm9vay5jb20vd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9mYWJpby52ZWRvdmVsbGkvUGVyc29uYWwvcmVtaXgtY29va2Jvb2suY29tL3dlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvZmFiaW8udmVkb3ZlbGxpL1BlcnNvbmFsL3JlbWl4LWNvb2tib29rLmNvbS93ZWIvYXBwL3JvdXRlcy9saWtlcy50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGguZ2l0aHViLmNhbGxiYWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoLmdpdGh1Yi5jYWxsYmFja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2dpdGh1Yi9jYWxsYmFja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC5naXRodWJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGguZ2l0aHViXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvZ2l0aHViXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9ib29rbWFya3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jvb2ttYXJrc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJib29rbWFya3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3Jlc291cmNlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVzb3VyY2VzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlc291cmNlc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy8kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvJHNsdWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbGlrZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xpa2VzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxpa2VzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9XG4gIH07IiwgImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGxhbmd1YWdlQ29va2llLCBwYXJzZUNvb2tpZSB9IGZyb20gJ34vY29va2llcyc7XG5pbXBvcnQgeyBnZXRHZW9JbmZvcm1hdGlvbiB9IGZyb20gJ34vc2VydmljZXMnO1xuaW1wb3J0IHsgYXZhaWxhYmxlTGFuZ3VhZ2VzLCBwb3J0dWd1ZXNlU3BlYWtpbmdDb3VudHJpZXMgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBkb3RlbnYuY29uZmlnKCk7XG5cbiAgY29uc3QgY29va2llID0gYXdhaXQgcGFyc2VDb29raWUocmVxdWVzdCwgbGFuZ3VhZ2VDb29raWUpO1xuICBjb25zdCBjb3VudHJ5ID0gKGF3YWl0IGdldEdlb0luZm9ybWF0aW9uKHsgY29va2llIH0pKS5kYXRhLmNvdW50cnk7XG5cbiAgY29va2llLmxhbmd1YWdlID0gcG9ydHVndWVzZVNwZWFraW5nQ291bnRyaWVzLmluY2x1ZGVzKGNvdW50cnkpXG4gICAgPyBhdmFpbGFibGVMYW5ndWFnZXMucHRcbiAgICA6IGF2YWlsYWJsZUxhbmd1YWdlcy5lbjtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFxuICAgICdTZXQtQ29va2llJyxcbiAgICBhd2FpdCBsYW5ndWFnZUNvb2tpZS5zZXJpYWxpemUoY29va2llLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgQ29va2llLCBjcmVhdGVDb29raWUgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZUNvb2tpZSA9IGNyZWF0ZUNvb2tpZSgnbGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBzaWduaW5SZWRpcmVjdENvb2tpZSA9IGNyZWF0ZUNvb2tpZSgnc2lnbmluUmVkaXJlY3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29raWVzIHtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHBhcnNlQ29va2llID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIGNvb2tpZTogQ29va2llKTogUHJvbWlzZTxDb29raWVzPiA9PiB7XG4gIGNvbnN0IGNvb2tpZUhlYWRlciA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpO1xuICBjb25zdCBwYXJzZWRDb29raWUgPSAoYXdhaXQgY29va2llLnBhcnNlKGNvb2tpZUhlYWRlcikpIHx8IHt9O1xuICByZXR1cm4gcGFyc2VkQ29va2llO1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEF1dGhlbnRpY2F0b3IgfSBmcm9tICdyZW1peC1hdXRoJztcbmltcG9ydCB0eXBlIHsgR2l0SHViUHJvZmlsZSB9IGZyb20gJ3JlbWl4LWF1dGgtZ2l0aHViJztcbmltcG9ydCB7IEdpdEh1YlN0cmF0ZWd5IH0gZnJvbSAncmVtaXgtYXV0aC1naXRodWInO1xuXG5pZiAoIXByb2Nlc3MuZW52LkdIX0FQUF9DTElFTlRfSUQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdHSF9BUFBfQ0xJRU5UX0lEIGlzIHJlcXVpcmVkJyk7XG59XG5cbmlmICghcHJvY2Vzcy5lbnYuR0hfQVBQX0NMSUVOVF9TRUNSRVQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdHSF9BUFBfQ0xJRU5UX1NFQ1JFVCBpcyByZXF1aXJlZCcpO1xufVxuXG5pZiAoIXByb2Nlc3MuZW52LkJBU0VfVVJMKSB7XG4gIHRocm93IG5ldyBFcnJvcignQkFTRV9VUkwgaXMgcmVxdWlyZWQnKTtcbn1cblxuY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTDtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnX3Nlc3Npb24nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LlNFQ1JFVF9LRVkhXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBuZXcgQXV0aGVudGljYXRvcjx7XG4gIHByb2ZpbGU6IEdpdEh1YlByb2ZpbGU7XG59PihzZXNzaW9uU3RvcmFnZSk7XG5cbmF1dGgudXNlKFxuICBuZXcgR2l0SHViU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdIX0FQUF9DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSF9BUFBfQ0xJRU5UX1NFQ1JFVCEsXG4gICAgICBjYWxsYmFja1VSTDogbmV3IFVSTCgnL2F1dGgvZ2l0aHViL2NhbGxiYWNrJywgQkFTRV9VUkwpLnRvU3RyaW5nKCksXG4gICAgfSxcbiAgICBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcbiAgICAgIHJldHVybiB7IHByb2ZpbGUgfTtcbiAgICB9XG4gIClcbik7XG4iLCAiaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ34vY29va2llcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZSB7XG4gIGNvb2tpZTogQ29va2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdlb0luZm9ybWF0aW9uKHsgY29va2llIH06IENvb2tpZSk6IFByb21pc2U8eyBkYXRhOiB7IGNvdW50cnk6IHN0cmluZyB9IH0+IHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHsgZGF0YTogeyBjb3VudHJ5OiBzdHJpbmcgfSB9PihyZXNvbHZlID0+XG4gICAgcmVzb2x2ZSh7IGRhdGE6IHsgY291bnRyeTogJ0dlcm1hbnknIH0gfSlcbiAgKTtcblxuICB0cnkge1xuICAgIGlmIChjb29raWUubGFuZ3VhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgQVBJIHF1b3RhIGZvciBnZW8gbG9jYXRpb24nKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwOi8vaXB3aG9pcy5hcHAvanNvbi8nKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgY29uc29sZS5sb2coJ0dlbyBBUEkgY2FsbCBlcnJvci4gUmV0dXJuaW5nIEdlcm1hbnkgYXMgY291bnRyeS4uLicpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IHNpdGVOYW1lID0gJ3JlbWl4LWNvb2tib29rJztcbmV4cG9ydCBjb25zdCBzaXRlRnVsbE5hbWUgPSAnUmVtaXggQ29va2Jvb2snO1xuZXhwb3J0IGNvbnN0IGRvbWFpbiA9IGAke3NpdGVOYW1lfS5jb21gO1xuZXhwb3J0IGNvbnN0IHBvcnR1Z3Vlc2VTcGVha2luZ0NvdW50cmllcyA9IFsnYnJhemlsJywgJ3BvcnR1Z2FsJywgJ2FuZ29sYSddO1xuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZUxhbmd1YWdlcyA9IHtcbiAgZW46ICdlbicsXG4gIHB0OiAncHQnLFxufTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TGFuZ3VhZ2UgPSAnZW4nO1xuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIExvYWRlckZ1bmN0aW9uLFxuICBqc29uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBIZWFkZXIsIEZvb3RlciwgR2xvdywgTW9iaWxlTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZG9tYWluIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZ2xvYmFsTWV0YSwgZ2xvYmFsTGlua3MgfSBmcm9tICcuL3V0aWwvaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBHaXRIdWJQcm9maWxlIH0gZnJvbSAncmVtaXgtYXV0aC1naXRodWInO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJvb2ttYXJrc0FwaSB9IGZyb20gJy4vZmVhdHVyZXMvQm9va21hcmtzJztcbmltcG9ydCB7IHVzZUJ1aWxkU2VydmljZVdvcmtlciB9IGZyb20gJy4vaG9va3MvdXNlQnVpbGRTZXJ2aWNlV29ya2VyJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gZ2xvYmFsTGlua3M7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSBnbG9iYWxNZXRhO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwcm9maWxlPzogR2l0SHViUHJvZmlsZTtcbiAgaGFzQm9va21hcmtzOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBwcm9maWxlID0gKGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpKT8ucHJvZmlsZTtcbiAgY29uc3QgaGFzQm9va21hcmtzID0gKGF3YWl0IEJvb2ttYXJrc0FwaS5ib29rbWFya1F1YW50aXR5KHByb2ZpbGUhKSkgPiAwO1xuXG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgcHJvZmlsZSwgaGFzQm9va21hcmtzIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGljazxMb2FkZXJEYXRhLCAncHJvZmlsZSc+Pih7fSk7XG5leHBvcnQgY29uc3QgQm9va21hcmtzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UGljazxMb2FkZXJEYXRhLCAnaGFzQm9va21hcmtzJz4+KHtcbiAgaGFzQm9va21hcmtzOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHVzZUJ1aWxkU2VydmljZVdvcmtlcigpO1xuXG4gIGNvbnN0IHsgcHJvZmlsZSwgaGFzQm9va21hcmtzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwic2Nyb2xsLXNtb290aFwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7LyogL2pzL2FuYWx5dGljcy5qcyBkb2Vzbid0IGV4aXN0LiBJdCBpcyBhIE5ldGxpZnkgcmVkaXJlY3QgdG8gdGhlIHBsYXVzaWJsZSBDRE4gc2VydmVkIGZpbGUgKi99XG4gICAgICAgIHsvKiBTZWUgL3B1YmxpYy9fcmVkaXJlY3RzICovfVxuICAgICAgICA8c2NyaXB0IGRlZmVyIGRhdGEtZG9tYWluPXtkb21haW59IHNyYz1cIi9qcy9hbmFseXRpY3MuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgIDxBdXRoZW50aWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZmlsZSB9fT5cbiAgICAgICAgICAgIDxCb29rbWFya3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGhhc0Jvb2ttYXJrcyB9fT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvQm9va21hcmtzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8L0F1dGhlbnRpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICA8TW9iaWxlTmF2aWdhdGlvbkl0ZW0gdmFyaWFudD17TW9iaWxlTmF2aWdhdGlvbkl0ZW0udmFyaWFudC5TY3JvbGxUb1RvcH0gLz5cbiAgICAgICAgICA8TW9iaWxlTmF2aWdhdGlvbkl0ZW0gdmFyaWFudD17TW9iaWxlTmF2aWdhdGlvbkl0ZW0udmFyaWFudC5Ib21lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdsb3cgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBJY29uLCBJY29ucyB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBkb21haW4gfSBmcm9tICd+L2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWVkKCkge1xuICByZXR1cm4gKFxuICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWwtMVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lbnUuQnV0dG9uXG4gICAgICAgICAgdGl0bGU9XCJSU1NcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZmVlZC1pY29uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZSBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICA8SWNvbiBpY29uPXtJY29ucy5mZWVkfSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXNub3ctc3Rvcm00IGgtNiB3LTZcIiAvPlxuICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8VHJhbnNpdGlvblxuICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICA+XG4gICAgICAgIDxNZW51Lkl0ZW1zXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmZWVkLW92ZXJsYXlcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgei0yMCBtdC0yIHctNDggb3JpZ2luLXRvcC1yaWdodCByb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTEgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vJHtkb21haW59L3Jzcy54bWxgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJTU1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly8ke2RvbWFpbn0vYXRvbS54bWxgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEF0b21cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgeyh7IGFjdGl2ZSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vJHtkb21haW59L2ZlZWQuanNvbmB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSlNPTlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnUuSXRlbXM+XG4gICAgICA8L1RyYW5zaXRpb24+XG4gICAgPC9NZW51PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXG4gIHsgdGl0bGU6ICdSZW1peC5ydW4nLCBocmVmOiAnaHR0cHM6Ly9yZW1peC5ydW4nIH0sXG4gIHsgdGl0bGU6ICdUYWlsd2luZCBDU1MnLCBocmVmOiAnaHR0cHM6Ly90YWlsd2luZGNzcy5jb20nIH0sXG4gIHsgdGl0bGU6ICdTYW5pdHkuaW8nLCBocmVmOiAnaHR0cHM6Ly9zYW5pdHkuaW8nIH0sXG4gIHsgdGl0bGU6ICdOZXRsaWZ5JywgaHJlZjogJ2h0dHBzOi8vbmV0bGlmeS5jb20nIH0sXG4gIHsgdGl0bGU6ICdOb3JkIFRoZW1lJywgaHJlZjogJ2h0dHBzOi8vd3d3Lm5vcmR0aGVtZS5jb20nIH0sXG4gIHsgdGl0bGU6ICdVbnNwbGFzaCBBUEknLCBocmVmOiAnaHR0cHM6Ly91bnNwbGFzaC5jb20vZGV2ZWxvcGVycycgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJteC01IG10LTggbWItMTIgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNDAwIG1kOmZsZXggbWQ6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBtZDptci00IG1kOm1iLWF1dG9cIj5IYXBwaWx5IGJ1aWx0IHdpdGg8L2Rpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7bGlua3MubWFwKCh7IHRpdGxlLCBocmVmIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2hyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZnRlcjptbC0yIGFmdGVyOm1yLTIgYWZ0ZXI6Y29udGVudC1bJy0nXSBsYXN0OmFmdGVyOmNvbnRlbnQtWycnXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj17aHJlZn0gZXh0ZXJuYWxJbmRpY2F0b3I9e2ZhbHNlfT5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbmF2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBHbG93KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb3cgZ2xvdy10clwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbG93IGdsb3ctdGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvdyBnbG93LWJsXCI+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgcm91dGUgfSBmcm9tICdyb3V0ZXMtZ2VuJztcbmltcG9ydCB7IFRvcE5hdiwgTGluayB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZGFyay1wb2xhci1uaWdodDEgYmctZGFyay1taWRuaWdodCBwLTQgdGV4dC1saWdodC1zbm93LXN0b3JtMyBtZDpmbGV4LXJvd1wiPlxuICAgICAgPGgxIGRhdGEtdGVzdGlkPVwic2l0ZS1uYW1lXCIgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWQgbWQ6dGV4dC0yeGxcIj5cbiAgICAgICAgPExpbmsuSW50ZXJuYWxcbiAgICAgICAgICBocmVmPXtyb3V0ZSgnLycpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtY29scyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDpmbGV4LXJvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby5wbmdcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBhbHQ9XCJSZXR1cm4gdG8gdGhlIGhvbWVwYWdlXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIGJsb2NrIHBsLTIgdGV4dC0yeGwgdGV4dC1ncmF5LTUwMCBcIj5SZW1peC5ydW4gQ29va2Jvb2s8L3NwYW4+XG4gICAgICAgIDwvTGluay5JbnRlcm5hbD5cbiAgICAgIDwvaDE+XG4gICAgICA8VG9wTmF2IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gJy4vU2VwYXJhdG9yL1NlcGFyYXRvcic7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50L0NvbnRlbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGluZ3MoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5IZWFkaW5ncy5TZXBhcmF0b3IgPSBTZXBhcmF0b3I7XG5IZWFkaW5ncy5Db250ZW50ID0gQ29udGVudDtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcGFyYXRvclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXBhcmF0b3IoeyBjaGlsZHJlbiB9OiBTZXBhcmF0b3JQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoMyBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZGFyay1wb2xhci1uaWdodDIgcGItMiB0ZXh0LWxpZ2h0LXNub3ctc3Rvcm0zXCI+e2NoaWxkcmVufTwvaDM+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRlbnQoeyBjaGlsZHJlbiB9OiBDb250ZW50UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aDIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWRhcmstcG9sYXItbmlnaHQxIHBiLTYgdGV4dC1saWdodC1zbm93LXN0b3JtMVwiPntjaGlsZHJlbn08L2gyPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZhVHdpdHRlciwgRmFHaXRodWIsIEZhQW5nbGVEb3VibGVVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFJzc0ljb24sIEJvb2ttYXJrSWNvbiwgVGh1bWJVcEljb24sIEhvbWVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XG5cbmV4cG9ydCBlbnVtIEljb25zIHtcbiAgdHdpdHRlcixcbiAgZ2l0aHViLFxuICBmZWVkLFxuICBjYXJldFVwLFxuICBib29rbWFyayxcbiAgdGh1bWJzVXAsXG4gIGhvbWUsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgJ2ljb24nOiBJY29ucztcbiAgJ2NsYXNzTmFtZSc/OiBzdHJpbmc7XG4gICdkYXRhLXRlc3RpZCc/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEljb25zTWFwID0gKHByb3BzOiBPbWl0PEljb25Qcm9wcywgJ2ljb24nPikgPT4gKHtcbiAgW0ljb25zLmdpdGh1Yl06IDxGYUdpdGh1YiB7Li4ucHJvcHN9IC8+LFxuICBbSWNvbnMudHdpdHRlcl06IDxGYVR3aXR0ZXIgey4uLnByb3BzfSAvPixcbiAgW0ljb25zLmZlZWRdOiA8UnNzSWNvbiB7Li4ucHJvcHN9IC8+LFxuICBbSWNvbnMuY2FyZXRVcF06IDxGYUFuZ2xlRG91YmxlVXAgey4uLnByb3BzfSAvPixcbiAgW0ljb25zLmJvb2ttYXJrXTogPEJvb2ttYXJrSWNvbiB7Li4ucHJvcHN9IC8+LFxuICBbSWNvbnMudGh1bWJzVXBdOiA8VGh1bWJVcEljb24gey4uLnByb3BzfSAvPixcbiAgW0ljb25zLmhvbWVdOiA8SG9tZUljb24gey4uLnByb3BzfSAvPixcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gSWNvbihwcm9wczogSWNvblByb3BzKSB7XG4gIGNvbnN0IHsgaWNvbiwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiBJY29uc01hcChyZXN0KVtpY29uXSA/PyBudWxsO1xufVxuIiwgImltcG9ydCB7IEludGVybmFsIH0gZnJvbSAnLi9JbnRlcm5hbC9JbnRlcm5hbCc7XG5pbXBvcnQgeyBFeHRlcm5hbCB9IGZyb20gJy4vRXh0ZXJuYWwvRXh0ZXJuYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gTGluaygpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbkxpbmsuSW50ZXJuYWwgPSBJbnRlcm5hbDtcbkxpbmsuRXh0ZXJuYWwgPSBFeHRlcm5hbDtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbFByb3BzIHtcbiAgaHJlZjogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnRlcm5hbCh7IGhyZWYsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH06IEludGVybmFsUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBwcmVmZXRjaD1cImludGVudFwiIHRvPXtocmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhRXh0ZXJuYWxMaW5rQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsUHJvcHMge1xuICBocmVmOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdENoaWxkO1xuICB0aXRsZT86IHN0cmluZztcbiAgZXh0ZXJuYWxJbmRpY2F0b3I/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFeHRlcm5hbCh7XG4gIGNoaWxkcmVuLFxuICBocmVmLFxuICBleHRlcm5hbEluZGljYXRvciA9IHRydWUsXG4gIHRpdGxlID0gJycsXG4gIGNsYXNzTmFtZSxcbn06IEV4dGVybmFsUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciAke2NsYXNzTmFtZX1gfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAge2V4dGVybmFsSW5kaWNhdG9yID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIHRleHQtZGFyay1wb2xhci1uaWdodDFcIj5cbiAgICAgICAgICA8RmFFeHRlcm5hbExpbmtBbHQgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9hPlxuICApO1xufVxuIiwgImltcG9ydCB7IHJvdXRlIH0gZnJvbSAncm91dGVzLWdlbic7XG5pbXBvcnQgeyBMaW5rLCBGZWVkLCBHaXRodWIsIFNpZ25vdXQgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlQm9va21hcmtzQ29udGV4dCwgdXNlUHJvZmlsZSB9IGZyb20gJ34vaG9va3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9wTmF2KCkge1xuICBjb25zdCB7IHByb2ZpbGUgfSA9IHVzZVByb2ZpbGUoKTtcbiAgY29uc3QgeyBoYXNCb29rbWFya3MgfSA9IHVzZUJvb2ttYXJrc0NvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHktNCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cImhpZGRlbiBtZDppbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgPExpbmsuSW50ZXJuYWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgZGVjb3JhdGlvbi1kb3R0ZWQgdW5kZXJsaW5lLW9mZnNldC00XCJcbiAgICAgICAgICBocmVmPXtyb3V0ZSgnL3Jlc291cmNlcycpfVxuICAgICAgICA+XG4gICAgICAgICAgUmVtaXggUmVzb3VyY2VzXG4gICAgICAgIDwvTGluay5JbnRlcm5hbD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgIDxMaW5rLkludGVybmFsXG4gICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGRlY29yYXRpb24tZG90dGVkIHVuZGVybGluZS1vZmZzZXQtNFwiXG4gICAgICAgICAgaHJlZj17cm91dGUoJy9yZXNvdXJjZXMnKX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlc291cmNlc1xuICAgICAgICA8L0xpbmsuSW50ZXJuYWw+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluay5JbnRlcm5hbFxuICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBkZWNvcmF0aW9uLWRvdHRlZCB1bmRlcmxpbmUtb2Zmc2V0LTRcIlxuICAgICAgICAgIGhyZWY9e3JvdXRlKCcvYWJvdXQnKX1cbiAgICAgICAgPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTGluay5JbnRlcm5hbD5cbiAgICAgIDwvbGk+XG4gICAgICB7aGFzQm9va21hcmtzID8gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsuSW50ZXJuYWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSBkZWNvcmF0aW9uLWRvdHRlZCB1bmRlcmxpbmUtb2Zmc2V0LTRcIlxuICAgICAgICAgICAgaHJlZj17cm91dGUoJy9ib29rbWFya3MnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCb29rbWFya3NcbiAgICAgICAgICA8L0xpbmsuSW50ZXJuYWw+XG4gICAgICAgIDwvbGk+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsuRXh0ZXJuYWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgZGVjb3JhdGlvbi1kb3R0ZWQgdW5kZXJsaW5lLW9mZnNldC00XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9za2lsbGVkLWJ1aWxkZXItMTYyMy5jay5wYWdlLzYwNTk1MjA3ZjhcIlxuICAgICAgICAgIHRpdGxlPVwiU2lnbiB1cCB0byBvdXIgbmV3c2xldHRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBOZXdzbGV0dGVyXG4gICAgICAgIDwvTGluay5FeHRlcm5hbD5cbiAgICAgIDwvbGk+XG4gICAgICB7cHJvZmlsZSA/IDxTaWdub3V0IC8+IDogbnVsbH1cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgIDxGZWVkIC8+XG4gICAgICAgIDxHaXRodWIgLz5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250ZXh0IH0gZnJvbSAnfi9yb290JztcblxuZXhwb3J0IGNvbnN0IHVzZVByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gdXNlQ29udGV4dChBdXRoZW50aWNhdGlvbkNvbnRleHQpO1xuXG4gIHJldHVybiB7IHByb2ZpbGUgfTtcbn07XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmtzRnVuY3Rpb24sXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIE1ldGFGdW5jdGlvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIGpzb24sXG4gIHVzZUxvYWRlckRhdGEsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEhlYWRlciwgRm9vdGVyLCBHbG93LCBNb2JpbGVOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBkb21haW4gfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBnbG9iYWxNZXRhLCBnbG9iYWxMaW5rcyB9IGZyb20gJy4vdXRpbC9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuL3NlcnZpY2VzJztcbmltcG9ydCB7IEdpdEh1YlByb2ZpbGUgfSBmcm9tICdyZW1peC1hdXRoLWdpdGh1Yic7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9va21hcmtzQXBpIH0gZnJvbSAnLi9mZWF0dXJlcy9Cb29rbWFya3MnO1xuaW1wb3J0IHsgdXNlQnVpbGRTZXJ2aWNlV29ya2VyIH0gZnJvbSAnLi9ob29rcy91c2VCdWlsZFNlcnZpY2VXb3JrZXInO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSBnbG9iYWxMaW5rcztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9IGdsb2JhbE1ldGE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHByb2ZpbGU/OiBHaXRIdWJQcm9maWxlO1xuICBoYXNCb29rbWFya3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHByb2ZpbGUgPSAoYXdhaXQgYXV0aC5pc0F1dGhlbnRpY2F0ZWQocmVxdWVzdCkpPy5wcm9maWxlO1xuICBjb25zdCBoYXNCb29rbWFya3MgPSAoYXdhaXQgQm9va21hcmtzQXBpLmJvb2ttYXJrUXVhbnRpdHkocHJvZmlsZSEpKSA+IDA7XG5cbiAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBwcm9maWxlLCBoYXNCb29rbWFya3MgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxQaWNrPExvYWRlckRhdGEsICdwcm9maWxlJz4+KHt9KTtcbmV4cG9ydCBjb25zdCBCb29rbWFya3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQaWNrPExvYWRlckRhdGEsICdoYXNCb29rbWFya3MnPj4oe1xuICBoYXNCb29rbWFya3M6IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgdXNlQnVpbGRTZXJ2aWNlV29ya2VyKCk7XG5cbiAgY29uc3QgeyBwcm9maWxlLCBoYXNCb29rbWFya3MgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBjbGFzc05hbWU9XCJzY3JvbGwtc21vb3RoXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCI+PC9tZXRhPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHsvKiAvanMvYW5hbHl0aWNzLmpzIGRvZXNuJ3QgZXhpc3QuIEl0IGlzIGEgTmV0bGlmeSByZWRpcmVjdCB0byB0aGUgcGxhdXNpYmxlIENETiBzZXJ2ZWQgZmlsZSAqL31cbiAgICAgICAgey8qIFNlZSAvcHVibGljL19yZWRpcmVjdHMgKi99XG4gICAgICAgIDxzY3JpcHQgZGVmZXIgZGF0YS1kb21haW49e2RvbWFpbn0gc3JjPVwiL2pzL2FuYWx5dGljcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgICAgPEF1dGhlbnRpY2F0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9maWxlIH19PlxuICAgICAgICAgICAgPEJvb2ttYXJrc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaGFzQm9va21hcmtzIH19PlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9Cb29rbWFya3NDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvQXV0aGVudGljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uSXRlbSB2YXJpYW50PXtNb2JpbGVOYXZpZ2F0aW9uSXRlbS52YXJpYW50LlNjcm9sbFRvVG9wfSAvPlxuICAgICAgICAgIDxNb2JpbGVOYXZpZ2F0aW9uSXRlbSB2YXJpYW50PXtNb2JpbGVOYXZpZ2F0aW9uSXRlbS52YXJpYW50LkhvbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8R2xvdyAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB0cnVuY2F0ZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBCbG9nVHlwZXMsIENvbnRlbnRVdGlscyB9IGZyb20gJ34vZmVhdHVyZXMvQmxvZyc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJ34vc3R5bGVzL2JhY2tncm91bmQuY3NzJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnfi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgeyBkb21haW4sIHNpdGVGdWxsTmFtZSB9IGZyb20gJ34vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0cnVuY2F0ZShjb250ZW50LCB7IGxlbmd0aDogMTUwIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xvYmFsTWV0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICAndGhlbWUtY29sb3InOiAnIzJFMzQ0MCcsXG4gICAgJ3RpdGxlJzogYCR7c2l0ZUZ1bGxOYW1lfSAtIEVhc3kgdG8gZm9sbG93IHJlY2lwZXMgZm9yIFJlbWl4LnJ1bmAsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0Vhc3kgdG8gZm9sbG93IHJlY2lwZXMgZm9yIHRoZSBSZW1peC5ydW4gZnJhbWV3b3JrJyxcbiAgICAnYXV0aG9yJzogJ0ZhYmlvIFZlZG92ZWxsaScsXG4gICAgJ29nOnR5cGUnOiAnd2Vic2l0ZScsXG4gICAgJ29nOnNpdGVfbmFtZSc6IHNpdGVGdWxsTmFtZSxcbiAgICAnb2c6dGl0bGUnOiBgJHtzaXRlRnVsbE5hbWV9IC0gRWFzeSB0byBmb2xsb3cgcmVjaXBlcyBmb3IgUmVtaXgucnVuYCxcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiAnRWFzeSB0byBmb2xsb3cgcmVjaXBlcyBmb3IgdGhlIFJlbWl4LnJ1biBmcmFtZXdvcmsnLFxuICAgICdvZzp1cmwnOiBgaHR0cHM6Ly8ke2RvbWFpbn1gLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovLyR7ZG9tYWlufS9pbWcvc29jaWFsLWJhbm5lci5qcGdgLFxuICAgICd0d2l0dGVyOmltYWdlJzogYGh0dHBzOi8vJHtkb21haW59L2ltZy9zb2NpYWwtYmFubmVyLmpwZ2AsXG4gICAgJ3R3aXR0ZXI6Y2FyZCc6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcbiAgICAndHdpdHRlcjpzaXRlJzogJ0BSZW1peENvb2tib29rJyxcbiAgICAndHdpdHRlcjpjcmVhdG9yJzogJ0B2ZWRvdmVsbGk3NCcsXG4gICAgJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiAnRWFzeSB0byBmb2xsb3cgcmVjaXBlcyBmb3IgdGhlIFJlbWl4LnJ1biBmcmFtZXdvcmsnLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2xvYmFsTGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6ICdtYW5pZmVzdCcsIGhyZWY6ICcvbWFuaWZlc3QuanNvbicgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZGNzcyB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGdsb2JhbCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGJhY2tncm91bmQgfSxcbiAgICB7IHJlbDogJ2FwcGxlLXRvdWNoLWljb24nLCBocmVmOiAnL2ltZy9hcHBsZS10b3VjaC1pY29uLnBuZycsIHNpemVzOiAnMTgweDE4MCcgfSxcbiAgICB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2ltZy9mYXZpY29uLTMyeDMyLnBuZycsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXG4gICAgeyByZWw6ICdpY29uJywgaHJlZjogJy9pbWcvZmF2aWNvbi0xNngxNi5wbmcnLCB0eXBlOiAnaW1hZ2UvcG5nJyB9LFxuICAgIHsgcmVsOiAnbWFzay1pY29uJywgaHJlZjogJy9pbWcvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJywgY29sb3I6ICcjNWJiYWQ1JyB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FsdGVybmF0ZScsXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vcnNzK3htbCcsXG4gICAgICBocmVmOiBgaHR0cHM6Ly8ke2RvbWFpbn0vcnNzLnhtbGAsXG4gICAgICB0aXRsZTogYCR7c2l0ZUZ1bGxOYW1lfSdzIFhNTCBGZWVkYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FsdGVybmF0ZScsXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vYXRvbSt4bWwnLFxuICAgICAgaHJlZjogYGh0dHBzOi8vJHtkb21haW59L2F0b20ueG1sYCxcbiAgICAgIHRpdGxlOiBgJHtzaXRlRnVsbE5hbWV9J3MgQXRvbSBGZWVkYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ2FsdGVybmF0ZScsXG4gICAgICB0eXBlOiAnYXBwbGljYXRpb24vZmVlZCtqc29uJyxcbiAgICAgIGhyZWY6IGBodHRwczovLyR7ZG9tYWlufS9mZWVkLmpzb25gLFxuICAgICAgdGl0bGU6IGAke3NpdGVGdWxsTmFtZX0ncyBKU09OIEZlZWRgLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0TWV0YShkYXRhOiB7IHBvc3Q6IEJsb2dUeXBlcy5Qb3N0OyBwcmV2aWV3OiBib29sZWFuIH0pIHtcbiAgY29uc3QgY29udGVudCA9IENvbnRlbnRVdGlscy5ibG9ja3NUb1RleHQoZGF0YS5wb3N0LmNvbnRlbnQpO1xuICBjb25zdCBkZXNjID0gZGVzY3JpcHRpb24oY29udGVudC5qb2luKCcgJykpO1xuXG4gIHJldHVybiB7XG4gICAgJ3RpdGxlJzogYCR7c2l0ZUZ1bGxOYW1lfSAtICR7ZGF0YS5wb3N0LnRpdGxlfWAsXG4gICAgJ2Rlc2NyaXB0aW9uJzogZGVzYyxcbiAgICAnb2c6dGl0bGUnOiBgJHtzaXRlRnVsbE5hbWV9IC0gJHtkYXRhLnBvc3QudGl0bGV9YCxcbiAgICAnb2c6ZGVzY3JpcHRpb24nOiBkZXNjLFxuICAgICdvZzp1cmwnOiBgaHR0cHM6Ly8ke2RvbWFpbn0vJHtkYXRhLnBvc3Quc2x1Zy5jdXJyZW50fWAsXG4gICAgJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nOiBkZXNjLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovLyR7ZG9tYWlufS9pbWcvJHtkYXRhLnBvc3Quc2x1Zy5jdXJyZW50fS5qcGVnYCxcbiAgICAndHdpdHRlcjppbWFnZSc6IGBodHRwczovLyR7ZG9tYWlufS9pbWcvJHtkYXRhLnBvc3Quc2x1Zy5jdXJyZW50fS5qcGVnYCxcbiAgfTtcbn1cbiIsICJleHBvcnQgKiBhcyBCbG9nQXBpIGZyb20gJy4vQmxvZ0FwaSc7XG5leHBvcnQgKiBhcyBVbnNwbGFzaEFwaSBmcm9tICcuL1Vuc3BsYXNoQXBpJztcbmV4cG9ydCAqIGFzIEJsb2dUeXBlcyBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9Qb3N0JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9Qb3N0cyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvQ29tbWVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL0NvbnRlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL0NhcmQnO1xuIiwgImltcG9ydCB7IGRlZmF1bHRMYW5ndWFnZSB9IGZyb20gJ34vY29uZmlnJztcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vZmVhdHVyZXMvQmxvZy9zZXJ2aWNlL3Nhbml0eSc7XG5pbXBvcnQgeyBCbG9nVHlwZXMgfSBmcm9tICcuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzKHsgbGFuZ3VhZ2UgfTogeyBsYW5ndWFnZTogc3RyaW5nIH0pOiBQcm9taXNlPEJsb2dUeXBlcy5Qb3N0W10+IHtcbiAgY29uc3QgcXVlcnkgPSBgKlshKF9pZCBpbiBwYXRoKCdkcmFmdHMuKionKSkgJiYgX3R5cGU9PSdwb3N0JyAgJiYgbGFuZ3VhZ2UgPT0gJyR7XG4gICAgbGFuZ3VhZ2UgPz8gZGVmYXVsdExhbmd1YWdlXG4gIH0nICYmIHR5cGUgPT0gJ3Bvc3QnXSB8IG9yZGVyKF9jcmVhdGVkQXQgZGVzYylgO1xuXG4gIHJldHVybiBnZXRDbGllbnQoKS5mZXRjaChxdWVyeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0KHNsdWc/OiBzdHJpbmcsIHByZXZpZXcgPSBmYWxzZSkge1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHsgc2x1ZyB9O1xuICBjb25zdCBxdWVyeSA9IHByZXZpZXdcbiAgICA/IGAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAgJHNsdWddYFxuICAgIDogYCpbIShfaWQgaW4gcGF0aCgnZHJhZnRzLioqJykpICYmIF90eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAgJHNsdWddYDtcblxuICByZXR1cm4gZ2V0Q2xpZW50KCkuZmV0Y2gocXVlcnksIHF1ZXJ5UGFyYW1zKTtcbn1cbiIsICJpbnRlcmZhY2UgQmxvY2tDb250ZW50SXRlbSB7XG4gIF9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRGF0YVRvU2luZ2xlSXRlbShkYXRhOiBCbG9ja0NvbnRlbnRJdGVtW10gPSBbXSwgcHJldmlldyA9IGZhbHNlKSB7XG4gIGlmIChwcmV2aWV3KSB7XG4gICAgcmV0dXJuIGRhdGEuZmluZChpdGVtID0+IGl0ZW0uX2lkLnN0YXJ0c1dpdGgoYGRyYWZ0cy5gKSkgfHwgZGF0YVswXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGRhdGFbMF07XG4gIH1cblxuICByZXR1cm4gZGF0YVswXTtcbn1cbiIsICJpbXBvcnQgUGljb1Nhbml0eSBmcm9tICdwaWNvc2FuaXR5JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQaWNvU2FuaXR5KGNvbmZpZyk7XG59O1xuIiwgImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaVZlcnNpb246IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVkVSU0lPTiEsXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52LlNBTklUWV9EQVRBU0VUISxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5TQU5JVFlfUFJPSkVDVF9JRCEsXG4gIHVzZUNkbjogQm9vbGVhbihwcm9jZXNzLmVudi5TQU5JVFlfVVNFX0NETiEpLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTiEsXG59O1xuIiwgImltcG9ydCB7IEJsb2dUeXBlcyB9IGZyb20gJy4nO1xuXG5pbnRlcmZhY2UgZ2V0UGljdHVyZXNQcm9wcyB7XG4gIHF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGljdHVyZXMoeyBxdWFudGl0eSB9OiBnZXRQaWN0dXJlc1Byb3BzKTogUHJvbWlzZTxCbG9nVHlwZXMuUGljdHVyZVtdPiB7XG4gIGNvbnN0IHNwYWNlID0gYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP3F1ZXJ5PXNwYWNlJmNsaWVudF9pZD0ke3Byb2Nlc3MuZW52LlVOU1BMQVNIX0FDQ0VTU19LRVl9Jm9yaWVudGF0aW9uPWxhbmRzY2FwZSZjb3VudD0ke3F1YW50aXR5fWA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHNwYWNlKTtcbiAgY29uc3QgcGljdHVyZXMgPSAoYXdhaXQgcmVzLmpzb24oKSkubWFwKFxuICAgICh7IGFsdF9kZXNjcmlwdGlvbiwgdXJscywgdXNlciB9OiBCbG9nVHlwZXMuVW5wbGFzaEFwaVJlc3BvbnNlKSA9PiAoe1xuICAgICAgcmVndWxhcjogdXJscy5yZWd1bGFyLFxuICAgICAgc21hbGw6IHVybHMuc21hbGwsXG4gICAgICBhbHRfZGVzY3JpcHRpb24sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgcG9ydGZvbGlvX3VybDogdXNlci5saW5rcy5odG1sLFxuICAgICAgfSxcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiBwaWN0dXJlcztcbn1cbiIsICJpbXBvcnQgeyBCb29rbWFyayBhcyBCb29rbWFya1R5cGUsIExpa2UgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgbTJyIGZyb20gJ21pbnV0ZXMtdG8tcmVhZCc7XG5pbXBvcnQgeyBIZWFkaW5ncywgTGluaywgUHJvc2UgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmxvZ1R5cGVzLCBDb21tZW50cywgQ29udGVudCB9IGZyb20gJ34vZmVhdHVyZXMvQmxvZyc7XG5pbXBvcnQgeyBCb29rbWFyayB9IGZyb20gJ34vZmVhdHVyZXMvQm9va21hcmtzJztcbmltcG9ydCB7IExpa2VCdXR0b24gfSBmcm9tICd+L2ZlYXR1cmVzL0xpa2VzL2NvbXBvbmVudHMvTGlrZUJ1dHRvbic7XG5pbXBvcnQgeyBEYXRlVGltZVV0aWxzIH0gZnJvbSAnfi91dGlsJztcbmltcG9ydCB7IENyZWRpdHMgfSBmcm9tICcuLi9DYXJkL0NyZWRpdHMnO1xuaW1wb3J0IHsgQ29udGVudFV0aWxzIH0gZnJvbSAnLi4vQ29udGVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDogQmxvZ1R5cGVzLlBvc3Q7XG4gIHByZXZpZXc6IGJvb2xlYW47XG4gIHBpY3R1cmU6IEJsb2dUeXBlcy5QaWN0dXJlO1xuICBib29rbWFyazogQm9va21hcmtUeXBlIHwgbnVsbDtcbiAgdXNlckxpa2U6IExpa2UgfCBudWxsO1xuICBsaWtlUXVhbnRpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3Qoe1xuICBwb3N0LFxuICBwcmV2aWV3ID0gZmFsc2UsXG4gIHBpY3R1cmUsXG4gIGJvb2ttYXJrLFxuICB1c2VyTGlrZSxcbiAgbGlrZVF1YW50aXR5LFxufTogUG9zdFByb3BzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBDb250ZW50VXRpbHMuYmxvY2tzVG9UZXh0KHBvc3QuY29udGVudCkuam9pbignICcpO1xuICBjb25zdCBtaW51dGVzVG9SZWFkID0gbTJyKGNvbnRlbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtNDggbWQ6aC04MFwiPlxuICAgICAgICA8Q3JlZGl0cyB1c2VyPXtwaWN0dXJlLnVzZXJ9IC8+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3BpY3R1cmUucmVndWxhcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgYWx0PXtgJHtwb3N0LnRpdGxlfSAtIENvdmVyYH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFByb3NlPlxuICAgICAgICA8PlxuICAgICAgICAgIHtwcmV2aWV3ID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYW50aWFsaWFzZWQgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LW5vcm1hbCBiZy1saWdodC1zbm93LXN0b3JtMSBiZy1vcGFjaXR5LTcwIHRleHQtZGFyay1wb2xhci1uaWdodDNcIj5cbiAgICAgICAgICAgICAgUHJldmlldyBNb2RlIEVuYWJsZWRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxIZWFkaW5ncy5Db250ZW50PlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMyBtYi0zXCI+XG4gICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8Qm9va21hcmsgcG9zdD17cG9zdH0gYm9va21hcms9e2Jvb2ttYXJrfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpa2VCdXR0b24gcG9zdD17cG9zdH0gdXNlckxpa2U9e3VzZXJMaWtlfSBsaWtlUXVhbnRpdHk9e2xpa2VRdWFudGl0eX0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvSGVhZGluZ3MuQ29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTYgdGV4dC1zbSBib3JkZXItYiBib3JkZXItZGFyay1wb2xhci1uaWdodDEgdGV4dC1saWdodC1zbm93LXN0b3JtM1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEJ5IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57cG9zdC5hdXRob3J9PC9zcGFuPiAteycgJ31cbiAgICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj17YGh0dHBzOi8vJHtwb3N0LmF1dGhvcl91cmx9YH0+e3Bvc3QuYXV0aG9yX3VybH08L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgIDxkZD5DcmVhdGVkOiB7RGF0ZVRpbWVVdGlscy5kYXRlKHBvc3QuX2NyZWF0ZWRBdCl9PC9kZD5cbiAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgIDxkZD5MYXN0IHVwZGF0ZToge0RhdGVUaW1lVXRpbHMuZGF0ZShwb3N0Ll91cGRhdGVkQXQpfTwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPGRsPlxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG10LTYgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgXHUyM0YzICZuYnNwOyZuYnNwO3ttaW51dGVzVG9SZWFkfSwgbm90IHRha2luZyBpbnRvIGNvbnNpZGVyYXRpb24gdGhlIGNvZGUgZXhhbXBsZXMuXG4gICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb250ZW50IGJsb2Nrcz17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICAgIDxDb21tZW50cyAvPlxuICAgICAgICA8Lz5cbiAgICAgIDwvUHJvc2U+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCAqIGFzIEJvb2ttYXJrc0FwaSBmcm9tICcuL0Jvb2ttYXJrc0FwaSc7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb24sIEljb25zIH0gZnJvbSAnfi9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVByb2ZpbGUsIHVzZUF1dGhlbnRpY2F0aW9uRGlhbG9nIH0gZnJvbSAnfi9ob29rcyc7XG5pbXBvcnQgeyBCbG9nVHlwZXMgfSBmcm9tICd+L2ZlYXR1cmVzL0Jsb2cnO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdyb3V0ZXMtZ2VuJztcbmltcG9ydCB7IEJvb2ttYXJrIGFzIEJvb2ttYXJrVHlwZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZURpc2FibGVkIH0gZnJvbSAnfi9ob29rcy91c2VEaXNhYmxlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va21hcmtQcm9wcyB7XG4gIHBvc3Q6IEJsb2dUeXBlcy5Qb3N0O1xuICBib29rbWFyazogQm9va21hcmtUeXBlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvb2ttYXJrKHsgcG9zdCwgYm9va21hcmsgfTogQm9va21hcmtQcm9wcykge1xuICBjb25zdCB7IHByb2ZpbGUgfSA9IHVzZVByb2ZpbGUoKTtcbiAgY29uc3QgW3JlZmVycmVyLCBzZXRSZWZlcnJlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgZGlzYWJsZWQgPSB1c2VEaXNhYmxlZCgnYm9va21hcmtJZCcsIGJvb2ttYXJrPy5pZCA/PyAnJyk7XG4gIGNvbnN0IHsgZGlhbG9nOiBBdXRoZW50aWNhdGlvbkRpYWxvZywgc2V0T3BlbiB9ID0gdXNlQXV0aGVudGljYXRpb25EaWFsb2coeyBwb3N0IH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRSZWZlcnJlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSwgW3NldFJlZmVycmVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dGhlbnRpY2F0aW9uRGlhbG9nIC8+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPXtyb3V0ZSgnL2Jvb2ttYXJrcycpfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicG9zdFRpdGxlXCIgdmFsdWU9e3Bvc3QudGl0bGV9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBvc3RTbHVnXCIgdmFsdWU9e3Bvc3Quc2x1Zy5jdXJyZW50fSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJib29rbWFya0lkXCIgdmFsdWU9e2Jvb2ttYXJrPy5pZCA/PyAnJ30gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlcklkXCIgdmFsdWU9e2Ake3Byb2ZpbGU/LnByb3ZpZGVyfS0ke3Byb2ZpbGU/LmlkfWB9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZmVycmVyXCIgdmFsdWU9e3JlZmVycmVyfSAvPlxuICAgICAgICB7cHJvZmlsZSA/IChcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aXRsZT1cIkJvb2ttYXJrIHRoaXMgcG9zdFwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICB7Ym9va21hcmsgPyAoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJib29rbWFyay1pY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPXtJY29ucy5ib29rbWFya31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2gtOCB3LTggdGV4dC15ZWxsb3ctNTAwJywge1xuICAgICAgICAgICAgICAgICAgJ3RleHQtaW5oZXJpdCBvcGFjaXR5LTQwJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYm9va21hcmstaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj17SWNvbnMuYm9va21hcmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdoLTggdy04IG9wYWNpdHktNDAnLCB7XG4gICAgICAgICAgICAgICAgICAndGV4dC15ZWxsb3ctNTAwIG9wYWNpdHktMTAwJzogZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJCb29rbWFyayB0aGlzIHBvc3RcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYm9va21hcmstaWNvblwiXG4gICAgICAgICAgICAgIGljb249e0ljb25zLmJvb2ttYXJrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IG9wYWNpdHktNDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRGlzYWJsZWQodmVyaWZpY2F0aW9uS2V5OiBzdHJpbmcsIHZlcmlmaWNhdGlvbkRhdGE6IHN0cmluZykge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgISF0cmFuc2l0aW9uLnN1Ym1pc3Npb24gJiZcbiAgICB0cmFuc2l0aW9uLnN1Ym1pc3Npb24uZm9ybURhdGEuZ2V0KHZlcmlmaWNhdGlvbktleSkgPT09IHZlcmlmaWNhdGlvbkRhdGFcbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb29rbWFyayB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAncm91dGVzLWdlbic7XG5pbXBvcnQgeyBQcm9zZSwgTGluayB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRlVGltZVV0aWxzIH0gZnJvbSAnfi91dGlsJztcbmltcG9ydCB7IEhlYWRpbmdzIH0gZnJvbSAnfi9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEZWxldGVCb29rbWFyayB9IGZyb20gJy4vRGVsZXRlQm9va21hcmsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2ttYXJrc1Byb3BzIHtcbiAgYm9va21hcmtzOiBCb29rbWFya1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQm9va21hcmtzKHsgYm9va21hcmtzIH06IEJvb2ttYXJrc1Byb3BzKSB7XG4gIGNvbnN0IFtyZWZlcnJlciwgc2V0UmVmZXJyZXJdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldFJlZmVycmVyKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9LCBbc2V0UmVmZXJyZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9zZT5cbiAgICAgIDw+XG4gICAgICAgIDxIZWFkaW5ncy5Db250ZW50PkJvb2ttYXJrczwvSGVhZGluZ3MuQ29udGVudD5cbiAgICAgICAge2Jvb2ttYXJrcy5tYXAoYm9va21hcmsgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGwga2V5PXtib29rbWFyay5pZH0gY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICA8ZHQ+XG4gICAgICAgICAgICAgICAgPExpbmsuSW50ZXJuYWwgaHJlZj17cm91dGUoJy86c2x1ZycsIHsgc2x1ZzogYm9va21hcmsucG9zdFNsdWcgfSl9PlxuICAgICAgICAgICAgICAgICAge2Jvb2ttYXJrLnBvc3RUaXRsZX1cbiAgICAgICAgICAgICAgICA8L0xpbmsuSW50ZXJuYWw+XG4gICAgICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgICAgIDxkZD5cbiAgICAgICAgICAgICAgICBCb29rbWFya2VkIG9uIHtEYXRlVGltZVV0aWxzLmRhdGUoYm9va21hcmsuY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgICA8RGVsZXRlQm9va21hcmsgYm9va21hcms9e2Jvb2ttYXJrfSByZWZlcnJlcj17cmVmZXJyZXJ9IC8+XG4gICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC8+XG4gICAgPC9Qcm9zZT5cbiAgKTtcbn1cbiIsICJleHBvcnQgKiBhcyBEYXRlVGltZVV0aWxzIGZyb20gJy4vZGF0ZXRpbWUvZGF0ZXRpbWUuanMnO1xuZXhwb3J0ICogYXMgSGVhZGVyVXRpbHMgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcbmV4cG9ydCAqIGFzIERiVXRpbHMgZnJvbSAnLi9kYi9kYi5zZXJ2ZXInO1xuIiwgImV4cG9ydCBmdW5jdGlvbiBkYXRlKGRhdGUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgbW9udGg6ICdsb25nJyxcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgfTtcbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpLmZvcm1hdChuZXcgRGF0ZShkYXRlKSk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAncm91dGVzLWdlbic7XG5pbXBvcnQgeyB1c2VEaXNhYmxlZCB9IGZyb20gJ34vaG9va3MnO1xuaW1wb3J0IHsgQm9va21hcmsgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlQm9va21hcmtQcm9wcyB7XG4gIGJvb2ttYXJrOiBCb29rbWFyaztcbiAgcmVmZXJyZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUJvb2ttYXJrKHsgYm9va21hcmssIHJlZmVycmVyIH06IERlbGV0ZUJvb2ttYXJrUHJvcHMpIHtcbiAgY29uc3QgZGlzYWJsZWQgPSB1c2VEaXNhYmxlZCgnYm9va21hcmtJZCcsIGJvb2ttYXJrLmlkKTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBhY3Rpb249e3JvdXRlKCcvYm9va21hcmtzJyl9IG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImJvb2ttYXJrSWRcIiB2YWx1ZT17Ym9va21hcmsuaWQgPz8gJyd9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWZlcnJlclwiIHZhbHVlPXtyZWZlcnJlcn0gLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGV4dC1zbSB0ZXh0LXJlZC01MDAnLCB7XG4gICAgICAgICAgJ29wYWNpdHktNTAnOiBkaXNhYmxlZCxcbiAgICAgICAgfSl9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgID5cbiAgICAgICAgW2RlbGV0ZV1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCb29rbWFyayB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEdpdEh1YlByb2ZpbGUgfSBmcm9tICdyZW1peC1hdXRoLWdpdGh1Yic7XG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbC9kYi9kYi5zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va21hcmtzKHByb2ZpbGU6IEdpdEh1YlByb2ZpbGUpIHtcbiAgcmV0dXJuIGF3YWl0IGRiLmJvb2ttYXJrLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBgJHtwcm9maWxlPy5wcm92aWRlcn0tJHtwcm9maWxlPy5pZH1gLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Qm9va21hcmsoYm9va21hcms6IFBpY2s8Qm9va21hcmssICdwb3N0U2x1ZycgfCAndXNlcklkJz4pIHtcbiAgcmV0dXJuIGF3YWl0IGRiLmJvb2ttYXJrLmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHBvc3RTbHVnOiBib29rbWFyay5wb3N0U2x1ZyxcbiAgICAgIHVzZXJJZDogYm9va21hcmsudXNlcklkLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va21hcmsoXG4gIGJvb2ttYXJrOiBQaWNrPEJvb2ttYXJrLCAncG9zdFRpdGxlJyB8ICdwb3N0U2x1ZycgfCAndXNlcklkJz5cbikge1xuICBjb25zdCBleGlzdHMgPSBhd2FpdCBnZXRCb29rbWFyayhib29rbWFyayk7XG5cbiAgaWYgKCFleGlzdHMpIHtcbiAgICBhd2FpdCBkYi5ib29rbWFyay5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBwb3N0VGl0bGU6IGJvb2ttYXJrLnBvc3RUaXRsZSBhcyBzdHJpbmcsXG4gICAgICAgIHBvc3RTbHVnOiBib29rbWFyay5wb3N0U2x1ZyBhcyBzdHJpbmcsXG4gICAgICAgIHVzZXJJZDogYm9va21hcmsudXNlcklkIGFzIHN0cmluZyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJvb2ttYXJrKGlkOiBzdHJpbmcpIHtcbiAgYXdhaXQgZGIuYm9va21hcmsuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBib29rbWFya1F1YW50aXR5KHByb2ZpbGU6IEdpdEh1YlByb2ZpbGUpIHtcbiAgaWYgKCFwcm9maWxlKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIGRiLmJvb2ttYXJrLmNvdW50KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiBgJHtwcm9maWxlPy5wcm92aWRlcn0tJHtwcm9maWxlPy5pZH1gLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uLCBJY29ucyB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VBdXRoZW50aWNhdGlvbkRpYWxvZywgdXNlUHJvZmlsZSB9IGZyb20gJ34vaG9va3MnO1xuaW1wb3J0IHsgQmxvZ1R5cGVzIH0gZnJvbSAnfi9mZWF0dXJlcy9CbG9nJztcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSAncm91dGVzLWdlbic7XG5pbXBvcnQgeyBMaWtlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgdXNlRGlzYWJsZWQgfSBmcm9tICd+L2hvb2tzL3VzZURpc2FibGVkJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWtlQnV0dG9uUHJvcHMge1xuICBwb3N0OiBCbG9nVHlwZXMuUG9zdDtcbiAgdXNlckxpa2U6IExpa2UgfCBudWxsO1xuICBsaWtlUXVhbnRpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExpa2VCdXR0b24oeyBwb3N0LCB1c2VyTGlrZSwgbGlrZVF1YW50aXR5IH06IExpa2VCdXR0b25Qcm9wcykge1xuICBjb25zdCBbbGlrZUxhYmVsLCBzZXRMaWtlTGFiZWxdID0gdXNlU3RhdGU8c3RyaW5nPignbGlrZXMnKTtcbiAgY29uc3QgeyBkaWFsb2c6IEF1dGhlbnRpY2F0aW9uRGlhbG9nLCBzZXRPcGVuIH0gPSB1c2VBdXRoZW50aWNhdGlvbkRpYWxvZyh7IHBvc3QgfSk7XG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gdXNlUHJvZmlsZSgpO1xuICBjb25zdCBbcmVmZXJyZXIsIHNldFJlZmVycmVyXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBkaXNhYmxlZCA9IHVzZURpc2FibGVkKCdsaWtlSWQnLCB1c2VyTGlrZT8uaWQgPz8gJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRSZWZlcnJlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSwgW3NldFJlZmVycmVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMaWtlTGFiZWwoJ2xpa2VzJyk7XG4gICAgaWYgKGxpa2VRdWFudGl0eSA9PT0gMSkge1xuICAgICAgc2V0TGlrZUxhYmVsKCdsaWtlJyk7XG4gICAgfVxuICB9LCBbc2V0TGlrZUxhYmVsLCBsaWtlUXVhbnRpdHldKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0aGVudGljYXRpb25EaWFsb2cgLz5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249e3JvdXRlKCcvbGlrZXMnKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwb3N0SWRcIiB2YWx1ZT17cG9zdC5faWR9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImxpa2VJZFwiIHZhbHVlPXt1c2VyTGlrZT8uaWQgPz8gJyd9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJJZFwiIHZhbHVlPXtgJHtwcm9maWxlPy5wcm92aWRlcn0tJHtwcm9maWxlPy5pZH1gfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWZlcnJlclwiIHZhbHVlPXtyZWZlcnJlcn0gLz5cbiAgICAgICAge3Byb2ZpbGUgPyAoXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGl0bGU9XCJMaWtlIHRoaXMgcG9zdFwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICB7dXNlckxpa2UgPyAoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJsaWtlLWljb25cIlxuICAgICAgICAgICAgICAgIGljb249e0ljb25zLnRodW1ic1VwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC02IHctNiB0ZXh0LXllbGxvdy01MDAnLCB7XG4gICAgICAgICAgICAgICAgICAndGV4dC1pbmhlcml0IG9wYWNpdHktNDAnOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJsaWtlLWljb25cIlxuICAgICAgICAgICAgICAgIGljb249e0ljb25zLnRodW1ic1VwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnaC02IHctNiBvcGFjaXR5LTQwJywge1xuICAgICAgICAgICAgICAgICAgJ3RleHQteWVsbG93LTUwMCBvcGFjaXR5LTEwMCc6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YnV0dG9uIHRpdGxlPVwiTGlrZSB0aGlzIHBvc3RcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT5cbiAgICAgICAgICAgIDxJY29uIGRhdGEtdGVzdGlkPVwibGlrZS1pY29uXCIgaWNvbj17SWNvbnMudGh1bWJzVXB9IGNsYXNzTmFtZT1cInctNiBoLTYgb3BhY2l0eS00MFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtsaWtlUXVhbnRpdHl9IHtsaWtlTGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBCbG9nVHlwZXMgfSBmcm9tICd+L2ZlYXR1cmVzL0Jsb2cnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGl0c1Byb3BzIHtcbiAgdXNlcjogQmxvZ1R5cGVzLlVuc3BsYXNoVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENyZWRpdHMoeyB1c2VyIH06IENyZWRpdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTIgei0xMFwiPlxuICAgICAgPExpbmsuRXh0ZXJuYWxcbiAgICAgICAgaHJlZj17dXNlci5wb3J0Zm9saW9fdXJsID8/ICdodHRwczovL3Vuc3BsYXNoLmNvbSd9XG4gICAgICAgIGV4dGVybmFsSW5kaWNhdG9yPXtmYWxzZX1cbiAgICAgICAgdGl0bGU9e2BQaG90byBieSAke3VzZXIubmFtZX0gb24gVW5zcGxhc2hgfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFkb3dlZC10ZXh0IHRleHQteHMgdGV4dC1saWdodC1zbm93LXN0b3JtM1wiPlxuICAgICAgICAgIFBob3RvIGJ5IHt1c2VyLm5hbWV9IG9uIFVuc3BsYXNoXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTGluay5FeHRlcm5hbD5cbiAgICA8L3NwYW4+XG4gICk7XG59XG4iLCAiZXhwb3J0ICogZnJvbSAnLi9Db250ZW50JztcbmV4cG9ydCAqIGFzIENvbnRlbnRVdGlscyBmcm9tICcuL3V0aWwnO1xuIiwgImltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0JztcbmltcG9ydCB7IHNlcmlhbGl6ZXJzIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRlbnQoeyBibG9ja3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgIGJsb2Nrcz17YmxvY2tzfVxuICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgcHJvamVjdElkPVwiNG5qbDd2bG1cIlxuICAgICAgZGF0YXNldD1cImJsb2ctY29udGVudHNcIlxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlZnJhY3RvciBmcm9tICdyZWFjdC1yZWZyYWN0b3InO1xuaW1wb3J0IGpzIGZyb20gJ3JlZnJhY3Rvci9sYW5nL2phdmFzY3JpcHQnO1xuaW1wb3J0IGpzeCBmcm9tICdyZWZyYWN0b3IvbGFuZy9qc3gnO1xuaW1wb3J0IHRzeCBmcm9tICdyZWZyYWN0b3IvbGFuZy90c3gnO1xuaW1wb3J0IGJhc2ggZnJvbSAncmVmcmFjdG9yL2xhbmcvYmFzaCc7XG5pbXBvcnQgdHlwZXNjcmlwdCBmcm9tICdyZWZyYWN0b3IvbGFuZy90eXBlc2NyaXB0JztcbmltcG9ydCBtYXJrZG93biBmcm9tICdyZWZyYWN0b3IvbGFuZy9tYXJrZG93bic7XG5pbXBvcnQganNvbiBmcm9tICdyZWZyYWN0b3IvbGFuZy9qc29uJztcbmltcG9ydCBjc3MgZnJvbSAncmVmcmFjdG9yL2xhbmcvY3NzJztcblxuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UoYmFzaCk7XG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZShjc3MpO1xuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UoanMpO1xuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UoanNvbik7XG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZShqc3gpO1xuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UobWFya2Rvd24pO1xuUmVmcmFjdG9yLnJlZ2lzdGVyTGFuZ3VhZ2UodHN4KTtcblJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKHR5cGVzY3JpcHQpO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gIHR5cGVzOiB7XG4gICAgY29kZTogcHJvcHMgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzeW50YXgtaGlnaGxpZ2h0ZXJcIj5cbiAgICAgICAgPFJlZnJhY3RvclxuICAgICAgICAgIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfVxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5ub2RlLmNvZGV9XG4gICAgICAgICAgbWFya2Vycz17cHJvcHMubm9kZS5oaWdobGlnaHRlZExpbmVzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAgbWFya3M6IHtcbiAgICBoaWdobGlnaHQ6IHByb3BzID0+IHtcbiAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLm1hcmsuY29sb3IgfX0+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBibG9ja3NUb1RleHQoYmxvY2tzKSB7XG4gIHJldHVybiBibG9ja3NcbiAgICAuZmlsdGVyKCh7IF90eXBlIH0pID0+IF90eXBlID09PSAnYmxvY2snKVxuICAgIC5tYXAoYmxvY2sgPT4gYmxvY2suY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnRleHQpLmpvaW4oJycpKTtcbn1cbiIsICJpbXBvcnQgeyBCbG9nVHlwZXMgfSBmcm9tICd+L2ZlYXR1cmVzL0Jsb2cnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL0NhcmQnO1xuaW1wb3J0IHsgQ29udGVudFV0aWxzIH0gZnJvbSAnLi4vQ29udGVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBCbG9nVHlwZXMuUG9zdFtdO1xuICBwaWN0dXJlczogQmxvZ1R5cGVzLlBpY3R1cmVbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMsIHBpY3R1cmVzIH06IFBvc3RzUHJvcHMpIHtcbiAgY29uc3QgW2ZpcnN0UG9zdCwgLi4ucmVtYWluaW5nUG9zdHNdID0gcG9zdHM7XG4gIGNvbnN0IFtmaXJzdFBpY3R1cmUsIC4uLnJlbWFpbmluZ1BpY3R1cmVzXSA9IHBpY3R1cmVzO1xuICBjb25zdCBbZXhjZXJwdF0gPSBDb250ZW50VXRpbHMuYmxvY2tzVG9UZXh0KGZpcnN0UG9zdC5jb250ZW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC02IG1heC13LTZ4bCBweC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgPENhcmQgcG9zdD17Zmlyc3RQb3N0fSBleGNlcnB0PXtleGNlcnB0fSBwaWN0dXJlPXtmaXJzdFBpY3R1cmV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdhcC02IG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtyZW1haW5pbmdQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5faWR9PlxuICAgICAgICAgICAgPENhcmQgcG9zdD17cG9zdH0gcGljdHVyZT17cmVtYWluaW5nUGljdHVyZXNbaW5kZXhdfSBzbWFsbCAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3JvdXRlcy1nZW4nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCbG9nVHlwZXMgfSBmcm9tICd+L2ZlYXR1cmVzL0Jsb2cnO1xuaW1wb3J0IHsgRGF0ZVRpbWVVdGlscyB9IGZyb20gJ34vdXRpbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENyZWRpdHMgfSBmcm9tICcuL0NyZWRpdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIC8qIFBvc3QgZGF0YSB0byBkaXNwbGF5ICovXG4gIHBvc3Q6IEJsb2dUeXBlcy5Qb3N0O1xuXG4gIC8qIFBpY3R1cmUgdG8gZGlzcGxheSAqL1xuICBwaWN0dXJlOiBCbG9nVHlwZXMuUGljdHVyZTtcblxuICAvKiBJZiB0aGUgZmlyc3QgcG9zdCBpbiB0aGUgbGlzdCwgYWxzbyBkaXNwbGF5IHRoZSBleGNlcnB0ICovXG4gIGV4Y2VycHQ/OiBzdHJpbmc7XG5cbiAgLyogSWYgdGhlIGZpcnN0IGluIHRoZSBsaXN0LCBkaXNwbGF5IGJpZ2dlciBpbWFnZSAqL1xuICBzbWFsbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgcG9zdCwgZXhjZXJwdCwgcGljdHVyZSwgc21hbGwgPSBmYWxzZSB9OiBDYXJkUHJvcHMpIHtcbiAgY29uc3QgeyB1c2VyLCByZWd1bGFyOiBwaWN0dXJlUkcsIHNtYWxsOiBwaWN0dXJlU00sIGFsdF9kZXNjcmlwdGlvbiB9ID0gcGljdHVyZTtcbiAgY29uc3QgeyBzbHVnLCBfY3JlYXRlZEF0LCB0aXRsZSB9ID0gcG9zdDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS04MDAgc2hhZG93LWxnIHJvdW5kZWQteGwgYmctbGlnaHQtc25vdy1zdG9ybTMgYmctb3BhY2l0eS0xMFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe1xuICAgICAgICAgICdjYXJkLWltYWdlLWJveCc6IHNtYWxsLFxuICAgICAgICAgICdjYXJkLWltYWdlLWJveC1oaWdobGlnaHQnOiAhc21hbGwsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q3JlZGl0cyB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtzbWFsbCA/IHBpY3R1cmVTTSA6IHBpY3R1cmVSR31cbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbCByb3VuZGVkLXQteGxcIlxuICAgICAgICAgIGFsdD17YWx0X2Rlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWxpZ2h0LXNub3ctc3Rvcm0zXCI+XG4gICAgICAgIDxMaW5rLkludGVybmFsXG4gICAgICAgICAgaHJlZj17cm91dGUoJy86c2x1ZycsIHtcbiAgICAgICAgICAgIHNsdWc6IHNsdWcuY3VycmVudCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBkYXRhLXRlc3RpZD1cInBvc3QtbGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtc20gdGV4dC1ncmF5LTMwMFwiPntEYXRlVGltZVV0aWxzLmRhdGUoX2NyZWF0ZWRBdCl9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC14bCBhbnRpYWxpYXNlZCBmb250LXNlbWlib2xkIHNoYWRvd2VkLXRleHRcIj57dGl0bGV9PC9wPlxuICAgICAgICAgIHtleGNlcnB0ID8gPHAgY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtYmFzZSBzaGFkb3dlZC10ZXh0IG1kOmJsb2NrXCI+e2V4Y2VycHR9PC9wPiA6IG51bGx9XG4gICAgICAgIDwvTGluay5JbnRlcm5hbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGRvbWFpbiwgc2l0ZU5hbWUgfSBmcm9tICd+L2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZW50cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgcmVmPXtlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vdXR0ZXJhbmMuZXMvY2xpZW50LmpzJyk7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZXBvJywgYCR7c2l0ZU5hbWV9LyR7ZG9tYWlufS1jb21tZW50c2ApO1xuICAgICAgICBzY3JpcHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnaXNzdWUtdGVybScsICdwYXRobmFtZScpO1xuICAgICAgICBzY3JpcHRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGhlbWUnLCAnZ2l0aHViLWxpZ2h0Jyk7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICAgICAgc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FzeW5jJywgJ3RydWUnKTtcbiAgICAgICAgZWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oc2NyaXB0RWxlbWVudCk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZU1hdGNoZXMgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmxldCBpc01vdW50ID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJ1aWxkU2VydmljZVdvcmtlcigpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW91bnRlZCA9IGlzTW91bnQ7XG4gICAgaXNNb3VudCA9IGZhbHNlO1xuICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogJ1JFTUlYX05BVklHQVRJT04nLFxuICAgICAgICAgIGlzTW91bnQ6IG1vdW50ZWQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICBtYW5pZmVzdDogd2luZG93Ll9fcmVtaXhNYW5pZmVzdCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnUkVNSVhfTkFWSUdBVElPTicsXG4gICAgICAgICAgICBpc01vdW50OiBtb3VudGVkLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBtYXRjaGVzLFxuICAgICAgICAgICAgbWFuaWZlc3Q6IHdpbmRvdy5fX3JlbWl4TWFuaWZlc3QsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbWF0Y2hlc10pO1xufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb29rbWFya3NDb250ZXh0IH0gZnJvbSAnfi9yb290JztcblxuZXhwb3J0IGNvbnN0IHVzZUJvb2ttYXJrc0NvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaGFzQm9va21hcmtzIH0gPSB1c2VDb250ZXh0KEJvb2ttYXJrc0NvbnRleHQpO1xuXG4gIHJldHVybiB7IGhhc0Jvb2ttYXJrcyB9O1xufTtcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGlhbG9nIH0gZnJvbSAnfi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJsb2dUeXBlcyB9IGZyb20gJ34vZmVhdHVyZXMvQmxvZyc7XG5cbmludGVyZmFjZSBBdXRoZW50aWNhdGlvbkRpYWxvZ1Byb3BzIHtcbiAgcG9zdDogQmxvZ1R5cGVzLlBvc3Q7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoZW50aWNhdGlvbkRpYWxvZyA9ICh7IHBvc3QgfTogQXV0aGVudGljYXRpb25EaWFsb2dQcm9wcykgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkaWFsb2c6ICgpID0+IDxBdXRoZW50aWNhdGlvbkRpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0gcG9zdD17cG9zdH0gLz4sXG4gICAgc2V0T3BlbixcbiAgfTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9zZVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9zZSh7IGNoaWxkcmVuIH06IFByb3NlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHByb3NlLWxpbWUgbXgtYXV0byBtYi1hdXRvIHB4LTYgcHktMTAgdGV4dC1saWdodC1zbm93LXN0b3JtMyBwcm9zZS1oNDp0ZXh0LWxpZ2h0LXNub3ctc3Rvcm0xIHByb3NlLWE6dGV4dC1za3ktNDAwIHByb3NlLWJsb2NrcXVvdGU6dGV4dC1saWdodC1zbm93LXN0b3JtMyBwcm9zZS1zdHJvbmc6dGV4dC1saWdodC1zbm93LXN0b3JtMSBsZzpwcm9zZS1sZ1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgSWNvbiwgSWNvbnMgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZG9tYWluLCBzaXRlTmFtZSB9IGZyb20gJ34vY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIEdpdGh1YigpIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1sLTFcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxNZW51LkJ1dHRvblxuICAgICAgICAgIHRpdGxlPVwiUlNTXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImdpdGh1Yi1pY29uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZSBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIHVzZXIgbWVudTwvc3Bhbj5cbiAgICAgICAgICA8SWNvbiBpY29uPXtJY29ucy5naXRodWJ9IGNsYXNzTmFtZT1cInRleHQtbGlnaHQtc25vdy1zdG9ybTQgaC02IHctNlwiIC8+XG4gICAgICAgIDwvTWVudS5CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICBlbnRlclRvPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcbiAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgIGxlYXZlVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgID5cbiAgICAgICAgPE1lbnUuSXRlbXNcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImdpdGh1Yi1vdmVybGF5XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHotMjAgbXQtMiB3LTYwIG9yaWdpbi10b3AtcmlnaHQgcm91bmRlZC1tZCBiZy13aGl0ZSBweS0xIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtzaXRlTmFtZX0vJHtkb21haW59YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICdmbGV4IGdhcC0yIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249e0ljb25zLmdpdGh1Yn0gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNzAwXCIgLz5cbiAgICAgICAgICAgICAgICBUaGlzIGJsb2cncyBzb3VyY2UgY29kZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICB7KHsgYWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7c2l0ZU5hbWV9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdiZy1ncmF5LTEwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICdmbGV4IGdhcC0yIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAnXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249e0ljb25zLmdpdGh1Yn0gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNzAwXCIgLz5cbiAgICAgICAgICAgICAgICBPdXIgb3JnYW5pemF0aW9uXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L01lbnU+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5pbXBvcnQgeyBJY29uLCBJY29ucyB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3JvdXRlcy1nZW4nO1xuaW1wb3J0IHsgQmxvZ1R5cGVzIH0gZnJvbSAnfi9mZWF0dXJlcy9CbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblByb3BzIHtcbiAgb3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgcG9zdDogQmxvZ1R5cGVzLlBvc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoZW50aWNhdGlvbkRpYWxvZyh7IG9wZW4sIG9uQ2xvc2UsIHBvc3QgfTogQXV0aGVudGljYXRpb25Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICBkYXRhLXRlc3RpZD1cImF1dGhlbnRpY2F0aW9uLWRpYWxvZ1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBweC00IHB0LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wXCI+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eVwiIC8+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206aC1zY3JlZW4gc206YWxpZ24tbWlkZGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAmIzgyMDM7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXG4gICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTAgc206c2NhbGUtMTAwXCJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktNCBzbTp0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTk1XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctc2xhdGUtOTAwIHB4LTQgcHQtNSBwYi00IHRleHQtbGVmdCBhbGlnbi1ib3R0b20gc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIHNtOm15LTggc206dy1mdWxsIHNtOm1heC13LXNtIHNtOnAtNiBzbTphbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXNub3ctc3Rvcm0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaC0yMCB3LTIwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZGFyay1wb2xhci1uaWdodDFcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0ljb25zLmdpdGh1Yn0gY2xhc3NOYW1lPVwiaC0yMCB3LTIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17cm91dGUoJy9hdXRoL2dpdGh1YicpfSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwibXQtNSBzbTptdC02XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2x1Z1wiIHZhbHVlPXtwb3N0LnNsdWcuY3VycmVudH0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZ2l0aHViLXNpZ25pbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1zbGF0ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXNsYXRlLTUwMCBmb2N1czpyaW5nLW9mZnNldC0xIHNtOnRleHQtc21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCBHaXRodWJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvVHJhbnNpdGlvbi5Sb290PlxuICApO1xufVxuIiwgImltcG9ydCB7IHJvdXRlIH0gZnJvbSAncm91dGVzLWdlbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWdub3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj17cm91dGUoJy9sb2dvdXQnKX0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lIGRlY29yYXRpb24tZG90dGVkIHVuZGVybGluZS1vZmZzZXQtNFwiPlxuICAgICAgICBTaWduIG91dFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckJvdW5kYXJ5UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGNoaWxkcmVuIH06IEVycm9yQm91bmRhcnlQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTEyIHB5LTI0IHRleHQtMnhsIGFudGlhbGlhc2VkIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1saWdodC1zbm93LXN0b3JtM1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBJY29uLCBJY29ucywgTGluayB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCc7XG5cbmVudW0gVmFyaWFudCB7XG4gIFNjcm9sbFRvVG9wLFxuICBIb21lLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vYmlsZU5hdmlnYXRpb25JdGVtUHJvcHMge1xuICB2YXJpYW50OiBWYXJpYW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTW9iaWxlTmF2aWdhdGlvbkl0ZW0oeyB2YXJpYW50IH06IE1vYmlsZU5hdmlnYXRpb25JdGVtUHJvcHMpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldHZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aHJlc2hvbGQgPSA4MDA7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgaGlkZUhvbWVCdXR0b24gPSB2YXJpYW50ID09PSBWYXJpYW50LkhvbWUgJiYgbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA+IHRocmVzaG9sZCkge1xuICAgICAgICBzZXR2aXNpYmxlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgfSwgW3RocmVzaG9sZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25cbiAgICAgIHNob3c9e3Zpc2libGV9XG4gICAgICBlbnRlcj1cInRyYW5zaXRpb24tb3BhY2l0eSBkdXJhbnRpb24tMTAwMFwiXG4gICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgIGxlYXZlPVwidHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTE1MFwiXG4gICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgJ3Zpc2libGUgZml4ZWQgaC0xNiB3LTE2IGJnLXdoaXRlICBiZy1vcGFjaXR5LTQwICBzaGFkb3ctbWQgbGc6aW52aXNpYmxlJyxcbiAgICAgICAge1xuICAgICAgICAgICctYm90dG9tLTMgLXJpZ2h0LTMgcm91bmRlZC10bC1mdWxsJzogdmFyaWFudCA9PT0gVmFyaWFudC5TY3JvbGxUb1RvcCxcbiAgICAgICAgICAnLWJvdHRvbS0zIC1sZWZ0LTMgcm91bmRlZC10ci1mdWxsJzogdmFyaWFudCA9PT0gVmFyaWFudC5Ib21lLFxuICAgICAgICAgICdpbnZpc2libGUnOiBoaWRlSG9tZUJ1dHRvbixcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7dmFyaWFudCA9PT0gVmFyaWFudC5TY3JvbGxUb1RvcCA/IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzY3JvbGwtdG8tdG9wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249e0ljb25zLmNhcmV0VXB9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3ZhcmlhbnQgPT09IFZhcmlhbnQuSG9tZSA/IChcbiAgICAgICAgPExpbmsuSW50ZXJuYWxcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJuYXZpZ2F0ZS1ob21lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249e0ljb25zLmhvbWV9IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICA8L0xpbmsuSW50ZXJuYWw+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1RyYW5zaXRpb24+XG4gICk7XG59XG5cbk1vYmlsZU5hdmlnYXRpb25JdGVtLnZhcmlhbnQgPSBWYXJpYW50O1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gJ3JvdXRlcy1nZW4nO1xuaW1wb3J0IHsgcGFyc2VDb29raWUsIHNpZ25pblJlZGlyZWN0Q29va2llIH0gZnJvbSAnfi9jb29raWVzJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICd+L3NlcnZpY2VzL2F1dGguc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgY29va2llID0gYXdhaXQgcGFyc2VDb29raWUocmVxdWVzdCwgc2lnbmluUmVkaXJlY3RDb29raWUpO1xuXG4gIHJldHVybiBhdXRoLmF1dGhlbnRpY2F0ZSgnZ2l0aHViJywgcmVxdWVzdCwge1xuICAgIHN1Y2Nlc3NSZWRpcmVjdDogYC8ke2Nvb2tpZX1gID8/ICcvJyxcbiAgICBmYWlsdXJlUmVkaXJlY3Q6IHJvdXRlKCcvJyksXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnfi9zZXJ2aWNlcy9hdXRoLnNlcnZlcic7XG5pbXBvcnQgeyBzaWduaW5SZWRpcmVjdENvb2tpZSB9IGZyb20gJy4uL2Nvb2tpZXMnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgdGhyb3cganNvbih7fSwgeyBzdGF0dXM6IDQwNCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpKTtcblxuICBjb25zdCByZXR1cm5UbyA9IFN0cmluZyhkYXRhLnNsdWcgPz8gJycpO1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBhdXRoLmF1dGhlbnRpY2F0ZSgnZ2l0aHViJywgcmVxdWVzdCwge1xuICAgICAgc3VjY2Vzc1JlZGlyZWN0OiByZXR1cm5UbyA/PyAnLycsXG4gICAgICBmYWlsdXJlUmVkaXJlY3Q6ICcvJyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlcnJvciBpcyBhIFJlc3BvbnNlIHdoaWNoIGlzIHZpdGFsIGZvciB0aGUgZmxvdyB0byBjb250aW51ZVxuICAgIGlmICghcmV0dXJuVG8pIHRocm93IGVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBlcnJvci5oZWFkZXJzLmFwcGVuZChcbiAgICAgICAgJ1NldC1Db29raWUnLFxuICAgICAgICBhd2FpdCBzaWduaW5SZWRpcmVjdENvb2tpZS5zZXJpYWxpemUocmV0dXJuVG8sIHtcbiAgICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgQm9va21hcmsgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwganNvbiwgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICdyb3V0ZXMtZ2VuJztcbmltcG9ydCB7IEJvb2ttYXJrcywgQm9va21hcmtzQXBpIH0gZnJvbSAnfi9mZWF0dXJlcy9Cb29rbWFya3MnO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgYm9va21hcmtzOiBCb29rbWFya1tdO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBwcm9maWxlID0gKGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpKT8ucHJvZmlsZTtcblxuICBpZiAoKGF3YWl0IEJvb2ttYXJrc0FwaS5ib29rbWFya1F1YW50aXR5KHByb2ZpbGUhKSkgPT09IDApIHtcbiAgICByZXR1cm4gcmVkaXJlY3Qocm91dGUoJy8nKSk7XG4gIH1cblxuICByZXR1cm4ganNvbjxMb2FkZXJEYXRhPih7IGJvb2ttYXJrczogYXdhaXQgQm9va21hcmtzQXBpLmdldEJvb2ttYXJrcyhwcm9maWxlISkgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmZyb21FbnRyaWVzKGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKSk7XG5cbiAgaWYgKHBheWxvYWQuYm9va21hcmtJZCkge1xuICAgIGF3YWl0IEJvb2ttYXJrc0FwaS5kZWxldGVCb29rbWFyayhwYXlsb2FkLmJvb2ttYXJrSWQgYXMgc3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBCb29rbWFya3NBcGkuY3JlYXRlQm9va21hcmsoe1xuICAgICAgcG9zdFRpdGxlOiBwYXlsb2FkLnBvc3RUaXRsZSBhcyBzdHJpbmcsXG4gICAgICBwb3N0U2x1ZzogcGF5bG9hZC5wb3N0U2x1ZyBhcyBzdHJpbmcsXG4gICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkIGFzIHN0cmluZyxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLmJvb2ttYXJrSWQpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoU3RyaW5nKHBheWxvYWQucmVmZXJyZXIpKTtcbiAgfVxuXG4gIHJldHVybiByZWRpcmVjdChyb3V0ZSgnLzpzbHVnJywgeyBzbHVnOiBwYXlsb2FkLnBvc3RTbHVnIGFzIHN0cmluZyB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHsgYm9va21hcmtzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIDxCb29rbWFya3MgYm9va21hcmtzPXtib29rbWFya3N9IC8+O1xufVxuIiwgImltcG9ydCB7IEhlYWRpbmdzLCBMaW5rLCBQcm9zZSB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvc2U+XG4gICAgICA8PlxuICAgICAgICA8SGVhZGluZ3MuQ29udGVudD5SZW1peCBSZXNvdXJjZXM8L0hlYWRpbmdzLkNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LXByb3NlXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSB0ZXh0LXNtIHRleHQtZ3JheS00MDAgbWQ6ZmxleCBtZDppdGVtcy1jZW50ZXIgbWQ6Z2FwLTRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yIG1kOm1iLWF1dG9cIj5cdUQ4M0RcdURDQkYgJm5ic3A7b2ZmaWNpYWxseSBtYWludGFpbmVkIHJlc291cmNlPC9saT5cbiAgICAgICAgICAgIDxsaT5cdUQ4M0RcdURDQkIgJm5ic3A7Y29tbXVuaXR5IG1haW50YWluZWQgcmVzb3VyY2U8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIEhhdmUgYSBzdWdnZXN0aW9uPyBEcm9wIGEgbGluZSB0byB2ZWRvdmVsbGlAZ21haWwuY29tIFx1RDgzRFx1REM4Q1xuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDxkbD5cbiAgICAgICAgICA8ZHQ+XG4gICAgICAgICAgICA8SGVhZGluZ3MuU2VwYXJhdG9yPlx1RDgzRFx1RENCRiBSZW1peC5ydW4gd2Vic2l0ZTwvSGVhZGluZ3MuU2VwYXJhdG9yPlxuICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAgVGhpcyB3ZWJzaXRlIGlzIGF3ZXNvbWUgXHVEODNFXHVERDI5IC17JyAnfVxuICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuXCI+aHR0cHM6Ly9yZW1peC5ydW48L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kbD5cbiAgICAgICAgPGRsPlxuICAgICAgICAgIDxkdD5cbiAgICAgICAgICAgIDxIZWFkaW5ncy5TZXBhcmF0b3I+XHVEODNEXHVEQ0JGIFJlbWl4LnJ1biBkb2N1bWVudGF0aW9uPC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgICAgPC9kdD5cbiAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICBUaGUgb2ZmaWNpYWwgUmVtaXgucnVuIGRvY3VtZW50YXRpb24gLXsnICd9XG4gICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiPmh0dHBzOi8vcmVtaXgucnVuL2RvY3M8L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kbD5cbiAgICAgICAgPGRsPlxuICAgICAgICAgIDxkdD5cbiAgICAgICAgICAgIDxIZWFkaW5ncy5TZXBhcmF0b3I+XHVEODNEXHVEQ0JGIFJlbWl4LnJ1biBjdXJhdGVkIGV4YW1wbGVzPC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgICAgPC9kdD5cbiAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICBBIGNvbGxlY3Rpb24gb2Ygc21hbGwgZXhhbXBsZXMgZnJvbSB0aGUgb2ZmaWNpYWwgUmVtaXgucnVuIHJlcG9zaXRvcnkuIEFueW9uZSBjYW5cbiAgICAgICAgICAgIGNvbnRyaWJ1dGUgd2l0aGUgdGhlIGxpc3QsIGJ5IGZvbGxvd2luZyB0aGUgaW5zdHJ1Y3Rpb24gaW4gdGhlIFJFQURNRS57JyAnfVxuICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvdHJlZS9tYWluL2V4YW1wbGVzXCI+XG4gICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvdHJlZS9tYWluL2V4YW1wbGVzXG4gICAgICAgICAgICA8L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kbD5cbiAgICAgICAgPGRsPlxuICAgICAgICAgIDxkdD5cbiAgICAgICAgICAgIDxIZWFkaW5ncy5TZXBhcmF0b3I+XHVEODNEXHVEQ0JCIERpc2NvcmQgQ29tbXVuaXR5PC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgICAgPC9kdD5cbiAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL2NBTTZFREhKREtcIj5DbGljayBoZXJlIHRvIGpvaW48L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgPC9kZD5cbiAgICAgICAgPC9kbD5cbiAgICAgICAgPGRsPlxuICAgICAgICAgIDxkdD5cbiAgICAgICAgICAgIDxIZWFkaW5ncy5TZXBhcmF0b3I+XHVEODNEXHVEQ0JCIFJlbWl4IEd1aWRlPC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgICAgPC9kdD5cbiAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICBBIGNvbXByZWhlbnNpdmUgbGlzdCBvZiBsZWFybmluZyBtYXRlcmlhbCByZWxhdGVkIHRvIFJlbWl4LiBBbnlvbmUgY2FuIGNvbnRyaWJ1dGUgd2l0aFxuICAgICAgICAgICAgdGhlIGxpc3QgYnkgZm9ya2luZyB0aGUgcmVwb3NpdG9yeSwgYWRkaW5nIHRoZSBjb250ZW50IGFuZCBzdWJtaXR0aW5nIGEgcHVsbCByZXF1ZXN0LnsnICd9XG4gICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9yZW1peC5ndWlkZS9cIj5odHRwczovL3JlbWl4Lmd1aWRlPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICAgIDwvZGQ+XG4gICAgICAgIDwvZGw+XG4gICAgICAgIDxkbD5cbiAgICAgICAgICA8ZHQ+XG4gICAgICAgICAgICA8SGVhZGluZ3MuU2VwYXJhdG9yPlx1RDgzRFx1RENCQiBTZXJnaW8gWGFsYW1iclx1MDBFRDwvSGVhZGluZ3MuU2VwYXJhdG9yPlxuICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAgRnJvbSBBcmdlbnRpbmEgaGUgYmxvZ3MgYWJvdXQgUmVtaXggYW1vbmcgb3RoZXIgaW50ZXJlc3RpbmcgdGhpbmdzLnsnICd9XG4gICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9zZXJnaW9keGEuY29tL1wiPmh0dHBzOi8vc2VyZ2lvZHhhLmNvbTwvTGluay5FeHRlcm5hbD5cbiAgICAgICAgICA8L2RkPlxuICAgICAgICA8L2RsPlxuICAgICAgICA8ZGw+XG4gICAgICAgICAgPGR0PlxuICAgICAgICAgICAgPEhlYWRpbmdzLlNlcGFyYXRvcj5cdUQ4M0RcdURDQkIgUGVvcGxlIHRvIGZvbGxvdzwvSGVhZGluZ3MuU2VwYXJhdG9yPlxuICAgICAgICAgIDwvZHQ+XG4gICAgICAgICAgPGRkPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vcmVtaXhfcnVuXCI+UmVtaXg8L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9yeWFuZmxvcmVuY2VcIj5SeWFuIEZsb3JlbmNlPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWphY2tzb25cIj5NaWNoYWVsIEphY2tzb248L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9rZW50Y2RvZGRzXCI+S2VudCBDLiBEb2RkczwvTGluay5FeHRlcm5hbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rLkV4dGVybmFsIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3Nlcmdpb2R4YVwiPlNlcmdpbyBYYWxhbWJyXHUwMEVEPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsuRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdmVkb3ZlbGxpNzRcIj5cbiAgICAgICAgICAgICAgICAgIEZhYmlvIFZlZG92ZWxsaVxuICAgICAgICAgICAgICAgIDwvTGluay5FeHRlcm5hbD57JyAnfVxuICAgICAgICAgICAgICAgIGZvciBQb3J0dWd1ZXNlIHNwZWFrZXJzXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGQ+XG4gICAgICAgIDwvZGw+XG4gICAgICA8Lz5cbiAgICA8L1Byb3NlPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IGF1dGgubG9nb3V0KHJlcXVlc3QsIHsgcmVkaXJlY3RUbzogJy8nIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRocm93IGpzb24oe30sIHsgc3RhdHVzOiA0MDQgfSk7XG59O1xuIiwgImltcG9ydCB7IEJvb2ttYXJrLCBMaWtlIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsganNvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBCbG9nQXBpLCBCbG9nVHlwZXMsIFBvc3QsIFVuc3BsYXNoQXBpIH0gZnJvbSAnfi9mZWF0dXJlcy9CbG9nJztcbmltcG9ydCB7IEJvb2ttYXJrc0FwaSB9IGZyb20gJ34vZmVhdHVyZXMvQm9va21hcmtzJztcbmltcG9ydCB7IExpa2VzQXBpIH0gZnJvbSAnfi9mZWF0dXJlcy9MaWtlcyc7XG5pbXBvcnQgeyBmaWx0ZXJEYXRhVG9TaW5nbGVJdGVtIH0gZnJvbSAnfi9mZWF0dXJlcy9CbG9nL3NlcnZpY2Uvc2FuaXR5JztcbmltcG9ydCB7IGF1dGggfSBmcm9tICd+L3NlcnZpY2VzJztcbmltcG9ydCBoaWdobGlnaHRlciBmcm9tICd+L3N0eWxlcy9oaWdobGlnaHRlci5jc3MnO1xuaW1wb3J0IHsgcG9zdE1ldGEgfSBmcm9tICd+L3V0aWwvaGVhZGVyL2hlYWRlcic7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFtcbiAge1xuICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgIGhyZWY6IGhpZ2hsaWdodGVyLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gcG9zdE1ldGEoZGF0YSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwb3N0OiBCbG9nVHlwZXMuUG9zdDtcbiAgcHJldmlldzogYm9vbGVhbjtcbiAgcGljdHVyZTogQmxvZ1R5cGVzLlBpY3R1cmU7XG4gIGJvb2ttYXJrOiBCb29rbWFyayB8IG51bGw7XG4gIHVzZXJMaWtlOiBMaWtlIHwgbnVsbDtcbiAgbGlrZVF1YW50aXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG4gIHBhcmFtcyxcbn0pOiBQcm9taXNlPExvYWRlckRhdGEgfCBSZXNwb25zZT4gPT4ge1xuICBjb25zdCByZXF1ZXN0VXJsID0gbmV3IFVSTChyZXF1ZXN0Py51cmwpO1xuICBjb25zdCBwcmV2aWV3ID0gcmVxdWVzdFVybD8uc2VhcmNoUGFyYW1zPy5nZXQoJ3ByZXZpZXcnKSA9PT0gcHJvY2Vzcy5lbnYuU0FOSVRZX1BSRVZJRVdfU0VDUkVUO1xuICBsZXQgcG9zdCA9IGF3YWl0IEJsb2dBcGkuZ2V0UG9zdChwYXJhbXMuc2x1ZywgcHJldmlldyk7XG5cbiAgaWYgKCFwb3N0IHx8IHBvc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KCcvJyk7XG4gIH1cblxuICBwb3N0ID0gZmlsdGVyRGF0YVRvU2luZ2xlSXRlbShwb3N0LCBwcmV2aWV3KTtcblxuICBjb25zdCBwcm9maWxlID0gKGF3YWl0IGF1dGguaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpKT8ucHJvZmlsZTtcblxuICBjb25zdCBwaWN0dXJlUHJvbWlzZSA9IFVuc3BsYXNoQXBpLmdldFBpY3R1cmVzKHsgcXVhbnRpdHk6IDEgfSk7XG5cbiAgY29uc3QgbGlrZVF1YW50aXR5UHJvbWlzZSA9IExpa2VzQXBpLmxpa2VRdWFudGl0eSh7IHBvc3RJZDogcG9zdC5faWQgfSk7XG5cbiAgY29uc3QgYm9va21hcmtQcm9taXNlID0gQm9va21hcmtzQXBpLmdldEJvb2ttYXJrKHtcbiAgICB1c2VySWQ6IGAke3Byb2ZpbGU/LnByb3ZpZGVyfS0ke3Byb2ZpbGU/LmlkfWAsXG4gICAgcG9zdFNsdWc6IHBhcmFtcy5zbHVnISxcbiAgfSk7XG5cbiAgY29uc3QgbGlrZVByb21pc2UgPSBMaWtlc0FwaS5nZXRMaWtlKHtcbiAgICB1c2VySWQ6IGAke3Byb2ZpbGU/LnByb3ZpZGVyfS0ke3Byb2ZpbGU/LmlkfWAsXG4gICAgcG9zdElkOiBwb3N0Ll9pZCEsXG4gIH0pO1xuXG4gIGNvbnN0IFtwaWN0dXJlLCBib29rbWFyaywgdXNlckxpa2UsIGxpa2VRdWFudGl0eV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgcGljdHVyZVByb21pc2UsXG4gICAgYm9va21hcmtQcm9taXNlLFxuICAgIGxpa2VQcm9taXNlLFxuICAgIGxpa2VRdWFudGl0eVByb21pc2UsXG4gIF0pO1xuXG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgcG9zdCwgcHJldmlldywgcGljdHVyZTogcGljdHVyZVswXSwgYm9va21hcmssIHVzZXJMaWtlLCBsaWtlUXVhbnRpdHkgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qge1xuICAgIHBvc3QsXG4gICAgcHJldmlldyxcbiAgICBwaWN0dXJlLFxuICAgIGJvb2ttYXJrLFxuICAgIHVzZXJMaWtlLFxuICAgIGxpa2VRdWFudGl0eSA9IDAsXG4gIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9zdFxuICAgICAgcG9zdD17cG9zdH1cbiAgICAgIHByZXZpZXc9e3ByZXZpZXd9XG4gICAgICBwaWN0dXJlPXtwaWN0dXJlfVxuICAgICAgYm9va21hcms9e2Jvb2ttYXJrfVxuICAgICAgdXNlckxpa2U9e3VzZXJMaWtlfVxuICAgICAgbGlrZVF1YW50aXR5PXtsaWtlUXVhbnRpdHl9XG4gICAgLz5cbiAgKTtcbn1cbiIsICJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogYXMgTGlrZXNBcGkgZnJvbSAnLi9MaWtlc0FwaSc7XG4iLCAiaW1wb3J0IHsgTGlrZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlsL2RiL2RiLnNlcnZlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMaWtlKGxpa2U6IFBpY2s8TGlrZSwgJ3Bvc3RJZCcgfCAndXNlcklkJz4pIHtcbiAgcmV0dXJuIGF3YWl0IGRiLmxpa2UuZmluZEZpcnN0KHtcbiAgICB3aGVyZToge1xuICAgICAgcG9zdElkOiBsaWtlLnBvc3RJZCxcbiAgICAgIHVzZXJJZDogbGlrZS51c2VySWQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMaWtlKGxpa2U6IFBpY2s8TGlrZSwgJ3Bvc3RJZCcgfCAndXNlcklkJz4pIHtcbiAgY29uc3QgZXhpc3RzID0gYXdhaXQgZ2V0TGlrZShsaWtlKTtcblxuICBpZiAoIWV4aXN0cykge1xuICAgIGF3YWl0IGRiLmxpa2UuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcG9zdElkOiBsaWtlLnBvc3RJZCBhcyBzdHJpbmcsXG4gICAgICAgIHVzZXJJZDogbGlrZS51c2VySWQgYXMgc3RyaW5nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTGlrZShpZDogc3RyaW5nKSB7XG4gIGF3YWl0IGRiLmxpa2UuZGVsZXRlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaWtlUXVhbnRpdHkoeyBwb3N0SWQgPSAnJyB9OiB7IHBvc3RJZDogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIGRiLmxpa2UuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICBwb3N0SWQsXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgSGVhZGluZ3MsIEljb24sIEljb25zLCBMaW5rLCBQcm9zZSB9IGZyb20gJ34vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBkb21haW4gfSBmcm9tICd+L2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvc2U+XG4gICAgICA8PlxuICAgICAgICA8SGVhZGluZ3MuQ29udGVudD5BYm91dDwvSGVhZGluZ3MuQ29udGVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIENyZWF0ZWQgYW5kIG1haW50YWluZWQgYnl7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWxpZ2h0LXNub3ctc3Rvcm0zXCI+RmFiaW8gVmVkb3ZlbGxpPC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlZG92ZWxsaVwiPmdpdGh1Yi5jb20vdmVkb3ZlbGxpPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZvciBjb250ZW50IHN1Z2dlc3Rpb25zIHBsZWFzZSBkcm9wIGEgbGluZToge2AgYH1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1saWdodC1zbm93LXN0b3JtM1wiPnZlZG92ZWxsaUBnbWFpbC5jb208L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhlYWRpbmdzLlNlcGFyYXRvcj5TaXRlIFN0YXRzPC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE91ciBzaXRlIHN0YXRzIGFyZSBwdWJsaWMgYW5kIGNhbiBiZSBhY2Nlc3NlZCBvbiBQbGF1c2libGUuaW86eycgJ31cbiAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPXtgaHR0cHM6Ly9wbGF1c2libGUuaW8vJHtkb21haW59YH0+XG4gICAgICAgICAgICB7YHBsYXVzaWJsZS5pby8ke2RvbWFpbn1gfVxuICAgICAgICAgIDwvTGluay5FeHRlcm5hbD5cbiAgICAgICAgPC9wPlxuICAgICAgICA8SGVhZGluZ3MuU2VwYXJhdG9yPlNvY2lhbCBNZWRpYTwvSGVhZGluZ3MuU2VwYXJhdG9yPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDpmbGV4IG1kOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJY29uIGljb249e0ljb25zLnR3aXR0ZXJ9IGNsYXNzTmFtZT1cIm1iLTIgbXItMiBoLTYgdy02IG1kOm1iLWF1dG9cIiAvPlxuICAgICAgICAgIEZvbGxvdyB1cyBvbiBUd2l0dGVyOiZuYnNwO1xuICAgICAgICAgIDxMaW5rLkV4dGVybmFsIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1JlbWl4Q29va2Jvb2tcIj5cbiAgICAgICAgICAgIHR3aXR0ZXIuY29tL1JlbWl4Q29va2Jvb2tcbiAgICAgICAgICA8L0xpbmsuRXh0ZXJuYWw+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8SWNvbiBpY29uPXtJY29ucy5naXRodWJ9IGNsYXNzTmFtZT1cIm1iLTIgbXItMiBoLTYgdy02IG1kOm1iLWF1dG9cIiAvPlxuICAgICAgICAgIEdpdGh1YjombmJzcDtcbiAgICAgICAgICA8TGluay5FeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LWNvb2tib29rXCI+XG4gICAgICAgICAgICBnaXRodWIuY29tL3JlbWl4LWNvb2tib29rXG4gICAgICAgICAgPC9MaW5rLkV4dGVybmFsPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxIZWFkaW5ncy5TZXBhcmF0b3I+U3BlY2lhbCBUaGFua3MgXHVEODNFXHVERDE3PC9IZWFkaW5ncy5TZXBhcmF0b3I+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNwZWNpYWwgdGhhbmtzIHRvIFRhaXNhIFNvYXJlcyBmb3IgdGhlIGxvdmVseSBsb2dvISZuYnNwO1xuICAgICAgICAgIDxMaW5rLkV4dGVybmFsIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dub21hX3JvYm90aWNhXCI+XG4gICAgICAgICAgICB0d2l0dGVyLmNvbS9nbm9tYV9yb2JvdGljYVxuICAgICAgICAgIDwvTGluay5FeHRlcm5hbD5cbiAgICAgICAgPC9wPlxuICAgICAgPC8+XG4gICAgPC9Qcm9zZT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgc2h1ZmZsZSBmcm9tICdsb2Rhc2gvc2h1ZmZsZSc7XG5pbXBvcnQgeyBqc29uLCBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgYXMgR2VuZXJhbEVycm9yQm91bmRhcnkgfSBmcm9tICd+L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbGFuZ3VhZ2VDb29raWUsIHBhcnNlQ29va2llIH0gZnJvbSAnfi9jb29raWVzJztcbmltcG9ydCB7IEJsb2dBcGksIEJsb2dUeXBlcywgUG9zdHMsIFVuc3BsYXNoQXBpIH0gZnJvbSAnfi9mZWF0dXJlcy9CbG9nJztcbmltcG9ydCBjYXJkIGZyb20gJ34vc3R5bGVzL2NhcmQuY3NzJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgcG9zdHM6IEJsb2dUeXBlcy5Qb3N0W107XG4gIHBpY3R1cmVzOiBCbG9nVHlwZXMuUGljdHVyZVtdO1xufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogY2FyZCB9XTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGxhbmd1YWdlIH0gPSBhd2FpdCBwYXJzZUNvb2tpZShyZXF1ZXN0LCBsYW5ndWFnZUNvb2tpZSk7XG4gICAgY29uc3QgcG9zdHMgPSAoYXdhaXQgQmxvZ0FwaS5nZXRQb3N0cyh7IGxhbmd1YWdlIH0pKSA/PyBbXTtcbiAgICBjb25zdCBwaWN0dXJlcyA9IHNodWZmbGUoYXdhaXQgVW5zcGxhc2hBcGkuZ2V0UGljdHVyZXMoeyBxdWFudGl0eTogMzAgfSkpO1xuXG4gICAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBwb3N0cywgcGljdHVyZXMgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdTZXJ2ZXIgZXJyb3InLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwb3N0cywgcGljdHVyZXMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gPFBvc3RzIHBvc3RzPXtwb3N0c30gcGljdHVyZXM9e3BpY3R1cmVzfSAvPjtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnkgPSAoKSA9PiAoXG4gIDxHZW5lcmFsRXJyb3JCb3VuZGFyeT5cbiAgICBXZSBjb3VsZCBub3QgbG9hZCB0aGUgbGlzdCBvZiBwb3N0cy4gUGxlYXNlIHRyeSBhZ2Fpbi5cbiAgPC9HZW5lcmFsRXJyb3JCb3VuZGFyeT5cbik7XG4iLCAiaW1wb3J0IHsgTGlrZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBMaWtlc0FwaSB9IGZyb20gJ34vZmVhdHVyZXMvTGlrZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBsaWtlczogTGlrZVtdO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KCdOb3QgZm91bmQnLCB7IHN0YXR1czogNDA0IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5mcm9tRW50cmllcyhhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCkpO1xuXG4gIGlmIChwYXlsb2FkLmxpa2VJZCkge1xuICAgIGF3YWl0IExpa2VzQXBpLmRlbGV0ZUxpa2UocGF5bG9hZC5saWtlSWQgYXMgc3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBMaWtlc0FwaS5jcmVhdGVMaWtlKHtcbiAgICAgIHBvc3RJZDogcGF5bG9hZC5wb3N0SWQgYXMgc3RyaW5nLFxuICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCBhcyBzdHJpbmcsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVkaXJlY3QoU3RyaW5nKHBheWxvYWQucmVmZXJyZXIpKTtcbn07XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYjA0NDk0ZjInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTZJTzJJU0RNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RSzJCWVU1WC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVUzWkhJREhCLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1DQ1dHQVNPRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWkVORUJXQ0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay03UVFRNDVDQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlPTUZDQkVILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMkdVM1BWRUouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HNVVMUkxTUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJDTTdIM0JILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRzbHVnJzp7J2lkJzoncm91dGVzLyRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6JzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRzbHVnLVk1TUpLVEhTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1EWFU2S0ZWTS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVOTlVBR0Q2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1c0WE41RlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZNFNNVTRXTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJITUZKTzNYLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fib3V0Jzp7J2lkJzoncm91dGVzL2Fib3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0LTJRNzJJMjRELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0ySE1GSk8zWC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC5naXRodWInOnsnaWQnOidyb3V0ZXMvYXV0aC5naXRodWInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9naXRodWInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC5naXRodWItVjNJSEs1WVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFJT1czNlJXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTllLU0RQQ0EuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoLmdpdGh1Yi5jYWxsYmFjayc6eydpZCc6J3JvdXRlcy9hdXRoLmdpdGh1Yi5jYWxsYmFjaycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2dpdGh1Yi9jYWxsYmFjaycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoLmdpdGh1Yi5jYWxsYmFjay1FQTJJNEFFSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUlPVzM2UlcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1OWUtTRFBDQS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ib29rbWFya3MnOnsnaWQnOidyb3V0ZXMvYm9va21hcmtzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jvb2ttYXJrcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ib29rbWFya3MtVlJNNkU2TlQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFIUDdIS0VOLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1c0WE41RlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZNFNNVTRXTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJITUZKTzNYLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTVVQWVY2WDcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5ZS1NEUENBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRFhVNktGVk0uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PVzRYTjVGUi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2xpa2VzJzp7J2lkJzoncm91dGVzL2xpa2VzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xpa2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xpa2VzLVlIT1VUTUJXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1VTk5VQUdENi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVk0U01VNFdPLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUdGSlVUNDVVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1BSFA3SEtFTi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Jlc291cmNlcyc6eydpZCc6J3JvdXRlcy9yZXNvdXJjZXMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVzb3VyY2VzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Jlc291cmNlcy0yMkZFNENBSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMkhNRkpPM1guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1CMDQ0OTRGMi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUN0T2xDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFDOzs7QUNBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbUI7QUFDbkIsb0JBQStCO0FBQy9CLG9CQUE0Qjs7O0FDRjVCO0FBQUEsbUJBQXFDO0FBRTlCLElBQU0saUJBQWlCLCtCQUFhO0FBQ3BDLElBQU0sdUJBQXVCLCtCQUFhO0FBTTFDLElBQU0sY0FBYyxPQUFPLFNBQWtCLFdBQXFDO0FBQ3ZGLFFBQU0sZUFBZSxRQUFRLFFBQVEsSUFBSTtBQUN6QyxRQUFNLGVBQWdCLE1BQU0sT0FBTyxNQUFNLGlCQUFrQjtBQUMzRCxTQUFPO0FBQUE7OztBQ1pUO0FBQUEsb0JBQTJDO0FBQzNDLHdCQUE4QjtBQUU5QiwrQkFBK0I7QUFFL0IsSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0I7QUFDakMsUUFBTSxJQUFJLE1BQU07QUFBQTtBQUdsQixJQUFJLENBQUMsUUFBUSxJQUFJLHNCQUFzQjtBQUNyQyxRQUFNLElBQUksTUFBTTtBQUFBO0FBR2xCLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVTtBQUN6QixRQUFNLElBQUksTUFBTTtBQUFBO0FBR2xCLElBQU0sV0FBVyxRQUFRLElBQUk7QUFFdEIsSUFBTSxpQkFBaUIsOENBQTJCO0FBQUEsRUFDdkQsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsU0FBUyxDQUFDLFFBQVEsSUFBSTtBQUFBLElBQ3RCLFFBQVE7QUFBQTtBQUFBO0FBSUwsSUFBTSxPQUFPLElBQUksZ0NBRXJCO0FBRUgsS0FBSyxJQUNILElBQUksd0NBQ0Y7QUFBQSxFQUNFLFVBQVUsUUFBUSxJQUFJO0FBQUEsRUFDdEIsY0FBYyxRQUFRLElBQUk7QUFBQSxFQUMxQixhQUFhLElBQUksSUFBSSx5QkFBeUIsVUFBVTtBQUFBLEdBRTFELE9BQU8sRUFBRSxjQUFjO0FBQ3JCLFNBQU8sRUFBRTtBQUFBOzs7QUMxQ2Y7QUFDQSxtQkFBa0I7QUFNWCwyQkFBMkIsRUFBRSxVQUEwRDtBQUM1RixRQUFNLFVBQVUsSUFBSSxRQUF1QyxhQUN6RCxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVM7QUFHN0IsTUFBSTtBQUNGLFFBQUksT0FBTyxVQUFVO0FBQ25CLGNBQVEsSUFBSTtBQUNaLGFBQU87QUFBQTtBQUVULFdBQU8scUJBQU0sSUFBSTtBQUFBLFdBQ1YsT0FBUDtBQUNBLFlBQVEsSUFBSTtBQUNaLFlBQVEsSUFBSTtBQUNaLFdBQU87QUFBQTtBQUFBOzs7QUNyQlg7QUFBTyxJQUFNLFdBQVc7QUFDakIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sU0FBUyxHQUFHO0FBQ2xCLElBQU0sOEJBQThCLENBQUMsVUFBVSxZQUFZO0FBQzNELElBQU0scUJBQXFCO0FBQUEsRUFDaEMsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBO0FBRUMsSUFBTSxrQkFBa0I7OztBSkEvQiw2QkFDRSxTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSx3QkFBTztBQUVQLFFBQU0sU0FBUyxNQUFNLFlBQVksU0FBUztBQUMxQyxRQUFNLFVBQVcsT0FBTSxrQkFBa0IsRUFBRSxXQUFXLEtBQUs7QUFFM0QsU0FBTyxXQUFXLDRCQUE0QixTQUFTLFdBQ25ELG1CQUFtQixLQUNuQixtQkFBbUI7QUFFdkIsa0JBQWdCLElBQ2QsY0FDQSxNQUFNLGVBQWUsVUFBVSxRQUFRO0FBQUEsSUFDckMsVUFBVTtBQUFBO0FBSWQsUUFBTSxTQUFTLGtDQUFlLG9DQUFDLDJCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUUvRSxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FLcENiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWU87OztBQ1pQO0FBQUEsbUJBQXlCO0FBQ3pCLG9CQUFpQztBQUNqQyx3QkFBdUI7QUFJaEIsZ0JBQWdCO0FBQ3JCLFNBQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUN2QixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsbUJBQUssUUFBTjtBQUFBLElBQ0UsT0FBTTtBQUFBLElBQ04sZUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVUsbUJBQzFCLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQU0sTUFBTTtBQUFBLElBQU0sV0FBVTtBQUFBLFFBR3RDLG9DQUFDLDBCQUFEO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxtQkFBSyxPQUFOO0FBQUEsSUFDRSxlQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsS0FFVixvQ0FBQyxtQkFBSyxNQUFOLE1BQ0csQ0FBQyxFQUFFLGFBQ0Ysb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTSxXQUFXO0FBQUEsSUFDakIsV0FBVywrQkFDVCxTQUFTLGdCQUFnQixJQUN6QjtBQUFBLElBRUYsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLEtBQ0wsU0FLTCxvQ0FBQyxtQkFBSyxNQUFOLE1BQ0csQ0FBQyxFQUFFLGFBQ0Ysb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTSxXQUFXO0FBQUEsSUFDakIsV0FBVywrQkFDVCxTQUFTLGdCQUFnQixJQUN6QjtBQUFBLElBRUYsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLEtBQ0wsVUFLTCxvQ0FBQyxtQkFBSyxNQUFOLE1BQ0csQ0FBQyxFQUFFLGFBQ0Ysb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBTSxXQUFXO0FBQUEsSUFDakIsV0FBVywrQkFDVCxTQUFTLGdCQUFnQixJQUN6QjtBQUFBLElBRUYsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLEtBQ0w7QUFBQTs7O0FDeEVmO0FBRU8sSUFBTSxRQUFRO0FBQUEsRUFDbkIsRUFBRSxPQUFPLGFBQWEsTUFBTTtBQUFBLEVBQzVCLEVBQUUsT0FBTyxnQkFBZ0IsTUFBTTtBQUFBLEVBQy9CLEVBQUUsT0FBTyxhQUFhLE1BQU07QUFBQSxFQUM1QixFQUFFLE9BQU8sV0FBVyxNQUFNO0FBQUEsRUFDMUIsRUFBRSxPQUFPLGNBQWMsTUFBTTtBQUFBLEVBQzdCLEVBQUUsT0FBTyxnQkFBZ0IsTUFBTTtBQUFBO0FBRzFCLGtCQUFrQjtBQUN2QixTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBMEIsdUJBQ3pDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxXQUNuQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlO0FBQUEsSUFBWSxtQkFBbUI7QUFBQSxLQUMzQztBQUFBOzs7QUN0QmY7QUFBTyxnQkFBZ0I7QUFDckIsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsTUFDZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsTUFDZixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUE7QUFBQTs7O0FDTHJCO0FBQUEsd0JBQXNCO0FBR2Ysa0JBQWtCO0FBQ3ZCLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLGVBQVk7QUFBQSxJQUFZLFdBQVU7QUFBQSxLQUNwQyxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUNFLE1BQU0sNkJBQU07QUFBQSxJQUNaLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUFnQixPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxLQUFJO0FBQUEsTUFDcEQsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQTBDLHlCQUc5RCxvQ0FBQyxRQUFEO0FBQUE7OztBQ2ZOOzs7QUNBQTtBQUFBLG9CQUFrQjtBQU1YLG1CQUFtQixFQUFFLFlBQTRCO0FBQ3RELFNBQ0Usb0RBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWlFO0FBQUE7OztBQ1JuRjtBQUFBLG9CQUFrQjtBQU1YLGlCQUFpQixFQUFFLFlBQTBCO0FBQ2xELFNBQ0Usb0RBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWlFO0FBQUE7OztBRkw1RSxvQkFBb0I7QUFDekIsU0FBTztBQUFBO0FBR1QsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsVUFBVTs7O0FHUm5CO0FBQUEsZ0JBQXFEO0FBQ3JELG1CQUE2RDtBQUV0RCxJQUFLO0FBQUwsVUFBSyxRQUFMO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxHQVBVO0FBZ0JaLElBQU0sV0FBVyxDQUFDLFVBQW9DO0FBQUEsR0FDbkQsSUFBZSxvQ0FBQyxvQkFBRCxtQkFBYztBQUFBLEdBQzdCLElBQWdCLG9DQUFDLHFCQUFELG1CQUFlO0FBQUEsR0FDL0IsSUFBYSxvQ0FBQyxzQkFBRCxtQkFBYTtBQUFBLEdBQzFCLElBQWdCLG9DQUFDLDJCQUFELG1CQUFxQjtBQUFBLEdBQ3JDLElBQWlCLG9DQUFDLDJCQUFELG1CQUFrQjtBQUFBLEdBQ25DLElBQWlCLG9DQUFDLDBCQUFELG1CQUFpQjtBQUFBLEdBQ2xDLElBQWEsb0NBQUMsdUJBQUQsbUJBQWM7QUFBQTtBQUd2QixjQUFjLE9BQWtCO0FBQ3JDLFFBQTBCLFlBQWxCLFdBQWtCLElBQVQsaUJBQVMsSUFBVCxDQUFUO0FBQ1IsU0FBTyxTQUFTLE1BQU0sU0FBUztBQUFBOzs7QUMvQmpDOzs7QUNBQTtBQUFBLG9CQUFrQjtBQUNsQixvQkFBcUI7QUFRZCxrQkFBa0IsSUFBd0Q7QUFBeEQsZUFBRSxRQUFNLFVBQVUsY0FBbEIsSUFBZ0Msa0JBQWhDLElBQWdDLENBQTlCLFFBQU0sWUFBVTtBQUN6QyxTQUNFLG9EQUFDLG9CQUFEO0FBQUEsSUFBTSxVQUFTO0FBQUEsSUFBUyxJQUFJO0FBQUEsSUFBTTtBQUFBLEtBQTBCLFFBQ3pEO0FBQUE7OztBQ1pQO0FBQUEsb0JBQWtCO0FBQ2xCLGlCQUFrQztBQVUzQixrQkFBa0I7QUFBQSxFQUN2QjtBQUFBLEVBQ0E7QUFBQSxFQUNBLG9CQUFvQjtBQUFBLEVBQ3BCLFFBQVE7QUFBQSxFQUNSO0FBQUEsR0FDZ0I7QUFDaEIsU0FDRSxvREFBQyxLQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0EsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osV0FBVyw0QkFBNEI7QUFBQSxJQUN2QztBQUFBLEtBRUMsVUFBVSxLQUNWLG9CQUNDLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9EQUFDLDhCQUFELFNBRUE7QUFBQTs7O0FGNUJILGdCQUFnQjtBQUNyQixTQUFPO0FBQUE7QUFHVCxLQUFLLFdBQVc7QUFDaEIsS0FBSyxXQUFXOzs7QUdSaEI7QUFBQSx5QkFBc0I7OztBQ0F0QjtBQUFBLHFCQUEyQjs7O0FDQTNCOzs7QUNBQTtBQUFBLG9CQUF5Qjs7O0FDQXpCOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBSU8sZ0NBQWdDLE9BQTJCLElBQUksVUFBVSxPQUFPO0FBQ3JGLE1BQUksU0FBUztBQUNYLFdBQU8sS0FBSyxLQUFLLFVBQVEsS0FBSyxJQUFJLFdBQVcsZUFBZSxLQUFLO0FBQUE7QUFHbkUsTUFBSSxDQUFDLE1BQU0sUUFBUSxPQUFPO0FBQ3hCLFdBQU87QUFBQTtBQUdULE1BQUksS0FBSyxXQUFXLEdBQUc7QUFDckIsV0FBTyxLQUFLO0FBQUE7QUFHZCxTQUFPLEtBQUs7QUFBQTs7O0FDakJkO0FBQUEsd0JBQXVCOzs7QUNBdkI7QUFBTyxJQUFNLFNBQVM7QUFBQSxFQUNwQixZQUFZLFFBQVEsSUFBSTtBQUFBLEVBQ3hCLFNBQVMsUUFBUSxJQUFJO0FBQUEsRUFDckIsV0FBVyxRQUFRLElBQUk7QUFBQSxFQUN2QixRQUFRLFFBQVEsUUFBUSxJQUFJO0FBQUEsRUFDNUIsT0FBTyxRQUFRLElBQUk7QUFBQTs7O0FERmQsSUFBTSxZQUFZLE1BQU07QUFDN0IsU0FBTyxJQUFJLDBCQUFXO0FBQUE7OztBRkFqQixrQkFBa0IsRUFBRSxZQUE2RDtBQUN0RixRQUFNLFFBQVEsbUVBQ1osWUFBWTtBQUdkLFNBQU8sWUFBWSxNQUFNO0FBQUE7QUFHcEIsaUJBQWlCLE1BQWUsVUFBVSxPQUFPO0FBQ3RELFFBQU0sY0FBYyxFQUFFO0FBQ3RCLFFBQU0sUUFBUSxVQUNWLGlEQUNBO0FBRUosU0FBTyxZQUFZLE1BQU0sT0FBTztBQUFBOzs7QUlsQmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSwyQkFBa0MsRUFBRSxZQUE0RDtBQUM5RixRQUFNLFFBQVEsZ0VBQWdFLFFBQVEsSUFBSSxtREFBbUQ7QUFDN0ksUUFBTSxNQUFNLE1BQU0sTUFBTTtBQUN4QixRQUFNLFdBQVksT0FBTSxJQUFJLFFBQVEsSUFDbEMsQ0FBQyxFQUFFLGlCQUFpQixNQUFNLFdBQTBDO0FBQUEsSUFDbEUsU0FBUyxLQUFLO0FBQUEsSUFDZCxPQUFPLEtBQUs7QUFBQSxJQUNaO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixNQUFNLEtBQUs7QUFBQSxNQUNYLGVBQWUsS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUtoQyxTQUFPO0FBQUE7OztBQ3JCVDtBQUNBLDZCQUFnQjs7O0FDRGhCOzs7QUNBQTtBQUFBLG9CQUFvQztBQUlwQyx5QkFBc0I7QUFFdEIsb0JBQXFCO0FBQ3JCLHlCQUF1Qjs7O0FDUHZCO0FBQUEsb0JBQThCO0FBRXZCLHFCQUFxQixpQkFBeUIsa0JBQTBCO0FBQzdFLFFBQU0sYUFBYTtBQUVuQixTQUNFLENBQUMsQ0FBQyxXQUFXLGNBQ2IsV0FBVyxXQUFXLFNBQVMsSUFBSSxxQkFBcUI7QUFBQTs7O0FEUXJELGtCQUFrQixFQUFFLE1BQU0sWUFBMkI7QUFDMUQsUUFBTSxFQUFFLFlBQVk7QUFDcEIsUUFBTSxDQUFDLFVBQVUsZUFBZSw0QkFBaUI7QUFDakQsUUFBTSxXQUFXLFlBQVksY0FBYyxzQ0FBVSxPQUFNO0FBQzNELFFBQU0sRUFBRSxRQUFRLHVCQUFzQixZQUFZLHdCQUF3QixFQUFFO0FBRTVFLCtCQUFVLE1BQU07QUFDZCxRQUFJLE9BQU8sV0FBVyxhQUFhO0FBQ2pDLGtCQUFZLE9BQU8sU0FBUztBQUFBO0FBQUEsS0FFN0IsQ0FBQztBQUVKLFNBQ0UsMERBQ0Usb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sUUFBUSw4QkFBTTtBQUFBLEtBQ2hDLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFZLE9BQU8sS0FBSztBQUFBLE1BQ2xELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFXLE9BQU8sS0FBSyxLQUFLO0FBQUEsTUFDdEQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQWEsT0FBTyxzQ0FBVSxPQUFNO0FBQUEsTUFDOUQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsT0FBTyxHQUFHLG1DQUFTLFlBQVksbUNBQVM7QUFBQSxNQUMzRSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVyxPQUFPO0FBQUEsTUFDM0MsVUFDQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxPQUFNO0FBQUEsSUFBcUI7QUFBQSxLQUM5QyxXQUNDLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVyxnQ0FBVywyQkFBMkI7QUFBQSxNQUMvQywyQkFBMkI7QUFBQTtBQUFBLE9BSS9CLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVyxnQ0FBVyxzQkFBc0I7QUFBQSxNQUMxQywrQkFBK0I7QUFBQTtBQUFBLFFBTXZDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxJQUFxQixTQUFTLE1BQU0sUUFBUTtBQUFBLEtBQ3hELG9DQUFDLE1BQUQ7QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVTtBQUFBO0FBQUE7OztBRTdEeEI7QUFDQSx5QkFBc0I7OztBQ0R0Qjs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLGNBQWMsT0FBTTtBQUN6QixRQUFNLFVBQVU7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQTtBQUVQLFNBQU8sSUFBSSxLQUFLLGVBQWUsU0FBUyxTQUFTLE9BQU8sSUFBSSxLQUFLO0FBQUE7OztBQ05uRTtBQUFBLG9CQUE2QjtBQUU3QixJQUFJO0FBU0osSUFBSSxPQUF1QztBQUN6QyxPQUFLLElBQUk7QUFDVCxLQUFHO0FBQUEsT0FDRTtBQUNMLE1BQUksQ0FBQyxPQUFPLE1BQU07QUFDaEIsV0FBTyxPQUFPLElBQUk7QUFDbEIsV0FBTyxLQUFLO0FBQUE7QUFFZCxPQUFLLE9BQU87QUFBQTs7O0FIZGQsb0JBQW9DOzs7QUlMcEM7QUFBQSx5QkFBdUI7QUFDdkIsb0JBQXFCO0FBQ3JCLHlCQUFzQjtBQVNmLHdCQUF3QixFQUFFLFVBQVUsWUFBaUM7QUFDMUUsUUFBTSxXQUFXLFlBQVksY0FBYyxTQUFTO0FBQ3BELFNBQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQVEsOEJBQU07QUFBQSxJQUFlLFFBQU87QUFBQSxLQUN4QyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBYSxPQUFPLFNBQVMsTUFBTTtBQUFBLE1BQzdELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFXLE9BQU87QUFBQSxNQUM1QyxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFXLGdDQUFXLHdCQUF3QjtBQUFBLE1BQzVDLGNBQWM7QUFBQTtBQUFBLElBRWhCO0FBQUEsS0FDRDtBQUFBOzs7QUpYQSxtQkFBbUIsRUFBRSxhQUE2QjtBQUN2RCxRQUFNLENBQUMsVUFBVSxlQUFlLDRCQUFpQjtBQUVqRCwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxPQUFPLFdBQVcsYUFBYTtBQUNqQyxrQkFBWSxPQUFPLFNBQVM7QUFBQTtBQUFBLEtBRTdCLENBQUM7QUFFSixTQUNFLG9DQUFDLE9BQUQsTUFDRSwwREFDRSxvQ0FBQyxTQUFTLFNBQVYsTUFBa0IsY0FDakIsVUFBVSxJQUFJLGNBQVk7QUFDekIsV0FDRSxvQ0FBQyxNQUFEO0FBQUEsTUFBSSxLQUFLLFNBQVM7QUFBQSxNQUFJLFdBQVU7QUFBQSxPQUM5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBSyxVQUFOO0FBQUEsTUFBZSxNQUFNLDhCQUFNLFVBQVUsRUFBRSxNQUFNLFNBQVM7QUFBQSxPQUNuRCxTQUFTLGFBR2Qsb0NBQUMsTUFBRCxNQUFJLGtCQUNhLGlCQUFjLEtBQUssU0FBUyxZQUMzQyxvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCO0FBQUEsTUFBb0I7QUFBQTtBQUFBO0FBQUE7OztBS25DcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUEsNEJBQW1DLFNBQXdCO0FBQ3pELFNBQU8sTUFBTSxHQUFHLFNBQVMsU0FBUztBQUFBLElBQ2hDLE9BQU87QUFBQSxNQUNMLFFBQVEsR0FBRyxtQ0FBUyxZQUFZLG1DQUFTO0FBQUE7QUFBQTtBQUFBO0FBSy9DLDJCQUFrQyxVQUFpRDtBQUNqRixTQUFPLE1BQU0sR0FBRyxTQUFTLFVBQVU7QUFBQSxJQUNqQyxPQUFPO0FBQUEsTUFDTCxVQUFVLFNBQVM7QUFBQSxNQUNuQixRQUFRLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFLdkIsOEJBQ0UsVUFDQTtBQUNBLFFBQU0sU0FBUyxNQUFNLFlBQVk7QUFFakMsTUFBSSxDQUFDLFFBQVE7QUFDWCxVQUFNLEdBQUcsU0FBUyxPQUFPO0FBQUEsTUFDdkIsTUFBTTtBQUFBLFFBQ0osV0FBVyxTQUFTO0FBQUEsUUFDcEIsVUFBVSxTQUFTO0FBQUEsUUFDbkIsUUFBUSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNekIsOEJBQXFDLElBQVk7QUFDL0MsUUFBTSxHQUFHLFNBQVMsT0FBTztBQUFBLElBQ3ZCLE9BQU87QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBS04sZ0NBQXVDLFNBQXdCO0FBQzdELE1BQUksQ0FBQztBQUFTLFdBQU87QUFFckIsU0FBTyxHQUFHLFNBQVMsTUFBTTtBQUFBLElBQ3ZCLE9BQU87QUFBQSxNQUNMLFFBQVEsR0FBRyxtQ0FBUyxZQUFZLG1DQUFTO0FBQUE7QUFBQTtBQUFBOzs7QUNsRC9DO0FBQUEsb0JBQW9DO0FBSXBDLHlCQUFzQjtBQUV0QixvQkFBcUI7QUFDckIseUJBQXVCO0FBU2hCLG9CQUFvQixFQUFFLE1BQU0sVUFBVSwrQkFBaUM7QUFDNUUsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLDRCQUFpQjtBQUNuRCxRQUFNLEVBQUUsUUFBUSx1QkFBc0IsWUFBWSx3QkFBd0IsRUFBRTtBQUM1RSxRQUFNLEVBQUUsWUFBWTtBQUNwQixRQUFNLENBQUMsVUFBVSxlQUFlLDRCQUFpQjtBQUNqRCxRQUFNLFdBQVcsWUFBWSxVQUFVLHNDQUFVLE9BQU07QUFFdkQsK0JBQVUsTUFBTTtBQUNkLFFBQUksT0FBTyxXQUFXLGFBQWE7QUFDakMsa0JBQVksT0FBTyxTQUFTO0FBQUE7QUFBQSxLQUU3QixDQUFDO0FBRUosK0JBQVUsTUFBTTtBQUNkLGlCQUFhO0FBQ2IsUUFBSSxrQkFBaUIsR0FBRztBQUN0QixtQkFBYTtBQUFBO0FBQUEsS0FFZCxDQUFDLGNBQWM7QUFFbEIsU0FDRSwwREFDRSxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBTyxRQUFRLDhCQUFNO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FDckQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsT0FBTyxLQUFLO0FBQUEsTUFDL0Msb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsT0FBTyxzQ0FBVSxPQUFNO0FBQUEsTUFDMUQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVMsT0FBTyxHQUFHLG1DQUFTLFlBQVksbUNBQVM7QUFBQSxNQUMzRSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVyxPQUFPO0FBQUEsTUFDM0MsVUFDQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxPQUFNO0FBQUEsSUFBaUI7QUFBQSxLQUMxQyxXQUNDLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVyxnQ0FBVywyQkFBMkI7QUFBQSxNQUMvQywyQkFBMkI7QUFBQTtBQUFBLE9BSS9CLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLE1BQU0sTUFBTTtBQUFBLElBQ1osV0FBVyxnQ0FBVyxzQkFBc0I7QUFBQSxNQUMxQywrQkFBK0I7QUFBQTtBQUFBLFFBTXZDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxJQUFpQixTQUFTLE1BQU0sUUFBUTtBQUFBLEtBQ3BELG9DQUFDLE1BQUQ7QUFBQSxJQUFNLGVBQVk7QUFBQSxJQUFZLE1BQU0sTUFBTTtBQUFBLElBQVUsV0FBVTtBQUFBLE9BR2xFLG9DQUFDLFFBQUQsTUFDRyxlQUFhLEtBQUU7QUFBQTs7O0FDdEUxQjtBQU9PLGlCQUFpQixFQUFFLFFBQXNCO0FBQzlDLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFDRSxNQUFNLEtBQUssaUJBQWlCO0FBQUEsSUFDNUIsbUJBQW1CO0FBQUEsSUFDbkIsT0FBTyxZQUFZLEtBQUs7QUFBQSxLQUV4QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBK0MsYUFDbkQsS0FBSyxNQUFLO0FBQUE7OztBQ2hCOUI7OztBQ0FBO0FBQUEsb0NBQXlCOzs7QUNBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXNCO0FBQ3RCLHdCQUFlO0FBQ2YsaUJBQWdCO0FBQ2hCLGlCQUFnQjtBQUNoQixrQkFBaUI7QUFDakIsd0JBQXVCO0FBQ3ZCLHNCQUFxQjtBQUNyQixrQkFBaUI7QUFDakIsaUJBQWdCO0FBRWhCLCtCQUFVLGlCQUFpQjtBQUMzQiwrQkFBVSxpQkFBaUI7QUFDM0IsK0JBQVUsaUJBQWlCO0FBQzNCLCtCQUFVLGlCQUFpQjtBQUMzQiwrQkFBVSxpQkFBaUI7QUFDM0IsK0JBQVUsaUJBQWlCO0FBQzNCLCtCQUFVLGlCQUFpQjtBQUMzQiwrQkFBVSxpQkFBaUI7QUFFcEIsSUFBTSxjQUFjO0FBQUEsRUFDekIsT0FBTztBQUFBLElBQ0wsTUFBTSxXQUNKLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLGdDQUFEO0FBQUEsTUFDRSxVQUFVLE1BQU0sS0FBSztBQUFBLE1BQ3JCLE9BQU8sTUFBTSxLQUFLO0FBQUEsTUFDbEIsU0FBUyxNQUFNLEtBQUs7QUFBQTtBQUFBO0FBQUEsRUFLNUIsT0FBTztBQUFBLElBQ0wsV0FBVyxXQUFTO0FBQ2xCLGFBQU8sb0NBQUMsUUFBRDtBQUFBLFFBQU0sT0FBTyxFQUFFLGlCQUFpQixNQUFNLEtBQUs7QUFBQSxTQUFVLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLakUsc0JBQXNCLFFBQVE7QUFDbkMsU0FBTyxPQUNKLE9BQU8sQ0FBQyxFQUFFLFlBQVksVUFBVSxTQUNoQyxJQUFJLFdBQVMsTUFBTSxTQUFTLElBQUksV0FBUyxNQUFNLE1BQU0sS0FBSztBQUFBOzs7QUR0Q3hELGtCQUFpQixFQUFFLFVBQVU7QUFDbEMsU0FDRSxvQ0FBQyx1Q0FBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQSxXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUE7QUFBQTs7O0FiVVAsY0FBYztBQUFBLEVBQ25CO0FBQUEsRUFDQSxVQUFVO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEdBQ1k7QUFDWixRQUFNLFVBQVUsYUFBYSxhQUFhLEtBQUssU0FBUyxLQUFLO0FBQzdELFFBQU0sZ0JBQWdCLG9DQUFJO0FBRTFCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQVMsTUFBTSxRQUFRO0FBQUEsTUFDdkIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSyxRQUFRO0FBQUEsSUFDYixXQUFVO0FBQUEsSUFDVixLQUFLLEdBQUcsS0FBSztBQUFBLE9BR2pCLG9DQUFDLE9BQUQsTUFDRSwwREFDRyxVQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFrSCwwQkFHL0gsTUFDSixvQ0FBQyxTQUFTLFNBQVYsTUFDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWixLQUFLLE9BQ04sb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQVU7QUFBQSxJQUFZO0FBQUEsUUFHMUIsb0NBQUMsWUFBRDtBQUFBLElBQVk7QUFBQSxJQUFZO0FBQUEsSUFBb0IsY0FBYztBQUFBLFFBRzlELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBRyxPQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFpQixLQUFLLFNBQWMsTUFBRyxLQUMxRCxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQU0sV0FBVyxLQUFLO0FBQUEsS0FBZSxLQUFLLGNBRTNELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQUksYUFBVSxpQkFBYyxLQUFLLEtBQUssZUFFeEMsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSxpQkFBYyxpQkFBYyxLQUFLLEtBQUssZUFFNUMsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE4QixtQkFDM0IsZUFBYyx5REFJbkMsb0NBQUMsVUFBRDtBQUFBLElBQVMsUUFBUSxLQUFLO0FBQUEsTUFDdEIsb0NBQUMsVUFBRDtBQUFBOzs7QWU1RVY7OztBQ0FBO0FBQUEseUJBQXNCO0FBSXRCLHlCQUF1QjtBQWlCaEIsY0FBYyxFQUFFLE1BQU0sU0FBUyxTQUFTLFFBQVEsU0FBb0I7QUFDekUsUUFBTSxFQUFFLE1BQU0sU0FBUyxXQUFXLE9BQU8sV0FBVyxvQkFBb0I7QUFDeEUsUUFBTSxFQUFFLE1BQU0sWUFBWSxVQUFVO0FBRXBDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVyxnQ0FBVztBQUFBLE1BQ3BCLGtCQUFrQjtBQUFBLE1BQ2xCLDRCQUE0QixDQUFDO0FBQUE7QUFBQSxLQUcvQixvQ0FBQyxTQUFEO0FBQUEsSUFBUztBQUFBLE1BQ1Qsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSyxRQUFRLFlBQVk7QUFBQSxJQUN6QixXQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsT0FHVCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUNFLE1BQU0sOEJBQU0sVUFBVTtBQUFBLE1BQ3BCLE1BQU0sS0FBSztBQUFBO0FBQUEsSUFFYixlQUFZO0FBQUEsS0FFWixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBOEIsaUJBQWMsS0FBSyxjQUM5RCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBd0QsUUFDcEUsVUFBVSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBMkMsV0FBZTtBQUFBOzs7QUR4Q3JGLGVBQWUsRUFBRSxPQUFPLFlBQXdCO0FBQ3JELFFBQU0sQ0FBQyxjQUFjLGtCQUFrQjtBQUN2QyxRQUFNLENBQUMsaUJBQWlCLHFCQUFxQjtBQUM3QyxRQUFNLENBQUMsV0FBVyxhQUFhLGFBQWEsVUFBVTtBQUV0RCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQU07QUFBQSxJQUFXO0FBQUEsSUFBa0IsU0FBUztBQUFBLE9BRXBELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLGVBQWUsSUFBSSxDQUFDLE1BQU0sVUFDekIsb0NBQUMsTUFBRDtBQUFBLElBQUksS0FBSyxLQUFLO0FBQUEsS0FDWixvQ0FBQyxNQUFEO0FBQUEsSUFBTTtBQUFBLElBQVksU0FBUyxrQkFBa0I7QUFBQSxJQUFRLE9BQUs7QUFBQTtBQUFBOzs7QUV0QnRFO0FBRU8sb0JBQW9CO0FBQ3pCLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQ0UsT0FBTyxFQUFFLE9BQU87QUFBQSxJQUNoQixLQUFLLGFBQVc7QUFDZCxVQUFJLENBQUMsU0FBUztBQUNaO0FBQUE7QUFHRixZQUFNLGdCQUFnQixTQUFTLGNBQWM7QUFDN0Msb0JBQWMsYUFBYSxPQUFPO0FBQ2xDLG9CQUFjLGFBQWEsUUFBUSxHQUFHLFlBQVk7QUFDbEQsb0JBQWMsYUFBYSxjQUFjO0FBQ3pDLG9CQUFjLGFBQWEsU0FBUztBQUNwQyxvQkFBYyxhQUFhLGVBQWU7QUFDMUMsb0JBQWMsYUFBYSxTQUFTO0FBQ3BDLGNBQVEsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QXhCWHpCLHFCQUFxQixTQUF5QjtBQUNuRCxTQUFPLDRCQUFTLFNBQVMsRUFBRSxRQUFRO0FBQUE7QUFHOUIsc0JBQXNCO0FBQzNCLFNBQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLFNBQVMsR0FBRztBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsZ0JBQWdCO0FBQUEsSUFDaEIsWUFBWSxHQUFHO0FBQUEsSUFDZixrQkFBa0I7QUFBQSxJQUNsQixVQUFVLFdBQVc7QUFBQSxJQUNyQixZQUFZLFdBQVc7QUFBQSxJQUN2QixpQkFBaUIsV0FBVztBQUFBLElBQzVCLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLElBQ2hCLG1CQUFtQjtBQUFBLElBQ25CLHVCQUF1QjtBQUFBO0FBQUE7QUFJcEIsdUJBQXVCO0FBQzVCLFNBQU87QUFBQSxJQUNMLEVBQUUsS0FBSyxZQUFZLE1BQU07QUFBQSxJQUN6QixFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUEsSUFDM0IsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBLElBQzNCLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQixFQUFFLEtBQUssb0JBQW9CLE1BQU0sNkJBQTZCLE9BQU87QUFBQSxJQUNyRSxFQUFFLEtBQUssUUFBUSxNQUFNLDBCQUEwQixNQUFNO0FBQUEsSUFDckQsRUFBRSxLQUFLLFFBQVEsTUFBTSwwQkFBMEIsTUFBTTtBQUFBLElBQ3JELEVBQUUsS0FBSyxhQUFhLE1BQU0sOEJBQThCLE9BQU87QUFBQSxJQUMvRDtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTSxXQUFXO0FBQUEsTUFDakIsT0FBTyxHQUFHO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNLFdBQVc7QUFBQSxNQUNqQixPQUFPLEdBQUc7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU0sV0FBVztBQUFBLE1BQ2pCLE9BQU8sR0FBRztBQUFBO0FBQUE7QUFBQTtBQUtULGtCQUFrQixNQUFrRDtBQUN6RSxRQUFNLFVBQVUsYUFBYSxhQUFhLEtBQUssS0FBSztBQUNwRCxRQUFNLE9BQU8sWUFBWSxRQUFRLEtBQUs7QUFFdEMsU0FBTztBQUFBLElBQ0wsU0FBUyxHQUFHLGtCQUFrQixLQUFLLEtBQUs7QUFBQSxJQUN4QyxlQUFlO0FBQUEsSUFDZixZQUFZLEdBQUcsa0JBQWtCLEtBQUssS0FBSztBQUFBLElBQzNDLGtCQUFrQjtBQUFBLElBQ2xCLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLO0FBQUEsSUFDOUMsdUJBQXVCO0FBQUEsSUFDdkIsWUFBWSxXQUFXLGNBQWMsS0FBSyxLQUFLLEtBQUs7QUFBQSxJQUNwRCxpQkFBaUIsV0FBVyxjQUFjLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQTs7O0FEeEQ3RCxxQkFBOEI7OztBMEJsQjlCO0FBQUEsb0JBQXdDO0FBQ3hDLHFCQUEwQjtBQUUxQixJQUFJLFVBQVU7QUFFUCxpQ0FBaUM7QUFDdEMsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sV0FBVztBQUVqQixnQ0FBVSxNQUFNO0FBVGxCO0FBVUksVUFBTSxVQUFVO0FBQ2hCLGNBQVU7QUFDVixRQUFJLG1CQUFtQixXQUFXO0FBQ2hDLFVBQUksVUFBVSxjQUFjLFlBQVk7QUFDdEMsd0JBQVUsY0FBYyxlQUF4QixtQkFBb0MsWUFBWTtBQUFBLFVBQzlDLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFVBQ0EsVUFBVSxPQUFPO0FBQUE7QUFBQSxhQUVkO0FBQ0wsY0FBTSxXQUFXLFlBQVk7QUF0QnJDO0FBdUJVLGdCQUFNLFVBQVUsY0FBYztBQUM5QiwyQkFBVSxjQUFjLGVBQXhCLG9CQUFvQyxZQUFZO0FBQUEsWUFDOUMsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQSxVQUFVLE9BQU87QUFBQTtBQUFBO0FBR3JCLGtCQUFVLGNBQWMsaUJBQWlCLG9CQUFvQjtBQUM3RCxlQUFPLE1BQU07QUFDWCxvQkFBVSxjQUFjLG9CQUFvQixvQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlyRSxDQUFDLFVBQVU7QUFBQTs7O0ExQkFULElBQU0sd0JBQXdCLGtDQUEyQztBQUN6RSxJQUFNLG1CQUFtQixrQ0FBZ0Q7QUFBQSxFQUM5RSxjQUFjO0FBQUE7OztBRHJDVCxJQUFNLGFBQWEsTUFBTTtBQUM5QixRQUFNLEVBQUUsWUFBWSwrQkFBVztBQUUvQixTQUFPLEVBQUU7QUFBQTs7O0E0Qk5YO0FBQUEscUJBQTJCO0FBR3BCLElBQU0sc0JBQXNCLE1BQU07QUFDdkMsUUFBTSxFQUFFLGlCQUFpQiwrQkFBVztBQUVwQyxTQUFPLEVBQUU7QUFBQTs7O0FDTlg7QUFBQSxxQkFBeUI7QUFRbEIsSUFBTSwwQkFBMEIsQ0FBQyxFQUFFLFdBQXNDO0FBQzlFLFFBQU0sQ0FBQyxNQUFNLFdBQVcsNkJBQVM7QUFFakMsU0FBTztBQUFBLElBQ0wsUUFBUSxNQUFNLG9DQUFDLHNCQUFEO0FBQUEsTUFBc0I7QUFBQSxNQUFZLFNBQVMsTUFBTSxRQUFRO0FBQUEsTUFBUTtBQUFBO0FBQUEsSUFDL0U7QUFBQTtBQUFBOzs7QTlCVEcsa0JBQWtCO0FBQ3ZCLFFBQU0sRUFBRSxZQUFZO0FBQ3BCLFFBQU0sRUFBRSxpQkFBaUI7QUFFekIsU0FDRSxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU0sOEJBQU07QUFBQSxLQUNiLHFCQUlILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSw4QkFBTTtBQUFBLEtBQ2IsZUFJSCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLDhCQUFNO0FBQUEsS0FDYixXQUlGLGVBQ0Msb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSw4QkFBTTtBQUFBLEtBQ2IsZ0JBSUQsTUFDSixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FDUCxnQkFJRixVQUFVLG9DQUFDLFNBQUQsUUFBYyxNQUN6QixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsUUFBRDtBQUFBOzs7QStCeERSO0FBQUEscUJBQWtCO0FBTVgsZUFBZSxFQUFFLFlBQXdCO0FBQzlDLFNBQ0UscURBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1o7QUFBQTs7O0FDVFA7QUFBQSxxQkFBeUI7QUFDekIscUJBQWlDO0FBQ2pDLHlCQUF1QjtBQUloQixrQkFBa0I7QUFDdkIsU0FDRSxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ3ZCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxvQkFBSyxRQUFOO0FBQUEsSUFDRSxPQUFNO0FBQUEsSUFDTixlQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVSxtQkFDMUIsb0NBQUMsTUFBRDtBQUFBLElBQU0sTUFBTSxNQUFNO0FBQUEsSUFBUSxXQUFVO0FBQUEsUUFHeEMsb0NBQUMsMkJBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxLQUVSLG9DQUFDLG9CQUFLLE9BQU47QUFBQSxJQUNFLGVBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxLQUVWLG9DQUFDLG9CQUFLLE1BQU4sTUFDRyxDQUFDLEVBQUUsYUFDRixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFNLHNCQUFzQixZQUFZO0FBQUEsSUFDeEMsUUFBTztBQUFBLElBQ1AsS0FBSTtBQUFBLElBQ0osV0FBVyxnQ0FDVCxTQUFTLGdCQUFnQixJQUN6QjtBQUFBLEtBR0Ysb0NBQUMsTUFBRDtBQUFBLElBQU0sTUFBTSxNQUFNO0FBQUEsSUFBUSxXQUFVO0FBQUEsTUFBMEIsNkJBS3BFLG9DQUFDLG9CQUFLLE1BQU4sTUFDRyxDQUFDLEVBQUUsYUFDRixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFNLHNCQUFzQjtBQUFBLElBQzVCLFFBQU87QUFBQSxJQUNQLEtBQUk7QUFBQSxJQUNKLFdBQVcsZ0NBQ1QsU0FBUyxnQkFBZ0IsSUFDekI7QUFBQSxLQUdGLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQU0sTUFBTTtBQUFBLElBQVEsV0FBVTtBQUFBLE1BQTBCO0FBQUE7OztBQzNEOUU7QUFBQSxxQkFBeUI7QUFDekIscUJBQW1DO0FBRW5DLHlCQUFzQjtBQVNmLDhCQUE4QixFQUFFLE1BQU0sU0FBUyxRQUE2QjtBQUNqRixTQUNFLG9DQUFDLDBCQUFXLE1BQVo7QUFBQSxJQUFpQixNQUFNO0FBQUEsSUFBTSxJQUFJO0FBQUEsS0FDL0Isb0NBQUMsdUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILGVBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWO0FBQUEsS0FFQSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQywwQkFBVyxPQUFaO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxzQkFBTyxTQUFSO0FBQUEsSUFBZ0IsV0FBVTtBQUFBLE9BRTVCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFxRCxlQUFZO0FBQUEsS0FBTyxXQUd4RixvQ0FBQywwQkFBVyxPQUFaO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixXQUFVO0FBQUEsSUFDVixTQUFRO0FBQUEsS0FFUixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBTSxNQUFNLE1BQU07QUFBQSxJQUFRLFdBQVU7QUFBQSxRQUd4QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxRQUFRLDhCQUFNO0FBQUEsSUFBaUIsUUFBTztBQUFBLElBQU8sV0FBVTtBQUFBLEtBQzNELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFPLE9BQU8sS0FBSyxLQUFLO0FBQUEsTUFDbEQsb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsZUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0FDekRqQjtBQUFBLHlCQUFzQjtBQUVmLG1CQUFtQjtBQUN4QixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFFBQVEsOEJBQU07QUFBQSxJQUFZLFFBQU87QUFBQSxLQUNyQyxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FBaUQ7QUFBQTs7O0FDTHZGO0FBTU8sdUJBQXVCLEVBQUUsWUFBZ0M7QUFDOUQsU0FDRSxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDaEI7QUFBQTs7O0FDVFA7QUFDQSxxQkFBb0M7QUFDcEMscUJBQTJCO0FBQzNCLHlCQUF1QjtBQUN2QixxQkFBNEI7QUFFNUIsSUFBSztBQUFMLFVBQUssVUFBTDtBQUNFO0FBQ0E7QUFBQSxHQUZHO0FBU0UsOEJBQThCLEVBQUUsV0FBc0M7QUFDM0UsUUFBTSxDQUFDLFNBQVMsY0FBYyw2QkFBUztBQUN2QyxRQUFNLFlBQVk7QUFDbEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0saUJBQWlCLFlBQVksS0FBZ0IsU0FBUyxhQUFhO0FBRXpFLGdDQUFVLE1BQU07QUFDZCx3QkFBb0I7QUFDbEIsWUFBTSxrQkFBa0IsT0FBTztBQUMvQixVQUFJLGtCQUFrQixXQUFXO0FBQy9CLG1CQUFXO0FBQUEsYUFDTjtBQUNMLG1CQUFXO0FBQUE7QUFBQTtBQUlmLFdBQU8saUJBQWlCLFVBQVU7QUFDbEMsV0FBTyxNQUFNLE9BQU8sb0JBQW9CLFVBQVU7QUFBQSxLQUNqRCxDQUFDO0FBRUosU0FDRSxvQ0FBQywyQkFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLElBQ1IsV0FBVyxnQ0FDVCwyRUFDQTtBQUFBLE1BQ0Usc0NBQXNDLFlBQVk7QUFBQSxNQUNsRCxxQ0FBcUMsWUFBWTtBQUFBLE1BQ2pELGFBQWE7QUFBQTtBQUFBLEtBSWhCLFlBQVksSUFDWCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixlQUFZO0FBQUEsS0FFWixvQ0FBQyxNQUFEO0FBQUEsSUFBTSxNQUFNLE1BQU07QUFBQSxRQUVsQixNQUNILFlBQVksSUFDWCxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLGVBQVk7QUFBQSxLQUVaLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQU0sTUFBTTtBQUFBLElBQU0sV0FBVTtBQUFBLFFBRWxDO0FBQUE7QUFLVixxQkFBcUIsVUFBVTs7O0FoRHpEL0IscUJBQThCO0FBSXZCLElBQU0sU0FBdUI7QUFFN0IsSUFBTSxPQUFxQjtBQU8zQixJQUFNLFNBQXlCLE9BQU8sRUFBRSxjQUFjO0FBL0I3RDtBQWdDRSxRQUFNLFVBQVcsWUFBTSxLQUFLLGdCQUFnQixhQUEzQixtQkFBc0M7QUFDdkQsUUFBTSxlQUFnQixNQUFNLHFCQUFhLGlCQUFpQixXQUFhO0FBRXZFLFNBQU8seUJBQWlCLEVBQUUsU0FBUztBQUFBO0FBRzlCLElBQU0seUJBQXdCLGtDQUEyQztBQUN6RSxJQUFNLG9CQUFtQixrQ0FBZ0Q7QUFBQSxFQUM5RSxjQUFjO0FBQUE7QUFHRCxlQUFlO0FBQzVCO0FBRUEsUUFBTSxFQUFFLFNBQVMsaUJBQWlCO0FBQ2xDLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQUssV0FBVTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMscUJBQUQsT0FDQSxvQ0FBQyxzQkFBRCxPQUdBLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQUs7QUFBQSxJQUFDLGVBQWE7QUFBQSxJQUFRLEtBQUk7QUFBQSxPQUV6QyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyx1QkFBc0IsVUFBdkI7QUFBQSxJQUFnQyxPQUFPLEVBQUU7QUFBQSxLQUN2QyxvQ0FBQyxrQkFBaUIsVUFBbEI7QUFBQSxJQUEyQixPQUFPLEVBQUU7QUFBQSxLQUNsQyxvQ0FBQyxRQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQyxRQUFELFNBR0osb0NBQUMsc0JBQUQ7QUFBQSxJQUFzQixTQUFTLHFCQUFxQixRQUFRO0FBQUEsTUFDNUQsb0NBQUMsc0JBQUQ7QUFBQSxJQUFzQixTQUFTLHFCQUFxQixRQUFRO0FBQUEsT0FFOUQsb0NBQUMsTUFBRCxPQUNBLG9DQUFDLGtDQUFELE9BQ0Esb0NBQUMsd0JBQUQsT0FDMkMsb0NBQUMsMkJBQUQ7QUFBQTs7O0FpRHpFbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLDBCQUFzQjtBQUlmLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxTQUFTLE1BQU0sWUFBWSxTQUFTO0FBRTFDLFNBQU8sS0FBSyxhQUFhLFVBQVUsU0FBUztBQUFBLElBQzFDLGlCQUFpQixJQUFJLFlBQVk7QUFBQSxJQUNqQyxpQkFBaUIsK0JBQU07QUFBQTtBQUFBOzs7QUNWM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFEO0FBSTlDLElBQU0sVUFBeUIsTUFBTTtBQUMxQyxRQUFNLHlCQUFLLElBQUksRUFBRSxRQUFRO0FBQUE7QUFHcEIsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLE9BQU8sT0FBTyxZQUFZLE1BQU0sUUFBUTtBQUU5QyxRQUFNLFdBQVcsT0FBTyxLQUFLLFFBQVE7QUFDckMsTUFBSTtBQUNGLFdBQU8sTUFBTSxLQUFLLGFBQWEsVUFBVSxTQUFTO0FBQUEsTUFDaEQsaUJBQWlCLFlBQVk7QUFBQSxNQUM3QixpQkFBaUI7QUFBQTtBQUFBLFdBRVosT0FBUDtBQUVBLFFBQUksQ0FBQztBQUFVLFlBQU07QUFDckIsUUFBSSxpQkFBaUIsVUFBVTtBQUM3QixZQUFNLFFBQVEsT0FDWixjQUNBLE1BQU0scUJBQXFCLFVBQVUsVUFBVTtBQUFBLFFBQzdDLFVBQVU7QUFBQTtBQUlkLGFBQU87QUFBQTtBQUVULFVBQU07QUFBQTtBQUFBOzs7QUM5QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFBOEU7QUFDOUUsMEJBQXNCO0FBUWYsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQVY3RDtBQVdFLFFBQU0sVUFBVyxZQUFNLEtBQUssZ0JBQWdCLGFBQTNCLG1CQUFzQztBQUV2RCxNQUFLLE1BQU0scUJBQWEsaUJBQWlCLGFBQWUsR0FBRztBQUN6RCxXQUFPLDZCQUFTLCtCQUFNO0FBQUE7QUFHeEIsU0FBTyx5QkFBaUIsRUFBRSxXQUFXLE1BQU0scUJBQWEsYUFBYTtBQUFBO0FBR2hFLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFFBQVE7QUFFakQsTUFBSSxRQUFRLFlBQVk7QUFDdEIsVUFBTSxxQkFBYSxlQUFlLFFBQVE7QUFBQSxTQUNyQztBQUNMLFVBQU0scUJBQWEsZUFBZTtBQUFBLE1BQ2hDLFdBQVcsUUFBUTtBQUFBLE1BQ25CLFVBQVUsUUFBUTtBQUFBLE1BQ2xCLFFBQVEsUUFBUTtBQUFBO0FBQUE7QUFJcEIsTUFBSSxRQUFRLFlBQVk7QUFDdEIsV0FBTyw2QkFBUyxPQUFPLFFBQVE7QUFBQTtBQUdqQyxTQUFPLDZCQUFTLCtCQUFNLFVBQVUsRUFBRSxNQUFNLFFBQVE7QUFBQTtBQUduQyw2QkFBWTtBQUN6QixRQUFNLEVBQUUsY0FBYztBQUV0QixTQUFPLG9DQUFDLFdBQUQ7QUFBQSxJQUFXO0FBQUE7QUFBQTs7O0FDM0NwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsNkJBQVk7QUFDekIsU0FDRSxvQ0FBQyxPQUFELE1BQ0UsMERBQ0Usb0NBQUMsU0FBUyxTQUFWLE1BQWtCLG9CQUNsQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBa0IsaURBQ2hDLG9DQUFDLE1BQUQsTUFBSSxrREFHUixvQ0FBQyxjQUFEO0FBQUEsSUFBWSxXQUFVO0FBQUEsS0FBMEIsb0VBR2hELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsU0FBUyxXQUFWLE1BQW9CLGlDQUV0QixvQ0FBQyxNQUFELE1BQUksdUNBQzJCLEtBQzdCLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQW9CLHdCQUc1QyxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUNFLG9DQUFDLFNBQVMsV0FBVixNQUFvQix1Q0FFdEIsb0NBQUMsTUFBRCxNQUFJLDBDQUNxQyxLQUN2QyxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQUs7QUFBQSxLQUF5Qiw2QkFHakQsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxTQUFTLFdBQVYsTUFBb0IsMENBRXRCLG9DQUFDLE1BQUQsTUFBSSw0SkFFcUUsS0FDdkUsb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFBZSxNQUFLO0FBQUEsS0FBd0QsNERBS2hGLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsU0FBUyxXQUFWLE1BQW9CLGlDQUV0QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFBZSxNQUFLO0FBQUEsS0FBZ0MseUJBR3hELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsU0FBUyxXQUFWLE1BQW9CLDJCQUV0QixvQ0FBQyxNQUFELE1BQUksZ0xBRW9GLEtBQ3RGLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQXVCLDBCQUcvQyxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUNFLG9DQUFDLFNBQVMsV0FBVixNQUFvQixrQ0FFdEIsb0NBQUMsTUFBRCxNQUFJLHVFQUNrRSxLQUNwRSxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQUs7QUFBQSxLQUF5Qiw0QkFHakQsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxTQUFTLFdBQVYsTUFBb0IsZ0NBRXRCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQWdDLFdBRXRELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQUs7QUFBQSxLQUFtQyxtQkFFekQsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQStCLHFCQUVyRCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFBZSxNQUFLO0FBQUEsS0FBaUMsbUJBRXZELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQUs7QUFBQSxLQUFnQyx3QkFFdEQsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQWtDLG9CQUVyQyxLQUFJO0FBQUE7OztBQ2pHckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFEO0FBRzlDLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxLQUFLLE9BQU8sU0FBUyxFQUFFLFlBQVk7QUFBQTtBQUdwQyxJQUFNLFVBQXlCLE1BQU07QUFDMUMsUUFBTSx5QkFBSyxJQUFJLEVBQUUsUUFBUTtBQUFBOzs7QUNSM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQUEyRjs7O0FDRDNGOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsdUJBQThCLE1BQXVDO0FBQ25FLFNBQU8sTUFBTSxHQUFHLEtBQUssVUFBVTtBQUFBLElBQzdCLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSztBQUFBLE1BQ2IsUUFBUSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBS25CLDBCQUFpQyxNQUF1QztBQUN0RSxRQUFNLFNBQVMsTUFBTSxRQUFRO0FBRTdCLE1BQUksQ0FBQyxRQUFRO0FBQ1gsVUFBTSxHQUFHLEtBQUssT0FBTztBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFFBQVEsS0FBSztBQUFBLFFBQ2IsUUFBUSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNckIsMEJBQWlDLElBQVk7QUFDM0MsUUFBTSxHQUFHLEtBQUssT0FBTztBQUFBLElBQ25CLE9BQU87QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBS04sNEJBQW1DLEVBQUUsU0FBUyxNQUEwQjtBQUN0RSxTQUFPLEdBQUcsS0FBSyxNQUFNO0FBQUEsSUFDbkIsT0FBTztBQUFBLE1BQ0w7QUFBQTtBQUFBO0FBQUE7Ozs7OztBRjFCQyxJQUFNLFNBQXVCLE1BQU07QUFBQSxFQUN4QztBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUE7QUFJSCxJQUFNLFFBQXFCLENBQUMsRUFBRSxXQUFXO0FBQzlDLFNBQU8sU0FBUztBQUFBO0FBWVgsSUFBTSxVQUF5QixPQUFPO0FBQUEsRUFDM0M7QUFBQSxFQUNBO0FBQUEsTUFDb0M7QUFqQ3RDO0FBa0NFLFFBQU0sYUFBYSxJQUFJLElBQUksbUNBQVM7QUFDcEMsUUFBTSxVQUFVLGdEQUFZLGlCQUFaLG1CQUEwQixJQUFJLGdCQUFlLFFBQVEsSUFBSTtBQUN6RSxNQUFJLE9BQU8sTUFBTSxnQkFBUSxRQUFRLE9BQU8sTUFBTTtBQUU5QyxNQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsR0FBRztBQUM5QixXQUFPLDZCQUFTO0FBQUE7QUFHbEIsU0FBTyx1QkFBdUIsTUFBTTtBQUVwQyxRQUFNLFVBQVcsWUFBTSxLQUFLLGdCQUFnQixhQUEzQixtQkFBc0M7QUFFdkQsUUFBTSxpQkFBaUIsb0JBQVksWUFBWSxFQUFFLFVBQVU7QUFFM0QsUUFBTSxzQkFBc0IsaUJBQVMsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUVqRSxRQUFNLGtCQUFrQixxQkFBYSxZQUFZO0FBQUEsSUFDL0MsUUFBUSxHQUFHLG1DQUFTLFlBQVksbUNBQVM7QUFBQSxJQUN6QyxVQUFVLE9BQU87QUFBQTtBQUduQixRQUFNLGNBQWMsaUJBQVMsUUFBUTtBQUFBLElBQ25DLFFBQVEsR0FBRyxtQ0FBUyxZQUFZLG1DQUFTO0FBQUEsSUFDekMsUUFBUSxLQUFLO0FBQUE7QUFHZixRQUFNLENBQUMsU0FBUyxVQUFVLFVBQVUsaUJBQWdCLE1BQU0sUUFBUSxJQUFJO0FBQUEsSUFDcEU7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUdGLFNBQU8seUJBQWlCLEVBQUUsTUFBTSxTQUFTLFNBQVMsUUFBUSxJQUFJLFVBQVUsVUFBVTtBQUFBO0FBR3JFLGlCQUFpQjtBQUM5QixRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLDhCQUFlO0FBQUEsTUFDYjtBQUVKLFNBQ0Usb0NBQUMsTUFBRDtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQSxjQUFjO0FBQUE7QUFBQTs7O0FHdkZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2UseUJBQVk7QUFDekIsU0FDRSxvQ0FBQyxPQUFELE1BQ0UsMERBQ0Usb0NBQUMsU0FBUyxTQUFWLE1BQWtCLFVBQ2xCLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxLQUFELE1BQUcsNkJBQ3lCLEtBQzFCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUE4QixvQkFDOUMsb0NBQUMsTUFBRCxPQUNBLG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQStCLDBCQUVyRCxvQ0FBQyxLQUFELE1BQUcsZ0RBQzRDLEtBQzdDLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUE4QiwwQkFHbEQsb0NBQUMsU0FBUyxXQUFWLE1BQW9CLGVBQ3BCLG9DQUFDLEtBQUQsTUFBRyxrRUFDOEQsS0FDL0Qsb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFBZSxNQUFNLHdCQUF3QjtBQUFBLEtBQzFDLGdCQUFnQixZQUdyQixvQ0FBQyxTQUFTLFdBQVYsTUFBb0IsaUJBQ3BCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNYLG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQU0sTUFBTTtBQUFBLElBQVMsV0FBVTtBQUFBLE1BQWlDLDZCQUV0RSxvQ0FBQyxLQUFLLFVBQU47QUFBQSxJQUFlLE1BQUs7QUFBQSxLQUFvQywrQkFJMUQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1gsb0NBQUMsTUFBRDtBQUFBLElBQU0sTUFBTSxNQUFNO0FBQUEsSUFBUSxXQUFVO0FBQUEsTUFBaUMsZUFFckUsb0NBQUMsS0FBSyxVQUFOO0FBQUEsSUFBZSxNQUFLO0FBQUEsS0FBb0MsK0JBSTFELG9DQUFDLFNBQVMsV0FBVixNQUFvQiw2QkFDcEIsb0NBQUMsS0FBRCxNQUFHLDJEQUVELG9DQUFDLEtBQUssVUFBTjtBQUFBLElBQWUsTUFBSztBQUFBLEtBQXFDO0FBQUE7OztBQzdDbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvQjtBQUNwQixxQkFBbUU7Ozs7OztBQVc1RCxJQUFNLFNBQXVCLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBRS9ELElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsTUFBSTtBQUNGLFVBQU0sRUFBRSxhQUFhLE1BQU0sWUFBWSxTQUFTO0FBQ2hELFVBQU0sUUFBUyxNQUFNLGdCQUFRLFNBQVMsRUFBRSxlQUFnQjtBQUN4RCxVQUFNLFdBQVcsNEJBQVEsTUFBTSxvQkFBWSxZQUFZLEVBQUUsVUFBVTtBQUVuRSxXQUFPLHlCQUFpQixFQUFFLE9BQU87QUFBQSxXQUMxQixPQUFQO0FBQ0EsVUFBTSxJQUFJLFNBQVMsZ0JBQWdCLEVBQUUsUUFBUTtBQUFBO0FBQUE7QUFJbEMsa0JBQWlCO0FBQzlCLFFBQU0sRUFBRSxPQUFPLGFBQWE7QUFFNUIsU0FBTyxvQ0FBQyxPQUFEO0FBQUEsSUFBTztBQUFBLElBQWM7QUFBQTtBQUFBO0FBR3ZCLElBQU0saUJBQWdCLE1BQzNCLG9DQUFDLGVBQUQsTUFBc0I7OztBQ2pDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBQXlEO0FBT2xELElBQU0sVUFBeUIsWUFBWTtBQUNoRCxTQUFPLDZCQUFTLGFBQWEsRUFBRSxRQUFRO0FBQUE7QUFHbEMsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sUUFBUTtBQUVqRCxNQUFJLFFBQVEsUUFBUTtBQUNsQixVQUFNLGlCQUFTLFdBQVcsUUFBUTtBQUFBLFNBQzdCO0FBQ0wsVUFBTSxpQkFBUyxXQUFXO0FBQUEsTUFDeEIsUUFBUSxRQUFRO0FBQUEsTUFDaEIsUUFBUSxRQUFRO0FBQUE7QUFBQTtBQUlwQixTQUFPLDZCQUFTLE9BQU8sUUFBUTtBQUFBOzs7QUN4QmpDO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQkFBcUIsRUFBQyxNQUFLLHNCQUFxQixZQUFXLFFBQU8sUUFBTyxlQUFjLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLCtCQUE4QixFQUFDLE1BQUssK0JBQThCLFlBQVcsUUFBTyxRQUFPLHdCQUF1QixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrREFBaUQsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLFFBQU8sUUFBTyxhQUFZLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHVDQUFzQyxXQUFVLENBQUMsb0NBQW1DLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixRQUFNLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlCQUFnQixFQUFDLE1BQUssaUJBQWdCLFlBQVcsUUFBTyxRQUFPLFVBQVMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsb0NBQW1DLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLFFBQU8sUUFBTyxhQUFZLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHVDQUFzQyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FsRWF6cUgsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosc0JBQXNCO0FBQUEsSUFDbEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixvQkFBb0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG9CQUFvQjtBQUFBLElBQ2hCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRGxGZCx3QkFBd0IsT0FBTyxTQUFTO0FBQ3RDLE1BQUk7QUFDSixNQUFJO0FBRUosTUFBSSxNQUFNLGlCQUFpQixNQUFNO0FBQy9CLHdCQUFvQixNQUFNO0FBQUE7QUFHNUIsUUFBTSxhQUFhLE1BQU0sUUFBUTtBQUNqQyxRQUFNLHVCQUF1QixNQUFNLFFBQVE7QUFFM0MsTUFBSSxjQUFjLFFBQVEsWUFBWSxLQUFLLGFBQWE7QUFDdEQsNkJBQXlCLFdBQVcsTUFBTSxLQUFLO0FBQUE7QUFHakQsUUFBTSxjQUFjO0FBQUEsSUFDbEIsK0JBQStCO0FBQUEsSUFDL0I7QUFBQSxJQUNBLHVCQUF1QjtBQUFBO0FBSXpCLFNBQU8sS0FBSyxhQUFhLFFBQVEsU0FBTztBQUN0QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLHlDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
