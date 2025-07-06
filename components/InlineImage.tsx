

import React from 'react';

interface InlineImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5';
}

const InlineImage: React.FC<InlineImageProps> = ({ src, alt, className = '', aspectRatio = '4/3' }) => {
  const aspectClasses = {
    '4/3': 'aspect-w-4 aspect-h-3',
    '16/9': 'aspect-w-16 aspect-h-9',
    '1/1': 'aspect-w-1 aspect-h-1',
    '4/5': 'aspect-w-4 aspect-h-5',
  };

  return (
    <div className={`my-8 sm:my-10 ${className}`}>
      <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${aspectClasses[aspectRatio]} p-0.5 bg-brand-gold`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
      </div>
    </div>
  );
};

export default InlineImage;