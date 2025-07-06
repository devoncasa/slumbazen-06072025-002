import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product, LocalizedString } from '../data/galleryData';
import Button from './Button'; 
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentLang = i18n.language as keyof LocalizedString;

  const isTowel = product.productType.key === 'towel';

  const getLocalizedString = (localizedData: LocalizedString | undefined): string => {
    if (!localizedData) return '';
    return localizedData[currentLang as keyof LocalizedString] || localizedData.en;
  }
  
  const localizedName = getLocalizedString(product.name);
  const localizedFabric = getLocalizedString(product.fabricType);
  const altText = `${localizedName} - ${localizedFabric} - SlumbaZEN`;


  const handleContactToOrder = () => {
    const specFabric = getLocalizedString(product.fabricType);
    const specSize = getLocalizedString(product.size);
    const specDensity = isTowel
      ? t('product.weightUnitFormat', { count: product.threadCount })
      : t('product.tcUnitFormat', { count: product.threadCount });
    const priceSuffix = isTowel ? ` / ${t('product.per_dozen')}` : '';

    const messageParts = [
      t('contactOrder.title'),
      '--------------------',
      `${t('contactOrder.productName')}: ${localizedName}`,
      `${t('contactOrder.productId')}: ${product.id}`,
      `${t('contactOrder.price')}: ฿${product.price.toLocaleString()}${priceSuffix}`,
      '--------------------',
      `${t('contactOrder.specsTitle')}:`,
      `- ${t('contactOrder.fabric')}: ${specFabric}`,
      `- ${isTowel ? t('contactOrder.weight') : t('contactOrder.density')}: ${specDensity}`,
      `- ${t('contactOrder.size')}: ${specSize}`,
      '--------------------',
      `${t('contactOrder.productImage')}:`,
      product.imageUrl || t('contactOrder.noImage'),
    ];

    const message = messageParts.join('\n');
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
    window.open(lineUrl, '_blank', 'noopener,noreferrer');
  };

  const localizedDescription = getLocalizedString(product.description);

  // Split description for expand/collapse functionality
  const descriptionParts = localizedDescription.split('<br/>');
  const hasExpandableContent = descriptionParts.length > 2;
  const initialContent = hasExpandableContent ? descriptionParts.slice(0, 2).join('<br/>') : localizedDescription;
  const expandableContent = hasExpandableContent ? descriptionParts.slice(2).join('<br/>') : '';
  
  return (
    <div id={product.id} className="bg-brand-light rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group text-start">
      {product.imageUrl && (
        <div className="p-0.5 bg-brand-gold">
          <div className="relative w-full aspect-w-16 aspect-h-10 overflow-hidden rounded-t-xl">
            <img
              src={product.imageUrl}
              alt={altText}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 transition-colors group-hover:text-brand-primary line-clamp-2" title={localizedName}>
          <Link to={`/${currentLang}/gallery#${product.id}`}>{localizedName}</Link>
        </h3>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-500 mb-4">
            <p><span className="font-semibold">{t('beddingSetCard.specFabric')}:</span> {getLocalizedString(product.fabricType)}</p>
            <p>
              <span className="font-semibold">{t(isTowel ? 'beddingSetCard.specWeight' : 'beddingSetCard.specTC')}:</span>
              {isTowel
                ? ` ${t('product.weightUnitFormat', { count: product.threadCount })}`
                : ` ${t('product.tcUnitFormat', { count: product.threadCount })}`
              }
            </p>
            <p><span className="font-semibold">{t('beddingSetCard.productType')}:</span> {getLocalizedString(product.productType)}</p>
            <p><span className="font-semibold">{t('beddingSetCard.specSize')}:</span> {getLocalizedString(product.size)}</p>
            {!isTowel && (
              <p><span className="font-semibold">{t('beddingSetCard.specPattern')}:</span> {getLocalizedString(product.pattern)}</p>
            )}
        </div>

        {/* Description Section */}
        <div className="text-sm text-neutral-700 mb-5 leading-relaxed prose prose-sm max-w-none prose-a:text-brand-primary prose-a:font-semibold hover:prose-a:underline prose-p:my-2 prose-ul:list-disc prose-ul:ml-4 prose-li:my-1">
          <div dangerouslySetInnerHTML={{ __html: initialContent }} />
          
          {hasExpandableContent && (
            <>
              <div 
                className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                    <div className="pt-2" dangerouslySetInnerHTML={{ __html: expandableContent }} />
                </div>
              </div>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors mt-2"
                aria-expanded={isExpanded}
              >
                {isExpanded ? t('beddingSetCard.showLess') : t('beddingSetCard.showMore')}
                <ChevronDownIcon className={`h-4 w-4 ms-1 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-neutral-200/80 flex justify-between items-center">
          <p className="text-xl font-bold text-brand-dark">
            ฿{product.price.toLocaleString()}
            {isTowel && <span className="text-sm font-normal text-neutral-600 ms-1">/{t('product.per_dozen')}</span>}
          </p>
          <Button onClick={handleContactToOrder} variant="secondary" size="small">
            {t('beddingSetCard.contactToOrder')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
