import React from 'react';
import { AwardIcon, FlaskConicalIcon, UsersIcon, GlobeIcon } from 'lucide-react';

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AwardIcon className="w-12 h-12 text-blue-800" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600">Years Combined Experience</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FlaskConicalIcon className="w-12 h-12 text-blue-800" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Research Publications</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <UsersIcon className="w-12 h-12 text-blue-800" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">1M+</h3>
            <p className="text-gray-600">Patients Treated</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GlobeIcon className="w-12 h-12 text-blue-800" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">30+</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;