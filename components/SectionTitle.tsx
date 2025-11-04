import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import SectionLogoIcon from './SectionLogoIcon';

interface SectionTitleProps {
  titleKey: string;
  subtitleKey?: string;
  descriptionKey?: string;
  icon?: boolean;
  variant?: 'light' | 'dark';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ titleKey, subtitleKey, descriptionKey, icon = false, variant = 'dark' }) => {
    const { t } = useLocalization();
    const titleColor = variant === 'light' ? 'text-white' : 'text-brand-navy';
    const subtitleColor = variant === 'light' ? 'text-brand-secondary' : 'text-brand-primary';
    const descriptionColor = variant === 'light' ? 'text-gray-200' : 'text-gray-600';

    return (
        <div className="text-center mb-12 md:mb-16">
            {subtitleKey && (
                <h3 className={`text-sm font-bold uppercase tracking-widest flex items-center justify-center mb-2 ${subtitleColor}`}>
                    {icon && <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />}
                    <span>{t(subtitleKey)}</span>
                </h3>
            )}
            <h2 className={`text-3xl font-bold font-sans ${titleColor}`}>
                {t(titleKey)}
            </h2>
            {descriptionKey && (
                <p className={`mt-4 text-lg max-w-3xl mx-auto ${descriptionColor}`}>
                    {t(descriptionKey)}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;