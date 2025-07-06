

export interface LocalizedString {
  th: string;
  en: string;
  zh: string;
  ar: string;
  hi: string;
}

export interface Product {
  id: string; 
  name: LocalizedString; 
  productType: LocalizedString & { key: string };
  size: LocalizedString & { key: string };
  fabricType: LocalizedString & { key: string };
  threadCount: number;
  originalThreadCount?: number; // Added to preserve original TC for grouping
  pattern: LocalizedString & { key: string };
  color: LocalizedString & { key: string };
  price: number;
  description: LocalizedString;
  imageUrl?: string;
}