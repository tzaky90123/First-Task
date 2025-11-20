
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait for content to be rendered after route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.is-visible)');
      if (!elements.length) return;

      const observer = new IntersectionObserver((entries) => {
        // Simple stagger logic based on order of entries in the current batch
        let staggerIndex = 0;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Apply a small delay based on index to create a stagger effect for groups
            setTimeout(() => {
                target.classList.add('is-visible');
            }, staggerIndex * 80); // 80ms stagger
            
            staggerIndex++;
            observer.unobserve(target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -30px 0px', // Trigger slightly before bottom
        threshold: 0.05,
      });

      elements.forEach((el) => observer.observe(el));
      
      // Cleanup observer on unmount/change
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
