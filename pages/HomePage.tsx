import {shoppingCopy} from '../shoppingCopy';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../components/Button';
import { BeakerIcon, PhotoIcon, BuildingStorefrontIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import MissionStatementSection from '../components/MissionStatementSection';
import InlineImage from '../components/InlineImage';
import { IMAGE_ASSETS } from '../products';

const HeroSection: React.FC = () => {
 const {i18n,t}=useTranslation();const lang=i18n.language;const w=shoppingCopy[lang]||shoppingCopy.en;
 return <section className="editorial-hero" id="welcome"><div className="editorial-hero-copy"><p className="eyebrow">{w.heroKicker}</p><h1>{w.heroTitle}</h1><p className="hero-intro">{w.heroIntro}</p><div className="actions"><Link className="button" to={`/${lang}/collections/`}>{w.heroShop} →</Link><Link className="hero-hotel" to={`/${lang}/hotels/`}>{w.heroHotel} ↗</Link></div><Link className="hero-finder" to={`/${lang}/bedding-finder/`}>{w.finder} <span aria-hidden="true">→</span></Link></div><figure className="editorial-hero-image"><img src="/assets/editorial/quiet-bedroom.webp" srcSet="/assets/editorial/quiet-bedroom-640.webp 640w, /assets/editorial/quiet-bedroom.webp 1200w" sizes="(max-width:767px) 100vw, 57vw" alt={w.heroAlt} width={1200} height={800} fetchPriority="high"/><figcaption>{t('restoration.illustration', {defaultValue:({en:'Illustrative setting',th:'ภาพบรรยากาศจำลอง',zh:'示意场景',ar:'مشهد توضيحي',hi:'सांकेतिक दृश्य'} as Record<string,string>)[lang]})}</figcaption></figure></section>;
};

const VisualShowcaseSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const images = [
      { src: "/assets/catalogue-57.webp", altKey: "homePage.visualShowcase.alt1", className: "md:col-span-2" },
      { src: "/assets/catalogue-40.webp", altKey: "homePage.visualShowcase.alt2" },
      { src: "/assets/catalogue-06.webp", altKey: "homePage.visualShowcase.alt3" },
      { src: "/assets/catalogue-41.webp", altKey: "homePage.visualShowcase.alt4" },
      { src: "/assets/catalogue-42.webp", altKey: "homePage.visualShowcase.alt5" },
      { src: "/assets/catalogue-43.webp", altKey: "homePage.visualShowcase.alt6" },
      { src: "/assets/catalogue-44.webp", altKey: "homePage.visualShowcase.alt7" },
      { src: "/assets/restored-32d0351b5a31.webp", altKey: "homePage.visualShowcase.alt8", className: "md:col-span-2" },
      { src: "/assets/catalogue-04.webp", altKey: "homePage.visualShowcase.alt9" },
      { src: "/assets/restored-3fc4414bb92b.webp", altKey: "homePage.visualShowcase.alt10" },
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
              <img src={image.src} alt={t(image.altKey)} width={800} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-xl" />
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
            <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/restored-c4d60195df9d.webp')" }}>
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
                    <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] p-0.5 bg-brand-gold">
                       <img src="/assets/restored-c4d60195df9d.webp" alt={t('homePage.brandStory.quality_title')} loading="lazy" className="w-full h-full object-cover rounded-xl"/>
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
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/restored-3009995b2299.webp')" }}>
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
       <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/restored-fe78379afdf9.webp')" }}>
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
       <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/restored-1e33fdaa5ef7.webp')" }}>
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
      style={{ backgroundImage: "url('/assets/restored-1c64547b1d6a.webp')" }}
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
  return (
    <div className="home-editorial">
      <HeroSection />
      <MissionStatementSection />
      <BrandStorySection />
      <VisualShowcaseSection />
      <SummarizedWhyUsSection />
      <CustomerProblemsSection />
      <DiscoverWorldSection />
      <ConsultationCtaSection />
    </div>
  );
};

export default HomePage;

