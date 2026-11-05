import './collections-linen.css';
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
    <article className="stitched-category">
      <div className="stitched-category-photo">
        <img src={imageUrl} alt={t(titleKey)} loading="lazy" decoding="async" />
      </div>
      <div className="stitched-category-copy">
        <h3>{t(titleKey)}</h3>
        <p>{t(descriptionKey)}</p>
        <Button to={linkTo} variant="outline" size="medium">
          {t(linkTextKey)} <span aria-hidden="true" className="inline-block rtl:rotate-180">&rarr;</span>
        </Button>
      </div>
    </article>
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
      
      <div className="stitched-collections">
        <div className="container mx-auto">
          <header className="stitched-collection-heading">
            <h1>
              {t('collectionsPage.mainTitle')}
            </h1>
            <p>
              {t('collectionsPage.mainDescription')}
            </p>
          </header>

          <section id="shop-by-category" aria-labelledby="shop-by-category-heading">
            <h2 id="shop-by-category-heading" className="sr-only">Shop by Category</h2>
            <div className="stitched-category-grid">
              {categories.map(category => (
                <CategoryCard key={category.titleKey} {...category} />
              ))}
            </div>
          </section>

          <section 
            id="learn-more-cta" 
            className="text-center py-20 sm:py-24 mt-20 bg-brand-dark rounded-2xl relative overflow-hidden bg-cover bg-center"
            data-background="url('/assets/restored-50e2c89e4a32.webp')"
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

