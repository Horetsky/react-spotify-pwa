/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

self.skipWaiting();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
// @see https://developers.google.com/web/tools/workbox/guides/common-recipes#google_fonts
registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

registerRoute(
  ({url}) => url.origin === ('https://api.spotify.com') &&
  (
      // url.pathname.startsWith('/v1/me') ||
      url.pathname === '/v1/me' ||
      url.pathname === '/v1/me/following' ||
      url.pathname === '/v1/me/top/tracks' ||
      url.pathname === '/v1/me/top/artists' ||
      url.pathname === '/v1/browse/featured-playlists' ||
      url.pathname === '/v1/browse/categories' ||
      url.pathname === '/v1/me/tracks' ||
      url.pathname === '/v1/me/playlists' ||
      url.pathname === '/v1/me/albums' 
    ),
  new StaleWhileRevalidate({
    cacheName: 'spotify-api-response',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      // new ExpirationPlugin({
      //   maxEntries: 1 // Will cache maximum 1 requests.
      // }), 
    ]
  })
);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
// const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }) => {
//     // If this isn't a navigation, skip.
//     if (request.mode !== 'navigate') {
//       return false;
//     } // If this is a URL that starts with /_, skip.

//     if (url.pathname.startsWith('/_')) {
//       return false;
//     } // If this looks like a URL for a resource, because it contains // a file extension, skip.

//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     } // Return true to signal that we want to use the handler.

//     return true;
//   },
//   createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
// );

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
// registerRoute(
//   // Add in any other file extensions or routing criteria as needed.
//   ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
//   new StaleWhileRevalidate({
//     cacheName: 'images',
//     plugins: [
//       // Ensure that once this runtime cache reaches a maximum size the
//       // least-recently used images are removed.
//       new ExpirationPlugin({ maxEntries: 50 }),
//     ],
//   })
// );

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// Any other custom service worker logic can go here.
self.addEventListener('fetch', (event) => {
  // console.log(`fetch for ${event.request.url}`);
});