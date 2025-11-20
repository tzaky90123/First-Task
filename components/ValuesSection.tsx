import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import SectionTitle from './SectionTitle';

const ValuesSection: React.FC = () => {
    const { t } = useLocalization();
    const values = [
        { icon: 'https://cdn-icons-png.flaticon.com/512/70/70535.png', titleKey: 'value1Title', descKey: 'value1Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/807/807303.png', titleKey: 'value2Title', descKey: 'value2Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/5631/5631194.png', titleKey: 'value3Title', descKey: 'value3Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/60/60473.png', titleKey: 'value4Title', descKey: 'value4Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', titleKey: 'value5Title', descKey: 'value5Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/33/33308.png', titleKey: 'value6Title', descKey: 'value6Desc' },
    ];

    return (
        <div className="container mx-auto px-5 lg:px-20">
            <SectionTitle subtitleKey="whyChooseUsSectionTitle" titleKey="whyChooseUsSectionHeadline" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-fade">
                {values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-soft text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <img src={value.icon} alt={t(value.titleKey)} className="h-12 w-12 mb-6" loading="lazy" width="48" height="48" />
                        <h3 className="text-xl font-medium text-brand-primary mb-3 font-sans">{t(value.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm leading-relaxed">{t(value.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;