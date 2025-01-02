import React from 'react';
import ProductHero from '../components/products/ProductHero';
import ProductCard from '../components/products/ProductCard';
import type { Product } from '../types';

const products: Product[] = [
  {
    id: 'iseal',
    name: 'ISEAL™ Surgical Adhesive',
    description: 'Advanced tissue adhesive technology designed for precise surgical applications.',
    features: [
      'Rapid polymerization',
      'Strong adhesion strength',
      'Excellent biocompatibility',
      'Controlled application system'
    ],
    technicalSpecs: {
      'Setting Time': '30-60 seconds',
      'Tensile Strength': '≥ 8 N/cm²',
      'Shelf Life': '24 months',
      'Storage': '2-8°C'
    },
    documentation: [
      '/docs/iseal-technical-datasheet.pdf',
      '/docs/iseal-user-manual.pdf'
    ]
  },
  {
    id: 'gastrocare',
    name: 'Gastrocare™ Endoscopic Solution',
    description: 'Innovative solution for gastroenterological procedures and treatments.',
    features: [
      'Enhanced visibility',
      'Long-lasting effect',
      'Minimal invasive application',
      'Optimal tissue contact'
    ],
    technicalSpecs: {
      'Duration of Effect': '4-6 hours',
      'pH Level': '6.8-7.2',
      'Viscosity': '250-300 cP',
      'Storage': '15-25°C'
    },
    documentation: [
      '/docs/gastrocare-technical-datasheet.pdf',
      '/docs/gastrocare-clinical-guide.pdf'
    ]
  }
];

const Products = () => {
  return (
    <div>
      <ProductHero />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;