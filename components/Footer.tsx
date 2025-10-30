
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';

const Footer: React.FC = () => {
  const { t } = useLocalization();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="https://socabeg.com/logo.png" alt="SOCABEG Logo" className="h-12 w-auto mb-4" width="192" height="48" loading="lazy" />
            <p className="text-gray-400">{t('footerDescription')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('contactInfoTitle')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><strong>{t('address')}:</strong> 123 Rue de Dakar, Sénégal</li>
              <li><strong>{t('phone')}:</strong> +221 33 800 00 00</li>
              <li><strong>{t('email')}:</strong> contact@socabeg.sn</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footerQuickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/a-propos" className="hover:text-brand-secondary transition-colors">{t('navAbout')}</Link></li>
              <li><Link to="/btp" className="hover:text-brand-secondary transition-colors">{t('navBTP')}</Link></li>
              <li><Link to="/carrieres" className="hover:text-brand-secondary transition-colors">{t('navCareers')}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">{t('navContact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footerFollow')}</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label={t('ariaLinkedin')} className="text-gray-400 hover:text-brand-secondary transition-colors"><IconLinkedin /></a>
              <a href="#" aria-label={t('ariaTwitter')} className="text-gray-400 hover:text-brand-secondary transition-colors"><IconTwitter /></a>
              <a href="#" aria-label={t('ariaFacebook')} className="text-gray-400 hover:text-brand-secondary transition-colors"><IconFacebook /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} SOCABEG. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

// SVG Icons defined as components
const IconLinkedin = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const IconTwitter = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.6.164-1.242.251-1.912.251-.307 0-.6-.029-.887-.084.616 1.923 2.433 3.32 4.596 3.358-1.64 1.285-3.717 2.049-5.968 2.049-.387 0-.768-.022-1.14-.067 2.115 1.353 4.629 2.146 7.332 2.146 8.798 0 13.6-7.29 13.6-13.6 0-.207-.005-.414-.014-.62.932-.672 1.737-1.512 2.384-2.476z"/></svg>
);
const IconFacebook = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
);

export default Footer;