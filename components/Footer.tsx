import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  const phone = t('contactPage.phone1');
  const phoneHref = 'tel:+66818519922';

  return (
    <footer className="bg-brand-secondary text-neutral-700 relative overflow-hidden">
      {/* Faded decorative background image */}
      <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          data-background="url('/assets/restored-75c85586a273-640.webp')"
      ></div>
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/95 to-brand-secondary"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-5 text-center lg:text-start">
            <Link to={langPrefix} className="inline-flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <img src="/assets/logo.webp" alt={t('footer.companyName')} width={200} height={199} className="h-12 w-auto" loading="lazy" />
              <span className="font-brand-base text-2xl md:text-3xl text-neutral-900 inline-flex items-baseline">
                <Trans 
                    i18nKey="footer.companyNameRich" 
                    components={{ 
                        1: <span className="font-brand-zen text-brand-primary text-[1.3em] ms-1 tracking-wide" /> 
                    }} 
                    defaults="Slumba <1>ZEN</1>" 
                />
              </span>
            </Link>
            <p className="text-sm text-neutral-700 max-w-sm mb-8 mx-auto lg:mx-0">
              {t('footer.aboutUsSnippet', {defaultValue: "Premium hotel-quality bedding, direct from our factory."})}
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="md:col-span-1 lg:col-span-3 text-center lg:text-start">
            <h4 className="text-base font-semibold text-brand-primary uppercase tracking-wider mb-5">{t('footer.exploreTitle', {defaultValue: "Explore"})}</h4>
            <ul className="space-y-3">
              <li><Link to={`${langPrefix}/collections`} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{t('footer.sitemapLinks.collections')}</Link></li>
              <li><Link to={`${langPrefix}/gallery`} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{t('footer.sitemapLinks.gallery')}</Link></li>
              <li><Link to={`${langPrefix}/materials`} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{t('footer.sitemapLinks.materials')}</Link></li>
              <li><Link to={`${langPrefix}/hotels`} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{t('footer.sitemapLinks.hotels')}</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Us */}
          <div className="md:col-span-1 lg:col-span-4 text-center lg:text-start">
            <h4 className="text-base font-semibold text-brand-primary uppercase tracking-wider mb-5">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start">
                <a href={phoneHref} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors" style={{display:'inline-flex',alignItems:'center',gap:12,minHeight:44}}>
                  <PhoneIcon className="h-5 w-5 text-brand-primary flex-shrink-0" aria-hidden="true" />
                  <span dir="ltr">{phone}</span>
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://wa.me/66818519922" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-700 hover:text-brand-primary transition-colors" style={{display:'inline-flex',alignItems:'center',gap:12,minHeight:44}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-primary flex-shrink-0" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="m8.4 7.4 1.2-.2 1 2.4-.8 1a7.2 7.2 0 0 0 2.8 2.8l1-.8 2.4 1-.2 1.2c-.2 1.4-1.8 1.8-3.2 1.2-2.6-1-4.6-3-5.6-5.6-.6-1.4-.2-2.8 1.4-3Z" strokeLinejoin="round"/></svg>
                  <span>WhatsApp · <bdi>+66 81 851 9922</bdi></span>
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <a href="https://line.me/ti/p/~kris.bkk" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-700 hover:text-brand-primary transition-colors" style={{display:'inline-flex',alignItems:'center',gap:12,minHeight:44}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-brand-primary flex-shrink-0" aria-hidden="true"><path d="M21.5 10.3c0-4.3-4.2-7.8-9.5-7.8s-9.5 3.5-9.5 7.8c0 3.9 3.3 7.1 7.8 7.7.3.1.7.2.6.7l-.3 1.8c-.1.5.1.7.6.5 1.6-.7 6.7-3.9 9-6.5a6.6 6.6 0 0 0 1.3-4.2Z" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="12.8" textAnchor="middle" fill="currentColor" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="6.4">LINE</text></svg>
                  <span>LINE · <bdi>kris.bkk</bdi></span>
                </a>
              </li>
              
               <li className="flex items-start justify-center lg:justify-start">
                  <span className="text-brand-primary font-bold text-sm me-3 mt-0.5">A:</span>
                  <p className="text-sm text-neutral-700">{t('contactPage.address')}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-500/20 text-center">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()}{' '}
            <Link to={langPrefix} className="hover:text-brand-primary transition-colors font-brand-base inline-flex items-baseline text-xs">
              <Trans 
                i18nKey="footer.companyNameRich" 
                components={{ 
                    1: <span className="font-brand-zen text-brand-primary text-[1.3em] ms-1 tracking-wide" /> 
                }} 
                defaults="Slumba <1>ZEN</1>" 
              />
            </Link>
            . {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

