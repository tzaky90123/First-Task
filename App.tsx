
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LocalizationProvider } from './context/LocalizationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BtpPage from './pages/BtpPage';
import RealEstatePage from './pages/RealEstatePage';
import MinesPage from './pages/MinesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

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
        alt="SOCABEG Logo"
        className="loading-icon"
      />
    </div>
  );
};

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
        <div className="bg-white text-brand-text font-sans antialiased">
          <LoadingScreen isLoading={isLoading} />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/btp" element={<BtpPage />} />
              <Route path="/promotion-immobiliere" element={<RealEstatePage />} />
              <Route path="/mines" element={<MinesPage />} />
              <Route path="/carrieres" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </main>
          {/* Footer is now handled within each page's SmoothScrollLayout to ensure correct positioning. */}
        </div>
      </HashRouter>
    </LocalizationProvider>
  );
};

export default App;