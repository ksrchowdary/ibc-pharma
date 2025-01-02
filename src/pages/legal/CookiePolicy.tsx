import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const CookiePolicy = () => {
  return (
    <div>
      <HeroSection
        title="Cookie Policy"
        description="How we use cookies on our website"
        imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Digital privacy concept"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="prose max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <h2>Cookie Usage</h2>
          <p>Placeholder for cookie policy content...</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;