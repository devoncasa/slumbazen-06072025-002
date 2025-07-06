import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import MetaManager from '../components/MetaManager';
import InlineImage from '../components/InlineImage';

const SizeTableStyled: React.FC<{ headerKeys: string[]; data: (string | JSX.Element)[][]; captionKey?: string }> = ({ headerKeys, data, captionKey }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto shadow-2xl rounded-2xl border border-neutral-200/50">
      <table className="min-w-full bg-white/80 backdrop-blur-sm text-base text-start">
        {captionKey && <caption className="p-5 text-xl font-semibold text-start text-neutral-900 bg-brand-light/90 rounded-t-2xl">{t(captionKey)}</caption>}
        <thead className="bg-brand-secondary/70 text-brand-dark">
          <tr>
            {headerKeys.map(headerKey => (
              <th key={headerKey} className="text-start py-5 px-6 font-semibold tracking-wider">{t(headerKey)}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex === 0 ? '' : 'border-t'} border-neutral-200 hover:bg-brand-light/70 transition-colors duration-200`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-5 px-6">
                  {typeof cell === 'string' && (cell.startsWith('sizesPage.') || cell.startsWith('commonContent.')) ? t(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SizesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const currentLang = i18n.language;
  const siteName = "Slumbazen";
  const pageTitle = t('seo.sizes.title', { siteName });
  const pageDescription = t('seo.sizes.description');
  const pageKeywords = t('seo.sizes.keywords');
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/sizes`;

  const formatDimension = (value: string) => {
    if (currentLang === 'en') {
      return value.replace(/ฟุต/g, 'ft').replace(/นิ้ว/g, 'inches').replace(/ประมาณ/g,'Approx.').replace(/เส้นผ่านศูนย์กลาง/g, 'Diameter').replace(/ยาว/g, 'Length');
    }
    return value;
  };
  
  const commonSizesDataContent = [
    ["sizesPage.sizeTable.row1.category", "sizesPage.sizeTable.row1.size", "sizesPage.sizeTable.row1.dimensions", "sizesPage.sizeTable.row1.details"], ["sizesPage.sizeTable.row2.category", "sizesPage.sizeTable.row2.size", "sizesPage.sizeTable.row2.dimensions", "sizesPage.sizeTable.row2.details"],
    ["sizesPage.sizeTable.row3.category", "sizesPage.sizeTable.row3.size", "sizesPage.sizeTable.row3.dimensions", "sizesPage.sizeTable.row3.details"], ["sizesPage.sizeTable.row4.category", "sizesPage.sizeTable.row4.size", "sizesPage.sizeTable.row4.dimensions", "sizesPage.sizeTable.row4.details"],
    ["sizesPage.sizeTable.row5.category", "sizesPage.sizeTable.row5.size", "sizesPage.sizeTable.row5.dimensions", "sizesPage.sizeTable.row5.details"], ["sizesPage.sizeTable.row6.category", "sizesPage.sizeTable.row6.size", "sizesPage.sizeTable.row6.dimensions", "sizesPage.sizeTable.row6.details"],
    ["sizesPage.sizeTable.row7.category", "sizesPage.sizeTable.row7.size", "sizesPage.sizeTable.row7.dimensions", "sizesPage.sizeTable.row7.details"], ["sizesPage.sizeTable.row8.category", "sizesPage.sizeTable.row8.size", "sizesPage.sizeTable.row8.dimensions", "sizesPage.sizeTable.row8.details"],
    ["sizesPage.sizeTable.row9.category", "sizesPage.sizeTable.row9.size", "sizesPage.sizeTable.row9.dimensions", "sizesPage.sizeTable.row9.details"], ["sizesPage.sizeTable.row10.category", "sizesPage.sizeTable.row10.size", "sizesPage.sizeTable.row10.dimensions", "sizesPage.sizeTable.row10.details"],
    ["sizesPage.sizeTable.row11.category", "sizesPage.sizeTable.row11.size", "sizesPage.sizeTable.row11.dimensions", "sizesPage.sizeTable.row11.details"], ["sizesPage.sizeTable.row12.category", "sizesPage.sizeTable.row12.size", "sizesPage.sizeTable.row12.dimensions", "sizesPage.sizeTable.row12.details"],
  ];
  const translatedSizesData = commonSizesDataContent.map(row => 
    row.map((cellKey, index) => {
      const translatedCell = t(cellKey);
      return index === 2 ? formatDimension(translatedCell) : translatedCell;
    })
  );

  const webpageJsonLd = {
    "@context": "https://schema.org", "@type": "WebPage", "name": pageTitle, "description": pageDescription, "url": canonicalUrl, "keywords": pageKeywords,
    "mainEntity": { "@type": "Table", "about": t('sizesPage.standardSizesTitle') },
    "breadcrumb": { "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${window.location.origin}${window.location.pathname}#${langPrefix}` },
        { "@type": "ListItem", "position": 2, "name": t('nav.learnItems.sizes'), "item": `${window.location.origin}${window.location.pathname}#${langPrefix}/sizes` }
      ]
    },
    "publisher": { "@type": "Organization", "name": siteName, "logo": { "@type": "ImageObject", "url": "https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png" } }
  };

  return (
    <>
      <MetaManager
        title={pageTitle} description={pageDescription} keywords={pageKeywords} ogTitle={pageTitle}
        ogDescription={pageDescription} ogUrl={canonicalUrl} canonicalUrl={canonicalUrl}
        ogImage="https://i.postimg.cc/fLYC7RbJ/decorative00015.jpg"
        jsonLd={webpageJsonLd}
      />
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://i.postimg.cc/fLYC7RbJ/decorative00015.jpg')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />

        <header className="text-center py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
              {t('sizesPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('sizesPage.mainDescription')}
            </p>
          </div>
        </header>

        <main className="pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <section id="standard-sizes" aria-labelledby="standard-sizes-heading" className="mb-20 sm:mb-24">
              <h2 id="standard-sizes-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-12 text-center">
                {t('sizesPage.standardSizesTitle')}
              </h2>
              <SizeTableStyled
                headerKeys={["sizesPage.sizeTable.header1", "sizesPage.sizeTable.header2", "sizesPage.sizeTable.header3", "sizesPage.sizeTable.header4"]}
                data={translatedSizesData}
              />
              <p className="text-base text-neutral-500 text-center mt-8 max-w-3xl mx-auto">
                {t('sizesPage.sizeTable.footerNote')}
              </p>
            </section>

            <section id="mattress-depth" aria-labelledby="mattress-depth-heading" className="mb-20 sm:mb-24 py-16 bg-brand-secondary/50 rounded-2xl relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2 text-center md:text-start">
                        <h2 id="mattress-depth-heading" className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-8">
                        {t('sizesPage.mattressDepth.title')}
                        </h2>
                        <div className="text-lg text-neutral-700 space-y-4">
                            <p>{t('sizesPage.mattressDepth.p1')}</p>
                            <p>{t('sizesPage.mattressDepth.p2')}</p>
                            <p className="font-semibold pt-4">{t('sizesPage.mattressDepth.example')}</p>
                        </div>
                    </div>
                    <div className="md:order-1">
                        <InlineImage src="https://i.postimg.cc/DfP2z1p8/Why-Does-Mattress-Depth-Matter.jpg" alt={t('sizesPage.mattressDepth.title')} aspectRatio="1/1" />
                    </div>
                </div>
            </section>

            <section 
              id="custom-sizes" 
              aria-labelledby="custom-sizes-heading" 
              className="text-center py-20 bg-brand-dark text-white rounded-2xl relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('https://i.postimg.cc/1XPHv1gM/decorative00016.jpg')" }}
            >
                <div className="absolute inset-0 bg-brand-dark/70"></div>
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <h2 id="custom-sizes-heading" className="text-4xl sm:text-5xl font-bold mb-6">
                    {t('sizesPage.customSizes.title')}
                  </h2>
                  <p className="text-lg text-neutral-200 mb-10 max-w-2xl mx-auto">
                    {t('sizesPage.customSizes.description')}
                  </p>
                  <Button to={`${langPrefix}/contact?subject=CustomSizeInquiry`} variant="secondary" size="large">
                    {t('sizesPage.customSizes.ctaButton')} <span className="inline-block rtl:rotate-180">&rarr;</span>
                  </Button>
               </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default SizesPage;
