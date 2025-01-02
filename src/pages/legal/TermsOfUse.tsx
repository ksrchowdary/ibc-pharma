import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const TermsOfUse = () => {
  return (
    <div>
      <HeroSection
        title="Terms of Use"
        description="Guidelines for using our services"
        imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Legal document signing"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="prose max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <h2>Terms and Conditions</h2>
          <p>Placeholder for terms of use content...</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;