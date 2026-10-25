

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import InlineImage from '../components/InlineImage';

const FeatureCard: React.FC<{ titleKey: string; descriptionKey: string; icon: React.ReactElement<any> }> = ({ titleKey, descriptionKey, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 text-start">
      <div className="flex items-center text-brand-primary mb-4">
        {React.cloneElement(icon, { "aria-hidden": "true", className: "h-9 w-9" })}
      </div>
      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">{t(titleKey)}</h3>
      <p className="text-neutral-700 text-base">{t(descriptionKey)}</p>
    </div>
  );
};

export default function WhatIsTencelPage() {
  const { t } = useTranslation();
  const siteName = "Slumbazen";
  const pageTitle = t('seo.whatIsTencel.title', { siteName });
  const pageDescription = t('seo.whatIsTencel.description');
  const pageKeywords = t('seo.whatIsTencel.keywords');
  const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/what-is-tencel`;

  const featuresData = [
    { titleKey: "whatIsTencelPage.features.item1.title", descriptionKey: "whatIsTencelPage.features.item1.description", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 20l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 23.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 20l1.035-.259a3.375 3.375 0 002.456-2.456L18 15.75z" /></svg> },
    { titleKey: "whatIsTencelPage.features.item2.title", descriptionKey: "whatIsTencelPage.features.item2.description", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg> },
    { titleKey: "whatIsTencelPage.features.item3.title", descriptionKey: "whatIsTencelPage.features.item3.description", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg> },
    { titleKey: "whatIsTencelPage.features.item4.title", descriptionKey: "whatIsTencelPage.features.item4.description", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> },
    { titleKey: "whatIsTencelPage.features.item5.title", descriptionKey: "whatIsTencelPage.features.item5.description", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-3.162 0-6.04-.998-8.447-2.657m16.894 0L12 18.75M3.284 9A8.959 8.959 0 013 12c0 .778.099 1.533.284 2.253m0 0L12 18.75m-8.716-6.747A8.959 8.959 0 013 12" /></svg> }
  ];
  const careItems = ["whatIsTencelPage.care.item1", "whatIsTencelPage.care.item2", "whatIsTencelPage.care.item3", "whatIsTencelPage.care.item4"];

  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "headline": t('whatIsTencelPage.mainTitle'), "description": pageDescription, "keywords": pageKeywords, "image": "/assets/restored-0040ea4de0d2.webp", 
    "author": { "@type": "Organization", "name": siteName, "url": `${'https://www.slumbazen.com'}${'/'}#/` },
    "publisher": { "@type": "Organization", "name": siteName, "logo": { "@type": "ImageObject", "url": "/assets/logo.png" } },
    "datePublished": "2024-07-01", "dateModified": "2024-07-28" 
  };
   const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${'https://www.slumbazen.com'}${'/'}#/` },
      { "@type": "ListItem", "position": 2, "name": t('nav.learnItems.whatIsTencel'), "item": canonicalUrl }
    ]
  };

  return (
    <>
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/restored-62e89523623f.webp')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
      
         <header 
            className="relative text-center py-20 sm:py-28 text-white overflow-hidden bg-brand-dark bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/restored-0040ea4de0d2.webp')" }}
          >
            <div className="absolute inset-0 bg-brand-dark/70"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                {t('whatIsTencelPage.mainTitle')}
              </h1>
              <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
                {t('whatIsTencelPage.mainDescription')}
              </p>
            </div>
        </header>

        <div className="pb-20 sm:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section id="tencel-intro" aria-labelledby="tencel-intro-heading" className="mb-20 sm:mb-24">
                  <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto relative overflow-hidden text-start">
                    <div 
                      className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10"
                      style={{ backgroundImage: "url('/assets/restored-e4ea03f2ddb9.webp')" }}
                    ></div>
                    <div className="relative z-10">
                      <h2 id="tencel-intro-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-8 text-center">
                        {t('whatIsTencelPage.introSection.title')}
                      </h2>
                      <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                        <p>{t('whatIsTencelPage.whatIsIt.intro')}</p>
                        <InlineImage src="/assets/restored-38ad32bd128d.webp" alt={t('whatIsTencelPage.mainTitle')} />
                        <ul className="list-disc space-y-2 ps-5">
                          <li dangerouslySetInnerHTML={{ __html: t('whatIsTencelPage.whatIsIt.point1') }} />
                          <li dangerouslySetInnerHTML={{ __html: t('whatIsTencelPage.whatIsIt.point2') }} />
                          <li dangerouslySetInnerHTML={{ __html: t('whatIsTencelPage.whatIsIt.point3') }} />
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="tencel-features" aria-labelledby="tencel-features-heading" className="mb-20 sm:mb-24 py-16 bg-brand-secondary/50 rounded-2xl relative overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/restored-a0d4e67b7e5f.webp')" }}>
                    <div className="absolute inset-0 bg-brand-secondary/70"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                      <h2 id="tencel-features-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                        {t('whatIsTencelPage.featuresTitle')}
                      </h2>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map(feature => (
                          <FeatureCard key={feature.titleKey} titleKey={feature.titleKey} descriptionKey={feature.descriptionKey} icon={feature.icon}/>
                        ))}
                      </div>
                    </div>
                </section>

                 <section id="tencel-care" aria-labelledby="tencel-care-heading" className="mb-20 sm:mb-24 relative p-8 -m-8 overflow-hidden rounded-2xl">
                    <div className="max-w-2xl mx-auto relative z-10 text-start">
                        <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl h-full">
                            <h2 id="tencel-care-heading" className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-center">
                            {t('whatIsTencelPage.care.title')}
                            </h2>
                            <p className="text-neutral-700 text-base mb-6">{t('whatIsTencelPage.care.intro')}</p>
                            <InlineImage src="/assets/editorial/care.webp" alt={t('whatIsTencelPage.care.title')} aspectRatio='16/9' />
                            <ul className="list-decimal list-outside space-y-3 text-neutral-700 text-base ps-5 mt-6">
                                {careItems.map(itemKey => (
                                    <li key={itemKey}>{t(itemKey)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
