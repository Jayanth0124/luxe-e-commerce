import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        'relative p-8 rounded-2xl bg-white border border-border/50 shadow-sm flex flex-col items-center text-center h-full group',
        className
      )}
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-[#D2A679]/10 group-hover:text-[#D2A679]/20 transition-colors">
        <Quote size={40} />
      </div>

      <div className="w-20 h-20 rounded-full overflow-hidden mb-5 ring-4 ring-[#D2A679]/10 p-1 bg-white">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
      </div>
      
      <div className="flex gap-1 mb-4 text-[#D2A679]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
      
      <p className="text-muted-foreground italic mb-6 leading-relaxed text-sm flex-grow">"{content}"</p>
      
      <div>
        <h4 className="font-serif text-lg font-bold text-foreground">{name}</h4>
        <div className="h-0.5 w-12 bg-[#D2A679]/40 mx-auto mt-2 group-hover:w-20 transition-all duration-500" />
      </div>
    </motion.div>
  );
};