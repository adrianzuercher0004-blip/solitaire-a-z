// Solitaire A-Z 9.7.2: keine Offline-Caches; aktualisierte Dateien direkt laden.
self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
