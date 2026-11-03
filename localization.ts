import {languages} from './content';
export const languageTag=(lang:string)=>lang==='zh'?'zh-Hans':lang;
const supported=(value:string)=>{const base=value.toLowerCase().split(/[-_]/)[0];return languages.includes(base as any)?base:undefined};
// Explicit page language always wins over a saved choice or browser setting.
export function preferredLanguage(pathname:string,saved:string|null,browserLanguages:readonly string[]){
 return supported(pathname.split('/')[1]||'')||supported(saved||'')||browserLanguages.map(supported).find(Boolean)||'th';
}
export function browserPreferredLanguage(pathname:string){
 let saved=null;try{saved=window.localStorage.getItem('i18nextLng')}catch{}
 return preferredLanguage(pathname,saved,navigator.languages||[navigator.language]);
}
