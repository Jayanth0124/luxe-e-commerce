import React from 'react';
import { cn } from '../lib/utils';
import { categories } from '../lib/products';

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
    <div className={cn('flex flex-wrap gap-4 justify-center', className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-6 py-2 rounded-full transition-all duration-300 border',
            activeCategory === category
              ? 'bg-primary text-primary-foreground border-primary shadow-lg'
              : 'bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
