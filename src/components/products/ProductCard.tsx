import React from 'react';
import { FileText, Download } from 'lucide-react';
import type { Product } from '../../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-6">{product.description}</p>
        
        <h3 className="text-lg font-semibold mb-3">Key Features</h3>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {product.technicalSpecs && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technical Specifications</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                  <span className="font-medium">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.documentation && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Documentation</h3>
            <div className="space-y-2">
              {product.documentation.map((doc, index) => (
                <a
                  key={index}
                  href={doc}
                  className="flex items-center text-blue-800 hover:text-blue-900"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Download Documentation {index + 1}</span>
                  <Download className="w-4 h-4 ml-2" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;