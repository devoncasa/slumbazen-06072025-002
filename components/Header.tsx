import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { XMarkIcon, Bars3Icon, GlobeAltIcon } from '@heroicons/react/24/solid';

// --- Main Header Component ---
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuPanelRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  // Language Data
  const languages = [
    { code: 'th', label: 'TH', name: 'ไทย' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'zh', label: 'CN', name: '中文' },
    { code: 'ar', label: 'AR', name: 'العربية' },
    { code: 'hi', label: 'HI', name: 'हिन्दी' }
  ];
  const currentLanguage = languages.find(lang => i18n.language.startsWith(lang.code)) || languages[1];


  // Menu Data
  interface SubMenuItem { to: string; labelKey: string; }
  interface MenuItem { id: string; labelKey:string; to?: string; subItems?: SubMenuItem[]; }
  const navItems: MenuItem[] = [
    { id: 'home', labelKey: 'nav.home', to: '/' },
    { id: 'bedding', labelKey: 'nav.bedding', subItems: [
        { to: '/gallery', labelKey: 'nav.shopItems.gallery' },
        { to: '/products/white-sheets', labelKey: 'nav.shopItems.whiteSheets' },
        { to: '/products/premium-colors', labelKey: 'nav.shopItems.premiumColors' },
        { to: '/products/sets', labelKey: 'nav.shopItems.beddingSets' }
    ]},
    { id: 'towels', labelKey: 'nav.towels', to: '/towels' },
    { id: 'learn', labelKey: 'nav.learn', subItems: [
        { to: '/materials', labelKey: 'nav.learnItems.materials' },
        { to: '/what-is-tencel', labelKey: 'nav.learnItems.whatIsTencel' },
        { to: '/sizes', labelKey: 'nav.learnItems.sizes' },
        { to: '/blog', labelKey: 'nav.blog' },
    ]},
    { id: 'hotel-b2b', labelKey: 'nav.hotelB2B', to: '/hotels' },
    { id: 'shipping-warranty', labelKey: 'nav.shippingWarranty', to: '/delivery' },
    { id: 'contact', labelKey: 'nav.contact', to: '/contact' },
  ];

  // Handlers
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setIsLangDropdownOpen(false);
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown(prev => (prev === id ? null : id));
  };
  
  const changeLanguage = (lng: string) => {
    closeMenus();
    const currentPath = location.pathname; // e.g. /en/contact
    const pathParts = currentPath.split('/'); // e.g. ["", "en", "contact"]
    pathParts[1] = lng;
    const newPath = pathParts.join('/');
    navigate(newPath + location.search + location.hash);
  };

  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')closeMenus()};document.addEventListener('keydown',onKey);return()=>document.removeEventListener('keydown',onKey)},[]);
  // Effects
  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (headerRef.current && headerRef.current.contains(event.target as Node)) ||
        (mobileMenuPanelRef.current && mobileMenuPanelRef.current.contains(event.target as Node))
      ) {
        return;
      }
      closeMenus();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const DesktopNavItem: React.FC<{ to: string; label: string; onClick?: () => void; isActive?: boolean; }> = ({ to, label, onClick, isActive }) => (
    <Link
      to={to}
      onClick={onClick}
      className="relative group px-4 py-2 text-base font-medium transition-colors duration-300 text-neutral-700 hover:text-brand-primary"
    >
      <span className={`relative z-10 ${isActive ? 'text-brand-primary font-semibold' : ''}`}>{label}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transition-transform duration-300 ease-out origin-center
                   ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
        aria-hidden="true"
      />
    </Link>
  );

  return (
    <>
      <header ref={headerRef} className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200/70 relative">
        <div 
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('/assets/restored-75c85586a273.webp')" }}
        ></div>
        <div 
            className="absolute inset-0 -z-10 pointer-events-none" 
            style={{
                backgroundImage: `
                    radial-gradient(circle at 0% 50%, rgba(249, 246, 243, 0.9) 0%, rgba(249, 246, 243, 0) 60%),
                    radial-gradient(circle at 100% 50%, rgba(249, 246, 243, 0.9) 0%, rgba(249, 246, 243, 0) 60%)
                `
            }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-20 py-3">
            
            <Link to={langPrefix} className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenus}>
               <img src="/assets/logo.png" alt={t('footer.companyName') + " Logo"} className="h-12 w-auto" />
               <span className="font-brand-base text-xl sm:text-2xl text-neutral-900 inline-flex items-baseline">
                 <Trans 
                     i18nKey="footer.companyNameRich" 
                     components={{ 
                         1: <span className="font-brand-zen text-brand-primary text-[1.3em] ms-1 tracking-wide" /> 
                     }} 
                     defaults="Slumba <1>ZEN</1>" 
                 />
               </span>
            </Link>

            <nav className="hidden min-[1600px]:flex items-center space-x-2 rtl:space-x-reverse" aria-label={t('nav.mainNavigation')}>
              {navItems.map((item) => {
                const itemPath = item.to === '/' ? langPrefix : `${langPrefix}${item.to}`;
                const isActive = (item.to && location.pathname === itemPath) || 
                                 (item.subItems && item.subItems.some(sub => `${langPrefix}${sub.to}` === location.pathname));

                return item.subItems ? (
                  <div key={item.id} className="relative">
                    <button onClick={() => handleDropdownToggle(item.id)} className={`relative px-3 py-2 text-base font-medium transition-colors duration-300 flex items-center rounded-md
                                     ${isActive || openDropdown === item.id ? 'text-brand-primary' : 'text-neutral-700 hover:text-brand-primary hover:bg-black/5'}`}
                      aria-haspopup="true" aria-expanded={openDropdown === item.id}>
                      <span className={`${isActive ? 'font-semibold' : ''}`}>{t(item.labelKey)}</span>
                      <svg className={`ms-1 h-4 w-4 transform transition-transform duration-200 ${openDropdown === item.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                    <div className={`absolute start-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl shadow-2xl bg-white/80 backdrop-blur-lg ring-1 ring-black ring-opacity-5 p-2.5 z-20 transition-all duration-300 ease-in-out transform
                                     ${openDropdown === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.to} to={`${langPrefix}${subItem.to}`} onClick={closeMenus}
                                className={`block w-full text-start px-4 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === `${langPrefix}${subItem.to}` ? 'bg-brand-secondary text-brand-dark font-semibold' : 'text-neutral-700 hover:bg-brand-secondary/70'}`}>
                            {t(subItem.labelKey)}
                          </Link>
                        ))}
                    </div>
                  </div>
                ) : (
                  item.to && <DesktopNavItem key={item.id} to={itemPath} label={t(item.labelKey)} isActive={isActive} />
                );
              })}
            </nav>

            <div className="flex items-center">
              <div className="relative border-e border-neutral-200/80 pe-3 me-3 rtl:border-s rtl:border-e-0 rtl:ps-3 rtl:pe-0 rtl:ms-3 rtl:me-0">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center justify-center px-3 py-2 text-sm font-bold text-neutral-700 bg-transparent hover:bg-brand-secondary/70 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  id="language-menu-button"
                  aria-haspopup="true"
                  aria-expanded={isLangDropdownOpen}
                  aria-label={t('nav.languageSwitcher')}
                >
                  <GlobeAltIcon className="h-5 w-5 text-neutral-600" />
                  <span className="mx-2">{currentLanguage.label}</span>
                  <svg className={`h-4 w-4 transform transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                <div
                    className={`absolute end-0 mt-3 w-52 rounded-xl shadow-2xl bg-white/80 backdrop-blur-lg ring-1 ring-black ring-opacity-5 p-2.5 z-20 transition-all duration-300 ease-in-out transform
                                ${isLangDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu-button"
                >
                    <div className="py-1" role="none">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`flex items-center w-full text-start px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                                            ${i18n.language.startsWith(lang.code)
                                                ? 'bg-brand-dark text-white'
                                                : 'text-neutral-700 hover:bg-brand-secondary/70'
                                            }`}
                                role="menuitem"
                            >
                                {lang.name}
                                <span className="ms-auto text-xs opacity-70 font-sans">{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
              </div>
              <button onClick={toggleMobileMenu} className="min-[1600px]:hidden text-neutral-900 focus:outline-none" aria-label={t('nav.openMenu')} aria-expanded={isMobileMenuOpen}>
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div inert={!isMobileMenuOpen} aria-hidden={!isMobileMenuOpen} style={{visibility:isMobileMenuOpen?'visible':'hidden'}} className={`fixed inset-0 z-50 min-[1600px]:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeMenus}></div>
        <div ref={mobileMenuPanelRef} className={`absolute top-0 end-0 h-full w-full max-w-sm bg-brand-light shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'}`}>
          <div className="flex justify-between items-center p-5 border-b border-neutral-200 flex-shrink-0">
            <span className="text-xl font-bold text-brand-dark">{t('nav.mobileNavigation')}</span>
            <button onClick={closeMenus} className="p-2 text-neutral-900" aria-label={t('nav.closeMenu')}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-5 overflow-y-auto flex-grow">
            <ul className="flex flex-col space-y-1">
              {navItems.map((item) => {
                  const itemPath = item.to === '/' ? langPrefix : `${langPrefix}${item.to}`;
                  return (
                    <li key={item.id}>
                      {item.subItems ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.id)}
                            className="w-full text-start py-4 px-2 text-lg font-semibold flex justify-between items-center list-none cursor-pointer text-neutral-900 transition-colors hover:text-brand-primary rounded-md hover:bg-black/5"
                            aria-expanded={openDropdown === item.id}
                            aria-controls={`mobile-submenu-${item.id}`}
                          >
                            <span>{t(item.labelKey)}</span>
                            <svg className={`h-5 w-5 transform transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          </button>
                          <div
                            id={`mobile-submenu-${item.id}`}
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.id ? 'max-h-screen' : 'max-h-0'}`}
                          >
                            <div className="ps-4 pt-2 pb-2 space-y-1 border-s-2 border-brand-secondary/70 ms-2 my-2">
                              {item.subItems.map((subItem) => (
                                <Link key={subItem.to} to={`${langPrefix}${subItem.to}`} onClick={closeMenus}
                                      className={`block py-3 text-base rounded-md transition-colors ps-4 ${location.pathname === `${langPrefix}${subItem.to}` ? 'text-brand-primary font-bold' : 'text-neutral-700 hover:text-brand-primary'}`}>
                                  {t(subItem.labelKey)}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        item.to && (
                          <Link to={itemPath} onClick={closeMenus}
                                className={`block py-4 px-2 text-lg font-semibold transition-colors rounded-md hover:bg-black/5 ${location.pathname === itemPath ? 'text-brand-primary' : 'text-neutral-900 hover:text-brand-primary'}`}>
                            {t(item.labelKey)}
                          </Link>
                        )
                      )}
                    </li>
                  );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

