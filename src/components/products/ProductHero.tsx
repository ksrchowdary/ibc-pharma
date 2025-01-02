import React from 'react';
import HeroSection from '../shared/HeroSection';

const ProductHero = () => {
  return (
    <HeroSection
      title="Innovative Medical Solutions"
      description="Discover our advanced portfolio of tissue adhesives and gastroenterological products"
      imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
      imageAlt="Laboratory research equipment and medical devices"
    >
      <div className="flex flex-wrap gap-4">
        <a
          href="#iseal"
          className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          ISEAL™ Technology
        </a>
        <a
          href="#gastrocare"
          className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
        >
          Gastrocare™ Solutions
        </a>
      </div>
    </HeroSection>
  );
};

export default ProductHero;