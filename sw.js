// Solitaire A-Z 9.6.1: kein Offline-Cache, damit Safari stets die neue Version lädt.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
