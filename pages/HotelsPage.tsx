
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import MetaManager from '../components/MetaManager'; // Import MetaManager
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import InlineImage from '../components/InlineImage';
import OriginalGallery from '../OriginalGallery';

const ImageSlideshow: React.FC<{ images: string[]; alt: string; interval?: number; aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5'; }> = ({ images, alt, interval = 2000, aspectRatio = '4/5' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '1/1': 'aspect-square',
    '4/5': 'aspect-[4/5]',
  };

  return (
    <div className={`my-8 sm:my-10`}>
      <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${aspectClasses[aspectRatio]} p-0.5 bg-brand-gold`}>
        <div className="w-full h-full relative rounded-xl overflow-hidden">
          {images.slice(0,1).map((src, index) => (
            <img
              key={src + index}
              src={src}
              alt={`${alt} - slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
      </div>
    </div>
  );
};


const InfoCard: React.FC<{ titleKey: string; children: React.ReactNode; className?: string }> = ({ titleKey, children, className }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 text-start ${className}`}>
      <h3 className="text-2xl font-semibold text-brand-primary mb-4 flex items-center">
        <CheckBadgeIcon className="h-7 w-7 me-3" />
        {t(titleKey)}
      </h3>
      <div className="space-y-3 text-neutral-700 text-base">
        {children}
      </div>
    </div>
  );
};

const HotelInfoTable: React.FC<{ headerKeys: string[]; data: (string | React.ReactElement)[][]; captionKey?: string }> = ({ headerKeys, data, captionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto rounded-xl shadow-xl border border-neutral-200/80">
      
      <table className="min-w-full bg-white/80 backdrop-blur-sm text-base">
        <thead className="bg-brand-secondary/70 text-brand-dark">
          <tr>
            {headerKeys.map(headerKey => (
              <th key={headerKey} className="text-start py-4 px-6 font-semibold tracking-wider">{t(headerKey)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex === 0 ? '' : 'border-t'} border-neutral-200 hover:bg-brand-light/70 transition-colors duration-200`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-5 px-6">
                  {typeof cell === 'string' && (cell.startsWith('hotelsPage.')) ? t(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function HotelsPage() {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const siteName = "Slumbazen";
  const pageTitle = t('seo.hotels.title', { siteName });
  const pageDescription = t('seo.hotels.description');
  const pageKeywords = t('seo.hotels.keywords');
  const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/hotels`;
  
  const slideshowImages = [
    "/assets/restored-f12d2f42cb89.webp",
    "/assets/restored-afe0e45f73f8.webp",
    "/assets/restored-f7c92a7fe9f0.webp",
    "/assets/restored-95b676b8efa1.webp",
    "/assets/restored-8f158b62f061.webp",
    "/assets/restored-000d1e2d1f6c.webp",
    "/assets/restored-5f74694d0e25.webp",
    "/assets/restored-3ca48e9246fc.webp",
    "/assets/restored-fc4d229c0e5b.webp"
  ];

  const expertAdviceDataContent = [
    { useCaseKey: "hotelsPage.expertAdvice.row1.useCase", recommendationKey: "hotelsPage.expertAdvice.row1.recommendation", reasonKey: "hotelsPage.expertAdvice.row1.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row2.useCase", recommendationKey: "hotelsPage.expertAdvice.row2.recommendation", reasonKey: "hotelsPage.expertAdvice.row2.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row3.useCase", recommendationKey: "hotelsPage.expertAdvice.row3.recommendation", reasonKey: "hotelsPage.expertAdvice.row3.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row4.useCase", recommendationKey: "hotelsPage.expertAdvice.row4.recommendation", reasonKey: "hotelsPage.expertAdvice.row4.reason" },
    { useCaseKey: "hotelsPage.expertAdvice.row5.useCase", recommendationKey: "hotelsPage.expertAdvice.row5.recommendation", reasonKey: "hotelsPage.expertAdvice.row5.reason" },
  ];
  const expertAdviceTableData = expertAdviceDataContent.map(item => [t(item.useCaseKey), t(item.recommendationKey), t(item.reasonKey)]);

  const whyChooseUsCards = [
    { titleKey: "hotelsPage.whyChooseUs.card1.title", contentKey: "hotelsPage.whyChooseUs.card1.content" },
    { titleKey: "hotelsPage.whyChooseUs.card2.title", contentKey: "hotelsPage.whyChooseUs.card2.content", linkTo: "/materials", linkKey: "hotelsPage.whyChooseUs.card2.link" },
    { titleKey: "hotelsPage.whyChooseUs.card3.title", contentKey: "hotelsPage.whyChooseUs.card3.content" },
    { titleKey: "hotelsPage.whyChooseUs.card4.title", contentKey: "hotelsPage.whyChooseUs.card4.content" },
    { titleKey: "hotelsPage.whyChooseUs.card5.title", contentKey: "hotelsPage.whyChooseUs.card5.content" },
    { titleKey: "hotelsPage.whyChooseUs.card6.title", contentKey: "hotelsPage.whyChooseUs.card6.content", buttonTo: "/contact?subject=RequestSamplesB2B", buttonKey: "hotelsPage.whyChooseUs.card6.button" },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle, "description": pageDescription, "url": canonicalUrl, "keywords": pageKeywords,
     "mainEntity": { "@type": "Service", "serviceType": t('hotelsPage.mainTitle'), 
      "provider": { "@type": "Organization", "name": siteName, "url": `${'https://www.slumbazen.com'}${'/'}#/` },
      "areaServed": { "@type": "Country", "name": "Thailand" }, "description": pageDescription,
      "serviceOutput": { "@type": "Product", "name": "Hotel Bedding (Cotton, Tencel, CVC, Soft-Tex)" }
    },
    "breadcrumb": { "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${'https://www.slumbazen.com'}${'/'}#${langPrefix}` },
        { "@type": "ListItem", "position": 2, "name": t('nav.hotelB2B'), "item": `${'https://www.slumbazen.com'}${'/'}#${langPrefix}/hotels` }
      ]
    },
    "publisher": { "@type": "Organization", "name": siteName, "logo": { "@type": "ImageObject", "url": "/assets/logo.png" } }
  };

  return (
    <>
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/restored-b0f9cb299859.webp')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
        
        <header 
          className="relative text-center py-20 sm:py-28 text-white overflow-hidden bg-brand-dark bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/restored-f08369169e9f.webp')" }}
        >
          <div className="absolute inset-0 bg-brand-dark/70"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              {t('hotelsPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
              {t('hotelsPage.mainDescription')}
            </p>
          </div>
        </header>
        
        <div className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section id="why-choose-us-b2b" aria-labelledby="why-choose-us-heading" className="mb-20 sm:mb-28 p-8 -m-8 relative overflow-hidden rounded-2xl bg-brand-light/50">
                <div className="relative z-10">
                    <h2 id="why-choose-us-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-16 text-center">
                        {t('hotelsPage.whyChooseUs.title')}
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <InlineImage
                                src="/assets/editorial/hospitality-room.webp"
                                alt={t('hotelsPage.whyChooseUs.slideshowAlt')}
                                aspectRatio="4/3"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {whyChooseUsCards.map(card => (
                                <InfoCard key={card.titleKey} titleKey={card.titleKey}>
                                    <p>{t(card.contentKey)}</p>
                                    {card.linkTo && <Button to={`${langPrefix}${card.linkTo}`} variant="link" size="small" className="!px-0 mt-3">{t(card.linkKey!)} <span className="inline-block rtl:rotate-180">&rarr;</span></Button>}
                                    {card.buttonTo && <Button to={`${langPrefix}${card.buttonTo}`} variant="outline" size="small" className="mt-4">{t(card.buttonKey!)}</Button>}
                                </InfoCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <OriginalGallery images={slideshowImages} title={t('hotelsPage.whyChooseUs.slideshowAlt')} />
            <section id="expert-hotel-advice" aria-labelledby="expert-advice-heading" className="mb-20 sm:mb-28 p-8 -m-8 relative overflow-hidden rounded-2xl bg-brand-light/50">
              <div className="relative z-10">
                  <h2 id="expert-advice-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                    {t('hotelsPage.expertAdvice.title')}
                  </h2>
                  <HotelInfoTable
                      headerKeys={["hotelsPage.expertAdvice.header1", "hotelsPage.expertAdvice.header2", "hotelsPage.expertAdvice.header3"]}
                      data={expertAdviceTableData}
                  />
              </div>
            </section>
            
            <section 
              id="b2b-contact-cta" 
              aria-labelledby="b2b-cta-heading" 
              className="text-center py-20 bg-brand-dark text-white rounded-2xl relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/catalogue-04.webp')" }}
            >
              <div className="absolute inset-0 bg-brand-dark/70"></div>
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 id="b2b-cta-heading" className="text-4xl sm:text-5xl font-bold mb-6">
                  {t('hotelsPage.cta.title')}
                </h2>
                <p className="text-lg text-neutral-200 mb-10 max-w-2xl mx-auto">
                  {t('hotelsPage.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse">
                  <Button to={`${langPrefix}/contact?subject=B2BInquiry`} variant="secondary" size="large">
                    {t('hotelsPage.cta.button1')}
                  </Button>
                  <Button to="tel:0818519922" variant="outline" size="large" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
                    {t('hotelsPage.cta.button2')}
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

