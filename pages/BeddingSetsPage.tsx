import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BeddingSetCard from '../components/BeddingSetCard';
import { products as allProducts } from '../products';
import type { Product, LocalizedString } from '../data/galleryData';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import InlineImage from '../components/InlineImage';

export default function BeddingSetsPage() {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const currentLang = i18n.language as keyof LocalizedString;
  const siteName = t('footer.companyName');
  const pageTitle = t('pageTitle.beddingSets');
  const canonicalUrl = 'https://www.slumbazen.com' + '/' + '#/products/sets';

  const beddingSetProducts = allProducts.filter(p => p.productType.key === 'beddingSet');

  const featuredProducts = [
    beddingSetProducts.find(p => p.fabricType.key === 'cotton100' && p.pattern.key === 'striped' && p.imageUrl),
    beddingSetProducts.find(p => p.fabricType.key === 'softTex' && p.pattern.key === 'plain' && p.imageUrl),
    beddingSetProducts.find(p => p.fabricType.key === 'cvc60' && p.pattern.key === 'striped' && p.imageUrl)
  ].filter(Boolean) as Product[];

   const benefits = [
    { key: 'beddingSetsPage.benefit1' }, { key: 'beddingSetsPage.benefit2' }, { key: 'beddingSetsPage.benefit3' },
  ];
  const components = [
    { key: 'beddingSetsPage.component1' }, { key: 'beddingSetsPage.component2' },
    { key: 'beddingSetsPage.component4' },
  ];

  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", "name": t('seo.beddingSets.title', { siteName }), "description": t('seo.beddingSets.description'), "url": canonicalUrl, "keywords": t('seo.beddingSets.keywords'),
     "mainEntity": { "@type": "ItemList", "itemListElement": featuredProducts.map((product, index) => ({
            "@type": "Product", "position": index + 1, "name": product.name[currentLang] || product.name.en, "description": product.description[currentLang] || product.description.en,
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }, "brand": { "@type": "Brand", "name": siteName }
        }))
    }
  };

  return (
    <>
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/restored-ac7e2c8aaca0.webp')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
      
         <header className="text-center py-20 sm:py-28 bg-pastel-lavender">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
                {t('beddingSetsPage.mainTitle')}
              </h1>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                {t('beddingSetsPage.mainDescription')}
              </p>
            </div>
        </header>
        
        <div className="pb-20 sm:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {featuredProducts.length > 0 && (
                <section id="featured-bedding-sets" aria-labelledby="featured-bedding-sets-heading" className="mb-20 sm:mb-24">
                  <h2 id="featured-bedding-sets-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                    {t('beddingSetsPage.featuredTitle')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {featuredProducts.map(product => (
                      <BeddingSetCard key={product.id} product={product} />
                    ))}
                  </div>
                  <div className="text-center mt-16">
                    <Button to={`${langPrefix}/gallery?productType=beddingSet`} variant="primary" size="large">
                      {t('beddingSetsPage.viewAllInGallery')}
                    </Button>
                  </div>
                </section>
              )}

              <section id="benefits-bedding-sets" aria-labelledby="benefits-bedding-sets-heading" className="mb-20 sm:mb-24 py-16 bg-pastel-mint rounded-2xl relative overflow-hidden text-start">
                  <div className="max-w-6xl mx-auto px-4 relative z-10">
                      <h2 id="benefits-bedding-sets-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                          {t('beddingSetsPage.benefitsTitle')}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                            <InlineImage src="/assets/editorial/set.webp" alt={t('beddingSetsPage.benefitsTitle')} aspectRatio="1/1" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-brand-dark mb-6">{t('beddingSetsPage.componentsTitle')}</h3>
                            <ul className="space-y-4 text-lg">
                              {components.map(component => (
                                <li key={component.key} className="flex items-center">
                                  <CheckCircleIcon className="h-7 w-7 text-brand-primary me-3 flex-shrink-0" />
                                  <span>{t(component.key)}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8 space-y-4">
                              {benefits.map(benefit => (
                                <div key={benefit.key} className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                  <p className="text-neutral-700 font-medium" dangerouslySetInnerHTML={{ __html: t(benefit.key) }} />
                                </div>
                              ))}
                            </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section
                id="bedding-sets-cta"
                aria-labelledby="bedding-sets-cta-heading"
                className="text-center py-16 relative overflow-hidden rounded-2xl bg-pastel-pink"
              >
                <div className="relative z-10">
                  <h2 id="bedding-sets-cta-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
                    {t('beddingSetsPage.ctaTitle')}
                  </h2>
                  <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                    {t('beddingSetsPage.ctaDescription')}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                    <Button to={`${langPrefix}/contact?subject=InquiryBeddingSets`} variant="secondary" size="large">
                      {t('beddingSetsPage.ctaButtonContact')}
                    </Button>
                    <Button to={`${langPrefix}/collections`} variant="outline" size="large">
                      {t('beddingSetsPage.ctaButtonCollections')}
                    </Button>
                  </div>
                </div>
              </section>
            </div>
        </div>
      </div>
    </>
  );
}

