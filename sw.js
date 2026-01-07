const CACHE_NAME = 'didiklink-v1';
const assets = [
  'index.html',
  'parent-login.html',
  'teacher-login.html',
  'parent-dashboard.html',
  'teacher-dashboard.html',
  'didiklink.png'
];

// Pemasangan Service Worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets...');
      cache.addAll(assets);
    })
  );
});

// Mengambil data (Fetch)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});