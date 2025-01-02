import React from 'react';
import HeroSection from '../../components/shared/HeroSection';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Support = () => {
  return (
    <div>
      <HeroSection
        title="Support"
        description="We're here to help you with any questions or concerns"
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Customer support team"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Phone className="w-12 h-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600">Placeholder phone support information...</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Mail className="w-12 h-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600">Placeholder email support information...</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MessageSquare className="w-12 h-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600">Placeholder live chat information...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;