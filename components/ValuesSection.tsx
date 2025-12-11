
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import SectionTitle from './SectionTitle';

interface ValuesSectionProps {
    items?: { icon: string; titleKey: string; descKey: string }[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ items }) => {
    const { t } = useLocalization();
    const defaultValues = [
        { icon: 'https://cdn-icons-png.flaticon.com/512/70/70535.png', titleKey: 'value1Title', descKey: 'value1Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/807/807303.png', titleKey: 'value2Title', descKey: 'value2Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/5631/5631194.png', titleKey: 'value3Title', descKey: 'value3Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/60/60473.png', titleKey: 'value4Title', descKey: 'value4Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', titleKey: 'value5Title', descKey: 'value5Desc' },
        { icon: 'https://cdn-icons-png.flaticon.com/512/33/33308.png', titleKey: 'value6Title', descKey: 'value6Desc' },
    ];

    const displayValues = items || defaultValues;

    return (
        <div className="container mx-auto px-5 lg:px-20 scroll-element">
            <SectionTitle subtitleKey="whyChooseUsSectionTitle" titleKey="whyChooseUsSectionHeadline" />
            <div className={`grid grid-cols-1 md:grid-cols-2 ${displayValues.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-8`}>
                {displayValues.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-full border-t-4 border-transparent hover:border-brand-secondary">
                        <img src={value.icon} alt={t(value.titleKey)} className="h-12 w-12 mb-6 transition-transform duration-300 group-hover:scale-110" loading="lazy" width="48" height="48" />
                        <h3 className="text-xl font-bold text-brand-primary mb-3 font-sans">{t(value.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm leading-relaxed">{t(value.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;
