// Solitaire A-Z 9.7.4: keine Offline-Caches
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
