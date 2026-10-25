import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

interface CategoryCardProps {
  titleKey: string;
  descriptionKey: string;
  linkTo: string;
  linkTextKey: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ titleKey, descriptionKey, linkTo, linkTextKey, imageUrl }) => {
  const { t } = useTranslation();
  return (
    <div 
        className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/5] bg-brand-dark p-0.5 bg-brand-gold"
    >
      <img 
          src={imageUrl} 
          alt={t(titleKey)} 
          loading="lazy" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent rounded-xl"></div>
      <div className="relative h-full flex flex-col justify-end p-8 text-white z-10 text-start">
        <h3 className="text-3xl sm:text-4xl font-bold mb-3 transition-transform duration-300 group-hover:-translate-y-1 text-white">{t(titleKey)}</h3>
        <p className="text-base mb-6 opacity-100 transition-opacity duration-300 delay-100 text-neutral-200">{t(descriptionKey)}</p>
        <div className="mt-auto opacity-100 transition-opacity duration-300 delay-200">
          <Button to={linkTo} variant="secondary" size="medium">{t(linkTextKey)} <span className="inline-block rtl:rotate-180">&rarr;</span></Button>
        </div>
      </div>
    </div>
  );
};

const CollectionsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/collections`;

  const categories: CategoryCardProps[] = [
    {
      titleKey: "collectionsPage.categoryWhite.title",
      descriptionKey: "collectionsPage.categoryWhite.description",
      linkTo: `${langPrefix}/products/white-sheets`,
      linkTextKey: "collectionsPage.categoryWhite.buttonText",
      imageUrl: "/assets/restored-712794140946.webp",
    },
    {
      titleKey: "collectionsPage.categoryColors.title",
      descriptionKey: "collectionsPage.categoryColors.description",
      linkTo: `${langPrefix}/products/premium-colors`,
      linkTextKey: "collectionsPage.categoryColors.buttonText",
      imageUrl: "/assets/restored-80b55a2e5c98.webp",
    },
    {
      titleKey: "collectionsPage.categorySets.title",
      descriptionKey: "collectionsPage.categorySets.description",
      linkTo: `${langPrefix}/products/sets`,
      linkTextKey: "collectionsPage.categorySets.buttonText",
      imageUrl: "/assets/restored-e1cf6f784c9c.webp",
    }
  ];
  
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": `${'https://www.slumbazen.com'}${'/'}#/${i18n.language}` },
      { "@type": "ListItem", "position": 2, "name": t('collectionsPage.mainTitle'), "item": `${'https://www.slumbazen.com'}${'/'}#${langPrefix}/collections` }
    ]
  };

  const collectionJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": t('seo.collections.title'),
      "description": t('seo.collections.description'),
      "url": canonicalUrl,
      "keywords": t('seo.collections.keywords'),
       "publisher": {
        "@type": "Organization",
        "name": t('footer.companyName'),
        "logo": {
            "@type": "ImageObject",
            "url": "/assets/logo.png"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": categories.map((cat, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": t(cat.titleKey),
          "url": `${'https://www.slumbazen.com'}${'/'}#${cat.linkTo}`
        }))
      }
    };


  return (
    <>
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/catalogue-07.webp')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <header className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
              {t('collectionsPage.mainTitle')}
            </h1>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('collectionsPage.mainDescription')}
            </p>
          </header>

          <section id="shop-by-category" aria-labelledby="shop-by-category-heading">
            <h2 id="shop-by-category-heading" className="sr-only">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {categories.map(category => (
                <CategoryCard key={category.titleKey} {...category} />
              ))}
            </div>
          </section>

          <section 
            id="learn-more-cta" 
            className="text-center py-20 sm:py-24 mt-20 bg-brand-dark rounded-2xl relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/restored-50e2c89e4a32.webp')" }}
          >
            <div className="absolute inset-0 bg-brand-dark/70"></div>
            <div className="max-w-2xl mx-auto px-4 relative z-10 text-white">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5">
                {t('collectionsPage.cta.title')}
              </h2>
              <p className="text-neutral-200 mb-10">
                {t('collectionsPage.cta.description')}
              </p>
              <Button to={`${langPrefix}/materials`} variant="secondary" size="large">
                {t('collectionsPage.cta.button')}
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CollectionsPage;

