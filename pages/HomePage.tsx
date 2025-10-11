
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
      <StatisticsSection />
      <WhyChooseUsSection />
      <ProgramSection />
      <TestimonialsSection />
      <PartnerSection />
      <ContactCtaSection />
    </div>
  );
};

// Unified logo icon based on user-provided image
const SectionLogoIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 135 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className || "inline-block h-10 w-auto -mt-1 mr-3"} aria-hidden="true">
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


const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>QUI SOMMES-NOUS</span>
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        DEPUIS PLUS DE 35 ANS À VOTRE SERVICE
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                        <img 
                            src="https://socabeg.com/images/socabeg.jpg" 
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
            src: 'https://socabeg.com/images/btp.png',
            titleKey: 'masterpieceBtpTitle',
            descriptionKey: 'masterpieceBtpDesc'
        },
        {
            src: 'https://socabeg.com/images/mdlac2.jpg',
            titleKey: 'masterpieceReTitle',
            descriptionKey: 'masterpieceReDesc'
        },
        {
            src: 'https://socabeg.com/images/mines.png',
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
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                       <SectionLogoIcon className="inline-block h-5 w-auto mr-2"/>
                       <span>{t('homeMasterpiecesTitle')}</span>
                    </h3>
                    <p className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
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

const StatisticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const StatisticsSection: React.FC = () => {
    const stats = [
        { value: "+ 2,000", label: "Parcelles viabilisées et terrains nus" },
        { value: "02", label: "Filiales: Keur Invest & SOCABEG Mining" },
        { value: "+ 150", label: "Collaborateurs" },
        { value: "+ 200 km", label: "Voiries et réseaux divers réalisés" },
        { value: "+ 100 ha", label: "D'assiettes foncières" }
    ];

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <StatisticsIcon />
                        <span>CHIFFRES-CLÉS</span>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        NOTRE IMPACT
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <p className="text-4xl lg:text-5xl font-bold text-brand-secondary font-serif">{stat.value}</p>
                            <p className="text-brand-text mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUsSection: React.FC = () => {
    const values = [
        {
            title: "Expérience reconnue",
            description: "Plus de 35 ans d’activité dans le BTP et l’immobilier au Sénégal, avec des milliers de logements livrés."
        },
        {
            title: "Maîtrise des projets",
            description: "Une expertise complète du cycle de construction : études, réalisation, viabilisation, commercialisation."
        },
        {
            title: "Responsabilité durable",
            description: "Techniques modernes à faible empreinte carbone et formation de la main-d’œuvre locale."
        },
        {
            title: "Innovation technique",
            description: "BIM, ERP BTP, Geoplast® coffrages, usine de préfabrication… SOCABEG investit dans la modernité."
        },
        {
            title: "Projets emblématiques",
            description: "Tivaouane Peulh, HLM Castor, Darou Salam, Cité IPRES… des projets qui transforment la ville."
        },
        {
            title: "Confiance et proximité",
            description: "Entreprise 100 % sénégalaise à taille humaine, proche de ses clients et de leurs besoins."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>POURQUOI NOUS CHOISIR</span>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        NOTRE VALEUR AJOUTÉE
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-brand-light p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <h3 className="text-xl font-bold text-brand-primary mb-3 font-serif">{value.title}</h3>
                            <p className="text-brand-text text-sm leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const IconBed = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const IconBath = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>;
const IconArea = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;
const IconLocation = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const ProgramSection: React.FC = () => {
    const programs = [
        {
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Les Résidences BALENA – Almadies',
            type: 'Villa R+1 – 500 m²',
            details: [
                { icon: <IconBed />, text: '5 Ch.' },
                { icon: <IconBath />, text: '4 Sdb' },
                { icon: <IconArea />, text: '500 m²' },
                { icon: <IconLocation />, text: 'ALMADIES' },
            ],
            description: 'Situé dans le quartier huppé des Almadies, ce programme immobilier d\'exception allie luxe et durabilité. Les villas spac...',
            price: 'PRIX : NOUS CONSULTER',
        },
        {
            image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: '105 Magasins à vendre – HLM 5',
            type: 'Magasin – 12 m²',
            details: [
                { icon: <IconBath />, text: '1 Sdb' },
                { icon: <IconArea />, text: '12 m²' },
                { icon: <IconLocation />, text: 'HLM 5' },
            ],
            description: 'Idéalement situés dans le quartier dynamique de HLM 5, ces 105 locaux commerciaux de 12 m² chacun représentent une oppor...',
            price: 'À PARTIR DE 15 000 000 FCFA',
        },
        {
            image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Logements F3 – Niague Lac Rose',
            type: 'Apartment – 75 m²',
            details: [
                { icon: <IconBed />, text: '2 Ch.' },
                { icon: <IconBath />, text: '1 Sdb' },
                { icon: <IconArea />, text: '75 m²' },
                { icon: <IconLocation />, text: 'NIAGUE' },
            ],
            description: 'À quelques minutes du célèbre Lac Rose, ce programme de logements F3 allie confort et authenticité. Les appartements de...',
            price: 'À PARTIR DE 17 000 000 FCFA',
        },
    ];

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>NOS RÉALISATIONS</span>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        PROGRAMMES À LA UNE
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <img src={program.image} alt={program.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-brand-primary font-serif">{program.title}</h3>
                                <p className="text-xs text-gray-500 mb-3">{program.type}</p>
                                
                                <div className="flex flex-wrap items-center text-xs text-gray-600 mb-4 border-y py-2">
                                    {program.details.map((detail, i) => (
                                        <span key={i} className="flex items-center mr-4 mb-1">{detail.icon}{detail.text}</span>
                                    ))}
                                </div>
                                
                                <p className="text-brand-text text-sm leading-relaxed mb-4 flex-grow">{program.description}</p>

                                <div className="mt-auto">
                                    <p className="font-semibold text-brand-secondary text-sm mb-4">{program.price}</p>
                                    <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 text-sm">
                                        <Link to="#" className="w-full text-center px-4 py-2 rounded-full bg-brand-primary text-white font-semibold hover:bg-opacity-90 transition">
                                            View the details
                                        </Link>
                                        <Link to="/contact" className="w-full text-center px-4 py-2 rounded-full bg-gray-200 text-brand-primary font-semibold hover:bg-gray-300 transition">
                                            Nous Contacter
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        { quote: "SOCABEG nous a accompagnés du début à la fin du projet avec un professionnalisme exceptionnel. Leur équipe a su allier qualité, rigueur et respect des délais.", name: "Mamadou Diallo" },
        { quote: "Une expérience très positive, des solutions innovantes et un suivi de chantier exemplaire. SOCABEG est un partenaire de confiance.", name: "Fatou Ndiaye, Architecte" },
        { quote: "Leur maîtrise du secteur immobilier au Sénégal est incontestable. Ils ont su nous guider pour un investissement sûr et rentable.", name: "Ibrahima Sow, Investisseur" },
        { quote: "La qualité de construction des résidences est remarquable. Nous sommes ravis de notre nouvelle maison, qui a dépassé toutes nos attentes.", name: "Aïssatou Gueye" },
        { quote: "En tant que coopérative d'habitat, nous avons trouvé en SOCABEG un partenaire fiable et à l'écoute, qui a su concrétiser le rêve de nos membres.", name: "Ousmane Camara, Président Coopérative" },
        { quote: "Leur engagement pour le développement durable et l'utilisation de techniques modernes nous ont convaincus. Un vrai bâtisseur d'avenir.", name: "Mariama Ba" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, testimonials.length, resetTimeout]);

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>TÉMOIGNAGES</span>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        ILS NOUS FONT CONFIANCE
                    </h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="bg-brand-light p-8 md:p-12 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
                                        <svg className="w-10 h-10 text-brand-secondary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                                        <blockquote className="text-lg text-brand-text italic leading-relaxed mb-6">
                                            “{testimonial.quote}”
                                        </blockquote>
                                        <cite className="not-italic font-semibold text-brand-primary font-serif">
                                            — {testimonial.name}
                                        </cite>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 text-brand-primary bg-white/50 hover:bg-white rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label="Previous testimonial">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 text-brand-primary bg-white/50 hover:bg-white rounded-full p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-secondary transition" aria-label="Next testimonial">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

const PartnerSection: React.FC = () => {
    const partners = [
        { name: 'BHS', src: 'https://storage.googleapis.com/aistudio-hosting/generations/009a96e9-e31d-4eb4-b6bd-1e96f1311029.png' },
        { name: 'Geoplast', src: 'https://storage.googleapis.com/aistudio-hosting/generations/1179ab8b-1e64-469b-9807-ca9069d3f9b2.png' },
        { name: 'IPRES', src: 'https://storage.googleapis.com/aistudio-hosting/generations/6ac0c1d6-419b-449e-b2d2-8b010f443b87.png' },
        { name: 'SAR', src: 'https://storage.googleapis.com/aistudio-hosting/generations/07474a00-3444-4ebc-8064-9b2f69e63496.png' },
        { name: 'SGS', src: 'https://storage.googleapis.com/aistudio-hosting/generations/4a0364c7-c79b-40f4-8848-0d12224df378.png' },
        { name: 'SAIH', src: 'https://storage.googleapis.com/aistudio-hosting/generations/01eb65ad-58ca-4303-9e5c-c6c7ac019c01.png' },
        { name: 'République du Sénégal', src: 'https://storage.googleapis.com/aistudio-hosting/generations/20563459-7157-410a-b30f-b44c0423985d.png' },
        { name: 'SNHLM', src: 'https://storage.googleapis.com/aistudio-hosting/generations/d935492d-5369-4e01-9f93-0e86b461f0e1.png' },
        { name: 'Sonatel', src: 'https://storage.googleapis.com/aistudio-hosting/generations/a4de33f6-4148-4e1b-b461-8250005d5d88.png' }
    ];

    const duplicatedPartners = [...partners, ...partners]; // Duplicate for seamless loop

    return (
        <section className="py-20 bg-brand-light">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest flex items-center justify-center mb-2">
                        <SectionLogoIcon className="inline-block h-5 w-auto mr-2" />
                        <span>NOS PARTENAIRES</span>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark">
                        ENSEMBLE, NOUS CRÉONS DES OPPORTUNITÉS
                    </h2>
                </div>
                <div className="logo-scroller">
                    <div className="logo-scroller-inner">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={index} className="partner-logo flex-shrink-0 mx-10 flex items-center justify-center" style={{ width: '150px' }}>
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    title={partner.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExpertiseSection: React.FC = () => {
    const { t } = useLocalization();
    return (
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-5 lg:px-20 text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-primary mb-4">
            {t('homeServicesTitle')}
          </h2>
          <p className="text-base text-brand-text max-w-3xl mx-auto mb-16">Au cœur de la transformation du Sénégal, SOCABEG déploie son savoir-faire sur trois pôles stratégiques.</p>
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

const ContactCtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="bg-brand-primary text-white">
            <div className="container mx-auto px-5 lg:px-20 py-20 text-center">
                <h2 className="text-4xl font-serif font-bold mb-4">{t('homeContactCtaTitle')}</h2>
                <p className="text-base max-w-2xl mx-auto mb-8">{t('homeContactCtaText')}</p>
                <Link
                    to="/contact"
                    className="bg-brand-secondary text-brand-primary font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition duration-300 text-base focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 focus:ring-offset-brand-primary"
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
