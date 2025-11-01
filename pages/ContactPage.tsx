import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

// --- Icons ---
const IconLocation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);
const IconEmail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

// --- Form Input Components ---
interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-brand-text mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={label}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none"
    />
  </div>
);

interface TextareaFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ id, name, label, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-brand-text mb-2">{label}</label>
    <textarea
      id={id}
      name={name}
      rows={5}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={label + '...'}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary focus:bg-white outline-none"
    ></textarea>
  </div>
);

const contactSlides = [
    {
      img: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'contactHeroTitle',
      subtitle: 'contactHeroSubtitle',
    }
];

// --- Main Page Component ---
const ContactPage: React.FC = () => {
  const { t } = useLocalization();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formState);
      // For this example, we'll just assume success.
      // In a real app, you would handle success/error from the API.
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset status message after a few seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      <HeroSection slides={contactSlides} cta={false} />
      <main className="bg-gray-50 relative z-10 pb-20 md:pb-28" style={{ marginTop: '-160px' }}>
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                {/* Left Column: Form */}
                <div className="md:col-span-3">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">{t('contactFormTitle')}</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <InputField id="name" name="name" label={t('formName')} type="text" value={formState.name} onChange={handleInputChange} required />
                        <InputField id="email" name="email" label={t('formEmail')} type="email" value={formState.email} onChange={handleInputChange} required />
                        <InputField id="subject" name="subject" label={t('formSubject')} type="text" value={formState.subject} onChange={handleInputChange} required />
                        <TextareaField id="message" name="message" label={t('formMessage')} value={formState.message} onChange={handleInputChange} required />
                        <div>
                            <button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="w-full bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-blue-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? 'Envoi en cours...' : t('formSend')}
                            </button>
                        </div>
                        {submitStatus === 'success' && (
                          <p className="text-green-600 text-sm mt-4 text-center">{t('contactFormSuccess')}</p>
                        )}
                    </form>
                </div>

                {/* Right Column: Info & Map */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-brand-navy mb-6">{t('contactInfoTitle')}</h2>
                    <ul className="space-y-6 text-brand-text-gray">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 pt-1"><IconLocation /></div>
                            <div className="ml-4">
                                <h3 className="font-bold text-brand-dark mb-1">{t('address')}</h3>
                                <p className="text-sm">123 Rue de Dakar, Sénégal</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 pt-1"><IconPhone /></div>
                            <div className="ml-4">
                                <h3 className="font-bold text-brand-dark mb-1">{t('phone')}</h3>
                                <p className="text-sm">+221 33 800 00 00</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 pt-1"><IconEmail /></div>
                            <div className="ml-4">
                                <h3 className="font-bold text-brand-dark mb-1">{t('email')}</h3>
                                <p className="text-sm">contact@socabeg.sn</p>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-8 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246937.4203117462!2d-17.65636043431633!3d14.721102917721535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x6b473d93c11e617!2sDakar%2C%Sénégal!5e0!3m2!1sen!2sus!4v1678886000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location of SOCABEG in Dakar">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;