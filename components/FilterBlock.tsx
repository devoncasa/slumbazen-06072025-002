import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface FilterBlockProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const FilterBlock: React.FC<FilterBlockProps> = ({ title, children, defaultOpen = true, className = '' }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-brand-light/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200/60 overflow-hidden transition-all duration-300 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-start font-semibold text-white bg-neutral-700 hover:bg-neutral-600 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`filter-content-${title.replace(/\s+/g, '-')}`}
      >
        <span>{title}</span>
        <ChevronUpIcon className={`h-5 w-5 text-white/80 transform transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
      </button>
      <div 
        id={`filter-content-${title.replace(/\s+/g, '-')}`}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
        <div className="p-4 bg-white/50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;