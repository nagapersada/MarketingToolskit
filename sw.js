const CACHE_NAME = 'dvnp-v1';
// Kita tetap online, tapi file ini wajib ada agar syarat instalasi terpenuhi
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
