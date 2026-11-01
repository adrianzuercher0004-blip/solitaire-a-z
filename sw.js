// Version 9.5.1: Alte Offline-Caches entfernen und Service Worker deaktivieren.
self.addEventListener('install',e=>{self.skipWaiting()});self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('solitaire-az-')).map(k=>caches.delete(k)))),self.registration.unregister(),self.clients.claim()]))});
