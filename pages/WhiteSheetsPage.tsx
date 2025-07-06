import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MetaManager from '../components/MetaManager';
import Button from '../components/Button';
import BeddingSetCard from '../components/BeddingSetCard';
import { products as allProducts } from '../products';
import type { Product, LocalizedString } from '../data/galleryData';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import InlineImage from '../components/InlineImage';

const WhiteSheetsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const currentLang = i18n.language as keyof LocalizedString;
  const siteName = t('footer.companyName');
  const pageTitle = t('pageTitle.whiteSheets');
  const canonicalUrl = window.location.origin + window.location.pathname + '#/products/white-sheets';

  const whiteProducts = allProducts.filter(p => 
    p.color.key === 'white'
  ).slice(0, 3); // Display up to 3 featured sets for a cleaner look

  const benefits = [
    { key: 'whiteSheetsPage.benefit1' }, { key: 'whiteSheetsPage.benefit2' },
    { key: 'whiteSheetsPage.benefit3' }, { key: 'whiteSheetsPage.benefit4' },
  ];

  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", "name": t('seo.whiteSheets.title', { siteName }), "description": t('seo.whiteSheets.description'), "url": canonicalUrl, "keywords": t('seo.whiteSheets.keywords'),
    "mainEntity": { "@type": "ItemList", "itemListElement": whiteProducts.map((product, index) => ({
            "@type": "Product", "position": index + 1, "name": product.name[currentLang] || product.name.en, "description": product.description[currentLang] || product.description.en,
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }, "brand": { "@type": "Brand", "name": siteName }
        }))
    }
  };

  return (
    <>
      <MetaManager
        title={t('seo.whiteSheets.title', { siteName })} description={t('seo.whiteSheets.description')}
        keywords={t('seo.whiteSheets.keywords')} ogTitle={t('seo.whiteSheets.title', { siteName })}
        ogDescription={t('seo.whiteSheets.description')} canonicalUrl={canonicalUrl} jsonLd={jsonLd}
      />
      <div className="bg-brand-light relative isolate overflow-hidden">
         <div 
            className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://i.postimg.cc/VkshYnk4/decorative0002.jpg')" }}
          ></div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-brand-light/70 backdrop-blur-sm"></div>
      
         <header 
            className="text-center py-20 sm:py-28"
         >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
                {t('whiteSheetsPage.mainTitle')}
              </h1>
              <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
                {t('whiteSheetsPage.mainDescription')}
              </p>
            </div>
        </header>

        <main className="pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {whiteProducts.length > 0 && (
              <section id="featured-white-sheets" aria-labelledby="featured-white-sheets-heading" className="mb-20 sm:mb-24">
                <h2 id="featured-white-sheets-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                  {t('whiteSheetsPage.featuredTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {whiteProducts.map(product => (
                    <BeddingSetCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-16">
                  <Button to={`${langPrefix}/gallery?color=White`} variant="primary" size="large">
                    {t('whiteSheetsPage.viewAllInGallery')}
                  </Button>
                </div>
              </section>
            )}

            <section id="benefits-white-sheets" aria-labelledby="benefits-white-sheets-heading" className="mb-20 sm:mb-24 py-16 bg-brand-secondary/50 rounded-2xl relative overflow-hidden text-start">
              <div className="max-w-6xl mx-auto px-4 relative z-10">
                  <h2 id="benefits-white-sheets-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                    {t('whiteSheetsPage.benefitsTitle')}
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
                    <div className="lg:order-2">
                        <InlineImage src="https://i.postimg.cc/dV3zRCsQ/B2B-004.jpg" alt={t('whiteSheetsPage.benefitsTitle')} aspectRatio='1/1' />
                    </div>
                    <ul className="lg:order-1 space-y-6 text-neutral-700 text-lg">
                      {benefits.map(benefit => (
                        <li key={benefit.key} className="flex items-start">
                          <CheckCircleIcon className="h-7 w-7 text-brand-primary me-4 mt-1 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: t(benefit.key) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </section>

            <section 
              id="white-sheets-cta" 
              aria-labelledby="white-sheets-cta-heading" 
              className="text-center py-16 relative overflow-hidden rounded-2xl bg-brand-dark bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.postimg.cc/zfVPhNWg/decorative0003.jpg')" }}
            >
              <div className="absolute inset-0 bg-brand-dark/70"></div>
              <div className="relative z-10 text-white">
                  <h2 id="white-sheets-cta-heading" className="text-4xl sm:text-5xl font-bold mb-6">
                    {t('whiteSheetsPage.ctaTitle')}
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                    <Button to={`${langPrefix}/contact?subject=InquiryWhiteBedding`} variant="secondary" size="large">
                      {t('whiteSheetsPage.ctaButtonContact')}
                    </Button>
                    <Button to={`${langPrefix}/collections`} variant="outline" size="large" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
                      {t('whiteSheetsPage.ctaButtonCollections')}
                    </Button>
                  </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default WhiteSheetsPage;
