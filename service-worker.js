const CACHE_NAME='vite-mots-cache-mixed-only-v1';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(['./','./index.html','./style.css','./vocab.js','./manifest.json','./icon-192.png','./icon-512.png'])))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.map(k=>k!==CACHE_NAME?caches.delete(k):null));await self.clients.claim();})())});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})