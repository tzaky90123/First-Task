
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FullScreenSection from '../components/FullScreenSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialsSection from '../components/TestimonialsSection';

// --- Page Sections ---

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'btpService1Title', descKey: 'btpService1Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/807/807303.png" alt={t('btpService1Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService2Title', descKey: 'btpService2Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/69/69847.png" alt={t('btpService2Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService3Title', descKey: 'btpService3Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1483/1483285.png" alt={t('btpService3Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpService4Title', descKey: 'btpService4Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png" alt={t('btpService4Title')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <SectionTitle subtitleKey="btpServicesNewTitle" titleKey="btpServicesNewSubtitle" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-fade">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="bg-white p-8 rounded-lg shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col group">
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-secondary">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue-dark mb-3 font-sans">{t(service.titleKey)}</h3>
                        <p className="text-brand-text text-sm flex-grow mb-6 leading-relaxed">{t(service.descKey)}</p>
                        <Link to="#" className="text-brand-gold-accent font-semibold hover:text-brand-blue-dark transition-colors duration-300 mt-auto self-start">
                            {t('learnMoreLink')}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


const ApproachSection: React.FC = () => {
    const { t } = useLocalization();
    const approaches = [
        { titleKey: 'btpApproachSafetyTitle', descKey: 'btpApproachSafetyDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/1161/1161439.png" alt={t('btpApproachSafetyIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachSustainabilityTitle', descKey: 'btpApproachSustainabilityDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/5631/5631194.png" alt={t('btpApproachSustainabilityIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
        { titleKey: 'btpApproachTechTitle', descKey: 'btpApproachTechDesc', icon: <img src="https://cdn-icons-png.flaticon.com/512/2752/2752819.png" alt={t('btpApproachTechIconAlt')} className="h-8 w-8" loading="lazy" width="32" height="32" /> },
    ];
    return (
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="scroll-fade">
                    <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('btpApproachImageAlt')} className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
                <div className="bg-gray-50/50 p-8 rounded-lg scroll-fade">
                    <h2 className="text-3xl font-bold font-sans text-brand-blue-dark mb-3">{t('btpApproachTitle')}</h2>
                    <p className="text-lg text-gray-600 mb-8">{t('btpApproachSubtitle')}</p>
                    <div className="space-y-8">
                        {approaches.map((item, index) => (
                            <div key={item.titleKey} className="flex items-start group">
                                <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-100 text-brand-blue-dark flex items-center justify-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-xl font-bold text-brand-blue-dark mb-1">{t(item.titleKey)}</h3>
                                    <p className="text-brand-text leading-relaxed">{t(item.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const { t } = useLocalization();
    const projects = [
        { image: "https://images.pexels.com/photos/128830/pexels-photo-128830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject1Title', descKey: 'btpProject1Desc' },
        { image: "https://images.pexels.com/photos/2224797/pexels-photo-2224797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject2Title', descKey: 'btpProject2Desc' },
        { image: "https://images.pexels.com/photos/3773539/pexels-photo-3773539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", titleKey: 'btpProject3Title', descKey: 'btpProject3Desc' },
    ];
    return (
        <div className="container mx-auto px-6">
            <SectionTitle titleKey="btpProjectsTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-fade">
                {projects.map((p, index) => (
                    <div key={p.titleKey} className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                            <img src={p.image} alt={t(p.titleKey)} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width="400" height="224" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-brand-navy mb-3 transition-colors duration-300 group-hover:text-brand-yellow">{t(p.titleKey)}</h3>
                            <p className="text-brand-text-gray text-sm flex-grow mb-6">{t(p.descKey)}</p>
                            <Link to="#" className="font-semibold text-brand-navy hover:text-brand-yellow transition-colors duration-300 self-start">
                                {t('viewProjectButton')}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Main Page Component ---

const BtpPage: React.FC = () => {
    const { t } = useLocalization();
    const btpSlides = [
        {
          img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpHeroTitle',
          subtitle: 'btpHeroSubtitle',
        },
        {
          img: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpExpertiseTitle',
          subtitle: 'btpHeroExpertiseSubtitle',
        },
        {
          img: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'btpProjectsTitle',
          subtitle: 'btpHeroProjectsSubtitle',
        },
    ];

  return (
    <>
      <HeroSection slides={btpSlides} />
      <FullScreenSection className="bg-gray-100 py-16 md:py-20">
        <ServicesSection />
      </FullScreenSection>
      <FullScreenSection className="bg-white py-16 md:py-20">
        <ApproachSection />
      </FullScreenSection>
      <FullScreenSection className="grid-bg py-16 md:py-20">
        <ProjectsSection />
      </FullScreenSection>
       <FullScreenSection className="bg-white py-16 md:py-20">
        <TestimonialsSection />
      </FullScreenSection>
      <FullScreenSection className="bg-brand-light py-16 md:py-20">
        <ContactSection />
      </FullScreenSection>
      <Footer />
    </>
  );
};

export default BtpPage;