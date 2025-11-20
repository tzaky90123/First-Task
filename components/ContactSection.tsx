import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';

// --- Icons ---
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const IconEmail = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconLocationPin = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-brand-text-gray">{label}</label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300"
      />
    </div>
  </div>
);

const ContactSection: React.FC = () => {
    const { t } = useLocalization();
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormState(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formState);
      alert(t('contactFormSuccess'));
      setFormState({ name: '', email: '', subject: '', message: '' });
    };

    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Content: Card */}
        <div className="max-w-8xl mx-auto bg-white rounded-2xl shadow-contact overflow-hidden lg:grid lg:grid-cols-5">
          {/* Left Side: Form */}
          <div className="p-10 sm:p-12 lg:col-span-3">
            <h3 className="text-2xl font-bold text-brand-navy mb-8">{t('contactFormTitle')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField id="name" name="name" label={t('formName')} type="text" value={formState.name} onChange={handleInputChange as any} required />
              <InputField id="email" name="email" label={t('formEmail')} type="email" value={formState.email} onChange={handleInputChange as any} required />
              <InputField id="subject" name="subject" label={t('formSubject')} type="text" value={formState.subject} onChange={handleInputChange as any} required />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text-gray">{t('formMessage')}</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300"
                  ></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300">
                  {t('formSend')}
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Side: Contact Info & Map */}
          <div className="p-10 sm:p-12 lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('contactInfoTitle')}</h3>
            <div className="w-20 h-0.5 bg-brand-secondary mb-8"></div>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-brand-primary pt-1"><IconLocationPin /></div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-brand-navy">{t('address')}</h4>
                  <p className="text-brand-text-gray text-sm">123 Rue de Dakar, Sénégal</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-brand-primary pt-1"><IconPhone /></div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-brand-navy">{t('phone')}</h4>
                  <p className="text-brand-text-gray text-sm">+221 33 800 00 00</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-brand-primary pt-1"><IconEmail /></div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-brand-navy">{t('email')}</h4>
                  <p className="text-brand-text-gray text-sm">contact@socabeg.sn</p>
                </div>
              </li>
            </ul>
            
            {/* Google Map */}
            <div className="mt-12 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123489.1720336203!2d-17.54848092289452!3d14.723812822151622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x2ef92f2566723b93!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contactMapTitle')}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactSection;