
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
  const canonicalUrl = `${'https://www.slumbazen.com'}${'/'}#/contact`;
  
  const address = t('contactPage.address');
  const phone = '+66 81 851 9922';
  const phoneHref = 'tel:+66818519922';

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
        "image": "/assets/logo.png",
        "telephone": phone,
        "email": t('contactPage.emailValue'),
        "address": t('contactPage.structuredAddress', { returnObjects: true }),
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 13.7222,
          "longitude": 100.5285
        },
        "url": 'https://www.slumbazen.com',
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
      
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/assets/restored-fcce72c96f95.webp')" }}></div>
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
                  <ContactInfoItem icon={PhoneIcon} labelKey="contactPage.callLabel" value={phone} href={phoneHref} />
              </div>
          </div>
          
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-neutral-900 mb-8">{t('contactPage.mapTitle')}</h2>
            <a className="button secondary" href="https://www.google.com/maps/search/?api=1&amp;query=919%2F1%20Jewelry%20Trade%20Center%20Silom%20Road%20Bang%20Rak%20Bangkok%2010500%20Thailand" target="_blank" rel="noopener noreferrer">{t('contactPage.mapAriaLabel')} ↗</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;

