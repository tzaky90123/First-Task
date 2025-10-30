
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import SectionLogoIcon from './SectionLogoIcon';

interface AboutSectionProps {
  showLearnMoreButton?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ showLearnMoreButton = true }) => {
    const { t } = useLocalization();

    return (
        <div className="bg-gray-100 w-full py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl rounded-lg overflow-hidden bg-white">
                    {/* Left Image Column */}
                    <div className="h-64 md:h-auto">
                        <img 
                            src="https://socabeg.com/images/socabeg.jpg" 
                            alt="Ingénieurs SOCABEG planifiant un projet" 
                            className="w-full h-full object-cover"
                            loading="lazy" width="600" height="750"
                        />
                    </div>
                    {/* Right Text Column */}
                    <div className="bg-white p-8 md:p-12 flex flex-col">
                        <h3 className="text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center mb-2">
                            <SectionLogoIcon className="h-5 w-auto mr-2" />
                            <span>{t('homeAboutSectionTitle')}</span>
                        </h3>
                        <h2 className="text-3xl font-bold text-brand-dark mb-4 font-sans">
                            {t('homeAboutSectionHeadline')}
                        </h2>
                        
                        <div className="text-sm text-brand-text-gray space-y-3 leading-relaxed flex-grow">
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                            <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
                        </div>
                        
                        {showLearnMoreButton && (
                            <div className="mt-8">
                                <Link
                                    to="/a-propos"
                                    className="inline-flex items-center bg-brand-dark text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 group"
                                >
                                    <span>{t('learnMore')}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
