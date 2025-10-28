

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

const BtpPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <SmoothScrollLayout>
      <HeroSection />
      <FullScreenSection className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold font-sans text-brand-primary mb-4">{t('btpExpertiseTitle')}</h2>
              <p className="text-lg text-brand-text leading-relaxed">{t('btpExpertiseText')}</p>
            </div>
            <div>
              <img src="https://picsum.photos/800/600?random=5" alt="Chantier de construction" className="rounded-lg shadow-xl"/>
            </div>
        </div>
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold font-sans text-brand-primary mb-12 text-center">{t('btpProjectsTitle')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard image="https://picsum.photos/600/400?random=6" title={t('btpProject1Title')} description={t('btpProject1Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=7" title={t('btpProject2Title')} description={t('btpProject2Desc')} />
                  <ProjectCard image="https://picsum.photos/600/400?random=8" title={t('btpProject3Title')} description={t('btpProject3Desc')} />
              </div>
          </div>
      </FullScreenSection>
      <Footer />
    </SmoothScrollLayout>
  );
};

export default BtpPage;