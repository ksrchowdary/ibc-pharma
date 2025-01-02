import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import IsealProduct from './pages/products/IsealProduct';
import GastrocareProduct from './pages/products/GastrocareProduct';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Publications from './pages/resources/Publications';
import ClinicalTrials from './pages/resources/ClinicalTrials';
import FAQ from './pages/support/FAQ';
import Support from './pages/support/Support';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/iseal" element={<IsealProduct />} />
            <Route path="/products/gastrocare" element={<GastrocareProduct />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/clinical-trials" element={<ClinicalTrials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;