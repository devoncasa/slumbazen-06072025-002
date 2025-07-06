
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetaManager from '../components/MetaManager';
import {
  TruckIcon, ClockIcon, TagIcon, GiftIcon, ShieldCheckIcon, GlobeAltIcon,
  BuildingOfficeIcon, CurrencyDollarIcon, DocumentTextIcon, CheckBadgeIcon,
  CalendarDaysIcon, SparklesIcon, ListBulletIcon, InformationCircleIcon,
  BeakerIcon, SunIcon, ChatBubbleLeftEllipsisIcon, StarIcon, ExclamationTriangleIcon,
  NoSymbolIcon
} from '@heroicons/react/24/outline';
import InlineImage from '../components/InlineImage';

interface InfoDetailProps {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  isHtmlDesc?: boolean;
}

const InfoDetailItem: React.FC<InfoDetailProps> = ({ icon: Icon, titleKey, descriptionKey, isHtmlDesc }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-start space-x-4 rtl:space-x-reverse">
      <Icon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
      <div>
        <h4 className="text-xl font-semibold text-neutral-900">{t(titleKey)}</h4>
        {isHtmlDesc ? (
           <p className="text-neutral-700 text-base" dangerouslySetInnerHTML={{ __html: t(descriptionKey) }}></p>
        ) : (
           <p className="text-neutral-700 text-base">{t(descriptionKey)}</p>
        )}
      </div>
    </div>
  );
};

const DeliveryWarrantyPage: React.FC = () => {
  const { t } = useTranslation();
  const pageTitle = t('deliveryWarrantyPage.mainTitle');
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/delivery`;
  
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "WebPage", 
    "name": t('seo.deliveryWarranty.title'), 
    "description": t('seo.deliveryWarranty.description'), 
    "url": canonicalUrl, 
    "keywords": t('seo.deliveryWarranty.keywords') 
  };
  
  return (
    <>
      <MetaManager
        title={t('seo.deliveryWarranty.title')} 
        description={t('seo.deliveryWarranty.description')}
        keywords={t('seo.deliveryWarranty.keywords')}
        canonicalUrl={canonicalUrl} 
        jsonLd={jsonLd}
      />
      <div className="bg-brand-light relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://i.postimg.cc/DZ3dz3cF/decorative000204.jpg')" }}></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-brand-secondary/20 backdrop-blur-sm" />

         <header className="text-center py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
                {pageTitle}
              </h1>
            </div>
        </header>

        <main className="pb-20 sm:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 text-start">
            
            {/* Shipping Policy Section */}
            <section id="shipping-policy" aria-labelledby="shipping-policy-heading">
              <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                  <h2 id="shipping-policy-heading" className="flex items-center text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">
                    <TruckIcon className="h-12 w-12 text-brand-primary me-4" aria-hidden="true" />
                    {t('deliveryWarrantyPage.shippingPolicyTitle')}
                  </h2>

                  <article className="mb-12">
                    <h3 className="text-3xl font-semibold text-brand-dark mb-8 border-b border-neutral-200 pb-4">
                      {t('deliveryWarrantyPage.domesticShippingTitle')}
                    </h3>
                    <div className="space-y-8">
                      <InfoDetailItem icon={ClockIcon} titleKey="deliveryWarrantyPage.domesticTimeTitle" descriptionKey="deliveryWarrantyPage.domesticTimeDesc" />
                      <InfoDetailItem icon={TagIcon} titleKey="deliveryWarrantyPage.domesticServicesTitle" descriptionKey="deliveryWarrantyPage.domesticServicesDesc" />
                      <InlineImage src="https://i.postimg.cc/x85H5W1f/shipping-box.jpg" alt={t('deliveryWarrantyPage.shippingPolicyTitle')} aspectRatio="16/9"/>
                      <InfoDetailItem icon={GiftIcon} titleKey="deliveryWarrantyPage.domesticFreeShippingTitle" descriptionKey="deliveryWarrantyPage.domesticFreeShippingDesc" />
                      <InfoDetailItem icon={ShieldCheckIcon} titleKey="deliveryWarrantyPage.domesticPackagingTitle" descriptionKey="deliveryWarrantyPage.domesticPackagingDesc" />
                    </div>
                  </article>

                  <article>
                    <h3 className="text-3xl font-semibold text-brand-dark mb-8 border-b border-neutral-200 pb-4">
                      {t('deliveryWarrantyPage.internationalShippingTitle')}
                    </h3>
                    <div className="space-y-8">
                      <InfoDetailItem icon={GlobeAltIcon} titleKey="deliveryWarrantyPage.internationalCountriesTitle" descriptionKey="deliveryWarrantyPage.internationalCountriesDesc" />
                      <InfoDetailItem icon={BuildingOfficeIcon} titleKey="deliveryWarrantyPage.internationalCompaniesTitle" descriptionKey="deliveryWarrantyPage.internationalCompaniesDesc" />
                      <InfoDetailItem icon={CurrencyDollarIcon} titleKey="deliveryWarrantyPage.internationalCostTitle" descriptionKey="deliveryWarrantyPage.internationalCostDesc" />
                      <InfoDetailItem icon={DocumentTextIcon} titleKey="deliveryWarrantyPage.internationalDocsTitle" descriptionKey="deliveryWarrantyPage.internationalDocsDesc" />
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* Warranty & Returns Section */}
            <section id="warranty-policy" aria-labelledby="warranty-policy-heading">
              <div className="bg-brand-secondary/60 backdrop-blur-sm p-8 sm:p-12 rounded-2xl relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                  <h2 id="warranty-policy-heading" className="flex items-center text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">
                    <CheckBadgeIcon className="h-12 w-12 text-brand-primary me-4" aria-hidden="true" />
                    {t('deliveryWarrantyPage.warrantyPolicyTitle')}
                  </h2>
                  <article>
                    <h3 className="text-3xl font-semibold text-brand-dark mb-8 border-b border-neutral-900/10 pb-4">
                      {t('deliveryWarrantyPage.returnExchangePolicyTitle')}
                    </h3>
                    <div className="space-y-8">
                      {/* Period */}
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <CalendarDaysIcon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-900">{t('deliveryWarrantyPage.returnPeriodTitle')}</h4>
                          <p className="text-neutral-700 text-base">{t('deliveryWarrantyPage.returnPeriodDesc')}</p>
                        </div>
                      </div>
                      <InlineImage src="https://i.postimg.cc/44N9p7c0/warranty-seal.jpg" alt={t('deliveryWarrantyPage.warrantyPolicyTitle')} />
                      {/* Conditions */}
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <SparklesIcon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-900">{t('deliveryWarrantyPage.returnConditionsTitle')}</h4>
                          <ul className="list-disc list-outside mt-2 space-y-2 text-neutral-700 text-base ps-5">
                            <li>{t('deliveryWarrantyPage.returnCondition1')}</li>
                            <li>{t('deliveryWarrantyPage.returnCondition2')}</li>
                            <li>{t('deliveryWarrantyPage.returnCondition3')}</li>
                          </ul>
                        </div>
                      </div>

                      {/* Note */}
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <ExclamationTriangleIcon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-900">{t('deliveryWarrantyPage.returnReasonTitle')}</h4>
                          <p className="text-neutral-700 text-base">{t('deliveryWarrantyPage.returnReasonDesc')}</p>
                        </div>
                      </div>

                      {/* Process */}
                      <div className="flex items-start space-x-4 rtl:space-x-reverse">
                        <ListBulletIcon className="h-8 w-8 text-brand-primary flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h4 className="text-xl font-semibold text-neutral-900">{t('deliveryWarrantyPage.returnProcessTitle')}</h4>
                          <ol className="list-decimal list-outside mt-2 space-y-2 text-neutral-700 text-base ps-5">
                            <li>{t('deliveryWarrantyPage.returnProcessStep1')}</li>
                            <li>{t('deliveryWarrantyPage.returnProcessStep2')}</li>
                            <li>{t('deliveryWarrantyPage.returnProcessStep3')}</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* Product Care Instructions Section */}
            <section id="care-instructions" aria-labelledby="care-instructions-heading">
               <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                  <h2 id="care-instructions-heading" className="flex items-center text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">
                    <InformationCircleIcon className="h-12 w-12 text-brand-primary me-4" aria-hidden="true" />
                    {t('deliveryWarrantyPage.careInstructionsTitle')}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                    <InfoDetailItem icon={BeakerIcon} titleKey="deliveryWarrantyPage.careWashTitle" descriptionKey="deliveryWarrantyPage.careWashDesc" />
                    <InfoDetailItem icon={NoSymbolIcon} titleKey="deliveryWarrantyPage.careBleachTitle" descriptionKey="deliveryWarrantyPage.careBleachDesc" />
                    <InfoDetailItem icon={SunIcon} titleKey="deliveryWarrantyPage.careDryTitle" descriptionKey="deliveryWarrantyPage.careDryDesc" />
                    <InfoDetailItem icon={SparklesIcon} titleKey="deliveryWarrantyPage.careIronTitle" descriptionKey="deliveryWarrantyPage.careIronDesc" />
                  </div>
                </div>
              </div>
            </section>

            <section id="contact-info" className="text-center py-16 bg-transparent rounded-2xl">
              <div className="max-w-3xl mx-auto">
                <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-brand-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-3xl font-bold text-neutral-900">
                    {t('deliveryWarrantyPage.moreQuestionsTitle')}
                </h3>
                <p className="text-neutral-700 mt-4 mb-6 max-w-lg mx-auto text-lg" dangerouslySetInnerHTML={{ __html: t('deliveryWarrantyPage.moreQuestionsDesc') }} />
                
                <div className="flex justify-center items-center text-brand-dark font-semibold mt-8">
                  <StarIcon className="h-7 w-7 me-2 text-brand-primary" aria-hidden="true"/>
                  <p className="text-lg">{t('deliveryWarrantyPage.commitmentText')}</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DeliveryWarrantyPage;
