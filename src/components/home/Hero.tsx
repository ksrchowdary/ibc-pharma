import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80"
          alt="Medical research and innovation"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advancing Medical Innovation Through Science
          </h1>
          <p className="text-xl mb-8">
            Leading the way in tissue adhesive technology and gastroenterological solutions with over 100 years of combined expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Products
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;