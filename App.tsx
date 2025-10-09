
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <HashRouter>
        <div className="bg-brand-light text-brand-text font-sans antialiased">
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
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LocalizationProvider>
  );
};

export default App;
