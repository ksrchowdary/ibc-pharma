import React from 'react';

interface HeroSectionProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  children 
}) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-xl mb-8 text-white/90">{description}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;