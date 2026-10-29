const CACHE='studydesk-78cb0ac16127;
const SHELL=new URL('./index.html',self.location).href;
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.add(new Request(SHELL,{cache:'reload'})))));
self.addEventListener('message',event=>{if(event.data==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('studydesk-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method==='GET'&&event.request.mode==='navigate'&&new URL(event.request.url).origin===self.location.origin)event.respondWith(caches.open(CACHE).then(cache=>cache.match(SHELL)).then(response=>response||fetch(event.request)));});
