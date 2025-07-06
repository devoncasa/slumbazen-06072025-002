import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  const socialMediaLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/slumbazen', ariaLabelKey: 'footer.followOnFacebook', iconUrl: 'https://i.postimg.cc/YCMfNbVb/facebook.webp' },
    { name: 'Instagram', href: 'https://www.instagram.com/slumbazen', ariaLabelKey: 'footer.followOnInstagram', iconUrl: 'https://i.postimg.cc/P5ybS1nh/instagram.webp' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@slumbazen', ariaLabelKey: 'footer.followOnTikTok', iconUrl: 'https://i.postimg.cc/cJJR26d3/tiktok.webp' },
    { name: 'YouTube', href: 'https://www.youtube.com/@slumbazen', ariaLabelKey: 'footer.followOnYouTube', iconUrl: 'https://i.postimg.cc/hG3LBgG5/youtube.webp' },
    { name: 'Twitter', href: 'https://x.com/slumbazen', ariaLabelKey: 'footer.followOnTwitter', iconUrl: 'https://i.postimg.cc/632d6S25/twitter.webp' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/slumbazen', ariaLabelKey: 'footer.followOnLinkedIn', iconUrl: 'https://i.postimg.cc/bNXRrzRX/linkedin.webp' },
    { name: 'Pinterest', href: 'https://www.pinterest.com/slumbazen', ariaLabelKey: 'footer.followOnPinterest', iconUrl: 'https://i.postimg.cc/JnfjsqZ3/pinterest.webp' },
  ];
  
  const phone = t('contactPage.phone1');
  const phoneHref = `tel:${phone.replace(/[()-\s]/g, '')}`;
  const email = t('contactPage.emailValue');

  return (
    <footer className="bg-brand-secondary text-neutral-700 relative overflow-hidden">
      {/* Faded decorative background image */}
      <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{backgroundImage: "url('https://i.postimg.cc/GmxM1p9Q/Bed000113.jpg')"}}
      ></div>
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/95 to-brand-secondary"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-5 text-center lg:text-start">
            <Link to={langPrefix} className="inline-flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <img src="https://i.postimg.cc/k5NcGrQx/Slumba-ZEN-logo-200.png" alt={t('footer.companyName') + " Logo"} className="h-12 w-auto" loading="lazy" />
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
            <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
              {socialMediaLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                  aria-label={t(social.ariaLabelKey, {platform: social.name})}
                >
                  <img src={social.iconUrl} alt={t(social.ariaLabelKey, {platform: social.name})} className="h-8 w-8 object-contain" loading="lazy" />
                </a>
              ))}
            </div>
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
                 <PhoneIcon className="h-5 w-5 text-brand-primary flex-shrink-0 me-3" aria-hidden="true" />
                 <a href={phoneHref} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{phone}</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <EnvelopeIcon className="h-5 w-5 text-brand-primary flex-shrink-0 me-3" aria-hidden="true" />
                <a href={`mailto:${email}`} className="text-sm text-neutral-700 hover:text-brand-primary transition-colors">{email}</a>
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
