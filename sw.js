// Version 7.3: kein Offline-Cache, um veraltete Spielversionen zu vermeiden.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
