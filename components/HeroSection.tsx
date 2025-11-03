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
}

// Internal component for handling progressive image loading for each slide
const Slide: React.FC<{ slide: { img: string }; isActive: boolean }> = ({ slide, isActive }) => {
    const [placeholderSrc, setPlaceholderSrc] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

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
                    filter: 'blur(10px)',
                    transform: 'scale(1.05)', // Scale up to cover edges blurred away
                }}
            />
            {/* High-resolution image that fades in when loaded */}
            <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url(${slide.img})` }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
        </div>
    );
};

const HeroSection: React.FC<HeroSectionProps> = ({ slides = defaultSlides, cta = defaultCta }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLocalization();
  const slideInterval = useRef<number | null>(null);
  const slideDuration = 7000;

  const nextSlide = useCallback(() => {
    if (slides.length > 1) {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length > 1) {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  }, [slides.length]);

  useEffect(() => {
    if (slides.length > 1) {
        slideInterval.current = window.setInterval(nextSlide, slideDuration);
        return () => {
            if (slideInterval.current) window.clearInterval(slideInterval.current);
        };
    }
  }, [nextSlide, slides.length]);

  const handleManualNavigation = (action: () => void) => {
    if (slides.length <= 1) return;
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
      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} isActive={index === currentSlide} />
      ))}

      {/* Slide Navigation Buttons */}
      {slides.length > 1 && (
        <>
            <button 
                onClick={() => handleManualNavigation(prevSlide)} 
                className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <button 
                onClick={() => handleManualNavigation(nextSlide)} 
                className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-white transition"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </>
      )}


      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center container mx-auto px-6">
          <div>
              {slides.map((slide, index) => (
                  <div key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
                      <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 animate-fade-in-up">
                        {t(slide.title)}
                      </h1>
                      <p className="text-base md:text-lg mb-8 animate-fade-in-up animation-delay-300 max-w-5xl mx-auto">
                        {t(slide.subtitle)}
                      </p>
                  </div>
              ))}
              {cta && (
                cta.link.startsWith('#') ? (
                  <a
                    href={cta.link}
                    className="bg-transparent border-2 border-white text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-brand-dark transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600"
                  >
                    {t(cta.textKey)}
                  </a>
                ) : (
                  <Link
                    to={cta.link}
                    className="bg-transparent border-2 border-white text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-brand-dark transition-colors duration-300 inline-block animate-fade-in-up animation-delay-600"
                  >
                    {t(cta.textKey)}
                  </Link>
                )
              )}
          </div>
          
          {slides.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className="relative w-6 h-1 rounded-full bg-white/50 hover:bg-white transition-colors" aria-label={`Go to slide ${index + 1}`}>
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

          <div className="absolute bottom-4 w-full">
            <MainNavigation />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
