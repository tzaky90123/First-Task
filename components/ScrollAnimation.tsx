import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollAnimation: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Use a single IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class that triggers the CSS transition
            entry.target.classList.add('scrolled');
            // Unobserve the element once it has appeared to save resources (run once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Offset to trigger slightly before the bottom of the viewport
      }
    );

    const observeElements = () => {
      // Select elements with the existing class names
      const elements = document.querySelectorAll('.scroll-element, .scroll-fade');
      elements.forEach((el) => {
        // Only observe if not already animated
        if (!el.classList.contains('scrolled')) {
          observer.observe(el);
        }
      });
    };

    // 1. Run immediately inside a requestAnimationFrame to catch synchronous renders
    requestAnimationFrame(() => {
      observeElements();
    });

    // 2. Run after a short delay to ensure all dynamic content/lazy-loaded components are rendered
    const timeoutId = setTimeout(() => {
      observeElements();
    }, 200);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location]); // Re-run effect when the route changes

  return null;
};

export default ScrollAnimation;