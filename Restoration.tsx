import React,{useMemo} from 'react';
import {createInstance} from 'i18next';
import {I18nextProvider} from 'react-i18next';
import {Link} from 'react-router-dom';
import JourneyGuide from './JourneyGuide';
import Header from './components/Header';
import Footer from './components/Footer';
import en from './public/locales/en/translation.json';
import th from './public/locales/th/translation.json';
import zh from './public/locales/zh/translation.json';
import ar from './public/locales/ar/translation.json';
import hi from './public/locales/hi/translation.json';
import Home from './pages/HomePage';
import Collections from './pages/CollectionsPage';
import White from './pages/WhiteSheetsPage';
import Colors from './pages/PremiumColorsPage';
import Sets from './pages/BeddingSetsPage';
import Towels from './pages/TowelsPage';
import Materials from './pages/MaterialsPage';
import Tencel from './pages/WhatIsTencelPage';
import Sizes from './pages/SizesPage';
import Hotels from './pages/HotelsPage';
import Delivery from './pages/DeliveryWarrantyPage';
import Contact from './pages/ContactPage';
import {copy} from './content';
export const restoredPages:Record<string,React.ComponentType>={'':Home,collections:Collections,'products/white-sheets':White,'products/premium-colors':Colors,'products/sets':Sets,towels:Towels,materials:Materials,'what-is-tencel':Tencel,sizes:Sizes,hotels:Hotels,delivery:Delivery,contact:Contact};
export function RestorationFrame({lang,path,children}:{lang:string,path:string,children:React.ReactNode}){
 const instance=useMemo(()=>{const i=createInstance();i.init({lng:lang,fallbackLng:'en',supportedLngs:['th','en','zh','ar','hi'],initImmediate:false,resources:{en:{translation:en},th:{translation:th},zh:{translation:zh},ar:{translation:ar},hi:{translation:hi}},interpolation:{escapeValue:false},react:{useSuspense:false}});return i},[lang]);
 const c=copy[lang]||copy.th;
 return <I18nextProvider i18n={instance}><div className="legacy-site" dir={lang==='ar'?'rtl':'ltr'}><a className="skip" href="#main">{c.shop}</a><Header/><nav className="section-navigation" aria-label={c.nav[1]}>{[['products/white-sheets',3],['products/sets',5],['towels',6],['hotels',10],['collections',1],['materials',7],['blog',13]].map(([url,n])=><Link key={url} to={`/${lang}/${url}`} aria-current={path===url?'page':undefined}>{c.titles[n as number]}</Link>)}</nav><JourneyGuide lang={lang} path={path}/>{path&&restoredPages[path]&&(lang==='th'||lang==='en'||['hotels','towels'].includes(path))&&<nav className="restored-breadcrumb" aria-label={c.nav[0]}><Link to={`/${lang}/`}>{c.nav[0]}</Link><span aria-hidden="true"> / </span><span>{c.titles[['','collections','gallery','products/white-sheets','products/premium-colors','products/sets','towels','materials','what-is-tencel','sizes','hotels','delivery','contact','blog'].indexOf(path)]||c.details}</span></nav>}{children}<Footer/></div></I18nextProvider>
}
