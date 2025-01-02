import React from 'react';
import { FlaskConicalIcon, BrainIcon, LineChartIcon } from 'lucide-react';

const ResearchCapabilities = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Research & Innovation</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FlaskConicalIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">State-of-the-art Labs</h3>
            <p>Advanced research facilities equipped with cutting-edge technology</p>
          </div>
          <div className="text-center">
            <BrainIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>World-class scientists and researchers leading innovation</p>
          </div>
          <div className="text-center">
            <LineChartIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clinical Trials</h3>
            <p>Rigorous testing and validation processes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchCapabilities;