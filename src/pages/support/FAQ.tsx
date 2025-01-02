import React from 'react';
import HeroSection from '../../components/shared/HeroSection';

const FAQ = () => {
  return (
    <div>
      <HeroSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services"
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Customer support"
      />
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Placeholder Question?</h3>
              <p className="text-gray-600">Placeholder answer...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;