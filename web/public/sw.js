importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

// Cache images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
  })
);

// Cache Google Fonts CSS file
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache .js and .css files
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'static-resources',
  })
);

// Cache Plausible Analytics client
workbox.routing.registerRoute(/.*(?:plausible)\.io.*$/, workbox.strategies.staleWhileRevalidate());

// Cache Utterance comments
workbox.routing.registerRoute(/.*(?:utteranc)\.es.*$/, workbox.strategies.staleWhileRevalidate());

// Cache Google Fonts
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
  })
);
