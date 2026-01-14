// Service Worker sederhana agar memenuhi syarat instalasi PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Selalu ambil data terbaru dari internet (Online Only sesuai permintaan)
  event.respondWith(fetch(event.request));
});
