
import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => {
  const { t } = useLocalization();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    alert(t('contactFormSuccess'));
  };

  return (
    <div>
      <PageHero
        title={t('contactHeroTitle')}
        subtitle={t('contactHeroSubtitle')}
        imageUrl="https://picsum.photos/1920/1080?random=21"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold font-sans text-brand-primary mb-6">{t('contactFormTitle')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField id="name" name="name" label={t('formName')} type="text" value={formState.name} onChange={handleInputChange} required />
              <InputField id="email" name="email" label={t('formEmail')} type="email" value={formState.email} onChange={handleInputChange} required />
              <InputField id="subject" name="subject" label={t('formSubject')} type="text" value={formState.subject} onChange={handleInputChange} required />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">{t('formMessage')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-secondary focus:border-brand-secondary"
                ></textarea>
              </div>
              <button type="submit" className="bg-brand-secondary text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2">
                {t('formSend')}
              </button>
            </form>
          </div>
          <div className="bg-brand-light p-8 rounded-lg">
            <h2 className="text-3xl font-bold font-sans text-brand-primary mb-6">{t('contactInfoTitle')}</h2>
            <div className="space-y-4 text-brand-text text-lg">
              <p><strong>{t('address')}:</strong> 123 Rue de Dakar, Sénégal</p>
              <p><strong>{t('phone')}:</strong> +221 33 800 00 00</p>
              <p><strong>{t('email')}:</strong> contact@socabeg.sn</p>
            </div>
            <div className="mt-8 h-64 bg-gray-300 rounded-md">
                {/* Placeholder for map */}
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
      </section>
    </div>
  );
};

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
    <label htmlFor={id} className="block text-sm font-medium text-brand-text mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-secondary focus:border-brand-secondary"
    />
  </div>
);


export default ContactPage;