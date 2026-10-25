import React from 'react';
import {renderToString} from 'react-dom/server';
import {MemoryRouter} from 'react-router-dom';
import fs from 'node:fs';
import path from 'node:path';
import {SiteRoutes,paths,articleSlugs,pageData,origin} from '../App';
import {languages} from '../content';
import {productDescription,productSchema} from '../catalogueSpecs';
import {products} from '../products';
const template=fs.readFileSync('dist/index.html','utf8');
const routes=[...paths,...articleSlugs.map(s=>'blog/'+s),...products.map(p=>'product/'+p.id.toLowerCase())];
const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const map=[];
for(const lang of languages)for(const route of routes){
 const url=`/${lang}${route?'/'+route:''}`;const {title,c,i,article,p}=pageData(route,lang);
 const description=(p?'':title+'. ')+(i===0?c.intro:i===4?c.colorText:i===5?c.setText:i===6?c.towelText:i===7?c.fabricText:i===8?c.tencelText:i===9?c.sizesText:i===10?c.b2bText:i===11?c.policyText:i===12?c.contactText:article>=0?([c.care,c.cotton,c.towels][article][0]):p?productDescription(p,lang).meta:c.homeText).slice(0,220);
 const alternates=languages.map(l=>`<link rel="alternate" hreflang="${l==='zh'?'zh-Hans':l}" href="${origin}/${l}${route?'/'+route:''}/">`).join('');
 const canonical=origin+url+'/';const schema:any=p?productSchema(p,lang,origin):{'@context':'https://schema.org','@type':p?'Product':article>=0?'Article':'WebPage',name:title,url:canonical,inLanguage:lang,description};
 if(p){schema.sku=p.id;schema.brand={'@type':'Brand',name:'SlumbaZEN'};schema.image=origin+p.imageUrl;}if(article>=0){schema.headline=title;schema.datePublished='2026-10-25';schema.author={'@type':'Organization',name:'SlumbaZEN'};}
 const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:c.nav[0],item:origin+'/'+lang+'/'},...(route?[{'@type':'ListItem',position:2,name:title,item:canonical}]:[])]};
 const meta=`<title>${escape(title)} | SlumbaZEN</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}">${alternates}<link rel="alternate" hreflang="x-default" href="${origin}/th${route?'/'+route:''}/"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="${article>=0?'article':'website'}"><meta property="og:image" content="${origin}/assets/hero.webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':[schema,breadcrumb]}).replace(/</g,'\\u003c')}</script>`;
 const body=renderToString(<MemoryRouter initialEntries={[url]}><SiteRoutes/></MemoryRouter>);
 const html=template.replace(/<title>.*?<\/title>/,'').replace('<html lang="en">',`<html lang="${lang}" dir="${lang==='ar'?'rtl':'ltr'}">`).replace('</head>',meta+'</head>').replace('<div id="root"></div>',`<div id="root">${body}</div>`);
 const dest=path.join('dist',url,'index.html');fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,html);
 map.push(`<url><loc>${canonical}</loc>${languages.map(l=>`<xhtml:link rel="alternate" hreflang="${l==='zh'?'zh-Hans':l}" href="${origin}/${l}${route?'/'+route:''}/"/>`).join('')}</url>`);
}
fs.writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${map.join('')}</urlset>`);
fs.writeFileSync('dist/robots.txt',process.env.CONTEXT&&process.env.CONTEXT!=='production'?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
if(process.env.CONTEXT&&process.env.CONTEXT!=='production')fs.writeFileSync('dist/_headers','/*\n  X-Robots-Tag: noindex, nofollow\n');
fs.writeFileSync('dist/404.html',template.replace('<div id="root"></div>','<div id="root"><h1>404 · SlumbaZEN</h1><a href="/th">SlumbaZEN</a></div>'));
console.log(`Prerendered ${routes.length*languages.length} localized routes.`);
