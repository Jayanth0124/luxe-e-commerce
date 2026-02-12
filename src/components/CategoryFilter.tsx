import React from 'react';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/products';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
  className
}) => {
  return (
    <div className={cn('flex flex-wrap gap-3 justify-center', className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
            activeCategory === category
              ? 'bg-[#D2A679] text-white border-[#D2A679] shadow-md transform scale-105'
              : 'bg-white text-gray-500 border-gray-200 hover:border-[#D2A679]/50 hover:text-[#D2A679]'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};