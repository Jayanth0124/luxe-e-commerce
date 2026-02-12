import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface RatingStarsProps {
  rating: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, className }) => {
  return (
    <div className={cn('flex gap-1', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={cn(
            'transition-all duration-300',
            star <= rating ? 'fill-primary text-primary' : 'text-muted'
          )}
        />
      ))}
    </div>
  );
};
