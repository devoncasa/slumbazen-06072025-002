import {loadRoute} from './routeResources';
import {setLanguageFont} from './fonts';
import {browserPreferredLanguage} from './localization';
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
if(window.location.pathname==='/'){window.history.replaceState(null,'','/'+browserPreferredLanguage('/')+'/'+window.location.search+window.location.hash)}
const initialLocale=window.location.pathname.split('/')[1]||'th';
setLanguageFont(initialLocale);
const initialPath=window.location.pathname.split('/').slice(2).join('/').replace(/\/+$/,'');
Promise.all([loadLocale(initialLocale),loadRoute(initialPath)]).then(()=>{
 const root=document.getElementById('root')!;
 // Keep the crawlable initial HTML in place when its route matches the browser.
 // Query-filtered and legacy hash journeys need a fresh client render.
 if(!migratedHash&&root.dataset.prerendered==='true'&&!window.location.search&&!window.location.hash)hydrateRoot(root,<App/>);
 else createRoot(root).render(<App/>);
}).catch(()=>{
 // Keep the prerendered content usable if an initial module request fails.
 const notice=document.createElement('p');notice.setAttribute('role','status');
 notice.textContent=({th:'โหลดเครื่องมือไม่สำเร็จ กรุณาโหลดหน้าอีกครั้ง',en:'Page tools could not load. Please reload this page.',zh:'页面工具加载失败，请刷新页面。',ar:'تعذّر تحميل أدوات الصفحة. يرجى إعادة تحميل الصفحة.',hi:'पृष्ठ के टूल लोड नहीं हुए। कृपया पृष्ठ फिर से लोड करें।'} as Record<string,string>)[initialLocale]||'Please reload this page.';
 document.getElementById('root')?.prepend(notice);
});
