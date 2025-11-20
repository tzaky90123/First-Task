
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before bottom
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const observeElements = () => {
      document.querySelectorAll('.scroll-reveal:not(.observed)').forEach((el) => {
        observer.observe(el);
        el.classList.add('observed');
      });
    };

    // Observe currently present elements
    observeElements();

    // Watch for new elements (e.g., React mounting content)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]); // Re-initialize on route change if needed

  return null;
};

export default ScrollReveal;
