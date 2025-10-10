
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import MainNavigation from '../components/MainNavigation';

const slides = [
  {
    img: 'https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide1Title',
    subtitle: 'heroSlide1Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide2Title',
    subtitle: 'heroSlide2Subtitle',
  },
  {
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'heroSlide3Title',
    subtitle: 'heroSlide3Subtitle',
  },
];

const HomePage: React.FC = () => {
  const { t } = useLocalization();
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    startAutoSlide(); // Reset timer on manual navigation
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };
  
  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

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
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="relative container mx-auto px-5 lg:px-20 h-full flex flex-col justify-center items-center text-center text-white z-20">
          <div key={currentSlide} className="w-full">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in-up">{t(slides[currentSlide].title)}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">{t(slides[currentSlide].subtitle)}</p>
          </div>
          <Link
            to="/promotion-immobiliere"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-brand-primary transition duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark animate-fade-in-up animation-delay-600"
          >
            {t('homeCta')}
          </Link>

           {/* Pagination Dots */}
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
                    }`}
                />
            ))}
          </div>

          <div className="absolute bottom-24 w-full">
            <MainNavigation />
          </div>

        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      <ExpertiseSection />
      <AboutSection />
      <MasterpiecesSection />
      <ProjectsSection />
      <ValuesSection />
      <RseSection />
      <NewsSection />
      <ContactCtaSection />
    </div>
  );
};

const LogoIcon = () => (
    <svg width="40" height="35" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-10 w-auto -mt-1 mr-3" aria-hidden="true">
        <g>
            <path d="M30.5 39.5L47 6L14 6L30.5 39.5Z" fill="#003366" />
            <path d="M17.5 33L31 6H4L17.5 33Z" fill="#FF4500" />
        </g>
    </svg>
);

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif text-brand-primary mb-2 uppercase flex items-center justify-center flex-wrap">
                        <LogoIcon />
                        <span>QUI SOMMES-NOUS</span>
                    </h2>
                    <p className="text-md text-gray-600 italic">
                        DEPUIS PLUS DE 35 ANS À VOTRE SERVICE
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <img 
                            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Ingénieurs SOCABEG planifiant un projet" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                    <div className="text-brand-text text-base md:text-lg leading-relaxed">
                        <p className="mb-6"><strong>SOCABEG s’investit aux côtés des Sénégalais pour réaliser leurs projets immobiliers.</strong></p>
                        <p className="mb-6">Fondée en 1986 par M. Mamoune SAMB, SOCABEG s'est imposée comme un acteur majeur reconnu dans le domaine de la construction et de la promotion immobilière au Sénégal. Le Groupe SOCABEG exerce aujourd'hui ses activités dans les domaines du BTP, de la Promotion immobilière et le secteur minier.</p>
                        <p className="mb-6">Elle dispose d'une très grande notoriété dans le paysage des affaires au Sénégal rassemblant les compétences de constructeur bien équipé et aménageur de site avec un très riche savoir-faire acquis dans l'habitat social. SOCABEG a une forte maîtrise de la chaîne de valeur en tant que développeur-constructeur avec une offre verticalisée et une gamme de produits en adéquation avec le marché immobilier sénégalais.</p>
                        <p className="mb-6">L'entreprise a achevé avec succès de nombreux projets de logements sociaux, de lotissements de terrains à bâtir, la construction de bureaux administratifs, complexes résidentiels, de bâtiments publics pour le compte d'institutions publiques, de coopératives d'habitats et de clients privés. Ces réalisations ont renforcé notre réputation.</p>
                        <p className="mb-6">Elle promeut la réalisation et l'aménagement d'écoquartiers résidentiels et de loisirs, de bâtiments vertueux pour une meilleure qualité de vie, dans un environnement éco-responsable au bénéfice de ses clients. Elle reste ancrée dans ses valeurs fondamentales : l'intégrité, la recherche de la qualité, l'innovation et la responsabilité sociale, qui guident toutes ses activités et décisions.</p>
                        <p>En proposant des projets immobiliers novateurs et de qualité, accessibles à un coût raisonnable, elle vise à allier excellence de construction et accessibilité financière. SOCABEG a joué un rôle clé dans l'essor de nouvelles zones urbaines en construisant des milliers de logements sociaux, répondant ainsi aux besoins d'une large part de la population sénégalaise aux revenus variés.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MasterpiecesSection: React.FC = () => {
    const { t } = useLocalization();
    const [currentIndex, setCurrentIndex] = useState(0);

    const masterpieces = [
        {
            src: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            titleKey: 'masterpieceBtpTitle',
            descriptionKey: 'masterpieceBtpDesc'
        },
        {
            src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            titleKey: 'masterpieceReTitle',
            descriptionKey: 'masterpieceReDesc'
        },
        {
            src: 'https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            titleKey: 'masterpieceMinesTitle',
            descriptionKey: 'masterpieceMinesDesc'
        }
    ];

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? masterpieces.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === masterpieces.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif text-brand-primary mb-2 uppercase">
                       {t('homeMasterpiecesTitle')}
                    </h2>
                    <p className="text-md text-gray-600 italic">
                        {t('homeMasterpiecesSubtitle')}
                    </p>
                </div>

                {/* Desktop View: 3-column grid */}
                <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {masterpieces.map((masterpiece, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg h-[450px]">
                            <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                             <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold">{t(masterpiece.titleKey)}</h3>
                                <p className="text-sm opacity-90">{t(masterpiece.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Slider */}
                <div className="md:hidden relative w-full max-w-5xl mx-auto">
                    <div className="overflow-hidden relative rounded-lg shadow-xl">
                        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {masterpieces.map((masterpiece, index) => (
                                <div key={index} className="min-w-full h-[500px] relative">
                                    <img src={masterpiece.src} alt={t(masterpiece.titleKey)} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                                        <h3 className="text-2xl font-bold">{t(masterpiece.titleKey)}</h3>
                                        <p className="text-sm">{t(masterpiece.descriptionKey)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Previous image">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    {/* Right Arrow */}
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white transition" aria-label="Next image">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};


const ExpertiseLogoIcon = () => (
    <svg width="40" height="35" viewBox="0 0 135 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-10 w-auto -mt-1 mr-3" aria-hidden="true">
        <defs>
            <linearGradient id="red-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#FF6B33" />
                <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
            <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FF4500" floodOpacity="0.75" />
            </filter>
            <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#003366" floodOpacity="0.75" />
            </filter>
        </defs>
        <g>
            <path d="M90 5 L50 95 L130 95 Z" fill="#003366" style={{ filter: 'url(#blue-glow)' }}/>
            <path d="M55 15 L5 85 L95 85 Z" fill="url(#red-gradient)" style={{ filter: 'url(#red-glow)' }} />
        </g>
    </svg>
);

const ExpertiseSection: React.FC = () => {
    const { t } = useLocalization();
    return (
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-4 flex items-center justify-center">
            <ExpertiseLogoIcon />
            <span>{t('homeServicesTitle')}</span>
          </h2>
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
      <div className="container mx-auto px-5 lg:px-20 text-center">
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
            <div className="container mx-auto px-5 lg:px-20 text-center">
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
            <div className="container mx-auto px-5 lg:px-20">
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
        <div className="container mx-auto px-5 lg:px-20 text-center">
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
            <div className="container mx-auto px-5 lg:px-20 py-20 text-center">
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