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

const PremiumColorsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const currentLang = i18n.language as keyof LocalizedString;
  const siteName = t('footer.companyName');
  const pageTitle = t('pageTitle.premiumColors');
  const canonicalUrl = 'https://www.slumbazen.com' + '/' + '#/products/premium-colors';

  const neutralColorKeysEn = ['White', 'Cream', 'LightGrey', 'DarkGrey', 'Beige'];
  const neutralColorKeysTh = ['ขาว (White)', 'ครีม (Cream)', 'เทาอ่อน (Light Grey)', 'เทาเข้ม (Dark Grey)', 'เบจ (Beige)'];
  
  const premiumColorProducts = allProducts.filter(p => 
    !neutralColorKeysEn.includes(p.color.en) && !neutralColorKeysTh.includes(p.color.th) && p.productType.key !== 'towel'
  ).slice(0, 3); // Display up to 3 featured sets for a cleaner look

  const benefits = [
    { key: 'premiumColorsPage.benefit1' }, { key: 'premiumColorsPage.benefit2' },
    { key: 'premiumColorsPage.benefit3' }, { key: 'premiumColorsPage.benefit4' },
  ];

  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", "name": t('seo.premiumColors.title', { siteName }), "description": t('seo.premiumColors.description'), "url": canonicalUrl, "keywords": t('seo.premiumColors.keywords'),
     "mainEntity": { "@type": "ItemList", "itemListElement": premiumColorProducts.map((product, index) => ({
            "@type": "Product", "position": index + 1, "name": product.name[currentLang] || product.name.en, "description": product.description[currentLang] || product.description.en,
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }, "brand": { "@type": "Brand", "name": siteName }
        }))
    }
  };

  return (
    <>
      
       <div className="bg-brand-light relative isolate overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/assets/restored-364a71697a01.webp')" }}
        ></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-light/80 backdrop-blur-sm"></div>

        <header 
          className="relative text-center py-20 sm:py-28 bg-brand-primary text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/restored-50e2c89e4a32.webp')" }}
        >
          <div className="absolute inset-0 bg-brand-primary/60 backdrop-brightness-75"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {t('premiumColorsPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
              {t('premiumColorsPage.mainDescription')}
            </p>
          </div>
        </header>
        
        <div className="pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {premiumColorProducts.length > 0 && (
              <section id="featured-premium-colors" aria-labelledby="featured-premium-colors-heading" className="py-20 sm:py-24">
                <h2 id="featured-premium-colors-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                  {t('premiumColorsPage.featuredTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {premiumColorProducts.map(product => (
                    <BeddingSetCard key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mt-16">
                  <Button to={`${langPrefix}/gallery`} variant="primary" size="large">
                    {t('premiumColorsPage.viewAllInGallery')}
                  </Button>
                </div>
              </section>
            )}
          </div>
          
           <section
            id="benefits-premium-colors"
            aria-labelledby="benefits-premium-colors-heading"
            className="py-20 sm:py-24 relative bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/restored-ac7e2c8aaca0.webp')" }}
          >
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto bg-brand-light/80 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-xl text-start">
                <h2 id="benefits-premium-colors-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                  {t('premiumColorsPage.benefitsTitle')}
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
                  <div>
                      <InlineImage src="/assets/editorial/colors.webp" alt={t('premiumColorsPage.benefitsTitle')} aspectRatio="1/1" />
                  </div>
                  <ul className="space-y-6 text-neutral-800 text-lg">
                    {benefits.map(benefit => (
                      <li key={benefit.key} className="flex items-start">
                        <CheckCircleIcon className="h-7 w-7 text-brand-primary me-4 mt-1 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: t(benefit.key) }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <section 
                id="premium-colors-cta" 
                aria-labelledby="premium-colors-cta-heading" 
                className="text-center relative overflow-hidden rounded-2xl bg-neutral-700 text-white bg-cover bg-center py-20 sm:py-24"
                style={{ backgroundImage: "url('/assets/catalogue-07.webp')" }}
            >
              <div className="absolute inset-0 bg-neutral-700/80"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <h2 id="premium-colors-cta-heading" className="text-4xl sm:text-5xl font-bold mb-6">
                    {t('premiumColorsPage.ctaTitle')}
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                    <Button to={`${langPrefix}/contact?subject=InquiryPremiumColors`} variant="secondary" size="large">
                      {t('premiumColorsPage.ctaButtonContact')}
                    </Button>
                    <Button to={`${langPrefix}/collections`} variant="outline" size="large" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark focus:!ring-white/30">
                      {t('premiumColorsPage.ctaButtonCollections')}
                    </Button>
                  </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumColorsPage;

