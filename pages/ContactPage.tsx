
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaManager from '../components/MetaManager';
import { MapPinIcon, PhoneIcon, ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import InlineImage from '../components/InlineImage';

const ContactInfoItem: React.FC<{ icon: React.ElementType; labelKey: string; value: string; href?: string; isHtml?: boolean; }> = ({ icon: Icon, labelKey, value, href, isHtml }) => {
  const { t } = useTranslation();
  
  const renderValue = (val: string, link?: string) => {
    const content = isHtml ? <span dangerouslySetInnerHTML={{ __html: val }} /> : val;
    if (link) {
      return <a href={link} className="hover:text-brand-primary transition-colors" target="_blank" rel="noopener noreferrer">{content}</a>;
    }
    return content;
  };

  return (
    <div className="flex items-start space-x-5 rtl:space-x-reverse">
      <Icon className="h-7 w-7 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
      <div>
        <h3 className="text-base font-semibold text-neutral-500 uppercase tracking-wider mb-1">{t(labelKey)}</h3>
        <div className="text-neutral-900 text-lg font-medium">
            <p>
              {renderValue(value, href)}
            </p>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const pageTitle = t('contactPage.mainTitle');
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/contact`;
  
  const address = t('contactPage.address');
  const phone = t('contactPage.phone1');
  const phoneHref = `tel:${phone.replace(/[()-\s]/g, '')}`;

  const jsonLd = { 
      "@context": "https://schema.org", 
      "@type": "ContactPage", 
      "name": t('seo.contact.title'), 
      "description": t('seo.contact.description'), 
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": t('footer.companyName'),
        "legalName": t('contactPage.legalNameEntity'),
        "image": "https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png",
        "telephone": phone,
        "email": t('contactPage.emailValue'),
        "address": t('contactPage.structuredAddress', { returnObjects: true }),
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.7222,
          "longitude": 100.5285
        },
        "url": window.location.origin,
        "priceRange": "THB",
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
          `line://ti/p/~${t('contactPage.lineId')}`
        ]
      }
    };

  return (
    <>
      <MetaManager
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
        canonicalUrl={canonicalUrl} 
        jsonLd={jsonLd}
      />
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://i.postimg.cc/d0pNmfmS/decorative0001.jpg')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-light/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-start">
          <header className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
              {pageTitle}
            </h1>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('contactPage.subtitle')}
            </p>
          </header>

          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-10 border-b-2 border-brand-secondary pb-6">
                {t('contactPage.detailsTitle')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <ContactInfoItem icon={MapPinIcon} labelKey="contactPage.addressLabel" value={address}/>
                  <ContactInfoItem icon={PhoneIcon} labelKey="contactPage.phoneWhatsAppLabel" value={phone} href={phoneHref} />
                  <ContactInfoItem icon={ChatBubbleOvalLeftEllipsisIcon} labelKey="contactPage.lineLabel" value={t('contactPage.lineId')} href={`line://ti/p/~${t('contactPage.lineId')}`} />
                  <ContactInfoItem icon={EnvelopeIcon} labelKey="contactPage.emailLabel" value={t('contactPage.emailValue')} href={`mailto:${t('contactPage.emailValue')}`} />
                  <ContactInfoItem icon={ClockIcon} labelKey="contactPage.hoursLabel" value={t('contactPage.hoursValue')} isHtml={true} />
              </div>
          </div>
          
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-8">{t('contactPage.mapTitle')}</h2>
            <a href="https://maps.app.goo.gl/JgA4yF8v8bK9xR2t5" target="_blank" rel="noopener noreferrer" aria-label={t('contactPage.mapAriaLabel')}>
                <InlineImage 
                    src="https://i.postimg.cc/8PzC4g9d/bangkok-map-stylized.jpg"
                    alt={t('contactPage.addressLabel')}
                    aspectRatio="16/9"
                />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
