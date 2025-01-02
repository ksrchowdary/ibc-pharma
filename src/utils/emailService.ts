import type { ProductEnquiry } from '../types';

export const sendEnquiryEmail = async (enquiry: ProductEnquiry): Promise<void> => {
  // Mock email service
  return new Promise((resolve) => {
    console.log('Sending enquiry:', enquiry);
    // Simulate API call delay
    setTimeout(resolve, 1000);
  });
};