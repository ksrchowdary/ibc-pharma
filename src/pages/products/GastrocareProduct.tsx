import React from 'react';
import HeroSection from '../../components/shared/HeroSection';
import { FileTextIcon, DownloadIcon, CheckIcon } from 'lucide-react';

const GastrocareProduct = () => {
  return (
    <div>
      <HeroSection
        title="Gastrocare™ Endoscopic Solution"
        description="Innovative solution for gastroenterological procedures and treatments"
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Gastroenterological procedure"
      />

      <div className="py-20">
        <div className="container mx-auto px-6">
          {/* Product Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              Gastrocare™ is an advanced endoscopic solution designed to enhance visibility and improve outcomes in gastroenterological procedures. Our innovative formula provides optimal tissue contact and long-lasting effects.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Enhanced visibility during procedures',
                'Long-lasting effect (4-6 hours)',
                'Minimal invasive application',
                'Optimal tissue contact',
                'pH balanced formula',
                'Easy application system'
              ].map((feature) => (
                <div key={feature} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Physical Properties</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Duration of Effect</td>
                      <td className="py-2">4-6 hours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">pH Level</td>
                      <td className="py-2">6.8-7.2</td>
                    </tr>
                    <tr>
                      <td className="py-2">Viscosity</td>
                      <td className="py-2">250-300 cP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Storage Conditions</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Temperature</td>
                      <td className="py-2">15-25°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Humidity</td>
                      <td className="py-2">≤ 65% RH</td>
                    </tr>
                    <tr>
                      <td className="py-2">Shelf Life</td>
                      <td className="py-2">36 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <FileTextIcon className="w-6 h-6 text-blue-800 mr-3" />
                <div>
                  <h3 className="font-semibold">Technical Data Sheet</h3>
                  <p className="text-sm text-gray-600">Complete product specifications</p>
                </div>
                <DownloadIcon className="w-5 h-5 ml-auto text-gray-400" />
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <FileTextIcon className="w-6 h-6 text-blue-800 mr-3" />
                <div>
                  <h3 className="font-semibold">Clinical Guide</h3>
                  <p className="text-sm text-gray-600">Detailed usage instructions</p>
                </div>
                <DownloadIcon className="w-5 h-5 ml-auto text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GastrocareProduct;