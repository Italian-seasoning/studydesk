if ('serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./sw.js', {updateViaCache:'none'}).then(reg => {
    let activatedElsewhere=false, reloading=false;
    function offer() {
      if ((!reg.waiting && !activatedElsewhere) || !navigator.serviceWorker.controller) return;
      let bar=document.getElementById('app-update');
      if (bar) return;
      bar=document.createElement('div');bar.id='app-update';bar.setAttribute('role','status');
      bar.style.cssText='position:fixed;bottom:16px;left:16px;right:16px;z-index:90;padding:12px 18px;border-radius:18px;background:var(--text);color:var(--ground);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px';
      const label=document.createElement('span');label.textContent='An update is ready. Saved progress stays.';
      const button=document.createElement('button');button.textContent='Reload to update';button.style.cssText='color:inherit;min-height:44px;text-decoration:underline';
      const backup=document.createElement('button');backup.textContent='Download backup';backup.style.cssText=button.style.cssText;
      backup.onclick=()=>exportBackup().catch(showError);
      button.onclick=async()=>{
        if(!confirm('Reload to update? Finish any current practice test first. Saved progress and files will stay.'))return;
        try{await flushSettings();}catch(error){showError(error);return;}
        reloading=true;
        if(reg.waiting)reg.waiting.postMessage('ACTIVATE');else location.reload();
      };
      bar.append(label,backup,button);document.body.append(bar);
    }
    let hadController=!!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(reloading){location.reload();return;}
      if(hadController){activatedElsewhere=true;offer();}
      hadController=true;
    });
    offer();
    reg.addEventListener('updatefound',()=>{const worker=reg.installing;if(worker)worker.addEventListener('statechange',offer);});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)reg.update().catch(()=>{});});
  }).catch(()=>{});
}
