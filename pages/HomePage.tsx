import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import MainNavigation from '../components/MainNavigation';

const slides = [
  {
    img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'homeHeroTitle1',
    subtitle: 'homeHeroSubtitle1',
  },
  {
    img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'homeHeroTitle2',
    subtitle: 'homeHeroSubtitle2',
  },
  {
    img: 'https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'homeHeroTitle3',
    subtitle: 'homeHeroSubtitle3',
  },
];

const HomePage: React.FC = () => {
  const { t } = useLocalization();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
            <div
                key={index}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${slide.img})`, opacity: index === currentSlide ? 1 : 0 }}
            />
        ))}
        <div className="absolute inset-0 bg-brand-dark opacity-50 z-10"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white z-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in-up">{t(slides[currentSlide].title)}</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in-up animation-delay-300">{t(slides[currentSlide].subtitle)}</p>
          <Link
            to="/promotion-immobiliere"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-brand-primary transition duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark animate-fade-in-up animation-delay-600"
          >
            {t('homeCta')}
          </Link>

          <div className="absolute bottom-24 w-full animate-fade-in-up animation-delay-800">
            <MainNavigation />
          </div>

        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      <ExpertiseSection />
      <ProjectsSection />
      <ValuesSection />
      <RseSection />
      <NewsSection />
      <ContactCtaSection />
    </div>
  );
};


const ExpertiseSection: React.FC = () => {
    const { t } = useLocalization();
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-4">{t('homeServicesTitle')}</h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto mb-16">Au cœur de la transformation du Sénégal, SOCABEG déploie son savoir-faire sur trois pôles stratégiques.</p>
          <div className="grid md:grid-cols-3 gap-8">
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
    );
}

const ProjectsSection: React.FC = () => {
  const { t } = useLocalization();
  const projects = [
    { image: 'https://picsum.photos/600/400?random=11', title: "Cité des affaires de Diamniadio", category: "Promotion Immobilière"},
    { image: 'https://picsum.photos/600/400?random=6', title: "Pont de l'Avenir", category: "BTP"},
    { image: 'https://picsum.photos/600/400?random=12', title: "Résidences Teranga", category: "Promotion Immobilière"},
    { image: 'https://picsum.photos/600/400?random=16', title: "Mine d'Or de Sabodala", category: "Mines"},
  ];
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12">{t('homeProjectsTitle')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(p => (
            <div key={p.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                  <p className="text-sm text-brand-secondary font-semibold uppercase">{p.category}</p>
                  <h3 className="text-xl font-bold text-brand-primary mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ValuesSection: React.FC = () => {
    const { t } = useLocalization();
    const values = ['valueExcellence', 'valueIntegrity', 'valueSustainability', 'valueCommunity'];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12">{t('homeValuesTitle')}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map(valueKey => (
                        <div key={valueKey} className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-brand-primary">{t(valueKey)}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RseSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="https://picsum.photos/800/600?random=20" alt="Engagement communautaire" className="rounded-lg shadow-xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-serif text-brand-primary mb-4">{t('homeRseTitle')}</h2>
                        <p className="text-lg text-brand-text leading-relaxed mb-6">{t('homeRseText')}</p>
                        <Link to="/a-propos" className="font-semibold text-brand-secondary hover:underline text-lg">
                            {t('homeRseCta')} &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

const NewsSection: React.FC = () => {
    const { t } = useLocalization();
    const newsItems = [
      { image: 'https://picsum.photos/600/400?random=22', title: "SOCABEG lance un nouveau programme de logements sociaux", date: "15 Octobre 2024"},
      { image: 'https://picsum.photos/600/400?random=23', title: "Certification ISO 9001 obtenue pour nos opérations BTP", date: "02 Septembre 2024"},
      { image: 'https://picsum.photos/600/400?random=24', title: "Partenariat pour la formation des jeunes aux métiers du BTP", date: "28 Juillet 2024"},
    ];
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-12">{t('homeNewsTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map(item => (
              <div key={item.title} className="bg-white rounded-lg shadow-lg overflow-hidden text-left">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <h3 className="text-xl font-bold text-brand-primary mb-4 h-24">{item.title}</h3>
                      <Link to="#" className="font-semibold text-brand-secondary hover:underline">
                          Lire la suite
                      </Link>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const ContactCtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="bg-brand-primary text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-serif font-bold mb-4">{t('homeContactCtaTitle')}</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">{t('homeContactCtaText')}</p>
                <Link
                    to="/contact"
                    className="bg-brand-secondary text-brand-primary font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 focus:ring-offset-brand-primary"
                >
                    {t('homeContactCtaButton')}
                </Link>
            </div>
        </section>
    );
};

// --- Helper Components ---

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo }) => {
    const { t } = useLocalization();
    return (
        <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-brand-secondary mx-auto mb-6 h-16 w-16 flex items-center justify-center">{icon}</div>
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-4">{title}</h3>
            <p className="text-brand-text mb-6">{description}</p>
            <Link to={linkTo} className="font-semibold text-brand-secondary hover:underline">
                {t('learnMore')}
            </Link>
        </div>
    )
}

const IconBuilding = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg>;
const IconHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const IconMine = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default HomePage;
