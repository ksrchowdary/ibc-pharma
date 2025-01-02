import React from 'react';
import HeroSection from '../../components/shared/HeroSection';
import { FileTextIcon, DownloadIcon, CheckIcon, ArrowRightIcon } from 'lucide-react';
import iSeal25Img from '../../assets/i-seal-25.jpeg';
import iSeal50Img from '../../assets/i-seal-50.jpeg';

const IsealProduct = () => {
  return (
    <div>
      <HeroSection
        title="ISEAL™ Surgical Adhesive"
        description="Advanced tissue adhesive technology designed for precise surgical applications"
        imageSrc="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Surgical procedure with ISEAL technology"
      />

      <div className="py-20">
        <div className="container mx-auto px-6">
          {/* Product Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              ISEAL™ represents the next generation of surgical adhesive technology, providing superior bonding strength and precision in surgical applications. Our innovative formula ensures rapid polymerization and excellent biocompatibility.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Rapid polymerization within 30-60 seconds',
                'Superior tensile strength ≥ 8 N/cm²',
                'Excellent biocompatibility',
                'Controlled application system',
                'Extended shelf life of 24 months',
                'Optimal temperature stability'
              ].map((feature) => (
                <div key={feature} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Variants Showcase */}
          <section className="bg-gradient-to-b from-blue-50 to-white py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Available Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* ISEAL 0.25ml */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                        src={iSeal25Img}
                        alt="ISEAL 0.25ml Product"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      0.25ml
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">I-SEAL 0.25ml</h3>
                    <p className="text-gray-600 mb-4">
                      Ideal for precise applications and smaller surgical areas
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500">5 Units per pack</span>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                        Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ISEAL 0.50ml */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                        src={iSeal50Img}
                        alt="ISEAL 0.50ml Product"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      0.50ml
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">I-SEAL 0.50ml</h3>
                    <p className="text-gray-600 mb-4">
                      Perfect for larger surgical areas requiring more coverage
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-500">5 Units per pack</span>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                        Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Physical Properties</h3>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Setting Time</td>
                      <td className="py-2">30-60 seconds</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Tensile Strength</td>
                      <td className="py-2">≥ 8 N/cm²</td>
                    </tr>
                    <tr>
                      <td className="py-2">Shelf Life</td>
                      <td className="py-2">24 months</td>
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
                      <td className="py-2">2-8°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Humidity</td>
                      <td className="py-2">≤ 60% RH</td>
                    </tr>
                    <tr>
                      <td className="py-2">Light Exposure</td>
                      <td className="py-2">Protect from light</td>
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
                  <p className="text-sm text-gray-600">Detailed specifications and usage guidelines</p>
                </div>
                <DownloadIcon className="w-5 h-5 ml-auto text-gray-400" />
              </a>
              <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                <FileTextIcon className="w-6 h-6 text-blue-800 mr-3" />
                <div>
                  <h3 className="font-semibold">User Manual</h3>
                  <p className="text-sm text-gray-600">Step-by-step application instructions</p>
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

export default IsealProduct;