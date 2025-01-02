import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: 'All Products', path: '/products' },
    { name: 'ISEAL™ Technology', path: '/products/iseal' },
    { name: 'Gastrocare™ Solutions', path: '/products/gastrocare' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            IBC Pharma
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-800">About Us</Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-800"
                onMouseEnter={() => setIsProductsOpen(true)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/research" className="text-gray-700 hover:text-blue-800">Research</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-800">Contact</Link>
            <button className="flex items-center text-gray-700 hover:text-blue-800">
              <Globe className="w-4 h-4 mr-1" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/about" className="block text-gray-700">About Us</Link>
            <div className="space-y-2 pl-4">
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="block text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link to="/research" className="block text-gray-700">Research</Link>
            <Link to="/contact" className="block text-gray-700">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;