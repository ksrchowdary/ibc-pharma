import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const PrivacyPolicy = () => {
  return (
    <div>
      <HeroSection
        title="Privacy Policy"
        description="How we handle and protect your data"
        imageSrc="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Data privacy and security concept"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="prose max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <h2>Information Collection and Use</h2>
          <p>Placeholder for privacy policy content...</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;