// Inspect a production build without publishing or sending a form.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
assert(!process.env.CONTEXT||process.env.CONTEXT==='production','Use a production build for this check');
const root='dist',languages=['th','en','zh','ar','hi'],origin='https://www.slumbazen.com';
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
assert.equal(locations.length,620);assert.equal(new Set(locations).size,620);
const assets=new Set();let pages=0;
function inspect(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory()){inspect(file);continue;}if(item.name!=='index.html')continue;
 const html=fs.readFileSync(file,'utf8');const canonical=origin+'/'+path.relative(root,file).replaceAll(path.sep,'/').replace(/index\.html$/,'');
 assert(locations.includes(canonical),file+' absent from sitemap');
 assert(html.includes('<link rel="canonical" href="'+canonical+'">'));
 assert(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),file+' incorrectly noindex');
 assert(html.includes('<div id="root" data-prerendered="true">'),file+' lost static HTML');
 for(const match of html.matchAll(/\/assets\/[A-Za-z0-9._/-]+/g))assets.add(match[0]);
 pages++;
}}
for(const lang of languages)inspect(path.join(root,lang));assert.equal(pages,620);
for(const asset of assets)assert(fs.existsSync(root+asset),'Missing referenced asset '+asset);
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');assert(!/^Disallow:\s*\/\s*$/m.test(robots));assert(robots.includes('Sitemap: '+origin+'/sitemap.xml'));
if(fs.existsSync(path.join(root,'_headers')))assert(!/X-Robots-Tag:\s*noindex/i.test(fs.readFileSync(path.join(root,'_headers'),'utf8')),'Preview header leaked into production output');
const selector=fs.readFileSync(path.join(root,'index.html'),'utf8');for(const lang of languages)assert(selector.includes('href="/'+lang+'/"'));assert(selector.includes('aria-label="Choose language"'));
assert(fs.readFileSync(path.join(root,'404.html'),'utf8').includes('noindex'));
console.log(JSON.stringify({productionArtifact:{localizedPages:pages,sitemapUrls:locations.length,referencedAssets:assets.size,missingAssets:0,previewIndexingControlsAbsent:true,noJavaScriptLanguageLinks:5,networkOrDeploymentPerformed:false},liveChecksStillRequired:['valid apex/www HTTPS','path/query-preserving canonical redirect','deployed commit and CDN response headers','controlled form receipt and notification']}));
