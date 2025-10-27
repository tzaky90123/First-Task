
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
        <div className="bg-gray-200 w-full">
            <div className="relative w-full">
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
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-12 items-center">
                        <div className="md:col-span-2 flex items-center justify-center">
                            <img 
                                src="https://socabeg.com/images/socabeg.jpg" 
                                alt="Ingénieurs SOCABEG planifiant un projet" 
                                className="rounded-lg shadow-xl w-full h-auto object-contain max-h-[400px]"
                            />
                        </div>
                        <div className="md:col-span-3 flex flex-col p-6 md:p-8 rounded-lg relative bg-white shadow-lg">
                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="space-y-2 text-brand-text text-xs md:text-sm leading-snug">
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
                                </div>
                                {showLearnMoreButton && (
                                    <div className="mt-auto pt-6">
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
                                )}
                            </div>
                            <div className="absolute bottom-8 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
