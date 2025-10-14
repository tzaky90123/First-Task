import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-12 w-12 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  const values = ['valueExcellence', 'valueIntegrity', 'valueSustainability', 'valueCommunity'];

  return (
    <div>
      <PageHero
        title={t('aboutHeroTitle')}
        subtitle={t('aboutHeroSubtitle')}
        imageUrl="https://socabeg.com/images/socabeg.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://picsum.photos/800/600?random=3" alt="Équipe SOCABEG" className="rounded-lg shadow-xl"/>
            </div>
            <div>
              <h2 className="text-3xl font-bold font-sans text-brand-primary mb-4">{t('aboutMissionTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('aboutMissionText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-sans text-brand-primary mb-12">{t('aboutValuesTitle')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(valueKey => (
              <div key={valueKey} className="bg-white p-8 rounded-lg shadow-md">
                <AwardIcon />
                <h3 className="text-2xl font-semibold text-brand-secondary">{t(valueKey)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
