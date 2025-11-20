import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollAnimation: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    // Small delay to ensure elements are rendered in the DOM
    const timeout = setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-element');
        elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
        clearTimeout(timeout);
        observer.disconnect();
    };
  }, [location]);

  return null;
};

export default ScrollAnimation;