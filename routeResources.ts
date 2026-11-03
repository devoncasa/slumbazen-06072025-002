import type {ComponentType} from 'react';
export const routeModules:Record<string,string>={'':'pages/HomePage.tsx',collections:'pages/CollectionsPage.tsx','products/white-sheets':'pages/WhiteSheetsPage.tsx','products/premium-colors':'pages/PremiumColorsPage.tsx','products/sets':'pages/BeddingSetsPage.tsx',towels:'pages/TowelsPage.tsx',materials:'pages/MaterialsPage.tsx','what-is-tencel':'pages/WhatIsTencelPage.tsx',sizes:'pages/SizesPage.tsx',hotels:'pages/HotelsPage.tsx',delivery:'pages/DeliveryWarrantyPage.tsx',contact:'pages/ContactPage.tsx'};
const loaders:Record<string,()=>Promise<{default:ComponentType}>>={
 '':()=>import('./pages/HomePage'),collections:()=>import('./pages/CollectionsPage'),'products/white-sheets':()=>import('./pages/WhiteSheetsPage'),'products/premium-colors':()=>import('./pages/PremiumColorsPage'),'products/sets':()=>import('./pages/BeddingSetsPage'),towels:()=>import('./pages/TowelsPage'),materials:()=>import('./pages/MaterialsPage'),'what-is-tencel':()=>import('./pages/WhatIsTencelPage'),sizes:()=>import('./pages/SizesPage'),hotels:()=>import('./pages/HotelsPage'),delivery:()=>import('./pages/DeliveryWarrantyPage'),contact:()=>import('./pages/ContactPage')
};
export const restoredPages:Record<string,ComponentType>=Object.create(null);
const pending:Record<string,Promise<void>>=Object.create(null);
export function routeReady(path:string){return !Object.prototype.hasOwnProperty.call(loaders,path)||!!restoredPages[path]}
export function loadRoute(path:string){
 if(routeReady(path))return Promise.resolve();
 if(!pending[path])pending[path]=loaders[path]().then(module=>{restoredPages[path]=module.default}).finally(()=>{delete pending[path]});
 return pending[path];
}
