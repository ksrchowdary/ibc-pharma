import React from 'react';
import ProductEnquiryForm from './ProductEnquiryForm';

const EnquirySection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request Product Information
            </h2>
            <p className="text-xl text-gray-600">
              Interested in our products? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ProductEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnquirySection;