import type {ComponentType} from 'react';
import {products} from './products';
export const routeModules:Record<string,string>={'':'pages/HomePage.tsx',collections:'pages/CollectionsPage.tsx','products/white-sheets':'pages/WhiteSheetsPage.tsx','products/premium-colors':'pages/PremiumColorsPage.tsx','products/sets':'pages/BeddingSetsPage.tsx',towels:'pages/TowelsPage.tsx',materials:'pages/MaterialsPage.tsx','what-is-tencel':'pages/WhatIsTencelPage.tsx',sizes:'pages/SizesPage.tsx',hotels:'pages/HotelsPage.tsx',delivery:'pages/DeliveryWarrantyPage.tsx',contact:'pages/ContactPage.tsx'};
type ComponentLoader = () => Promise<{default: ComponentType<any>}>;
const loaders:Record<string,ComponentLoader>={
 '':()=>import('./pages/HomePage'),collections:()=>import('./pages/CollectionsPage'),'products/white-sheets':()=>import('./pages/WhiteSheetsPage'),'products/premium-colors':()=>import('./pages/PremiumColorsPage'),'products/sets':()=>import('./pages/BeddingSetsPage'),towels:()=>import('./pages/TowelsPage'),materials:()=>import('./pages/MaterialsPage'),'what-is-tencel':()=>import('./pages/WhatIsTencelPage'),sizes:()=>import('./pages/SizesPage'),hotels:()=>import('./pages/HotelsPage'),delivery:()=>import('./pages/DeliveryWarrantyPage'),contact:()=>import('./pages/ContactPage')
};
export const restoredPages:Record<string,ComponentType<any>>=Object.create(null);
const enquiryRoutes = new Set(['products/premium-colors', 'products/sets', 'towels', 'what-is-tencel', 'hotels', 'delivery', 'contact']);
export function routeFeatureModules(path: string): (keyof typeof featureLoaders)[] {
  const product = path.startsWith('product/') && products.some(item => item.id.toLowerCase() === path.slice(8).toLowerCase());
  if (product) return ['Enquiry.tsx', 'ProductDetails.tsx'];
  return enquiryRoutes.has(path) ? ['Enquiry.tsx'] : [];
}
const featureLoaders = {
  'Enquiry.tsx': () => import('./Enquiry'),
  'ProductDetails.tsx': () => import('./ProductDetails'),
};
const pending: Record<string, Promise<void>> = Object.create(null);
export function routeReady(path: string) {
  return (!Object.prototype.hasOwnProperty.call(loaders, path) || !!restoredPages[path]) &&
    routeFeatureModules(path).every(key => !!restoredPages[key]);
}
export function loadRoute(path: string) {
  if (routeReady(path)) return Promise.resolve();
  const entries: [string, ComponentLoader][] = routeFeatureModules(path).map(key => [key, featureLoaders[key]]);
  if (Object.prototype.hasOwnProperty.call(loaders, path)) entries.push([path, loaders[path]]);
  return Promise.all(entries.map(([key, load]) => {
    if (restoredPages[key]) return Promise.resolve();
    return pending[key] ||= load().then(module => {
      restoredPages[key] = module.default;
    }).finally(() => { delete pending[key]; });
  })).then(() => {});
}
