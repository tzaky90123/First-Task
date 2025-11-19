
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScrollLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if Lenis is available (loaded via CDN)
    const Lenis = (window as any).Lenis;
    if (!Lenis) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for a "heavy/luxury" feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for native feel performance
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default SmoothScrollLayout;
