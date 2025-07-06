import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../components/Button';
import MetaManager from '../components/MetaManager';
import { BeakerIcon, PhotoIcon, BuildingStorefrontIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import MissionStatementSection from '../components/MissionStatementSection';
import InlineImage from '../components/InlineImage';
import { IMAGE_ASSETS } from '../products';

const HeroSection: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const { t, i18n } = useTranslation();
  return (
    <section 
        className="relative text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="absolute inset-0 z-0 bg-brand-dark/30">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-brand-light/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
        <div className="relative z-10 max-w-4xl bg-brand-light/70 backdrop-blur-sm p-8 rounded-2xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-dark !leading-tight mb-6">
            {t('homePage.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 mb-10 mx-auto">
            {t('homePage.hero.subtitle')}
          </p>
          <Button to={`/${i18n.language}/collections`} variant="primary" size="large">
            {t('homePage.hero.ctaButton')}
          </Button>
        </div>
      </div>
    </section>
  );
};

const VisualShowcaseSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const images = [
      { src: "https://i.postimg.cc/Z5Py7B0T/Bed000399.jpg", altKey: "homePage.visualShowcase.alt1", className: "md:col-span-2" },
      { src: "https://i.postimg.cc/MHZsH24B/Bed000363.jpg", altKey: "homePage.visualShowcase.alt2" },
      { src: "https://i.postimg.cc/P5MPbgFJ/Bed000309.jpg", altKey: "homePage.visualShowcase.alt3" },
      { src: "https://i.postimg.cc/25PTQLtC/Bed000242.jpg", altKey: "homePage.visualShowcase.alt4" },
      { src: "https://i.postimg.cc/DZJHFK9w/Bed000222.jpg", altKey: "homePage.visualShowcase.alt5" },
      { src: "https://i.postimg.cc/C19yfKG8/Bed000213.jpg", altKey: "homePage.visualShowcase.alt6" },
      { src: "https://i.postimg.cc/1R6Rrx8S/Bed000325.jpg", altKey: "homePage.visualShowcase.alt7" },
      { src: "https://i.postimg.cc/zfVPhNWg/decorative0003.jpg", altKey: "homePage.visualShowcase.alt8", className: "md:col-span-2" },
      { src: "https://i.postimg.cc/VkHKmhTL/decorative00013.jpg", altKey: "homePage.visualShowcase.alt9" },
      { src: "https://i.postimg.cc/qvFGrC42/Bed000249.jpg", altKey: "homePage.visualShowcase.alt10" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">{t('homePage.discoverWorld.item2.title')}</h2>
          <p className="text-xl text-neutral-700">{t('galleryPage.description')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: 'minmax(150px, auto)' }}>
          {images.map((image, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg p-0.5 bg-brand-gold ${image.className || ''}`}>
              <img src={image.src} alt={t(image.altKey)} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors rounded-xl"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button to={`/${i18n.language}/gallery`} variant="primary" size="large">
            {t('homePage.discoverWorld.item2.buttonText')}
          </Button>
        </div>
      </div>
    </section>
  );
};

const BrandStorySection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 sm:py-28 bg-brand-light relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/B6Brk202/decorative-bedding.jpg')" }}>
                <div className="absolute inset-0 bg-brand-light/80"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">{t('homePage.brandStory.mainTitle')}</h2>
                    <p className="text-neutral-700 text-lg mb-4">
                      <Trans
                        i18nKey="homePage.brandStory.intro_p1"
                        components={{ 1: <span className="text-brand-primary" /> }}
                      />
                    </p>
                    <p className="text-neutral-700 text-lg">{t('homePage.brandStory.intro_p2')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-semibold text-brand-dark mb-5">{t('homePage.brandStory.quality_title')}</h3>
                        <p className="text-neutral-700 mb-6">{t('homePage.brandStory.quality_intro')}</p>
                        <ul className="space-y-4">
                            {[1,2,3].map(i => (
                                <li key={i} className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-brand-primary flex-shrink-0 mr-3 mt-1" />
                                    <span 
                                        className="text-neutral-700 text-lg"
                                        dangerouslySetInnerHTML={{ __html: t(`homePage.brandStory.quality_point${i}`) }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3 p-0.5 bg-brand-gold">
                       <img src="https://i.postimg.cc/B6Brk202/decorative-bedding.jpg" alt={t('homePage.brandStory.quality_title')} loading="lazy" className="w-full h-full object-cover rounded-xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SummarizedWhyUsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const whyUsItems = [
    { titleKey: "homePage.whyUs.item1.title", descriptionKey: "homePage.whyUs.item1.description", linkTo: "/materials#cotton", linkTextKey: "homePage.whyUs.item1.linkText" },
    { titleKey: "homePage.whyUs.item2.title", descriptionKey: "homePage.whyUs.item2.description", linkTo: "/what-is-tencel", linkTextKey: "homePage.whyUs.item2.linkText" },
    { titleKey: "homePage.whyUs.item3.title", descriptionKey: "homePage.whyUs.item3.description", linkTo: "/materials#soft-tex", linkTextKey: "homePage.whyUs.item3.linkText" },
    { titleKey: "homePage.whyUs.item4.title", descriptionKey: "homePage.whyUs.item4.description", linkTo: "/materials", linkTextKey: "homePage.whyUs.item4.linkText" }
  ];

  return (
    <section id="why-us-summary" className="py-20 sm:py-28 bg-brand-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/CKvmz6Gn/Bed000115.jpg')" }}>
         <div className="absolute inset-0 bg-brand-secondary/70"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            <Link to={`${langPrefix}/materials`} className="hover:text-brand-primary transition-colors duration-300">
              {t('homePage.whyUs.mainTitle')}
            </Link>
          </h2>
          <p className="text-xl text-neutral-700">{t('homePage.whyUs.subTitle')}</p>
        </div>
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUsItems.map(item => (
              <div key={item.titleKey} className="bg-brand-light/70 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <h4 className="text-2xl font-semibold text-brand-primary mb-4">{t(item.titleKey)}</h4>
                <div className="text-neutral-700 text-base mb-5 prose max-w-none prose-p:my-2" dangerouslySetInnerHTML={{ __html: t(item.descriptionKey) }}></div>
                <Button to={`${langPrefix}${item.linkTo}`} variant="link" size="small" className="!px-0">
                  {t(item.linkTextKey)} &rarr;
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button to={`${langPrefix}/materials`} variant="outline" size="medium">
              {t('homePage.whyUs.ctaButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomerProblemsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const problems = [
    { problemKey: "homePage.problems.item1.problem", solutionKey: "homePage.problems.item1.solution", link: "/materials#cotton" },
    { problemKey: "homePage.problems.item2.problem", solutionKey: "homePage.problems.item2.solution", link: "/what-is-tencel" },
    { problemKey: "homePage.problems.item3.problem", solutionKey: "homePage.problems.item3.solution", link: "/sizes" },
    { problemKey: "homePage.problems.item4.problem", solutionKey: "homePage.problems.item4.solution", link: "/gallery" }
  ];

  return (
    <section id="customer-problems" className="py-20 sm:py-28 bg-brand-light relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/qRzQnXwb/Bed000116.jpg')" }}>
            <div className="absolute inset-0 bg-brand-light/80"></div>
       </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-16 text-center">
          {t('homePage.problems.mainTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200/70">
              <h3 className="text-2xl font-semibold text-neutral-500 mb-3 line-through">{t(item.problemKey)}</h3>
              <p className="text-lg text-neutral-700">
                 <Link to={`${langPrefix}${item.link}`} className="hover:text-brand-primary transition-colors" dangerouslySetInnerHTML={{ __html: t(item.solutionKey) }} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DiscoverWorldSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  const links = [
    { icon: BeakerIcon, titleKey: "homePage.discoverWorld.item1.title", descriptionKey: "homePage.discoverWorld.item1.description", buttonTo: "/materials", buttonTextKey: "homePage.discoverWorld.item1.buttonText" },
    { icon: PhotoIcon, titleKey: "homePage.discoverWorld.item2.title", descriptionKey: "homePage.discoverWorld.item2.description", buttonTo: "/gallery", buttonTextKey: "homePage.discoverWorld.item2.buttonText" },
    { icon: BuildingStorefrontIcon, titleKey: "homePage.discoverWorld.item3.title", descriptionKey: "homePage.discoverWorld.item3.description", buttonTo: "/hotels", buttonTextKey: "homePage.discoverWorld.item3.buttonText" },
    { icon: ChatBubbleLeftRightIcon, titleKey: "homePage.discoverWorld.item4.title", descriptionKey: "homePage.discoverWorld.item4.description", buttonTo: "/contact", buttonTextKey: "homePage.discoverWorld.item4.buttonText" }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/Y9ZRxGyp/Bed000117.jpg')" }}>
          <div className="absolute inset-0 bg-white/70"></div>
       </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-16 text-center">
          {t('homePage.discoverWorld.mainTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map(link => (
            <div key={link.titleKey} className="text-center flex flex-col items-center">
              <div className="bg-brand-secondary p-5 rounded-full mb-5">
                 <link.icon className="h-10 w-10 text-brand-dark" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">{t(link.titleKey)}</h3>
              <p className="text-neutral-700 text-sm mb-6 flex-grow">{t(link.descriptionKey)}</p>
              <Button to={`${langPrefix}${link.buttonTo}`} variant="link" size="small" className="mt-auto">
                {t(link.buttonTextKey)} &rarr;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConsultationCtaSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  return (
    <section 
      id="consultation-cta" 
      className="py-20 sm:py-28 bg-brand-dark text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.postimg.cc/rs4JZVv5/Bed000118.jpg')" }}
    >
      <div className="absolute inset-0 z-0 bg-brand-dark/70">
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t('homePage.consultation.title')}</h2>
        <p className="text-lg text-neutral-200 mb-12 max-w-3xl mx-auto">
          {t('homePage.consultation.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button to={`${langPrefix}/contact`} variant="secondary" size="large"> 
            {t('homePage.consultation.ctaButton1')}
          </Button>
          <Button to={`${langPrefix}/gallery`} variant="outline" size="large" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark"> 
            {t('homePage.consultation.ctaButton2')}
          </Button>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const siteName = "Slumba ZEN";
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/${i18n.language}`;
  
  const randomHeroImage = useMemo(() => {
    const heroImages = IMAGE_ASSETS.hero_backgrounds;
    if (!heroImages || heroImages.length === 0) {
      return 'https://i.postimg.cc/DzpY9gWk/cover-page-002.jpg'; // Fallback
    }
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    return heroImages[randomIndex];
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": "https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png",
    "@id": window.location.origin,
    "url": window.location.origin,
    "telephone": t('contactPage.phone1'),
    "priceRange": "THB",
    "address": t('contactPage.structuredAddress', { returnObjects: true }),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.7222, // Approximate coordinates for Silom, Bangkok
      "longitude": 100.5285
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        "opens": "08:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/slumbazen",
      "https://www.instagram.com/slumbazen",
      "https://www.tiktok.com/@slumbazen",
      "https://www.youtube.com/@slumbazen",
      "https://x.com/slumbazen",
      "https://www.linkedin.com/company/slumbazen",
      "https://www.pinterest.com/slumbazen"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('seo.home.title', { siteName }),
    "url": canonicalUrl,
    "description": t('seo.home.description'),
    "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
            "@type": "ImageObject",
            "url": "https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png"
        }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}gallery?q={search_term_string}`, 
      "query-input": "required name=search_term_string"
    }
  };


  return (
    <>
      <MetaManager
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        ogImage={randomHeroImage} 
        canonicalUrl={`${window.location.origin}${window.location.pathname}#/`}
        jsonLd={[localBusinessSchema, webSiteSchema]}
      />
      <HeroSection imageUrl={randomHeroImage} />
      <MissionStatementSection />
      <BrandStorySection />
      <VisualShowcaseSection />
      <SummarizedWhyUsSection />
      <CustomerProblemsSection />
      <DiscoverWorldSection />
      <ConsultationCtaSection />
    </>
  );
};

export default HomePage;
