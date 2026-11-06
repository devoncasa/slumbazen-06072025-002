import {loadRoute,routeModules,routeFeatureModules} from '../routeResources';
import {buildSync} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {fontStylesheet} from '../fonts';
import {languageTag} from '../localization';
import {pageSEO} from '../seo';
import React from 'react';
import {loadLocale} from '../localeResources';
import {renderToString} from 'react-dom/server';
import {MemoryRouter} from 'react-router-dom';
import fs from 'node:fs';
import path from 'node:path';
import {SiteRoutes,paths,articleSlugs,origin} from '../App';
import {languages} from '../content';
import {products} from '../products';
const homeEntry = buildSync({
  entryPoints: [fileURLToPath(new URL('./scripts/home-entry.ts', import.meta.url))],
  bundle: true, minify: true, write: false,
}).outputFiles[0].text;
const template=fs.readFileSync('dist/index.html','utf8');
const measurementId = process.env.SLUMBAZEN_GA4_MEASUREMENT_ID?.trim();
if (measurementId && !/^G-[A-Z0-9]+$/.test(measurementId)) {
  throw new Error('SLUMBAZEN_GA4_MEASUREMENT_ID must be a GA4 web Measurement ID.');
}
const analytics = measurementId && process.env.CONTEXT === 'production' ? `<script>
(() => {
  if (location.origin !== ${JSON.stringify(origin)}) return;
  const id = ${JSON.stringify(measurementId)};
  const dataLayer = window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id, {send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false});
  let previousPage;
  window.slumbazenTrackPage = () => {
    const page = new URL(location.pathname, location.origin);
    page.pathname = page.pathname.replace(/\\/+$/, '') + '/';
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id']) {
      const value = new URLSearchParams(location.search).get(key);
      if (value) page.searchParams.set(key, value);
    }
    if (previousPage?.pathname === page.pathname) return;
    gtag('event', 'page_view', {
      send_to: id,
      page_location: page.href,
      page_title: document.title,
      page_referrer: previousPage?.href || (document.referrer ? new URL(document.referrer).origin : '')
    });
    previousPage = page;
  };
  window.slumbazenTrackPage();
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.append(script);
  }, {once: true});
})();
</script>` : '';
const manifest=fs.existsSync('dist/.vite/manifest.json')?JSON.parse(fs.readFileSync('dist/.vite/manifest.json','utf8')):{};
function routePreloads(route: string, lang: string) {
  const scripts = new Set<string>();
  const styles = new Set<string>();
  const visit = (key: string) => {
    const chunk = manifest[key];
    if (!chunk || scripts.has(chunk.file) || chunk.isEntry) return;
    scripts.add(chunk.file);
    for (const file of chunk.css || []) styles.add(file);
    for (const imported of chunk.imports || []) visit(imported);
  };
  visit(routeModules[route]);
  for (const feature of routeFeatureModules(route)) visit(feature);
  for (const locale of new Set([lang, 'en'])) visit(`public/locales/${locale}/translation.json`);
  return [...styles].filter(file => !template.includes(`href="/${file}"`)).map(file => `<link rel="stylesheet" href="/${file}">`).join('')
    + [...scripts].filter(file => file.endsWith('.js'))
      .map(file => `<link rel="modulepreload" href="/${file}">`).join('');
}
// Inline the shared stylesheet on the homepage, where the extra request blocks first paint.
const homeTemplate = template.replace(/<link rel="stylesheet"[^>]*href="\/([^"]+)"[^>]*>/g, (tag, file: string) =>
  manifest['index.html']?.css?.includes(file) ? `<style>${fs.readFileSync(path.join('dist', file), 'utf8')}</style>` : tag
);
const routes=[...paths,...articleSlugs.map(s=>'blog/'+s),...products.map(p=>'product/'+p.id.toLowerCase())];
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const map=[];
const preview=!!process.env.CONTEXT&&process.env.CONTEXT!=='production';
const robotsMeta=preview?'<meta name="robots" content="noindex, nofollow">':'';
for(const lang of languages){await loadLocale(lang);for(const route of routes){
 await loadRoute(route);
 const url=`/${lang}${route?'/'+route:''}`;
 const seo=pageSEO(route,lang);const description=seo.description;const canonical=seo.canonical;
 const alternates=seo.alternates.map(v=>`<link rel="alternate" hreflang="${v.lang}" href="${v.url}">`).join('');
 const towelPreload = route === 'towels'
   ? '<link rel="preload" as="image" href="/assets/restored-34cf1950f5ab.webp" imagesrcset="/assets/restored-34cf1950f5ab-640.webp 640w, /assets/restored-34cf1950f5ab.webp 1280w" imagesizes="100vw" fetchpriority="high">'
   : '';
  const fontHref = fontStylesheet(lang);
  const fontHead = fontHref ? `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link id="locale-font" rel="stylesheet" href="${escape(fontHref)}">` : '';
  const meta=`${fontHead}${routePreloads(route, lang)}<title>${escape(seo.title)} | SlumbaZEN</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}">${alternates}${robotsMeta}<meta property="og:title" content="${escape(seo.title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${seo.article>=0?'article':'website'}"><meta property="og:image" content="${seo.image}"><meta property="og:locale" content="${seo.locale}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(seo.title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${seo.image}"><script type="application/ld+json">${JSON.stringify(seo.graph).replace(/</g,'\\u003c')}</script>`;
 const imagePreloads: string[] = [];
 const body = renderToString(<MemoryRouter initialEntries={[url]}><SiteRoutes/></MemoryRouter>)
   .replace(/<link rel="preload" as="image"[^>]*\/>/g, preload => {
     imagePreloads.push(preload);
     return '';
   });
 // The viewport must be parsed before choosing responsive preload candidates.
 const preloads = towelPreload + imagePreloads.sort((a, b) =>
   Number(b.includes('fetchPriority="high"')) - Number(a.includes('fetchPriority="high"'))
 ).join('');
 const html=(route === '' ? homeTemplate : template)
   .replace(/(<meta name="viewport"[^>]*>)/, `$1${preloads}`)
   .replace(/<title>.*?<\/title>/,'').replace('<html lang="en">',`<html lang="${languageTag(lang)}" dir="${lang==='ar'?'rtl':'ltr'}">`)
   .replace('</head>',meta+analytics+'</head>').replace('<div id="root"></div>',`<div id="root" data-prerendered="true">${body}</div>`);
 const dest=path.join('dist',url,'index.html');fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
 map.push(`<url><loc>${canonical}</loc>${seo.alternates.map(v=>`<xhtml:link rel="alternate" hreflang="${v.lang}" href="${v.url}"/>`).join('')}</url>`);
}
}
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${map.join('')}</urlset>`);
fs.writeFileSync('dist/robots.txt',process.env.CONTEXT&&process.env.CONTEXT!=='production'?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
if(process.env.CONTEXT&&process.env.CONTEXT!=='production')fs.writeFileSync('dist/_headers','/*\n  X-Robots-Tag: noindex, nofollow\n');
const rootTemplate = template
  .replace(/<script type="module"[^>]*><\/script>/g, '')
  .replace(/<link rel="(?:modulepreload|stylesheet)"[^>]*>/g, '');
fs.writeFileSync('dist/index.html',rootTemplate.replace('</head>',`<meta name="robots" content="noindex, follow"><script>${homeEntry}</script></head>`).replace('<div id="root"></div>', '<div id="root"><nav aria-label="Choose language">'+languages.map(l=>`<a href="/${l}/" lang="${languageTag(l)}">${({th:'ภาษาไทย',en:'English',zh:'简体中文',ar:'العربية',hi:'हिन्दी'} as Record<string,string>)[l]}</a>`).join(' · ')+'</nav></div>'));
fs.writeFileSync('dist/404.html',template.replace('</head>','<meta name="robots" content="noindex, follow"></head>').replace('<div id="root"></div>','<div id="root"><h1>404 · SlumbaZEN</h1><a href="/th">SlumbaZEN</a></div>'));
console.log(`Prerendered ${routes.length*languages.length} localized routes.`);

