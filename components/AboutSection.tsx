
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import SectionTitle from './SectionTitle';

interface AboutSectionProps {
    previewMode?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ previewMode = false }) => {
    const { t } = useLocalization();

    return (
        <div className="container mx-auto px-6 lg:px-8 scroll-element">
            <SectionTitle subtitleKey="homeAboutSectionTitle" titleKey="homeAboutSectionHeadline" />
            <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg shadow-soft overflow-hidden ${previewMode ? 'items-center' : ''}`}>
                {/* Left Image Column */}
                <div className={`h-full flex items-center justify-center p-6 md:p-12`}>
                    <img 
                        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt={t('aboutImageAlt')} 
                        className="w-full h-auto object-cover rounded-lg shadow-sm"
                        loading="lazy" width="600" height="400"
                    />
                </div>
                {/* Right Text Column */}
                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                    {previewMode ? (
                        <div className="flex flex-col h-full justify-center items-start">
                             <p className="text-lg text-brand-text-gray leading-relaxed mb-8">
                                {t('homeAboutPreviewText')}
                             </p>
                             <Link to="/a-propos" className="bg-brand-secondary border-2 border-brand-secondary text-white text-lg font-bold py-3 px-8 sm:px-10 rounded-full hover:bg-white hover:text-black hover:border-white transition-colors duration-300 inline-block shadow-md">
                                {t('homeAboutBtn')}
                             </Link>
                        </div>
                    ) : (
                        <div className="text-sm text-brand-text-gray space-y-3 leading-relaxed flex flex-col h-full justify-center">
                            {['homeAboutP1', 'homeAboutP2', 'homeAboutP3', 'homeAboutP4', 'homeAboutP5', 'homeAboutP6'].map(pKey => (
                                <p key={pKey} dangerouslySetInnerHTML={{ __html: t(pKey) }} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
