import React from 'react';
import { RatingStars } from './RatingStars';
import { cn } from '../lib/utils';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  content: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  content,
  className
}) => {
  return (
    <div className={cn(
      'p-8 rounded-2xl glass caramel-glow flex flex-col items-center text-center max-w-sm',
      className
    )}>
      <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary/20 p-1">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      <RatingStars rating={rating} className="mb-4" />
      <p className="text-muted-foreground italic mb-6 leading-relaxed">"{content}"</p>
      <h4 className="font-serif text-lg font-semibold">{name}</h4>
    </div>
  );
};
