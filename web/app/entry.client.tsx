import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';

if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

hydrate(<RemixBrowser />, document);
