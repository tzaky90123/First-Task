
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

// --- Icons ---
const IconExplore = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM14.25 14.25L19.5 19.5" /></svg>;
const IconExtract = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" /></svg>;
const IconProcess = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691V5.25a2.25 2.25 0 00-2.25-2.25h-4.5a2.25 2.25 0 00-2.25 2.25v4.992m11.667 0l-3.181 3.183a8.25 8.25 0 01-11.667 0l-3.181-3.183" /></svg>;
const IconLogistics = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.25 6h13.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H5.25A1.125 1.125 0 014.125 9v-1.5c0-.621.504-1.125 1.125-1.125z" /></svg>;
const IconSafety = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const IconSustainability = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.682-.25 3.934-.712M12 21c-1.356 0-2.682-.25-3.934-.712m0 0A12.005 12.005 0 0112 12c1.325 0 2.618.196 3.826.565m0 0a8.956 8.956 0 01-2.223 2.223M15.826 12.565a8.956 8.956 0 012.223 2.223m0 0A9 9 0 105.174 8.174M15.826 12.565A8.956 8.956 0 0118 14.5m-8.174-6.326A8.956 8.956 0 016 9.5m0 0a8.956 8.956 0 01-2.223-2.223M6 9.5A8.956 8.956 0 013.777 7.277m0 0A9 9 0 1018.826 15.826" /></svg>;
const IconReclamation = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>;

// --- Page Sections ---
const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-navy mb-6">{t('minesIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('minesIntroText').replace('stimulant ainsi la croissance économique', '<strong>stimulant ainsi la croissance économique</strong>') }} />
                    <p className="text-lg text-brand-text-gray leading-relaxed">Nous nous engageons à une exploitation qui respecte à la fois <strong>l'environnement et les communautés locales</strong>, en créant une valeur durable pour le Sénégal.</p>
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Modern construction site" className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'minesService1Title', descKey: 'minesService1Desc', icon: <IconExplore /> },
        { titleKey: 'minesService2Title', descKey: 'minesService2Desc', icon: <IconExtract /> },
        { titleKey: 'minesService3Title', descKey: 'minesService3Desc', icon: <IconProcess /> },
        { titleKey: 'minesService4Title', descKey: 'minesService4Desc', icon: <IconLogistics /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="inline-block text-3xl md:text-4xl font-bold text-brand-navy relative">
                    {t('minesServicesTitle')}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-brand-yellow"></span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="group bg-white p-8 rounded-xl shadow-soft text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out both` }}>
                        <div className="text-brand-yellow mx-auto mb-6 w-16 h-16 p-3 flex items-center justify-center rounded-full bg-brand-navy transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-navy">{service.icon}</div>
                        <h3 className="text-xl font-bold text-brand-navy mb-3 text-center">{t(service.titleKey)}</h3>
                        <p className="text-brand-text-gray text-sm text-center flex-grow">{t(service.descKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: "https://images.pexels.com/photos/2555627/pexels-photo-2555627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject1Title', descKey: 'minesProject1Desc', tag: 'Or' },
        { image: "https://images.pexels.com/photos/2533084/pexels-photo-2533084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject2Title', descKey: 'minesProject2Desc', tag: 'Phosphates' },
        { image: "https://images.pexels.com/photos/12971169/pexels-photo-12971169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'minesProject3Title', descKey: 'minesProject3Desc', tag: 'Zircon' },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="inline-block text-3xl md:text-4xl font-bold text-brand-navy relative">
                    {t('minesProjectsTitle')}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-brand-yellow"></span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out both` }}>
                        <div className="relative overflow-hidden">
                            <img src={p.image} alt={t(p.titleKey)} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width="400" height="240" />
                            <div className="absolute top-4 right-4 bg-brand-yellow text-brand-navy text-xs font-bold uppercase px-3 py-1 rounded-full">{p.tag}</div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-yellow transition-colors duration-300">{t(p.titleKey)}</h3>
                            <p className="text-brand-text-gray text-sm flex-grow">{t(p.descKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SafetyEnvironmentSection: React.FC = () => {
    const { t } = useLocalization();
    const commitments = [
        { titleKey: 'minesSafetyPoint1Title', descKey: 'minesSafetyPoint1Desc', icon: <IconSafety /> },
        { titleKey: 'minesSafetyPoint2Title', descKey: 'minesSafetyPoint2Desc', icon: <IconSustainability /> },
        { titleKey: 'minesSafetyPoint3Title', descKey: 'minesSafetyPoint3Desc', icon: <IconReclamation /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="animate-fade-in-up">
                    <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Environmental reclamation" className="rounded-xl shadow-2xl w-full" loading="lazy" width="576" height="384"/>
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-navy mb-4">{t('minesSafetyTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-8">{t('minesSafetyText')}</p>
                    <div className="space-y-8">
                        {commitments.map(item => (
                            <div key={item.titleKey} className="flex items-start group">
                                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white group-hover:scale-110">{item.icon}</div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-bold text-brand-navy">{t(item.titleKey)}</h3>
                                    <p className="text-brand-text-gray mt-1 leading-relaxed">{t(item.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TechnologySection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="relative container mx-auto px-6 py-20 text-center text-white rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5696144/pexels-photo-5696144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}></div>
            <div className="absolute inset-0 bg-brand-navy opacity-80 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">{t('minesTechTitle')}</h2>
                <p className="text-lg leading-relaxed text-gray-200">{t('minesTechText')}</p>
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 max-w-3xl text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-sans text-brand-navy mb-12">{t('minesTestimonialsTitle')}</h2>
             <div className="bg-white p-10 rounded-xl shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6zM29.333 8h-5.333v8h5.333c0-4.418 3.582-8 8-8v-5.333c-7.364 0-13.333 5.97-13.333 13.333v10.667h13.333v-10.667h-8v-6z"></path></svg>
                </div>
                <blockquote className="text-xl text-brand-text-gray italic leading-relaxed mt-8 mb-6">“{t('minesTestimonial1Quote')}”</blockquote>
                <cite className="not-italic font-semibold text-brand-navy font-sans">— {t('minesTestimonial1Name')}</cite>
            </div>
        </div>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 text-center">
            <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-sans text-brand-navy mb-4">{t('minesCtaTitle')}</h2>
                <p className="text-lg text-brand-text-gray max-w-2xl mx-auto mb-8">{t('minesCtaText')}</p>
                <Link to="/contact" className="bg-brand-yellow text-brand-navy text-lg font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('minesCtaButton')}
                </Link>
            </div>
        </div>
    );
};

const MinesPage: React.FC = () => {
  const { t } = useLocalization();
  const minesSlides = [
    {
      img: 'https://images.pexels.com/photos/2623667/pexels-photo-2623667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesHeroTitle',
      subtitle: 'minesHeroSubtitle',
    },
    {
      img: 'https://images.pexels.com/photos/273669/pexels-photo-273669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesServicesTitle',
      subtitle: 'minesHeroServicesSubtitle',
    },
    {
      img: 'https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'minesProjectsTitle',
      subtitle: 'minesHeroProjectsSubtitle',
    },
  ];

  return (
    <>
      <HeroSection slides={minesSlides} />
      <section className="bg-white py-20 md:py-28"><IntroductionSection /></section>
      <section className="blueprint-bg py-20 md:py-28"><ServicesSection /></section>
      <section className="bg-white py-20 md:py-28"><ProjectsSection /></section>
      <section className="bg-gray-50 py-20 md:py-28"><SafetyEnvironmentSection /></section>
      <section className="bg-white py-20 md:py-28"><TechnologySection /></section>
      <section className="blueprint-bg py-20 md:py-28"><TestimonialsSection /></section>
      <section className="grid-bg py-20 md:py-28"><CtaSection /></section>
      <Footer />
    </>
  );
};

export default MinesPage;
