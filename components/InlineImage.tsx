

import React from 'react';
import {useTranslation} from 'react-i18next';
import TextilePhoto from '../TextilePhoto';
import {copy} from '../content';

interface InlineImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5';
}

const InlineImage: React.FC<InlineImageProps> = ({ src, alt, className = '', aspectRatio = '4/3' }) => {
  const {i18n}=useTranslation();
  const caption=(copy[i18n.language]||copy.en).illustration;
  const aspectClasses = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '1/1': 'aspect-square',
    '4/5': 'aspect-[4/5]',
  };

  return (
    <figure className={`my-8 sm:my-10 ${className}`}>
      <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${aspectClasses[aspectRatio]} p-0.5 bg-brand-gold`}>
        <TextilePhoto
          src={src}
          alt={src.includes('/editorial/')?alt+' — '+caption:alt}
          loading="lazy" width={1200} height={900}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
      </div>
      {src.includes('/editorial/')&&<figcaption className="legacy-illustration">{caption}</figcaption>}
    </figure>
  );
};

export default InlineImage;
