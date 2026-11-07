const CACHE_NAME='shaylana-rms-shell-v6';
const APP_SHELL=[
  './','./index.html','./manifest.webmanifest','./app-icon.svg','./shaylana-s-icon.svg',
  './breakfast-app.html','./lunch-app.html','./dinner-app.html','./juices-app.html','./hot-drinks-app.html','./soft-drinks-app.html','./cake-app.html',
  './breakfast.webmanifest','./lunch.webmanifest','./dinner.webmanifest','./juices.webmanifest','./hot-drinks.webmanifest','./soft-drinks.webmanifest','./cake.webmanifest',
  './breakfast-icon.svg','./lunch-icon.svg','./dinner-icon.svg','./juices-icon.svg','./hot-drinks-icon.svg','./soft-drinks-icon.svg','./cake-icon.svg'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{
      if(response&&response.ok){
        const copy=response.clone();
        caches.open(CACHE_NAME).then(async cache=>{
          await cache.put(request,copy);
          if(url.pathname.endsWith('/index.html')||url.pathname.endsWith('/shaylana-rms/'))await cache.put('./index.html',response.clone());
        });
      }
      return response;
    }).catch(()=>caches.match(request).then(cached=>cached||caches.match('./index.html'))));
    return;
  }
  if(['manifest.webmanifest','app-icon.svg','shaylana-s-icon.svg'].some(name=>url.pathname.endsWith('/'+name))||/\.(webmanifest|svg)$/.test(url.pathname)){
    event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
  }
});
