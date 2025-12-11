
import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import FullScreenSection from '../components/FullScreenSection';

// --- Page Sections ---
const IntroductionSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <div className="container mx-auto px-6 scroll-element">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-sans text-brand-navy mb-4">{t('minesIntroTitle')}</h2>
                    <p className="text-lg text-brand-text-gray leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('minesIntroText') }} />
                    <p className="text-lg text-brand-text-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: t('minesIntroParagraph2') }} />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={t('minesIntroImageAlt')} className="rounded-xl shadow-2xl w-full h-auto object-cover" loading="lazy" width="576" height="384"/>
                </div>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    const services = [
        { titleKey: 'minesService1Title', descKey: 'minesService1Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/16/16294.png" alt={t('minesServiceIcon1Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService2Title', descKey: 'minesService2Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/3380/3380304.png" alt={t('minesServiceIcon2Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService3Title', descKey: 'minesService3Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/60/60473.png" alt={t('minesServiceIcon3Alt')} className="h-full w-full object-contain" loading="lazy" /> },
        { titleKey: 'minesService4Title', descKey: 'minesService4Desc', icon: <img src="https://cdn-icons-png.flaticon.com/512/936/936784.png" alt={t('minesServiceIcon4Alt')} className="h-full w-full object-contain" loading="lazy" /> },
    ];
    return (
        <div className="container mx-auto px-6 scroll-element">
            <SectionTitle titleKey="minesServicesTitle" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={service.titleKey} className="group bg-white p-8 rounded-xl shadow-soft text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                        <div className="text-brand-yellow mx-auto mb-6 w-16 h-16 p-3 flex items-center justify-center rounded-full bg-brand-navy/5 transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-navy">{service.icon}</div>
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
        { image: "https://images.pexels.com/photos/2555627/pexels-photo-2555627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2