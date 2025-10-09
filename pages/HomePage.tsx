import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import MainNavigation from '../components/MainNavigation';

const HomePage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            poster="https://picsum.photos/1920/1080?random=1"
        >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-brand-dark opacity-50 z-10"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white z-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in-up">{t('homeHeroTitle')}</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in-up animation-delay-300">{t('homeHeroSubtitle')}</p>
          <Link
            to="/btp"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-brand-primary transition duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark animate-fade-in-up animation-delay-600"
          >
            {t('homeCta')}
          </Link>

          {/* New Main Navigation - positioned absolutely near bottom */}
          <div className="absolute bottom-24 w-full animate-fade-in-up animation-delay-800">
            <MainNavigation />
          </div>

        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12">{t('homeServicesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ServiceCard
              icon={<IconBuilding />}
              title={t('homeServicesBtpTitle')}
              description={t('homeServicesBtpText')}
              linkTo="/btp"
            />
            <ServiceCard
              icon={<IconHome />}
              title={t('homeServicesReTitle')}
              description={t('homeServicesReText')}
              linkTo="/promotion-immobiliere"
            />
            <ServiceCard
              icon={<IconMine />}
              title={t('homeServicesMinesTitle')}
              description={t('homeServicesMinesText')}
              linkTo="/mines"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo }) => {
    return (
        <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="text-brand-secondary mx-auto mb-6 h-16 w-16 flex items-center justify-center">{icon}</div>
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">{title}</h3>
            <p className="text-brand-text mb-6">{description}</p>
            <Link to={linkTo} className="font-semibold text-brand-secondary hover:underline">
                En savoir plus
            </Link>
        </div>
    )
}

const IconBuilding = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>;
const IconHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const IconMine = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default HomePage;