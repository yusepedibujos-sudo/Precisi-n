self.addEventListener('install', (e) => {
  console.log('App lista');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
