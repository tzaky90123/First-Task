

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ValuesSection from '../components/ValuesSection';

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

    const row1Logos = partnerLogos.slice(0, 5);
    const row2Logos = partnerLogos.slice(5);

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="partnersSectionTitle" titleKey="partnersSectionHeadline" />
             <div className="space-y-8 md:space-y-12">
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row1Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-24">
                    {row2Logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <img 
                                src={logo} 
                                alt={`Partner logo ${index + 1 + row1Logos.length}`} 
                                className="max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 partner-logo" 
                                loading="lazy" height="80" width="160"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
  const { t } = useLocalization();
  const aboutSlides = [
    {
      img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'aboutHeroTitle',
      subtitle: 'aboutHeroSlide1Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'aboutMissionTitle',
      subtitle: 'aboutMissionText',
    },
    {
      img: 'https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'aboutValuesTitle',
      subtitle: 'aboutHeroSlide3Subtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={aboutSlides} cta={false} />
      <FullScreenSection className="bg-gray-100 py-16 md:py-24">
        <AboutSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20">
        <PartnersSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ValuesSection />
      </FullScreenSection>
      <Footer />
    </>
  );
};

export default AboutPage;