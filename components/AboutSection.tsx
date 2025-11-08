import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import SectionTitle from './SectionTitle';

const AboutSection: React.FC = () => {
    const { t } = useLocalization();

    return (
        <div className="container mx-auto px-6 lg:px-8">
            <SectionTitle subtitleKey="homeAboutSectionTitle" titleKey="homeAboutSectionHeadline" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 shadow-xl rounded-lg overflow-hidden bg-white">
                {/* Left Image Column */}
                <div className="h-64 md:h-auto">
                    <img 
                        src="https://socabeg.com/images/socabeg.jpg" 
                        alt={t('aboutImageAlt')} 
                        className="w-full h-full object-cover"
                        loading="lazy" width="600" height="750"
                    />
                </div>
                {/* Right Text Column */}
                <div className="bg-white p-8 md:p-12 flex flex-col">
                    <div className="text-sm text-brand-text-gray space-y-3 leading-relaxed flex-grow">
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP1') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP2') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP3') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP4') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP5') }} />
                        <p dangerouslySetInnerHTML={{ __html: t('homeAboutP6') }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;