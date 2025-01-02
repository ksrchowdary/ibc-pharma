import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IBC Pharma</h3>
            <p className="text-gray-400">
              Leading innovator in tissue adhesive technology and gastroenterological solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/research" className="text-gray-400 hover:text-white">Research</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/publications" className="text-gray-400 hover:text-white">Publications</Link></li>
              <li><Link to="/clinical-trials" className="text-gray-400 hover:text-white">Clinical Trials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedinIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><MailIcon /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} IBC Pharma. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;