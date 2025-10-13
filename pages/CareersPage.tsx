import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

const CareersPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div>
      <PageHero
        title={t('careersHeroTitle')}
        subtitle={t('careersHeroSubtitle')}
        imageUrl="https://picsum.photos/1920/1080?random=19"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
              <img src="https://picsum.photos/800/600?random=20" alt="Équipe collaborant" className="rounded-lg shadow-xl"/>
            </div>
           <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold font-sans text-brand-primary mb-4">{t('careersCultureTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('careersCultureText')}</p>
            </div>
        </div>
      </section>
      <section className="py-20 bg-brand-light">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('careersOpenings')}</h2>
              <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                 <p className="text-center text-brand-text">{t('careersNoOpenings')}</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default CareersPage;