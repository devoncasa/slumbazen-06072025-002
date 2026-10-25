type Dictionary=Record<string,any>;
const dictionaries:Record<string,Dictionary>={};
const pending:Record<string,Promise<void>>={};
const loaders:Record<string,()=>Promise<{default:Dictionary}>>={en:()=>import('./public/locales/en/translation.json'),th:()=>import('./public/locales/th/translation.json'),zh:()=>import('./public/locales/zh/translation.json'),ar:()=>import('./public/locales/ar/translation.json'),hi:()=>import('./public/locales/hi/translation.json')};
function loadOne(lang:string){if(dictionaries[lang])return Promise.resolve();if(!pending[lang])pending[lang]=loaders[lang]().then(r=>{dictionaries[lang]=r.default}).catch(e=>{delete pending[lang];throw e});return pending[lang]}
export async function loadLocale(lang:string){await Promise.all([loadOne('en'),loadOne(loaders[lang]?lang:'th')]);}
export function localeDictionary(lang:string){return dictionaries[lang]||{};}
