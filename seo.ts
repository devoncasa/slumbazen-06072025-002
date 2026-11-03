import {localeDictionary} from './localeResources';
import {languageTag} from './localization';
import {copy,languages} from './content';
import {products} from './products';
import {productDescription,productSchema,productSizeLabel} from './catalogueSpecs';
import {shoppingCopy} from './shoppingCopy';
export const siteOrigin='https://www.slumbazen.com';
const pagePaths=['','collections','gallery','products/white-sheets','products/premium-colors','products/sets','towels','materials','what-is-tencel','sizes','hotels','delivery','contact','blog','bedding-finder'];
const keys=['home','collections','gallery','whiteSheets','premiumColors','beddingSets','towels','materials','whatIsTencel','sizes','hotels','deliveryWarranty','contact','blog','beddingFinder'];
const imagePaths=['editorial/quiet-bedroom.webp','restored-712794140946.webp','catalogue-00.webp','products/fs-s35-c260s-003.webp','editorial/colors.webp','editorial/set.webp','editorial/terry-detail.webp','catalogue-00.webp','editorial/care.webp','restored-b7b2f7faacfb.webp','editorial/hospitality-room.webp','editorial/packing.webp','logo.png','editorial/textile.webp','editorial/selection-details.webp'];
const articleKeys=['sheetCare','cottonFabrics','hospitalityTowels'];
const articles=['sheet-care','cotton-fabrics','hospitality-towels'];
export function pageSEO(path:string,lang:string){
 const c=copy[lang]||copy.th;const w=shoppingCopy[lang]||shoppingCopy.th;const i=pagePaths.indexOf(path);const article=path.startsWith('blog/')?articles.indexOf(path.slice(5)):-1;const p=path.startsWith('product/')?products.find(p=>p.id.toLowerCase()===path.slice(8).toLowerCase()):undefined;const exists=i>=0||article>=0||!!p;
 const localized=localeDictionary(lang).seo?.[article>=0?articleKeys[article]:keys[i]];
 const title=p?`${p.productType[lang as 'en']} · ${productSizeLabel(p,lang)} · ${p.fabricType[lang as 'en']} · ${p.id}`:localized?.title|| (article>=0?c.articles[article]:path==='bedding-finder'?w.finder:c.titles[i]||c.notFound);
 const text=path==='bedding-finder'?w.finderIntro:i===0?w.heroIntro:i===4?c.colorText:i===5?c.setText:i===6?c.towelText:i===7?c.fabricText:i===8?c.tencelText:i===9?c.sizesText:i===10?c.b2bText:i===11?c.policyText:i===12?c.contactText:i===13?c.articles.join(' · '):article>=0?[c.care,c.cotton,c.towels][article][0]:c.homeText;
 const description=p?productDescription(p,lang).meta:localized?.description||`${title}. ${text}`;
 const canonical=`${siteOrigin}/${lang}/${path?path+'/':''}`;const image=siteOrigin+(p?.imageUrl|| '/assets/'+(article>=0?['editorial/care.webp','editorial/textile.webp','editorial/towels.webp'][article]:imagePaths[i]||'editorial/quiet-bedroom.webp'));
 const schema:any=p?productSchema(p,lang,siteOrigin):{'@type':article>=0?'Article':'WebPage',name:title,url:canonical,inLanguage:languageTag(lang),description,'@id':canonical+'#page'};
 if(article>=0)Object.assign(schema,{headline:title,image,datePublished:'2026-10-25',author:{'@type':'Organization',name:'SlumbaZEN','@id':siteOrigin+'/#organization'}});
 const crumbs=[{name:c.nav[0],item:siteOrigin+'/'+lang+'/'}];if(p)crumbs.push({name:c.titles[2],item:siteOrigin+'/'+lang+'/gallery/'});if(article>=0)crumbs.push({name:c.titles[13],item:siteOrigin+'/'+lang+'/blog/'});if(path)crumbs.push({name:title,item:canonical});
 const graph={'@context':'https://schema.org','@graph':[schema,{'@type':'BreadcrumbList',itemListElement:crumbs.map((v,n)=>({'@type':'ListItem',position:n+1,...v}))},{'@type':'Organization','@id':siteOrigin+'/#organization',name:'SlumbaZEN',url:siteOrigin,logo:siteOrigin+'/assets/logo.png'}]};
 return {title,description,canonical,image,graph,exists,article,locale:({th:'th_TH',en:'en_GB',zh:'zh_CN',ar:'ar',hi:'hi_IN'} as Record<string,string>)[lang],headings:localized?.headings||[],alternates:exists?[...languages.map(l=>({lang:languageTag(l),url:`${siteOrigin}/${l}/${path?path+'/':''}`})),{lang:'x-default',url:`${siteOrigin}/th/${path?path+'/':''}`}]:[]};
}
