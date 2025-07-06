import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useParams, Outlet, Navigate } from 'react-router-dom';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import MaterialsPage from './pages/MaterialsPage';
import HotelsPage from './pages/HotelsPage';
import GalleryPage from './pages/GalleryPage';
import SizesPage from './pages/SizesPage';
import WhatIsTencelPage from './pages/WhatIsTencelPage';
import DeliveryWarrantyPage from './pages/DeliveryWarrantyPage';
import ContactPage from './pages/ContactPage';
import TowelsPage from './pages/TowelsPage';
import BlogPage from './pages/BlogPage';

// Import new product category pages
import WhiteSheetsPage from './pages/WhiteSheetsPage';
import PremiumColorsPage from './pages/PremiumColorsPage';
import BeddingSetsPage from './pages/BeddingSetsPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LangWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  
  const supportedLngs = i18n.options.supportedLngs || [];
  const isValidLang = lang && supportedLngs.includes(lang);

  useEffect(() => {
    if (isValidLang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, isValidLang]);
  
  useEffect(() => {
    if (isValidLang) {
      document.documentElement.lang = lang!;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang, isValidLang]);

  if (!isValidLang) {
    return <Navigate to="/th" replace />;
  }

  return <Outlet />;
};

const AppLayout: React.FC = () => (
  <div className="flex flex-col min-h-screen font-sans bg-brand-light text-neutral-700">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const AppContent: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/:lang" element={<LangWrapper />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="materials" element={<MaterialsPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="sizes" element={<SizesPage />} />
            <Route path="what-is-tencel" element={<WhatIsTencelPage />} />
            <Route path="delivery" element={<DeliveryWarrantyPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="towels" element={<TowelsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="products/white-sheets" element={<WhiteSheetsPage />} />
            <Route path="products/premium-colors" element={<PremiumColorsPage />} />
            <Route path="products/sets" element={<BeddingSetsPage />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Route>
        </Route>
        <Route path="/" element={<Navigate to="/th" replace />} />
        <Route path="*" element={<Navigate to="/th" replace />} />
      </Routes>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
};

export default App;
