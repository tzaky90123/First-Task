
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

const RealEstatePage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div>
      <PageHero
        title={t('reHeroTitle')}
        subtitle={t('reHeroSubtitle')}
        imageUrl="https://picsum.photos/1920/1080?random=9"
      />
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
              <img src="https://picsum.photos/800/600?random=10" alt="Résidence de luxe" className="rounded-lg shadow-xl"/>
            </div>
           <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold font-serif text-brand-primary mb-4">{t('reVisionTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('reVisionText')}</p>
            </div>
        </div>
      </section>
       <section className="py-20 bg-brand-light">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12 text-center">{t('reProjectsTitle')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard image="https://picsum.photos/600/400?random=11" title={t('reProject1Title')} description={t('reProject1Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=12" title={t('reProject2Title')} description={t('reProject2Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=13" title={t('reProject3Title')} description={t('reProject3Desc')} />
              </div>
          </div>
      </section>
    </div>
  );
};

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description}) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-brand-primary mb-2">{title}</h3>
            <p className="text-brand-text">{description}</p>
        </div>
    </div>
)

export default RealEstatePage;
