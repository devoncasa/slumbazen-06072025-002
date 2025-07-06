import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import MetaManager from '../components/MetaManager';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import InlineImage from '../components/InlineImage';

const MaterialDetailCard: React.FC<{ id: string; titleKey: string; children: React.ReactNode; className?: string; }> = ({ id, titleKey, children, className }) => {
  const { t } = useTranslation();

  return (
    <div id={id} className={`bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 scroll-mt-28 ${className}`}>
        <div className={`text-start`}>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6">{t(titleKey)}</h3>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed prose max-w-none prose-a:text-brand-primary hover:prose-a:underline">
            {children}
          </div>
        </div>
    </div>
  );
};


const InfoTable: React.FC<{ headerKeys: string[]; data: (string | JSX.Element)[][]; captionKey?: string }> = ({ headerKeys, data, captionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto rounded-lg mb-8 border border-neutral-200/80">
      <table className="min-w-full bg-white/80 backdrop-blur-sm text-base">
        {captionKey && <caption className="p-4 text-lg font-semibold text-start text-neutral-900 bg-brand-light/90 rounded-t-lg">{t(captionKey)}</caption>}
        <thead className="bg-brand-secondary/70 text-brand-dark">
          <tr>
            {headerKeys.map(headerKey => (
              <th key={headerKey} className="text-start py-4 px-6 font-semibold tracking-wider">{t(headerKey)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-neutral-200 hover:bg-brand-light/70 transition-colors duration-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-4 px-6">
                  {typeof cell === 'string' && (cell.startsWith('collectionsPage.') || cell.startsWith('materialsPage.')) ? t(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface ShopTipSegmentText { type: 'text'; key: string; }
interface ShopTipSegmentLink { type: 'link'; to: string; linkKey: string; className?: string; }
type ShopTipSegment = ShopTipSegmentText | ShopTipSegmentLink;
interface ShopTip { segments: ShopTipSegment[]; }


export default function MaterialsPage() {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const siteName = "Slumbazen";
  const pageTitle = t('seo.materials.title', { siteName });
  const pageDescription = t('seo.materials.description');
  const pageKeywords = t('seo.materials.keywords');
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/materials`;

  const misconceptionsData = [
    { titleKey: "materialsPage.misconceptions.item1.title", contentKey: "materialsPage.misconceptions.item1.content", pointsKeys: ["materialsPage.misconceptions.item1.point1", "materialsPage.misconceptions.item1.point2"] },
    { titleKey: "materialsPage.misconceptions.item2.title", contentKey: "materialsPage.misconceptions.item2.content" },
    { titleKey: "materialsPage.misconceptions.item3.title", contentKey: "materialsPage.misconceptions.item3.content", pointsKeys: ["materialsPage.misconceptions.item3.point1", "materialsPage.misconceptions.item3.point2"] }
  ];

  const shopTipsData: ShopTip[] = [
    { segments: [
        { type: 'text', key: "materialsPage.shopTips.tip1.segment1" },
        { type: 'link', to: "/contact", linkKey: "materialsPage.shopTips.tip1.link", className: "text-brand-primary hover:underline font-semibold" },
        { type: 'text', key: "materialsPage.shopTips.tip1.segment2" }
    ]},
    { segments: [{ type: 'text', key: "materialsPage.shopTips.tip2" }] },
    { segments: [{ type: 'text', key: "materialsPage.shopTips.tip3" }] },
    { segments: [{ type: 'text', key: "materialsPage.shopTips.tip4" }] },
    { segments: [{ type: 'text', key: "materialsPage.shopTips.tip5" }] }
  ];

  const faqData = [
    { qKey: "materialsPage.faq.item1.q", aKey: "materialsPage.faq.item1.a" },
    { qKey: "materialsPage.faq.item2.q", aKey: "materialsPage.faq.item2.a" },
    { qKey: "materialsPage.faq.item3.q", aKey: "materialsPage.faq.item3.a" },
    { qKey: "materialsPage.faq.item4.q", aKey: "materialsPage.faq.item4.a" }
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "headline": t('materialsPage.mainTitle'),
    "description": pageDescription,
    "keywords": pageKeywords,
    "image": "https://i.postimg.cc/c4hD5CB3/decorative00010.jpg",
    "author": { "@type": "Organization", "name": siteName, "url": `${window.location.origin}${window.location.pathname}#/` },
    "publisher": { "@type": "Organization", "name": siteName, "logo": { "@type": "ImageObject", "url": "https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png" } },
    "datePublished": "2024-07-01",
    "dateModified": "2024-07-28"
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${window.location.origin}${window.location.pathname}#${langPrefix}` },
      { "@type": "ListItem", "position": 2, "name": t('materialsPage.mainTitle'), "item": `${window.location.origin}${window.location.pathname}#${langPrefix}/materials` }
    ]
  };
  const faqJsonLd = {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
          "@type": "Question", "name": t(item.qKey),
          "acceptedAnswer": { "@type": "Answer", "text": t(item.aKey) }
      }))
  };

  return (
    <>
      <MetaManager
        title={pageTitle} description={pageDescription} keywords={pageKeywords} ogTitle={pageTitle}
        ogDescription={pageDescription} ogType="article" canonicalUrl={canonicalUrl}
        ogImage="https://i.postimg.cc/c4hD5CB3/decorative00010.jpg"
        jsonLd={[articleJsonLd, breadcrumbJsonLd, faqJsonLd]}
      />
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://i.postimg.cc/c4hD5CB3/decorative00010.jpg')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
        
        <header className="text-center py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
                {t('materialsPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
                {t('materialsPage.mainDescription')}
            </p>
          </div>
        </header>

        <main className="pb-20 sm:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                
                {/* Quality vs Price Section */}
                <section id="quality-vs-price" aria-labelledby="quality-vs-price-heading">
                    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl text-start">
                        <h2 id="quality-vs-price-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-8 text-center">{t('materialsPage.qualityVsPrice.title')}</h2>
                        <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
                            <p>{t('materialsPage.qualityVsPrice.p1')}</p>
                            <p>{t('materialsPage.qualityVsPrice.p2')}</p>
                            <InlineImage src="https://i.postimg.cc/sDnT67k8/decorative-bedding-0010.jpg" alt={t('materialsPage.qualityVsPrice.title')} aspectRatio="16/9" />
                            <p>{t('materialsPage.qualityVsPrice.p3')}</p>
                            <p>{t('materialsPage.qualityVsPrice.p4')}</p>
                            <InlineImage src="https://i.postimg.cc/Xv5xYhrS/decorative-bedding-0011.jpg" alt={t('materialsPage.qualityVsPrice.title')} />
                            <p>{t('materialsPage.qualityVsPrice.p5')}</p>
                            <p className="font-semibold text-neutral-800 mt-4">{t('materialsPage.qualityVsPrice.p6')}</p>
                        </div>
                    </div>
                </section>

                {/* Cotton Section */}
                <section id="cotton" aria-labelledby="cotton-heading">
                    <MaterialDetailCard id="cotton-card" titleKey="materialsPage.cotton.title">
                       <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                          <div>
                            <p className="mb-6 text-lg" dangerouslySetInnerHTML={{ __html: t('materialsPage.cotton.intro') }}/>
                            <p className="font-semibold mt-8 mb-4 text-xl">✅ {t('materialsPage.cotton.advantagesTitle')}</p>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                              <li>{t('materialsPage.cotton.advantage1')}</li>
                              <li>{t('materialsPage.cotton.advantage2')}</li>
                              <li>{t('materialsPage.cotton.advantage3')}</li>
                              <li>{t('materialsPage.cotton.advantage4')}</li>
                            </ul>
                            <Button to={`${langPrefix}/gallery?fabric=cotton`} variant="secondary" size="medium" className="mt-8">
                                {t('materialsPage.cotton.cta')} <span className="inline-block rtl:rotate-180">&rarr;</span>
                            </Button>
                          </div>
                          <div className="mt-8 md:mt-0">
                            <InlineImage src="https://i.postimg.cc/T1MzPgdQ/cotton-100-Large.jpg" alt={t('materialsPage.cotton.title')} aspectRatio="1/1" />
                          </div>
                       </div>
                    </MaterialDetailCard>
                </section>
                
                {/* Tencel Section */}
                <section id="tencel" aria-labelledby="tencel-heading">
                    <MaterialDetailCard id="tencel-card" titleKey="materialsPage.tencel.title">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                          <div>
                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t('materialsPage.tencel.description') }} />
                            <ul className="list-disc list-inside space-y-3 mt-6 text-lg">
                              <li>{t('materialsPage.tencel.advantage1')}</li>
                              <li>{t('materialsPage.tencel.advantage2')}</li>
                              <li>{t('materialsPage.tencel.advantage3')}</li>
                              <li>{t('materialsPage.tencel.advantage4')}</li>
                            </ul>
                            <Button to={`${langPrefix}/what-is-tencel`} variant="secondary" size="medium" className="mt-8">
                                {t('materialsPage.tencel.cta')} <span className="inline-block rtl:rotate-180">&rarr;</span>
                            </Button>
                          </div>
                           <div className="mt-8 md:mt-0">
                            <InlineImage src="https://i.postimg.cc/mrhfpTp3/tencel-Large.jpg" alt={t('materialsPage.tencel.title')} aspectRatio="1/1" />
                          </div>
                        </div>
                    </MaterialDetailCard>
                </section>

                {/* Soft-Tex Section */}
                <section id="soft-tex" aria-labelledby="soft-tex-heading">
                    <MaterialDetailCard id="soft-tex-card" titleKey="materialsPage.softTex.title">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                          <div>
                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t('materialsPage.softTex.description')}} />
                            <p className="font-semibold mt-8 mb-4 text-xl">✅ {t('materialsPage.softTex.advantagesTitle')}</p>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                              <li>{t('materialsPage.softTex.advantage1')}</li>
                              <li>{t('materialsPage.softTex.advantage2')}</li>
                              <li>{t('materialsPage.softTex.advantage3')}</li>
                              <li>{t('materialsPage.softTex.advantage4')}</li>
                            </ul>
                           </div>
                           <div className="mt-8 md:mt-0">
                            <InlineImage src="https://i.postimg.cc/X7cbpHy5/soft-tex-Large.jpg" alt={t('materialsPage.softTex.title')} aspectRatio="1/1" />
                          </div>
                        </div>
                    </MaterialDetailCard>
                </section>

                {/* CVC Section */}
                <section id="cvc" aria-labelledby="cvc-heading">
                    <MaterialDetailCard id="cvc-card" titleKey="materialsPage.cvc.title">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
                          <div>
                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t('materialsPage.cvc.description')}} />
                            <p className="font-semibold mt-8 mb-4 text-xl">✅ {t('materialsPage.cvc.advantagesTitle')}</p>
                            <ul className="list-disc list-inside space-y-3 text-lg">
                              <li>{t('materialsPage.cvc.advantage1')}</li>
                              <li>{t('materialsPage.cvc.advantage2')}</li>
                              <li>{t('materialsPage.cvc.advantage3')}</li>
                              <li>{t('materialsPage.cvc.advantage4')}</li>
                            </ul>
                          </div>
                          <div className="mt-8 md:mt-0">
                            <InlineImage src="https://i.postimg.cc/mgLGMYQ5/cvc-fabric-Large.jpg" alt={t('materialsPage.cvc.title')} aspectRatio="1/1" />
                          </div>
                        </div>
                    </MaterialDetailCard>
                </section>

                {/* Misconceptions Section */}
                <section id="misconceptions" aria-labelledby="misconceptions-heading">
                    <div className="max-w-4xl mx-auto">
                        <h2 id="misconceptions-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">{t('materialsPage.misconceptions.title')}</h2>
                        <div className="space-y-8 text-start">
                        {misconceptionsData.map((item, index) => (
                            <div key={index} className="bg-white/80 p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-semibold text-brand-dark mb-4" dangerouslySetInnerHTML={{ __html: t(item.titleKey) }} />
                                <p className="text-neutral-700 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(item.contentKey) }} />
                                {item.pointsKeys && (
                                    <ul className="list-disc list-inside space-y-2 text-neutral-600">
                                    {item.pointsKeys.map(pointKey => <li key={pointKey} dangerouslySetInnerHTML={{ __html: t(pointKey) }} />)}
                                    </ul>
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* Shopping Tips Section */}
                <section id="shopping-tips" aria-labelledby="shopping-tips-heading">
                    <div className="bg-brand-dark text-white p-8 sm:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 id="shopping-tips-heading" className="text-4xl sm:text-5xl font-bold mb-8 text-center">{t('materialsPage.shopTips.title')}</h2>
                            <ul className="space-y-4 text-lg text-neutral-200 list-decimal list-outside ps-6 max-w-3xl mx-auto text-start">
                                {shopTipsData.map((tip, index) => (
                                    <li key={index}>
                                    {tip.segments.map((segment, segIndex) => {
                                        if (segment.type === 'text') {
                                            return <span key={segIndex}>{t(segment.key)}</span>;
                                        }
                                        return (
                                            <Link key={segIndex} to={`${langPrefix}${segment.to}`} className={segment.className}>
                                            {t(segment.linkKey)}
                                            </Link>
                                        );
                                    })}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" aria-labelledby="faq-heading">
                    <div className="max-w-4xl mx-auto">
                        <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">{t('materialsPage.faq.title')}</h2>
                        <div className="space-y-4">
                        {faqData.map((faqItem, index) => (
                            <details key={index} className="bg-white/90 p-6 rounded-2xl shadow-lg group text-start" name="faq-accordion">
                                <summary className="flex justify-between items-center font-semibold text-xl text-neutral-900 cursor-pointer list-none">
                                    {t(faqItem.qKey)}
                                    <ChevronDownIcon className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-180 text-brand-primary" />
                                </summary>
                                <div className="text-neutral-700 mt-4 text-base leading-relaxed">
                                    <p>{t(faqItem.aKey)}</p>
                                </div>
                            </details>
                        ))}
                        </div>
                    </div>
                </section>

            </div>
        </main>
      </div>
    </>
  );
}
