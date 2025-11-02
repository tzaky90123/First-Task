
import React, { useState } from 'react';
import { useLocalization } from '../context/LocalizationContext';

// --- Icons ---
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const IconEmail = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconLocationPin = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconLinkedinStyled = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>;
const IconInstagramStyled = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689-.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689.072-4.948.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44s-.645-1.44-1.441-1.44z" clipRule="evenodd" /></svg>;

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
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white focus:border-brand-primary transition-all duration-300"
      />
    </div>
  </div>
);

const ContactSection: React.FC = () => {
    const { t } = useLocalization();
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormState(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formState);
      alert(t('contactFormSuccess'));
      setFormState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    };

    return (
      <section className="bg-brand-light py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content: Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-5">
            {/* Left Side: Contact Info */}
            <div className="relative p-8 sm:p-12 lg:col-span-2 bg-brand-primary text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold">{t('homeContactContactTitle')}</h3>
                <p className="mt-4 text-lg text-blue-100 opacity-90">{t('btpCtaText')}</p>
                
                <ul className="mt-12 space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconPhone /></div>
                    <span className="ml-4">{t('homeContactPhone')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconEmail /></div>
                    <span className="ml-4">{t('homeContactEmail')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 pt-1"><IconLocationPin /></div>
                    <span className="ml-4">{t('homeContactAddress')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 flex space-x-6">
                <a href="#" aria-label="Instagram" className="text-blue-100 hover:text-white transform hover:scale-110 transition-all duration-300"><IconInstagramStyled /></a>
                <a href="#" aria-label={t('ariaLinkedin')} className="text-blue-100 hover:text-white transform hover:scale-110 transition-all duration-300"><IconLinkedinStyled /></a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 sm:p-12 lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField id="firstName" name="firstName" label={t('homeContactFormFirstName')} type="text" value={formState.firstName} onChange={handleInputChange} required />
                  <InputField id="lastName" name="lastName" label={t('homeContactFormLastName')} type="text" value={formState.lastName} onChange={handleInputChange} required />
                </div>
                <InputField id="email" name="email" label={t('homeContactFormEmail')} type="email" value={formState.email} onChange={handleInputChange} required />
                <InputField id="subject" name="subject" label={t('homeContactFormSubject')} type="text" value={formState.subject} onChange={handleInputChange} required />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('homeContactFormMessage')}</label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 text-sm text-brand-dark bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white focus:border-brand-primary transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 transform hover:scale-105">
                    {t('formSend')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactSection;
