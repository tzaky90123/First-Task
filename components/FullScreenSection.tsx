
import React from 'react';

interface FullScreenSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`w-full relative overflow-hidden min-h-screen flex flex-col justify-center items-center ${className}`}>
        <div className="w-full">
            {children}
        </div>
    </section>
  );
};

export default FullScreenSection;