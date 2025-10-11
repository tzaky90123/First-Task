import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

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
              <h2 className="text-3xl font-bold font-serif text-brand-primary mb-4">{t('aboutMissionTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('aboutMissionText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12">{t('aboutValuesTitle')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(valueKey => (
              <div key={valueKey} className="bg-white p-8 rounded-lg shadow-md">
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