// Component regression checks in a simulated DOM. This does not measure layout,
// real browser focus behavior, native dialog rendering or real clipboard access.
import {JSDOM} from 'jsdom';
import {build} from 'esbuild';
import assert from 'node:assert/strict';
const dom=new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>',{url:'https://slumbazen.netlify.app/en/hotels?subject=RequestSamplesB2B'});
for(const key of ['window','document','HTMLElement','HTMLInputElement','HTMLTextAreaElement','HTMLDialogElement','Event','MouseEvent','KeyboardEvent','sessionStorage','localStorage'])Object.defineProperty(globalThis,key,{value:dom.window[key],configurable:true});
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
globalThis.requestAnimationFrame=fn=>setTimeout(fn,0);globalThis.cancelAnimationFrame=clearTimeout;globalThis.innerHeight=900;globalThis.scrollY=0;
globalThis.addEventListener=dom.window.addEventListener.bind(dom.window);globalThis.removeEventListener=dom.window.removeEventListener.bind(dom.window);
globalThis.IntersectionObserver=class{observe(){}disconnect(){}};
globalThis.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});dom.window.matchMedia=globalThis.matchMedia;dom.window.scrollTo=()=>{};
dom.window.HTMLElement.prototype.scrollIntoView=function(){};
dom.window.HTMLDialogElement.prototype.showModal=function(){this.open=true};dom.window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new dom.window.Event('close'))};
let copied='';Object.defineProperty(dom.window.navigator,'clipboard',{value:{writeText:async text=>{copied=text}}});
// The provider and loader must share the same module cache, so export the loader
// through an additional bundled entry instead of importing a second cache.
await build({stdin:{contents:"export {default as App} from './App';export {loadLocale} from './localeResources';",resolveDir:process.cwd(),loader:'tsx'},outfile:'.interaction-entry.mjs',bundle:true,platform:'node',format:'esm',packages:'external'});
const {App,loadLocale}=await import('../.interaction-entry.mjs');const React=await import('react');const {createRoot}=await import('react-dom/client');const {act}=React;
let root;
async function mount(path,lang){if(root)await act(async()=>root.unmount());dom.reconfigure({url:'https://slumbazen.netlify.app'+path});await loadLocale(lang);root=createRoot(document.getElementById('root'));await act(async()=>{root.render(React.createElement(App));await new Promise(r=>setTimeout(r,15))});}
async function click(e){assert(e,'click target');await act(async()=>{e.click();await new Promise(r=>setTimeout(r,15))})}
async function change(e,value){const proto=e.tagName==='TEXTAREA'?dom.window.HTMLTextAreaElement.prototype:dom.window.HTMLInputElement.prototype;await act(async()=>{Object.getOwnPropertyDescriptor(proto,'value').set.call(e,value);e.dispatchEvent(new dom.window.Event('input',{bubbles:true}));e.dispatchEvent(new dom.window.Event('change',{bubbles:true}));await Promise.resolve()});}
await mount('/en/hotels?subject=RequestSamplesB2B','en');assert.equal(document.querySelector('.enquiry select').value,'sample');
await change(document.querySelector('.enquiry input'),'20');await change(document.querySelector('.enquiry textarea:not([readonly])'),'Queen beds, Bangkok delivery');
assert(document.querySelector('.enquiry-preview').value.includes('20'));assert(document.querySelector('.enquiry-preview').value.includes('Queen beds'));
await click(document.getElementById('language-menu-button'));const arabic=[...document.querySelectorAll('[role="menuitem"]')].find(e=>e.textContent.includes('العربية'));
await act(async()=>{arabic.click();await loadLocale('ar');await new Promise(r=>setTimeout(r,20))});assert.equal(document.documentElement.lang,'ar');assert.equal(document.documentElement.dir,'rtl');assert(window.location.pathname.startsWith('/ar/'));assert(window.location.search.includes('RequestSamplesB2B'));assert.equal(document.querySelector('.enquiry select').value,'sample');assert.equal(document.querySelector('.enquiry input').value,'20');assert(document.querySelector('.enquiry-preview').value.includes('Queen beds'));
await click(document.querySelector('.enquiry button'));assert(copied.includes('Queen beds'));assert(copied.includes('20'));
await mount('/en/product/pc-std-st370p-091/','en');assert(document.getElementById('product-specifications').textContent.includes('50.8'));assert(document.getElementById('product-specifications').textContent.includes('76.2'));assert(document.querySelector('.enquiry-preview').value.includes('20 × 30'));
const zoom=document.querySelector('.product-detail .textile-photo-trigger');const dialog=zoom.nextElementSibling;assert.equal(dialog.querySelectorAll('img').length,0);await click(zoom);assert(dialog.open);assert.equal(dialog.querySelectorAll('img').length,1);await click(dialog.querySelector('.lightbox-close'));assert(!dialog.open);assert.equal(dialog.querySelectorAll('img').length,0);
await change(document.querySelector('.enquiry input'),'0');assert(document.querySelector('.enquiry button').disabled);
assert(JSON.parse(sessionStorage.getItem('slumbazen-viewed')).includes('PC-STD-ST370P-091'));
await click(document.querySelector('button[aria-label="Open main menu"]'));assert(document.querySelector('button[aria-label="Open main menu"]').getAttribute('aria-expanded')==='true');await act(async()=>document.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true})));assert(document.querySelector('button[aria-label="Open main menu"]').getAttribute('aria-expanded')==='false');
let clientRoutes=0;for(const lang of ['th','en','zh','ar','hi'])for(const route of ['','collections','gallery','products/white-sheets','products/premium-colors','products/sets','towels','materials','what-is-tencel','sizes','hotels','delivery','contact','blog']){await mount('/'+lang+(route?'/'+route+'/':'/'),lang);assert(document.querySelector('main h1')?.textContent);assert(!/\b(homePage|materialsPage|towelsPage|nav|footer|sizesPage)\.[A-Za-z.]+/.test(document.querySelector('main').textContent));assert.equal(document.documentElement.dir,lang==='ar'?'rtl':'ltr');clientRoutes++;}
await mount('/en/contact/?subject=BathMatInquiry&item=Hotel%20Bath%20Mat&dimensions=18x28in','en');assert(document.querySelector('.enquiry-preview').value.includes('Hotel Bath Mat'));assert(document.querySelector('.enquiry-preview').value.includes('18x28in'));
await mount('/','th');assert.equal(window.location.pathname,'/th/');assert(document.querySelector('main h1')?.textContent);
await act(async()=>root.unmount());console.log(JSON.stringify({simulatedDOM:true,clientRoutes,sampleIntent:true,draftQuantityAndRequirements:true,asyncLanguageSwitchAndRTL:true,queryPreserved:true,copyPayload:true,dimensions:true,dialogComponentOpenClose:true,lazyDialogImage:true,quantityValidation:true,recentlyViewed:true,menuEscape:true}));
