import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl, children }) => {
  return (
    <div className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-brand-primary opacity-60"></div>
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-sans mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default PageHero;