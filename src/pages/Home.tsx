import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import EnquirySection from '../components/home/EnquirySection';
import { Shield, Award, Microscope } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      
      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leading Innovation in Medical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pioneering breakthrough technologies in tissue adhesives and gastroenterological care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                ISO certified manufacturing processes ensuring highest quality standards
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Leading</h3>
              <p className="text-gray-600">
                Recognized expertise in medical adhesive technology
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Microscope className="w-12 h-12 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Driven</h3>
              <p className="text-gray-600">
                Continuous innovation through extensive R&D
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="ISEAL Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">ISEAL</h3>
                <p className="text-gray-600 mb-4">
                  Advanced tissue adhesive technology for surgical applications
                </p>
                <a href="/products/iseal" className="text-blue-800 font-semibold hover:text-blue-900">
                  Learn More →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80" 
                alt="Gastrocare Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gastrocare</h3>
                <p className="text-gray-600 mb-4">
                  Innovative solutions for gastroenterological care
                </p>
                <a href="/products/gastrocare" className="text-blue-800 font-semibold hover:text-blue-900">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection />
    </div>
  );
};

export default Home;