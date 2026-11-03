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
const template=fs.readFileSync('dist/index.html','utf8');
const routes=[...paths,...articleSlugs.map(s=>'blog/'+s),...products.map(p=>'product/'+p.id.toLowerCase())];
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const map=[];
const preview=!!process.env.CONTEXT&&process.env.CONTEXT!=='production';
const robotsMeta=preview?'<meta name="robots" content="noindex, nofollow">':'';
for(const lang of languages){await loadLocale(lang);for(const route of routes){
 const url=`/${lang}${route?'/'+route:''}`;
 const seo=pageSEO(route,lang);const description=seo.description;const canonical=seo.canonical;
 const alternates=seo.alternates.map(v=>`<link rel="alternate" hreflang="${v.lang}" href="${v.url}">`).join('');
  const meta=`<title>${escape(seo.title)} | SlumbaZEN</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}">${alternates}${robotsMeta}<meta property="og:title" content="${escape(seo.title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${seo.article>=0?'article':'website'}"><meta property="og:image" content="${seo.image}"><meta property="og:locale" content="${seo.locale}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(seo.title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${seo.image}"><script type="application/ld+json">${JSON.stringify(seo.graph).replace(/</g,'\\u003c')}</script>`;
 const body=renderToString(<MemoryRouter initialEntries={[url]}><SiteRoutes/></MemoryRouter>);
 const html=template.replace(/<title>.*?<\/title>/,'').replace('<html lang="en">',`<html lang="${languageTag(lang)}" dir="${lang==='ar'?'rtl':'ltr'}">`).replace('</head>',meta+'</head>').replace('<div id="root"></div>',`<div id="root" data-prerendered="true">${body}</div>`);
 const dest=path.join('dist',url,'index.html');fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
 map.push(`<url><loc>${canonical}</loc>${seo.alternates.map(v=>`<xhtml:link rel="alternate" hreflang="${v.lang}" href="${v.url}"/>`).join('')}</url>`);
}
}
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${map.join('')}</urlset>`);
fs.writeFileSync('dist/robots.txt',process.env.CONTEXT&&process.env.CONTEXT!=='production'?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
if(process.env.CONTEXT&&process.env.CONTEXT!=='production')fs.writeFileSync('dist/_headers','/*\n  X-Robots-Tag: noindex, nofollow\n');
fs.writeFileSync('dist/index.html',template.replace('</head>','<meta name="robots" content="noindex, follow"></head>').replace('<div id="root"></div>', '<div id="root"><nav aria-label="Choose language">'+languages.map(l=>`<a href="/${l}/" lang="${languageTag(l)}">${({th:'ภาษาไทย',en:'English',zh:'简体中文',ar:'العربية',hi:'हिन्दी'} as Record<string,string>)[l]}</a>`).join(' · ')+'</nav></div>'));
fs.writeFileSync('dist/404.html',template.replace('</head>','<meta name="robots" content="noindex, follow"></head>').replace('<div id="root"></div>','<div id="root"><h1>404 · SlumbaZEN</h1><a href="/th">SlumbaZEN</a></div>'));
console.log(`Prerendered ${routes.length*languages.length} localized routes.`);
