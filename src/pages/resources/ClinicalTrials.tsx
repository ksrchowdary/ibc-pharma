import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const ClinicalTrials = () => {
  return (
    <div>
      <HeroSection
        title="Clinical Trials"
        description="Current and upcoming clinical trials"
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Clinical trial research"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Ongoing Trial</h2>
            <p className="text-gray-600">Placeholder for clinical trial information...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTrials;