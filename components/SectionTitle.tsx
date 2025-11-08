import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import SectionLogoIcon from './SectionLogoIcon';

interface SectionTitleProps {
  titleKey?: string;
  subtitleKey?: string;
  descriptionKey?: string;
  variant?: 'light' | 'dark';
  titleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitleKey, titleKey, descriptionKey, variant = 'dark', titleClassName }) => {
    const { t } = useLocalization();
    
    // Define colors based on variant
    const titleColor = variant === 'light' ? 'text-white' : 'text-brand-navy';
    const subtitleColor = variant === 'light' ? 'text-gray-200' : 'text-brand-primary';
    const descriptionColor = variant === 'light' ? 'text-gray-200' : 'text-gray-600';

    // At least one key should be present
    if (!titleKey && !subtitleKey && !descriptionKey) {
        return null;
    }

    return (
        <div className="text-center mb-12 md:mb-16">
            {subtitleKey && (
                <div className="flex items-center justify-center mb-4">
                    <SectionLogoIcon className="h-5 w-auto mr-3" />
                    <h3 className={`text-sm font-bold ${subtitleColor} uppercase tracking-widest`}>
                        {t(subtitleKey)}
                    </h3>
                </div>
            )}
            
            {titleKey && (
                <h2 className={`text-2xl lg:text-3xl font-sans ${titleColor} ${titleClassName || 'font-black'}`}>
                    {t(titleKey)}
                </h2>
            )}

            {descriptionKey && (
                <p className={`mt-4 text-base max-w-3xl mx-auto ${descriptionColor}`}>
                    {t(descriptionKey)}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
