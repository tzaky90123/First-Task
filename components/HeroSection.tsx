
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import MainNavigation from './MainNavigation';

const defaultSlides = [
  {
    img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide1Title',
    subtitle: 'heroSlide1Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide2Title',
    subtitle: 'heroSlide2Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide3Title',
    subtitle: 'heroSlide3Subtitle',
  },
];

const defaultCta = {
    link: '/promotion-immobiliere',
    textKey: 'homeCta'
};

interface HeroSectionProps {
    slides?: { img: string; title: string; subtitle: string; }[];
    cta?: { link: string; textKey: string; } | false;
    imageBrightness?: number;
    backgroundImage?: string;
    titleKey?: string;
    subtitleKey?: string;
}

// Internal component for handling progressive image loading for each slide
const Slide: React.FC<{ slide: { img: string }; isActive: boolean; brightness: number }> = ({ slide, isActive, brightness }) => {
    const [placeholderSrc, setPlaceholderSrc] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const filterStyle = brightness !== 1 ? `brightness(${brightness})` : '';

    useEffect(() => {
        if (!slide.img) return;

        // Generate a low-quality placeholder URL from the original src
        try {
            const url = new URL(slide.img);
            url.searchParams.set('w', '100'); // Set a small width for the placeholder
            url.searchParams.delete('h');
            url.searchParams.delete('dpr');
            setPlaceholderSrc(url.toString());
        } catch {
            setPlaceholderSrc(slide.img); // Fallback to original image if URL parsing fails
        }

        // Preload the full-resolution image
        setIsLoaded(false); // Reset loaded state on image change
        const img = new Image();
        img.src = slide.img;
        img.onload = () => {
            setIsLoaded(true);
        };
    }, [slide.img]);

    return (
        <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0'
            }`}
        >
            {/* Low-resolution placeholder with blur */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${placeholderSrc})`,
                    filter: `blur(10px) ${filterStyle}`,
                    transform: 'scale(1.05)', // Scale up to cover edges blurred away
                }}
            />
            {/* High-resolution image that fades in when loaded */}
            <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${slide.img})`, filter: filterStyle }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
    );
};

const HeroSection: React.FC<HeroSectionProps> = ({ 
    slides = defaultSlides, 
    cta = defaultCta, 
    imageBrightness = 1,
    backgroundImage,
    titleKey,
    subtitleKey
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLocalization();
  const slideInterval = useRef<number | null>(null);
  const slideDuration = 7000;

  // Handle override props (single slide mode)
  const activeSlides = backgroundImage ? [{
      img: backgroundImage,
      title: titleKey || '',
      subtitle: subtitleKey || ''
  }] : slides;

  const nextSlide = useCallback(() => {
    if (activeSlides.length > 1) {
        setCurrentSlide(prev => (prev === activeSlides.length - 1 ? 0 : prev + 1));
    }
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    if (activeSlides.length > 1) {
        setCurrentSlide(prev => (prev === 0 ? activeSlides.length - 1 : prev - 1));
    }
  }, [activeSlides.length]);

  useEffect(() => {
    if (activeSlides.length > 1) {
        slideInterval.current = window.setInterval(nextSlide, slideDuration);
        return () => {
            if (slideInterval.current) window.clearInterval(slideInterval.current);
        };
    }
  }, [nextSlide, activeSlides.length]);

  const handleManualNavigation = (action: () => void) => {
    if (activeSlides.length <= 1) return;
    action();
    if (slideInterval.current) {
        clearInterval(slideInterval.current);
        slideInterval.current = window.setInterval(nextSlide, slideDuration);
    }
  }

  const goToSlide = (index: number) => {
      handleManualNavigation(() => setCurrentSlide(index));
  };
    
  return (
    <section className="relative h-screen text-white overflow-hidden">
      {activeSlides.map((slide, index) => (
        <Slide key={index} slide={slide} isActive={index === currentSlide} brightness={imageBrightness} />
      ))}

      {/* Slide Navigation Buttons */}
      {activeSlides.length > 1 && (
        <>
            <button 
                onClick={() => handleManualNavigation(prevSlide)} 
                className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 text-white bg-white/20 hover:bg-white hover:text-black backdrop-blur-sm rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition shadow-lg"
                aria-label={t('heroPrevSlide')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button 
                onClick={() => handleManualNavigation(nextSlide)} 
                className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 text-white bg-white/20 hover:bg-white hover:text-black backdrop-blur-sm rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary transition shadow-lg"
                aria-label={t('heroNextSlide')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </>
      )}


      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center container mx-auto px-6">
          <div>
              {activeSlides.map((slide, index) => (
                  <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
                      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-in-up uppercase">
                        {t(slide.title)}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl mb-8 animate-fade-in-up animation-delay-300 max-w-5xl mx-auto">
                        {t(slide.subtitle)}
                      </p>
                  </div>
              ))}
              {cta && (
                cta.link.startsWith('#') ? (
                  <a
                    href={cta.link}
                    className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600 shadow-md"
                  >
                    {t(cta.textKey)}
                  </a>
                ) : (
                  <Link
                    to={cta.link}
                    className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600 shadow-md"
                  >
                    {t(cta.textKey)}
                  </Link>
                )
              )}
          </div>
          
          {activeSlides.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {activeSlides.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className="relative w-6 h-1 rounded-full bg-white/50 hover:bg-white transition-colors" aria-label={t('heroGoToSlide').replace('{slide}', String(index + 1))}>
                        <div
                            className={`h-full rounded-full bg-white transition-all duration-200 ${index === currentSlide ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                        ></div>
                        {index === currentSlide && (
                            <div
                                key={currentSlide} // Re-trigger animation on slide change
                                className="absolute top-0 left-0 h-full rounded-full bg-white animate-slide-indicator"
                                style={{ animationDuration: `${slideDuration}ms` }}
                            ></div>
                        )}
                    </button>
                ))}
            </div>
          )}

          <div className="absolute bottom-4 w-full hidden md:block">
            <MainNavigation />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
