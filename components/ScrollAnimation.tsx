import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollAnimation: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Callback for the IntersectionObserver
    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          // Handle .scroll-element -> .scrolled (Primary animation style)
          if (target.classList.contains('scroll-element')) {
            target.classList.add('scrolled');
          }

          // Handle .scroll-fade -> .visible (Secondary/Legacy animation style)
          if (target.classList.contains('scroll-fade')) {
            target.classList.add('visible');
          }

          // Unobserve the element immediately after triggering to save resources
          observer.unobserve(target);
        }
      });
    };

    // Create a single observer instance
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -30px 0px', // Slight offset to trigger just before bottom of viewport
    });

    // Function to scan DOM and observe valid elements
    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.scroll-element, .scroll-fade');
      elements.forEach((el) => {
        // Check if the element has already been animated to avoid redundant observation
        const isAnimated = el.classList.contains('scrolled') || el.classList.contains('visible');
        if (!isAnimated) {
          observer.observe(el);
        }
      });
    };

    // 1. Run immediately to catch static content
    scanAndObserve();

    // 2. Run with delays to catch dynamic content, images loading, or React rendering delays
    // This is lighter than a MutationObserver but robust enough for page transitions
    const t1 = setTimeout(scanAndObserve, 100);
    const t2 = setTimeout(scanAndObserve, 400);
    const t3 = setTimeout(scanAndObserve, 800);

    // Cleanup function
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run effect reliably when the route path changes

  return null;
};

export default ScrollAnimation;