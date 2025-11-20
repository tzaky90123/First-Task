import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    // Short delay to ensure DOM is ready after route change
    const timer = setTimeout(() => {
        document.querySelectorAll(".scroll-fade").forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location]);

  return null;
};

export default ScrollReveal;