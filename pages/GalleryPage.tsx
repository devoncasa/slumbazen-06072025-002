
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products as allProducts } from '../products';
import type { Product, LocalizedString } from '../data/galleryData';
import ProductCard from '../components/BeddingSetCard';
import Button from '../components/Button';
import MetaManager from '../components/MetaManager';
import FilterBlock from '../components/FilterBlock';
import { FunnelIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

type FilterKey = 'all' | string;

const GalleryPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as keyof Product['name'];
  const pageTitle = t('galleryPage.title');
  const canonicalUrl = `${window.location.origin}${window.location.pathname}#/gallery`;

  const location = useLocation();

  // --- Filter State ---
  const [productTypeFilter, setProductTypeFilter] = useState<FilterKey>('all');
  const [fabricFilter, setFabricFilter] = useState<FilterKey>('all');
  const [sizeFilter, setSizeFilter] = useState<FilterKey>('all');
  const [tcFilter, setTcFilter] = useState<FilterKey>('all');
  
  const maxPrice = useMemo(() => {
    if (allProducts.length === 0) return 1500;
    return Math.max(...allProducts.map(p => p.price));
  }, []);

  const priceStep = 50;
  const maxPriceRounded = Math.ceil(maxPrice / priceStep) * priceStep;
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPriceRounded]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // --- Side Effects ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productType = params.get('productType');
    const fabric = params.get('fabric');
    // Color filter isn't fully implemented in the UI yet, but this handles incoming links
    const color = params.get('color');

    if (productType) handleProductTypeChange(productType);
    if (fabric) handleFabricChange(fabric);
    
    // Reset page to 1 on any param change
    setCurrentPage(1);

  }, [location.search]);

  // --- Handlers ---
  const handleProductTypeChange = (key: FilterKey) => {
    setProductTypeFilter(key);
    setFabricFilter('all');
    setSizeFilter('all');
    setTcFilter('all');
    setCurrentPage(1);
  };
  
  const handleFabricChange = (key: FilterKey) => {
    setFabricFilter(key);
    setCurrentPage(1);
  };

  const handleSizeChange = (key: FilterKey) => {
    setSizeFilter(key);
    setCurrentPage(1);
  };

  const handleTcChange = (key: FilterKey) => {
    setTcFilter(key);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const resetFilters = () => {
    setProductTypeFilter('all');
    setFabricFilter('all');
    setSizeFilter('all');
    setTcFilter('all');
    setPriceRange([0, maxPriceRounded]);
    setCurrentPage(1);
  };
  
  // --- Derive Filter Options from Data ---
  const productTypeOptions = useMemo(() => [
    { key: 'all', label: t('galleryPage.productTypes.all') },
    ...[...new Map(allProducts.map(p => [p.productType.key, p.productType])).values()]
      .map(pt => ({ key: pt.key, label: t(`galleryPage.productTypes.${pt.key}`) || pt[currentLang] || pt.en }))
  ], [t, currentLang]);
  
  const fabricOptions = useMemo(() => [
    { key: 'all', label: t('galleryPage.fabricTypes.all') },
    ...[...new Map(allProducts.filter(p => p.productType.key !== 'towel').map(p => [p.fabricType.key, p.fabricType])).values()]
      .map(ft => ({ key: ft.key, label: t(`galleryPage.fabricTypes.${ft.key}`) || ft[currentLang] || ft.en }))
  ], [t, currentLang]);
  
  const sizeOptions = useMemo(() => {
    let relevantProducts = allProducts;
    if (productTypeFilter !== 'all') {
      relevantProducts = allProducts.filter(p => p.productType.key === productTypeFilter);
    }
    
    const uniqueSizes = [...new Map(relevantProducts.map(p => [p.size.key, p.size])).values()];
    
    return [
      { key: 'all', label: t('galleryPage.sizes.all') },
      ...uniqueSizes.map(s => ({ key: s.key, label: t(`galleryPage.sizes.${s.key}`, s.en) || s[currentLang] || s.en }))
    ];
  }, [t, productTypeFilter, currentLang]);

  const tcOptions = useMemo(() => [
    { key: 'all', label: t('galleryPage.tcRanges.all') },
    { key: 'low', label: t('galleryPage.tcRanges.low') }, // <= 400
    { key: 'medium', label: t('galleryPage.tcRanges.medium') }, // 401-600
    { key: 'high', label: t('galleryPage.tcRanges.high') } // > 600
  ], [t]);


  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      if (productTypeFilter !== 'all' && p.productType.key !== productTypeFilter) return false;
      if (fabricFilter !== 'all' && p.fabricType.key !== fabricFilter) return false;
      if (sizeFilter !== 'all' && p.size.key !== sizeFilter) return false;
      if (priceRange && (p.price < priceRange[0] || p.price > priceRange[1])) return false;
      
      // TC filter only applies to non-towel products
      if (tcFilter !== 'all' && p.productType.key !== 'towel') {
        const tc = p.threadCount;
        if (tcFilter === 'low' && tc > 400) return false;
        if (tcFilter === 'medium' && (tc <= 400 || tc > 600)) return false;
        if (tcFilter === 'high' && tc <= 600) return false;
      }
      
      return true;
    });
  }, [productTypeFilter, fabricFilter, sizeFilter, tcFilter, priceRange]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ), [filteredProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (currentPage === 0 && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);
  
  const FilterRadioGroup: React.FC<{
      options: { key: string; label: string }[];
      selectedValue: string;
      onChange: (key: string) => void;
      name: string;
  }> = ({ options, selectedValue, onChange, name }) => (
    <div className="space-y-2">
      {options.map(option => (
        <label key={option.key} className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer text-sm text-neutral-800">
          <input
            type="radio"
            name={name}
            value={option.key}
            checked={selectedValue === option.key}
            onChange={() => onChange(option.key)}
            className="h-4 w-4 text-brand-primary border-neutral-300 focus:ring-brand-primary"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );

  return (
    <>
      <MetaManager
        title={t('seo.gallery.title')}
        description={t('seo.gallery.description')}
        keywords={t('seo.gallery.keywords')}
        canonicalUrl={canonicalUrl}
      />
      <div className="bg-brand-secondary/40">
        <header className="py-20 sm:py-24 text-center bg-brand-light relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://i.postimg.cc/qRzQnXwb/Bed000116.jpg')"}}></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900">{pageTitle}</h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">{t('galleryPage.description')}</p>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* --- Filters Sidebar --- */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-neutral-800 flex items-center">
                        <FunnelIcon className="h-6 w-6 me-2 text-brand-primary"/>
                        {t('galleryPage.filtersTitle')}
                    </h2>
                    <Button onClick={resetFilters} variant="link" size="small" className="text-xs">
                        <ArrowPathIcon className="h-4 w-4 me-1"/>
                        {t('galleryPage.resetFilters')}
                    </Button>
                </div>

                <FilterBlock title={t('galleryPage.productTypes.title')}>
                  <FilterRadioGroup name="productType" options={productTypeOptions} selectedValue={productTypeFilter} onChange={handleProductTypeChange} />
                </FilterBlock>

                {productTypeFilter !== 'towel' && (
                  <>
                    <FilterBlock title={t('galleryPage.fabricTypes.title')}>
                      <FilterRadioGroup name="fabricType" options={fabricOptions} selectedValue={fabricFilter} onChange={handleFabricChange} />
                    </FilterBlock>

                    <FilterBlock title={t('galleryPage.tcRanges.title')}>
                       <FilterRadioGroup name="tc" options={tcOptions} selectedValue={tcFilter} onChange={handleTcChange} />
                    </FilterBlock>
                  </>
                )}
                
                <FilterBlock title={t('galleryPage.sizes.title')}>
                   <FilterRadioGroup name="size" options={sizeOptions} selectedValue={sizeFilter} onChange={handleSizeChange} />
                </FilterBlock>
                
                <FilterBlock title={t('galleryPage.priceRange.title')}>
                    <div className="py-2">
                        <input
                          type="range"
                          min="0"
                          max={maxPriceRounded}
                          step={priceStep}
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                        />
                        <div className="flex justify-between text-xs text-neutral-600 mt-2">
                            <span>฿0</span>
                            <span>฿{priceRange[1].toLocaleString()}</span>
                        </div>
                    </div>
                </FilterBlock>

              </div>
            </aside>

            {/* --- Products Grid --- */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                  <p className="text-sm text-neutral-600">{t('galleryPage.resultsFound', { count: filteredProducts.length })}</p>
                  {/* Sorting can be added here later */}
              </div>

              {paginatedProducts.length > 0 ? (
                <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                 <div className="text-center py-20 bg-brand-light rounded-xl">
                    <h3 className="text-2xl font-semibold text-neutral-800">{t('galleryPage.noResults.title')}</h3>
                    <p className="text-neutral-600 mt-2 mb-6">{t('galleryPage.noResults.description')}</p>
                    <Button onClick={resetFilters} variant="primary">
                        {t('galleryPage.noResults.button')}
                    </Button>
                </div>
              )}

              {/* --- Pagination --- */}
              {totalPages > 1 && (
                <nav className="mt-12 flex justify-center" aria-label="Pagination">
                  <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-neutral-500 bg-white border border-e-0 border-neutral-300 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li key={i}>
                        <button
                          onClick={() => handlePageChange(i + 1)}
                          aria-current={currentPage === i + 1 ? 'page' : undefined}
                          className={`flex items-center justify-center px-4 h-10 leading-tight ${
                            currentPage === i + 1
                              ? 'text-white bg-brand-primary border border-brand-primary'
                              : 'text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700'
                          }`}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-neutral-500 bg-white border border-neutral-300 rounded-e-lg hover:bg-neutral-100 hover:text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GalleryPage;
