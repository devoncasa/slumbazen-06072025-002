

import React from 'react';
import {useTranslation} from 'react-i18next';
import TextilePhoto from '../TextilePhoto';
import {copy} from '../content';
import dimensions from '../data/imageDimensions.json';

interface InlineImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5';
}

const InlineImage: React.FC<InlineImageProps> = ({ src, alt, className = '', aspectRatio = '4/3' }) => {
  const {i18n}=useTranslation();
  const caption=(copy[i18n.language]||copy.en).illustration;
  const [width,height]=(dimensions as Record<string,number[]>)[src]||[1200,900];

  return (
    <figure className={`my-8 sm:my-10 ${className}`}>
      <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-photo-frame p-0.5 bg-brand-gold`}>
        <TextilePhoto
          src={src} srcSet={src.includes('/editorial/')?`${src.replace('.webp','-640.webp')} 640w, ${src} 1200w`:undefined} sizes="(max-width:767px) 100vw, 50vw"
          alt={src.includes('/editorial/')?alt+' — '+caption:alt}
          loading="lazy" width={width} height={height}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out  rounded-xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
      </div>
      {src.includes('/editorial/')&&<figcaption className="legacy-illustration">{caption}</figcaption>}
    </figure>
  );
};

export default InlineImage;
