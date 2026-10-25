



import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TowelProduct, TowelVariant } from '../data/towelData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import InlineImage from '../components/InlineImage';
import OriginalGallery from '../OriginalGallery';

// --- NEW ---
const towelImageGallery = [
    "/assets/restored-1ca368effb6a.webp", "/assets/restored-34cf1950f5ab.webp",
    "/assets/restored-c941431880fb.webp", "/assets/restored-affe0d18f18e.webp",
    "/assets/restored-1e166ed78e7b.webp", "/assets/restored-c8cfe349790b.webp",
    "/assets/restored-5087b49e41df.webp", "/assets/restored-fb3ea2d10d8c.webp",
    "/assets/restored-f15233e81de8.webp",  "/assets/restored-04b671b43b6f.webp",
    "/assets/restored-b4efd6e71ac4.webp",  "/assets/restored-21dd306705eb.webp",
    "/assets/restored-b0eecfa427d9.webp",  "/assets/restored-649557cb6a46.webp",
    "/assets/restored-493eb3bddbec.webp",  "/assets/restored-5c5487299936.webp",
    "/assets/restored-754d34fc6f87.webp",  "/assets/catalogue-46.webp",
    "/assets/catalogue-48.webp", "/assets/restored-98e5f3796820.webp",
    "/assets/catalogue-45.webp", "/assets/catalogue-47.webp",
    "/assets/restored-8565517e3836.webp"
];

// Shuffle array function
const shuffleArray = (array: string[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};
// --- END NEW ---


// Data is now defined locally to prevent module import errors.
const towelProducts: TowelProduct[] = [
  {
    key: 'bathTowel',
    nameKey: 'towelsPage.bathTowel.name',
    descriptionKey: 'towelsPage.bathTowel.description',
    imageUrl: '/assets/restored-1ca368effb6a.webp',
    techTipKey: 'towelsPage.bathTowel.techTip',
    variants: [
      { parentProduct: 'bathTowel', nameKey: 'towelsPage.bathTowel.variant1_name', specKey: 'towelsPage.bathTowel.variant1_spec', suitabilityKey: 'towelsPage.bathTowel.variant1_suitability' },
      { parentProduct: 'bathTowel', nameKey: 'towelsPage.bathTowel.variant2_name', specKey: 'towelsPage.bathTowel.variant2_spec', suitabilityKey: 'towelsPage.bathTowel.variant2_suitability' },
      { parentProduct: 'bathTowel', nameKey: 'towelsPage.bathTowel.variant3_name', specKey: 'towelsPage.bathTowel.variant3_spec', suitabilityKey: 'towelsPage.bathTowel.variant3_suitability' },
      { parentProduct: 'bathTowel', nameKey: 'towelsPage.bathTowel.variant4_name', specKey: 'towelsPage.bathTowel.variant4_spec', suitabilityKey: 'towelsPage.bathTowel.variant4_suitability' },
    ]
  },
  {
    key: 'bathMat',
    nameKey: 'towelsPage.bathMat.name',
    descriptionKey: 'towelsPage.bathMat.description',
    imageUrl: '/assets/restored-fce9ea172c2e.webp',
    techTipKey: 'towelsPage.bathMat.techTip',
    variants: [
      { parentProduct: 'bathMat', nameKey: 'towelsPage.bathMat.variant1_name', specKey: 'towelsPage.bathMat.variant1_spec', suitabilityKey: 'towelsPage.bathMat.variant1_suitability' },
    ]
  }
];

const ProductCard: React.FC<{ product: TowelProduct }> = ({ product }) => {
    const { t } = useTranslation();

    const isBathMat = product.key === 'bathMat';
    const bathMatDecorativeImages = [
        '/assets/restored-56972c41d04d.webp',
        '/assets/restored-ba25005abbfb.webp',
        '/assets/restored-30dc767e8c29.webp',
    ];

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="bg-brand-gold p-0.5">
                <div className="relative">
                    <img src={product.imageUrl} alt={t(product.nameKey)} loading="lazy" className="w-full h-64 object-cover rounded-t-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-0 p-6 text-3xl font-bold text-white">{t(product.nameKey)}</h3>
                </div>
            </div>
            <div className="p-6 text-start">
                <p className="text-neutral-700 mb-6">{t(product.descriptionKey)}</p>

                {isBathMat && (
                    <div className="my-6 flex justify-center items-center gap-4">
                        {bathMatDecorativeImages.map((img, index) => (
                            <div key={index} className="p-0.5 bg-brand-gold rounded-full shadow-lg">
                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                  <img
                                      src={img}
                                      alt={`${t(product.nameKey)} · ${index + 1}`}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                  />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="space-y-4">
                    {product.variants.map((variant: TowelVariant) => (
                        <div key={variant.nameKey} className="flex items-center justify-between p-4 rounded-lg bg-brand-light/70 border border-neutral-200/80">
                            <div>
                                <p className="font-semibold text-brand-dark">{t(variant.nameKey)}</p>
                                <p className="text-sm text-neutral-600">{t(variant.specKey)}</p>
                            </div>
                            <div className="text-end">
                                <p className="text-sm text-neutral-500">{t('towelsPage.suitability')}</p>
                                <p className="font-medium text-neutral-800">{t(variant.suitabilityKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-xs text-neutral-500 italic text-center">{t(product.techTipKey)}</p>
            </div>
        </div>
    );
};

const FirstWashGuide: React.FC<{randomImages: string[]}> = ({ randomImages }) => {
    const { t } = useTranslation();
    const firstWashSteps = [
      { titleKey: "towelsPage.firstWash.step1_title", content: [t('towelsPage.firstWash.step1_reason'), t('towelsPage.firstWash.step1_practice_item1'), t('towelsPage.firstWash.step1_practice_item2'), t('towelsPage.firstWash.step1_practice_item3')] },
      { titleKey: "towelsPage.firstWash.step2_title", content: [t('towelsPage.firstWash.step2_item1'), t('towelsPage.firstWash.step2_item2')] },
      { titleKey: "towelsPage.firstWash.step3_title", content: [t('towelsPage.firstWash.step3_item1'), t('towelsPage.firstWash.step3_item2')] },
      { titleKey: "towelsPage.firstWash.step4_title", content: [t('towelsPage.firstWash.step4_item1'), t('towelsPage.firstWash.step4_item2')] },
      { titleKey: "towelsPage.firstWash.step5_title", content: [t('towelsPage.firstWash.step5_item1'), t('towelsPage.firstWash.step5_item2')] },
      { titleKey: "towelsPage.firstWash.step6_title", content: [t('towelsPage.firstWash.step6_item1')] },
      { titleKey: "towelsPage.firstWash.step7_title", content: [t('towelsPage.firstWash.step7_item1')] },
      { titleKey: "towelsPage.firstWash.step8_title", content: [t('towelsPage.firstWash.step8_item1')] },
      { titleKey: "towelsPage.firstWash.step9_title", content: [t('towelsPage.firstWash.step9_item1')] },
      { titleKey: "towelsPage.firstWash.step10_title", content: [t('towelsPage.firstWash.step10_item1')] }
    ];

    const decorativeImages = useMemo(() => randomImages.slice(0, 3), [randomImages]);
    const sectionBgImage = useMemo(() => randomImages.length > 3 ? randomImages[3] : "/assets/restored-b4efd6e71ac4.webp", [randomImages]);

    const WashStep: React.FC<{step: {titleKey: string, content: string[]}}> = ({step}) => (
        <details className="bg-white/80 p-5 rounded-xl shadow-lg group text-start" name="wash-guide-accordion">
            <summary className="flex justify-between items-center font-semibold text-lg text-neutral-900 cursor-pointer list-none">
                {t(step.titleKey)}
                <ChevronDownIcon className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-brand-primary" />
            </summary>
            <div className="text-neutral-700 mt-4 space-y-2 text-sm prose max-w-none prose-p:my-1 prose-strong:font-semibold">
                {step.content.map((item, i) => <p key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
            </div>
        </details>
    );

    return (
        <section 
            id="first-wash" 
            className="py-16 sm:py-20 bg-brand-secondary/40 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('${sectionBgImage}')` }}
        >
            <div className="absolute inset-0 bg-brand-secondary/80 backdrop-blur-sm"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="hidden lg:flex flex-col gap-6 sticky top-28">
                        {["/assets/editorial/towel-first-wash.webp",...decorativeImages.slice(0,1)].map((img, index) => (
                           <div key={index} className="bg-brand-gold p-0.5 rounded-2xl shadow-lg">
                               <InlineImage src={img} alt={t('towelsPage.firstWash.title')} aspectRatio="4/3" />
                           </div>
                        ))}
                    </div>
                     <div className="lg:col-span-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 text-center lg:text-start">{t('towelsPage.firstWash.title')}</h2>
                        <p className="text-center lg:text-start text-neutral-700 mb-12 max-w-3xl mx-auto lg:mx-0">{t('towelsPage.firstWash.intro')}</p>
                        <div className="space-y-4">
                            {firstWashSteps.map((step, index) => <WashStep key={index} step={step} />)}
                        </div>
                        <div className="bg-brand-dark text-white p-6 rounded-xl shadow-lg mt-8 text-center">
                            <p className="font-semibold text-lg">{t('towelsPage.firstWash.conclusion')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TowelCareSection: React.FC = () => {
    const { t } = useTranslation();
    const careTips = [1, 2, 3, 4, 5]; // 5 tips

    return (
        <section id="towel-care" className="py-16 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-12 text-center">
                        {t('towelsPage.careInstructions.title')}
                    </h2>
                    <div className="space-y-4">
                        {careTips.map((tipNumber) => {
                            const titleKey = `towelsPage.careInstructions.tip${tipNumber}.title`;
                            const explanationKey = `towelsPage.careInstructions.tip${tipNumber}.explanation`;
                            
                            return (
                                <details key={tipNumber} className="bg-white/80 p-5 rounded-xl shadow-lg group text-start transition-all duration-300 open:bg-brand-secondary/30 open:shadow-2xl">
                                    <summary className="flex justify-between items-center font-semibold text-lg text-neutral-900 cursor-pointer list-none">
                                        <span>{t(titleKey)}</span>
                                        <ChevronDownIcon className="h-5 w-5 transform transition-transform duration-300 group-open:rotate-180 text-brand-primary" />
                                    </summary>
                                    <div className="text-neutral-700 mt-4 text-base prose max-w-none prose-p:my-1">
                                       <p>{t(explanationKey)}</p>
                                    </div>
                                </details>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TowelsPage: React.FC = () => {
    const { t } = useTranslation();
    const siteName = t('footer.companyName');
    const pageTitle = t('towelsPage.mainTitle');
    const pageDescription = t('seo.towels.description', { siteName });
    const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/towels`;
    
    // Shuffle images once per component mount for consistency during a session
    const shuffledImages = useMemo(() => towelImageGallery, []);

    const pageBgImage = useMemo(() => shuffledImages[0], [shuffledImages]);
    const defaultOgImage = useMemo(() => shuffledImages.length > 1 ? shuffledImages[1] : pageBgImage, [shuffledImages, pageBgImage]);


    const getProductByKey = (key: 'bathTowel' | 'bathMat') => towelProducts.find(p => p.key === key);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": pageTitle,
        "description": pageDescription,
        "url": canonicalUrl,
        "image": defaultOgImage,
        "publisher": { "@type": "Organization", "name": siteName },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": towelProducts.flatMap(p => p.variants).map((variant, index) => {
                const parentProduct = getProductByKey(variant.parentProduct);
                if (!parentProduct) return null;
                return {
                    "@type": "Product",
                    "position": index + 1,
                    "name": `${t(parentProduct.nameKey)} - ${t(variant.nameKey)}`,
                    "description": t(variant.suitabilityKey),
                    "image": parentProduct.imageUrl,
                    
                };
            }).filter(Boolean)
        }
    };

    return (
        <>
            
            <div className="bg-brand-light relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${pageBgImage}')` }}></div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-brand-light/80 backdrop-blur-sm" />

                <header
                    className="py-24 sm:py-32 text-center text-white relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${defaultOgImage})` }}
                >
                    <div className="absolute inset-0 bg-brand-dark/60"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{pageTitle}</h1>
                        <p className="mt-4 text-lg text-neutral-200 max-w-3xl mx-auto">{t('towelsPage.mainDescription')}</p>
                    </div>
                </header>

                <div className="py-16 sm:py-24 space-y-16 sm:space-y-24">
                    <section id="towel-products" className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-10">
                            {towelProducts.map(product => <ProductCard key={product.key} product={product} />)}
                        </div>
                    </section>
                    
                    <div className="container mx-auto px-4"><InlineImage src="/assets/editorial/hospitality-bath.webp" alt={t('towelsPage.mainTitle')} aspectRatio="4/3" /></div>
                    <FirstWashGuide randomImages={shuffledImages.slice(2)} />

                    <TowelCareSection />
                    <OriginalGallery images={towelImageGallery} title={t('towelsPage.mainTitle')} />

                </div>
            </div>
        </>
    );
};

export default TowelsPage;
