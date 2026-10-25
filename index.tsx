import {loadLocale} from './localeResources';
import './restored.css';
import './refinement.css';
import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import App from './App';
const migratedHash=/^#\/(th|en|zh|ar|hi)(?:\/|$)/.test(window.location.hash);
if (migratedHash) {
 window.history.replaceState(null,'',window.location.hash.slice(1));
}
const initialLocale=window.location.pathname.split('/')[1]||'th';
loadLocale(initialLocale).then(()=>{
 const root=document.getElementById('root')!;
 // Keep the crawlable initial HTML in place when its route matches the browser.
 // Query-filtered and legacy hash journeys need a fresh client render.
 if(!migratedHash&&root.dataset.prerendered==='true'&&!window.location.search&&!window.location.hash)hydrateRoot(root,<App/>);
 else createRoot(root).render(<App/>);
});
