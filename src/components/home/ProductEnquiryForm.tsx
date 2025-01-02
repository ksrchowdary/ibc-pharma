import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { sendEnquiryEmail } from '../../utils/emailService';
import type { ProductEnquiry } from '../../types';

const ProductEnquiryForm = () => {
  const [formData, setFormData] = useState<ProductEnquiry>({
    name: '',
    email: '',
    company: '',
    product: 'iseal',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendEnquiryEmail(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', product: 'iseal', message: '' });
    } catch (error) {
      console.error('Failed to send enquiry:', error);
    }
    
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product *</label>
          <select
            id="product"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
          >
            <option value="iseal">ISEAL™ Surgical Adhesive</option>
            <option value="gastrocare">Gastrocare™ Solutions</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center disabled:opacity-50"
      >
        {isLoading ? (
          'Sending...'
        ) : (
          <>
            Send Enquiry
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ProductEnquiryForm;