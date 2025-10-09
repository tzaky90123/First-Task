import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

const BtpPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div>
      <PageHero
        title={t('btpHeroTitle')}
        subtitle={t('btpHeroSubtitle')}
        imageUrl="https://picsum.photos/1920/1080?random=4"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold font-serif text-brand-primary mb-4">{t('btpExpertiseTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('btpExpertiseText')}</p>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=5" alt="Chantier de construction" className="rounded-lg shadow-xl"/>
            </div>
        </div>
      </section>
      <section className="py-20 bg-brand-light">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12 text-center">Nos Projets BTP</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard image="https://picsum.photos/600/400?random=6" title="Pont de l'Avenir" description="Un ouvrage d'art majeur reliant deux régions clés." />
                  <ProjectCard image="https://picsum.photos/600/400?random=7" title="Hôpital Régional de Kaolack" description="Infrastructure sanitaire moderne pour des milliers de citoyens." />
                  <ProjectCard image="https://picsum.photos/600/400?random=8" title="Autoroute Dakar-Diamniadio" description="Contribution à un axe vital pour l'économie nationale." />
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

export default BtpPage;