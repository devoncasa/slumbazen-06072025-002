import {pageSEO} from '../seo';
import {gzipSync} from 'node:zlib';
import {catalogueSizeDimensions,productFacts} from '../catalogueSpecs';
import {loadLocale} from '../localeResources';
import React from 'react';import {renderToString} from 'react-dom/server';import {MemoryRouter} from 'react-router-dom';import assert from 'node:assert/strict';import fs from 'node:fs';import {SiteRoutes,paths,articleSlugs} from '../App';import {copy,languages} from '../content';import {products} from '../products';
await Promise.all(languages.map(loadLocale));
const keys=Object.keys(copy.en).sort();for(const lang of languages){assert.deepEqual(Object.keys(copy[lang]).sort(),keys,lang+' translation keys');for(const key of keys){assert.notEqual(copy[lang][key],undefined);if(Array.isArray(copy.en[key]))assert.equal(copy[lang][key].length,copy.en[key].length,lang+key)}}
assert.equal(new Set(products.map(p=>p.id)).size,products.length);
let count=0;for(const lang of languages)for(const route of [...paths,...articleSlugs.map(s=>'blog/'+s),...products.map(p=>'product/'+p.id.toLowerCase())]){const url='/'+lang+(route?'/'+route:'');const html=fs.readFileSync('dist'+url+'/index.html','utf8');assert.match(html,/<h1\b/);assert.match(html,new RegExp(`<html lang="${lang}"`));assert(!html.includes('cimode'));assert(!html.includes('threads per 10 cm'));assert(!html.includes('Article Coming Soon'));assert(!html.includes('line.me/R/msg'));const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];for(const [,data]of schemas){const d=JSON.parse(data);for(const node of d['@graph']||[d]){assert(!node.offers);assert(!node.aggregateRating)}}for(const [,src]of html.matchAll(/<img[^>]*src="([^"]+)"/g)){assert(src.startsWith('/assets/'),src);assert(fs.existsSync('dist'+src),src)}count++;}
const render=(url:string)=>renderToString(<MemoryRouter initialEntries={[url]}><SiteRoutes/></MemoryRouter>);
const cotton=render('/en/gallery?fabric=Cotton');assert(cotton.includes('Cotton'));assert(!cotton.includes('Cotton 100%'));assert(!cotton.includes('class="sku" dir="ltr">FS-S35-ST'));
const none=render('/en/gallery?color=red');assert(none.includes(copy.en.empty));assert(!none.includes('class="product-card"'));
const white=render('/en/gallery?color=white');assert(white.includes('class="product-card"'));
for(const lang of languages)for(const route of paths)assert(!render('/'+lang+'/'+route+'/').includes('<h1>'+copy[lang].notFound+'</h1>'),lang+route+' trailing slash');
for(const p of products)assert(!render('/en/product/'+p.id.toLowerCase()+'/').includes('<h1>'+copy.en.notFound+'</h1>'),p.id+' lowercase');
assert(render('/en/product/unknown').includes('404'));
console.log(JSON.stringify({localizedRoutes:count,products:products.length,languages:languages.length,translationFields:keys.length,staticImages:true,filterQueries:true,structuredData:true}));

const metaByLang:Record<string,Set<string>>={};for(const lang of languages){const set=new Set<string>();metaByLang[lang]=set;for(const p of products){const html=fs.readFileSync('dist/'+lang+'/product/'+p.id.toLowerCase()+'/index.html','utf8');const meta=html.match(/<meta name="description" content="([^"]+)"/)![1];assert(!set.has(meta),lang+' duplicate product meta '+p.id);set.add(meta);assert(html.includes('product-specifications'));assert(html.includes('product-questions'));assert(html.includes(p.id));assert(!html.includes('threads per 10cm'));}for(const route of ['towels','hotels']){const html=fs.readFileSync('dist/'+lang+'/'+route+'/index.html','utf8');assert(html.includes('original-gallery'));if(route==='towels'){assert(html.includes('first-wash'));assert(html.includes('towel-care'));assert(html.includes('27'));assert(html.includes('54'));}else assert(html.includes('expert-hotel-advice'));}}
console.log(JSON.stringify({uniqueLocalizedProductMeta:products.length*languages.length,restoredTowelsAndHotelsInFiveLanguages:true}));

const activeSections=['homePage','collectionsPage','whiteSheetsPage','premiumColorsPage','beddingSetsPage','materialsPage','whatIsTencelPage','sizesPage','deliveryWarrantyPage','hotelsPage','towelsPage','nav','footer','contactPage'];
const flatten=(x:any,p=''):Record<string,any>=>x&&typeof x==='object'&&!Array.isArray(x)?Object.fromEntries(Object.entries(x).flatMap(([k,v])=>Object.entries(flatten(v,p?p+'.'+k:k)))):{[p]:x};
const english=flatten(JSON.parse(fs.readFileSync('public/locales/en/translation.json','utf8')));const active=Object.keys(english).filter(k=>activeSections.includes(k.split('.')[0]));
for(const lang of languages){const actual=flatten(JSON.parse(fs.readFileSync('public/locales/'+lang+'/translation.json','utf8')));for(const key of active){assert(key in actual,lang+' missing '+key);const variables=(s:string)=>[...String(s).matchAll(/{{(.*?)}}/g)].map(m=>m[1]).sort();assert.deepEqual(variables(actual[key]),variables(english[key]),lang+' interpolation '+key);}}
console.log(JSON.stringify({restoredCustomerFacingKeys:active.length,restoredLocaleGaps:0,interpolationChecked:true}));

for(const lang of languages){const dims=catalogueSizeDimensions(lang);assert.equal(dims.length,12);assert(dims.every(Boolean));assert(dims[3].includes('20'));assert(dims[3].includes('30'));}assert.equal(productFacts(products.find(p=>p.id==='PC-STD-ST370P-091')!).width,20);

// Crawlable links, metadata parity and explicit transfer-size budgets.
let linkCount=0;
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
for(const lang of languages)for(const route of [...paths,...articleSlugs.map(s=>'blog/'+s),...products.map(p=>'product/'+p.id.toLowerCase())]){
 const file='dist/'+lang+'/'+(route?route+'/':'')+'index.html';const html=fs.readFileSync(file,'utf8');const seo=pageSEO(route,lang);
 assert(html.includes('<meta name="description" content="'+esc(seo.description)+'">'),file+' metadata: '+seo.description);
 assert(html.includes('<link rel="canonical" href="'+seo.canonical+'">'));
 assert(html.includes('<meta property="og:image" content="'+seo.image+'">'));
 assert(html.includes('data-prerendered="true"'));
 for(const [,href]of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)){
  if(!href.startsWith('/')||href.startsWith('//'))continue;const u=new URL(href.replace(/&amp;/g,'&'),'https://www.slumbazen.com');if(u.pathname==='/')continue;
  const target='dist'+u.pathname.replace(/\/?$/,'/')+'index.html';assert(fs.existsSync(target),file+' broken '+href);if(u.hash)assert(fs.readFileSync(target,'utf8').includes('id="'+decodeURIComponent(u.hash.slice(1))+'"'),file+' anchor '+href);linkCount++;
 }
}
const assets=fs.readdirSync('dist/assets');const entry=assets.find(p=>/^index-.*\.js$/.test(p))!;const css=assets.find(p=>/^index-.*\.css$/.test(p))!;const jsGzip=gzipSync(fs.readFileSync('dist/assets/'+entry)).length;const cssGzip=gzipSync(fs.readFileSync('dist/assets/'+css)).length;
assert(jsGzip<150000,'Main JavaScript gzip budget');assert(cssGzip<15000,'CSS gzip budget');
for(const name of ['quiet-bedroom','selection-details']){assert(fs.statSync('dist/assets/editorial/'+name+'.webp').size<120000);assert(fs.statSync('dist/assets/editorial/'+name+'-640.webp').size<40000)}
const form=fs.readFileSync('dist/__forms.html','utf8');for(const field of ['form-name','name','email','message','language','bot-field'])assert(form.includes('name="'+field+'"'));assert(form.includes('data-netlify="true"'));
console.log(JSON.stringify({internalLinks:linkCount,brokenLinks:0,metadataParity:true,mainJsGzip:jsGzip,cssGzip,formDefinition:true}));

// Counts must match the original SKU record; towels never acquire a thread count.
for(const p of products){const raw=productFacts(p).raw;const expected=Number(raw.spec.match(/(\d+)\s*Thread Count/i)?.[1]||0);assert.equal(p.threadCount,expected,p.id);for(const lang of languages){const html=fs.readFileSync('dist/'+lang+'/product/'+p.id.toLowerCase()+'/index.html','utf8');if(expected){assert(html.includes('threads per square inch'),p.id+' schema unit');assert(html.includes('"value":'+expected),p.id+' count');}else assert(!html.includes('"unitText":"threads per square inch"'),p.id+' no TC');}}
console.log(JSON.stringify({catalogueThreadCounts:products.filter(p=>p.threadCount).length,ownerConfirmedUnit:'threads per square inch',localizedThreadCountPages:products.filter(p=>p.threadCount).length*languages.length}));

// Each SKU has its own responsive illustration while supplier assets remain intact.
assert.equal(new Set(products.map(p=>p.imageUrl)).size,products.length);
for(const p of products){
 assert(p.imageIllustrative&&p.originalImageUrl);
 assert(fs.existsSync('public'+p.originalImageUrl));
 assert(fs.existsSync('public'+p.imageUrl));
 assert(fs.existsSync('public'+p.imageUrl!.replace('.webp','-400.webp')));
 for(const lang of languages){const html=fs.readFileSync('dist/'+lang+'/product/'+p.id.toLowerCase()+'/index.html','utf8');assert(html.includes(p.imageUrl!));assert(html.includes('photo-disclosure'));}
}
console.log(JSON.stringify({uniqueSkuIllustrations:products.length,responsiveProductImages:products.length*2,originalAssetsPreserved:true,localizedImageDisclosure:true}));
