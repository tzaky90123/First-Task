import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider, useLocalization } from './context/LocalizationContext';
import Header from './components/Header';
import ScrollAnimation from './components/ScrollAnimation';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BtpPage = lazy(() => import('./pages/BtpPage'));
const RealEstatePage = lazy(() => import('./pages/RealEstatePage'));
const MinesPage = lazy(() => import('./pages/MinesPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));


interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const { t } = useLocalization();

  useEffect(() => {
    if (!isLoading) {
      // Wait for the exit animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800); // Duration of the slide-up animation
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={`loading-screen ${!isLoading ? 'exit' : ''}`}>
      <img
        src="https://socabeg.com/favicon.png"
        alt={t('socabegLogoAlt')}
        className="loading-icon"
      />
    </div>
  );
};

const PageLoader: React.FC = () => (
    <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
    </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We only want to lock scroll on initial load, not on page navigation
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Let individual page layouts control scrolling from now on
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <LocalizationProvider>
      <HashRouter>
        <ScrollAnimation />
        <div className="bg-white text-brand-text font-sans antialiased min-h-screen">
          <LoadingScreen isLoading={isLoading} />
          <Header />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/a-propos" element={<AboutPage />} />
                <Route path="/btp" element={<BtpPage />} />
                <Route path="/promotion-immobiliere" element={<RealEstatePage />} />
                <Route path="/mines" element={<MinesPage />} />
                <Route path="/carrieres" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </HashRouter>
    </LocalizationProvider>
  );
};

export default App;