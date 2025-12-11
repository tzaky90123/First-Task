
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import TestimonialsSection from '../components/TestimonialsSection';

// --- SVG Icons for Benefits Section ---
const IconRemuneration = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M23,8H1a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1H23a1,1,0,0,0,1,1V9A1,1,0,0,0,23,8ZM2,10H22V20H2ZM12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,12,11ZM19,2H5A3,3,0,0,0,2,5V6H22V5A3,3,0,0,0,19,2Z"/></svg>;
const IconHealth = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78zM15 12h-2v2h-2v-2H9v-2h2V8h2v2h2v2z" /></svg>;
const IconMentorship = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>;


// --- Page Sections ---

const WhyJoinUsSection: React.FC = () => {
    const { t } = useLocalization();
    const values = [
        { icon: <img src="https://cdn-icons-png.flaticon.com/512/3329/3329048.png" alt={t('careersSafetyIconAlt')} className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueSafetyTitle', descKey: 'careersValueSafetyDesc' },
        { icon: <img src="https://cdn-icons-png.flaticon.com/512/70/70535.png" alt={t('careersExcellenceIconAlt')} className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueExcellenceTitle', descKey: 'careersValueExcellenceDesc' },
        { icon: <img src="https://cdn-icons-png.flaticon.com/512/33/33308.png" alt={t('careersTeamIconAlt')} className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueTeamTitle', descKey: 'careersValueTeamDesc' },
        { icon: <img src="https://cdn-icons-png.flaticon.com/512/2285/2285559.png" alt={t('careersGrowthIconAlt')} className="h-full w-full" loading="lazy" width="32" height="32" />, titleKey: 'careersValueGrowthTitle', descKey: 'careersValueGrowthDesc' },
    ];

    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle subtitleKey="careersWhyUsTitle" titleKey="careersWhyUsHeadline" descriptionKey="careersWhyUsIntro" />
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('careersWhyJoinImageAlt')} className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
                <div className="space-y-8">
                    {values.map((item, index) => (
                        <div key={item.titleKey} className="flex items-start group">
                            <div className="flex-shrink-0 h-14 w-14 p-3 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center transition-all duration-300 group-hover:bg-brand-yellow group-hover:scale-110">{item.icon}</div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold text-brand-navy">{t(item.titleKey)}</h3>
                                <p className="text-brand-text-gray mt-1 leading-relaxed">{t(item.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BenefitsSection: React.FC = () => {
    const { t } = useLocalization();
    const benefits = [
        { icon: <IconRemuneration />, titleKey: 'careersBenefit1Title', descKey: 'careersBenefit1Desc' },
        { icon: <IconHealth />, titleKey: 'careersBenefit2Title', descKey: 'careersBenefit2Desc' },
        { icon: <img src="https://cdn-icons-png.flaticon.com/512/2285/2285559.png" alt={t('careersBenefit3Title')} className="h-full w-full" loading="lazy" />, titleKey: 'careersBenefit3Title', descKey: 'careersBenefit3Desc' },
        { icon: <IconMentorship />, titleKey: 'careersBenefit4Title', descKey: 'careersBenefit4Desc' },
    ];
    
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle subtitleKey="careersBenefitsTitle" titleKey="careersBenefitsHeadline" descriptionKey="careersBenefitsNewIntro" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={benefit.titleKey} className="bg-white p-8 rounded-xl shadow-soft text-center transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                        <div className="text-brand-navy mx-auto mb-6 w-16 h-16 p-3 flex items-center justify-center rounded-full bg-brand-navy/5 transition-all duration-300 group-hover:bg-brand-yellow group-hover:scale-110">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3">{t(benefit.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm flex-grow">{t(benefit.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CareerOpportunitiesSection: React.FC = () => {
    const { t } = useLocalization();
    const roles = [
        { titleKey: 'careersRole1Title', descKey: 'careersRole1Desc' },
        { titleKey: 'careersRole2Title', descKey: 'careersRole2Desc' },
        { titleKey: 'careersRole3Title', descKey: 'careersRole3Desc' },
        { titleKey: 'careersRole4Title', descKey: 'careersRole4Desc' },
    ];
    
    return (
        <div className="container mx-auto px-6 text-center scroll-element">
            <SectionTitle subtitleKey="careersOpeningsSubheadline" titleKey="careersOpeningsTitle" descriptionKey="careersOpeningsText" />

            {roles.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
                    {roles.map((role, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-soft border-l-4 border-brand-primary">
                            <h3 className="font-bold text-lg text-brand-navy mb-2">{t(role.titleKey)}</h3>
                            <p className="text-sm text-brand-text-gray">{t(role.descKey)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mb-12">
                    <p className="text-brand-text-gray italic">{t('careersNoOpenings')}</p>
                </div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="#" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md w-full sm:w-auto">
                    {t('careersOpeningsBtnView')}
                </Link>
                <Link to="/contact" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md w-full sm:w-auto">
                    {t('careersOpeningsBtnSpontaneous')}
                </Link>
            </div>
        </div>
    );
};


const CareersPage: React.FC = () => {
  const { t } = useLocalization();
  const careersSlides = [
    {
      img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'careersWhyUsTitle',
      subtitle: 'careersHeroSlide1Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'careersValueTeamTitle',
      subtitle: 'careersHeroSlide2Subtitle',
    },
    {
      img: 'https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'careersValueGrowthTitle',
      subtitle: 'careersHeroSlide3Subtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={careersSlides} />
      <FullScreenSection className="bg-white py-20 md:py-28">
        <WhyJoinUsSection />
      </FullScreenSection>
      <FullScreenSection className="blueprint-bg py-20 md:py-28">
        <BenefitsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-20 md:py-28">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="grid-bg py-20 md:py-28">
        <CareerOpportunitiesSection />
      </FullScreenSection>
      <Footer />
    </>
  );
};

export default CareersPage;
