import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

// Copied from HomePage.tsx to replicate the "WHAT WE DO" section
const SectionLogoIcon = ({ className }: { className?: string }) => (
    <img src="https://socabeg.com/favicon.png" alt="" className={className || "inline-block h-10 w-auto -mt-1 mr-3"} aria-hidden="true" />
);

// This is the content from HomePage's AboutSection
const HomeAboutSection: React.FC = () => {
    const { t } = useLocalization();

    return (
        <div className="relative container mx-auto px-5 lg:px-20 py-16 md:py-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('homeAboutSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">
                    {t('homeAboutSectionHeadline')}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-12 items-stretch">
                <div className="md:col-span-2">
                    <img 
                        src="https://socabeg.com/images/socabeg.jpg" 
                        alt="Ingénieurs SOCABEG planifiant un projet" 
                        className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                </div>
                
                <div 
                    className="md:col-span-3 flex flex-col justify-center p-8 rounded-lg relative bg-white"
                >
                    <div className="relative z-10">
                        <div className="space-y-2 text-brand-text text-xs md:text-sm leading-snug">
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
                        </div>
                        
                        <div className="mt-8">
                            <Link
                                to="/a-propos"
                                className="inline-flex items-center bg-black/5 border border-black/10 text-brand-dark text-sm font-bold py-3 px-8 rounded-full hover:bg-black/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 group"
                            >
                                <span>{t('learnMore')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" aria-hidden="true"></div>
                </div>
            </div>
        </div>
    );
};

const PartnersSection: React.FC = () => {
    const { t } = useLocalization();
    const partnerLogos = [
        'https://socabeg.com/partners/bhs.png',
        'https://socabeg.com/partners/geoplast.png',
        'https://socabeg.com/partners/ipres.jpg',
        'https://socabeg.com/partners/sar.png',
        'https://socabeg.com/partners/sgs.png',
        'https://socabeg.com/partners/sicap.jpg',
        'https://socabeg.com/partners/sn.jpg',
        'https://socabeg.com/partners/snhlm.jpg',
        'https://socabeg.com/partners/sonatel.png',
    ];
    const duplicatedLogos = [...partnerLogos, ...partnerLogos];

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12 md:mb-16">
                <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                    <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                    <span>{t('partnersSectionTitle')}</span>
                </h3>
                <h2 className="text-2xl font-bold font-sans text-black">{t('partnersSectionHeadline')}</h2>
            </div>
            <div className="logo-scroller">
                <div className="logo-scroller-inner">
                    {duplicatedLogos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-36 sm:w-48 h-24 flex items-center justify-center p-2 sm:p-4 mx-2 sm:mx-4">
                            <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-full max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ValuesSection: React.FC = () => {
  const { t } = useLocalization();

  const values = [
    { titleKey: "value1Title", descriptionKey: "value1Desc", icon: "https://cdn-icons-png.flaticon.com/512/506/506420.png" },
    { titleKey: "value2Title", descriptionKey: "value2Desc", icon: "https://cdn-icons-png.flaticon.com/512/100/100852.png" },
    { titleKey: "value3Title", descriptionKey: "value3Desc", icon: "https://cdn-icons-png.flaticon.com/512/5631/5631194.png" },
    { titleKey: "value4Title", descriptionKey: "value4Desc", icon: "https://cdn-icons-png.flaticon.com/512/10556/10556522.png" },
    { titleKey: "value5Title", descriptionKey: "value5Desc", icon: "https://cdn-icons-png.flaticon.com/512/798/798008.png" },
    { titleKey: "value6Title", descriptionKey: "value6Desc", icon: "https://cdn-icons-png.flaticon.com/512/33/33308.png" },
  ];

  return (
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-sm font-medium text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
            <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
            <span>{t("whyChooseUsSectionTitle")}</span>
          </h3>
          <h2 className="text-2xl font-bold font-sans text-black">{t("whyChooseUsSectionHeadline")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl">
              {value.icon && (<img src={value.icon} alt="" className="h-10 w-10 mb-4" />)}
              <div>
                <h3 className="text-xl font-medium text-brand-primary mb-2 font-sans">{t(value.titleKey)}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{t(value.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};


const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <SmoothScrollLayout>
      <PageHero
        title={t('aboutHeroTitle')}
        subtitle={t('aboutHeroSubtitle')}
        imageUrl="https://socabeg.com/images/socabeg.jpg"
      />
      
      <FullScreenSection className="bg-brand-light">
        <HomeAboutSection />
      </FullScreenSection>

      <FullScreenSection className="bg-white py-16 md:py-20">
        <PartnersSection />
      </FullScreenSection>

      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ValuesSection />
      </FullScreenSection>

      <Footer />
    </SmoothScrollLayout>
  );
};

export default AboutPage;
