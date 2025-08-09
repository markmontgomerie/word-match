const CACHE_NAME = 'vite-mots-cache-cat2';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      './',
      './index.html?v=cat2',
      './style.css?v=cat2',
      './vocab.js?v=cat2',
      './manifest.json',
      './icon-192.png',
      './icon-512.png'
    ]))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        cache.put('./index.html?v=cat2', fresh.clone());
        return fresh;
      } catch (err) {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match('./index.html?v=cat2');
        return cached || Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(req).then(res => res || fetch(req)));
});
