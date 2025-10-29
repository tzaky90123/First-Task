import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { Language, NavLink as NavLinkType } from '../types';

const allNavLinks: NavLinkType[] = [
    { label: 'navHome', path: '/' },
    { label: 'navAbout', path: '/a-propos' },
    { label: 'navBTP', path: '/btp' },
    { label: 'navRealEstate', path: '/promotion-immobiliere' },
    { label: 'navMines', path: '/mines' },
    { label: 'navCareers', path: '/carrieres' },
    { label: 'navContact', path: '/contact' },
    { label: 'navDashboard', path: '/dashboard' },
];

const Header: React.FC = () => {
  const { t } = useLocalization();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-dark/95 text-white shadow-lg backdrop-blur-sm' : 'bg-gradient-to-b from-black/40 to-transparent text-white'
        } ${isMenuOpen ? '-translate-y-full' : ''}`}
      >
        <div className="container mx-auto px-6 h-16 flex justify-between items-center w-full">
          {/* Left Side - Menu Toggle */}
          <div className="w-1/3 flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 rounded-md p-1"
              aria-label={t('headerToggleMenuAria')}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16"></path>
              </svg>
              <span className="hidden md:inline text-sm uppercase tracking-wider font-semibold">{t('headerMenuLabel')}</span>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="w-1/3 flex justify-center">
            <RouterNavLink
              to="/"
              className="p-1 focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="https://socabeg.com/logo.png" alt="SOCABEG Logo" className="h-8 md:h-10 w-auto logo-shadow" />
            </RouterNavLink>
          </div>

          {/* Right Side - Language */}
          <div className="w-1/3 flex justify-end">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
      
      {/* Backdrop */}
      {isMenuOpen && (
        <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-[55] transition-opacity duration-500 ease-in-out"
            aria-hidden="true"
        ></div>
      )}

      {/* Sidebar Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-4/5 max-w-[350px] sm:w-96 h-screen bg-brand-dark text-white transform transition-transform duration-300 ease-in-out z-[60] ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-6 pt-20">
            <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-7 right-6 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1"
                aria-label={t('headerCloseMenuAria')}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <nav className="flex-grow">
                <ul className="space-y-2">
                    {allNavLinks.map((link) => (
                    <li key={link.path}>
                        <RouterNavLink
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `block w-full px-4 py-3 rounded-md text-lg font-light transition-colors duration-200 text-left ${
                                isActive ? 'bg-brand-primary text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                }`
                            }
                        >
                        {t(link.label)}
                        </RouterNavLink>
                    </li>
                    ))}
                </ul>
            </nav>
            <div className="pt-6 border-t border-gray-700">
                <LanguageSwitcher />
            </div>
        </div>
      </div>
    </>
  );
};

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, t } = useLocalization();

    return (
        <div className="flex items-center justify-center text-sm space-x-2">
            <button
                onClick={() => setLanguage(Language.FR)}
                className={`px-1 py-1 transition-colors duration-300 uppercase ${language === Language.FR ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
                aria-label={t('langSwitchFR')}
            >
                Français
            </button>
            <span className="text-gray-400">|</span>
             <button
                onClick={() => setLanguage(Language.EN)}
                className={`px-1 py-1 transition-colors duration-300 uppercase ${language === Language.EN ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`}
                aria-label={t('langSwitchEN')}
            >
                English
            </button>
        </div>
    );
};

export default Header;