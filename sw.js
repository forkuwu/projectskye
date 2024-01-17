// Service worker code to cache the PWA's assets

const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/install/",
  "/play/",
  "/games",
  "/index.html",
  "/__alloy_style.css",
  "/manifest.json",
  "/assets/main.css",
  "/session/",
  "/get/",
  "/ico.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
