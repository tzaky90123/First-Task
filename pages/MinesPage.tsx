

import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import HeroSection from '../components/HeroSection';
import SmoothScrollLayout from '../components/SmoothScrollLayout';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';

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

const MinesPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <SmoothScrollLayout>
      <HeroSection />
      <FullScreenSection className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold font-sans text-brand-primary mb-4">{t('minesApproachTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('minesApproachText')}</p>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=15" alt="Opération minière" className="rounded-lg shadow-xl"/>
            </div>
        </div>
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('minesProjectsTitle')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard image="https://picsum.photos/600/400?random=16" title={t('minesProject1Title')} description={t('minesProject1Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=17" title={t('minesProject2Title')} description={t('minesProject2Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=18" title={t('minesProject3Title')} description={t('minesProject3Desc')} />
              </div>
          </div>
      </FullScreenSection>
      <Footer />
    </SmoothScrollLayout>
  );
};

export default MinesPage;