var staticCacheName = 'portfolio-cache-1';

self.addEventListener('install', function(event) {
  
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        './',
        './js/index.js',
        './css/styles.css',
        './index.html',
        './img/analytics-3088958_1920.jpg',
        './img/arcade-game.jpg',
        './img/jasmine-prtsc.jpg',
        './img/memory-game.jpg',
        './img/my-reads.jpg',
        './img/nieghborhood-map.jpg',
        './img/peregrine-falcon.jpg',
        './img/pixel-art-maker.png',
        './img/restaurant-reviews.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('portfolio-') &&
          cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request, {
      ignoreSearch: true
    }).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});