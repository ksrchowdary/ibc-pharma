import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
import HeroSection from '../components/shared/HeroSection';

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Get in touch with our team for inquiries, support, or partnership opportunities"
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Modern office building interior"
      />
      
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      Cambridge, MA 02142<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@ibcpharma.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <GlobeIcon className="w-6 h-6 text-blue-800 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Offices</h3>
                    <p className="text-gray-600">
                      London, UK<br />
                      Tokyo, Japan<br />
                      Frankfurt, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;