
import React, { useRef, useCallback, useEffect, ReactNode } from 'react';

interface SmoothScrollLayoutProps {
  children: ReactNode;
}

const SmoothScrollLayout: React.FC<SmoothScrollLayoutProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollData = useRef({
    target: 0,
    current: 0,
    ease: 0.075,
  });
  const animationFrameId = useRef<number | null>(null);

  const updateScroll = useCallback(() => {
    const diff = scrollData.current.target - scrollData.current.current;
    
    if (Math.abs(diff) > 0.01) {
      scrollData.current.current += diff * scrollData.current.ease;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${scrollData.current.current}px)`;
      }
    } else if (scrollData.current.current !== scrollData.current.target) {
      scrollData.current.current = scrollData.current.target;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${scrollData.current.current}px)`;
      }
    }
    
    animationFrameId.current = requestAnimationFrame(updateScroll);
  }, []);

  useEffect(() => {
    // Start scroll from top on new page
    window.scrollTo(0, 0);
    scrollData.current.target = 0;
    scrollData.current.current = 0;
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(0px)`;
    }


    const handleScroll = () => {
      scrollData.current.target = window.scrollY;
    };
    
    const setBodyHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        document.body.style.height = `${height}px`;
      }
    };

    const ro = new ResizeObserver(() => {
        setBodyHeight();
    });

    if (contentRef.current) {
        ro.observe(contentRef.current);
    }
    
    setBodyHeight();
    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId.current = requestAnimationFrame(updateScroll);

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      document.body.style.height = ''; // Reset body height
    };
  }, [updateScroll]);

  return (
    <div ref={contentRef} className="fixed top-0 left-0 w-full will-change-transform bg-white">
      {children}
    </div>
  );
};

export default SmoothScrollLayout;
