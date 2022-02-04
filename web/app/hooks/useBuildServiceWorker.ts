import { useLocation, useMatches } from 'remix';
import { useEffect } from 'react';

let isMount = true;

export function useBuildServiceWorker() {
  const matches = useMatches();
  const location = useLocation();

  useEffect(() => {
    const mounted = isMount;
    isMount = false;
    if ('serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: 'REMIX_NAVIGATION',
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        const listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: 'REMIX_NAVIGATION',
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener('controllerchange', listener);
        return () => {
          navigator.serviceWorker.removeEventListener('controllerchange', listener);
        };
      }
    }
  }, [location, matches]);
}
