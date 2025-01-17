import React, { useState, useEffect } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { Loader } from '../Loader';

const ContactMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader stays visible for at least 1 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main className="content">
        <section className="contact-section">
          <ContactForm />
          <ContactInfo />
        </section>
      </main>
    </>
  );
};

export default ContactMain;