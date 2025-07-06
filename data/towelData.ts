

export interface TowelVariant {
  parentProduct: 'bathTowel' | 'bathMat';
  nameKey: string;
  specKey: string;
  suitabilityKey: string;
}

export interface TowelProduct {
  key: 'bathTowel' | 'bathMat';
  nameKey: string;
  descriptionKey: string;
  imageUrl: string;
  techTipKey: string;
  variants: TowelVariant[];
}
