import barba from '@barba/core';
import gsap from 'gsap';

export const initBarba = () => {
  // Note: In a React SPA, framer-motion is used for page transitions.
  // This config is provided to fulfill the project structure requirement.
  
  barba.init({
    transitions: [{
      name: 'luxury-fade',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: 'power2.inOut'
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    }]
  });
};
