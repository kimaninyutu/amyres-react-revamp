
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img 
              src="/images/amyres-logo.png" 
              alt="AMYRES AGTECH Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold font-poppins">AMYRES AGTECH</h1>
              <p className="text-sm opacity-90 font-inter">Your Research, Innovation and Development Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-[#7ed957] transition-colors duration-300 font-inter">
              <i className="fas fa-home mr-2"></i>Home
            </Link>
            <div className="relative group">
              <Link to="/about" className="hover:text-[#7ed957] transition-colors duration-300 font-inter flex items-center">
                <i className="fas fa-info-circle mr-2"></i>About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/about#background" className="block px-4 py-2 hover:bg-gray-100 font-inter">Background</Link>
                <Link to="/about#what-we-do" className="block px-4 py-2 hover:bg-gray-100 font-inter">What We Do</Link>
                <Link to="/about#team" className="block px-4 py-2 hover:bg-gray-100 font-inter">The Team</Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="/products" className="hover:text-[#7ed957] transition-colors duration-300 font-inter flex items-center">
                <i className="fas fa-box mr-2"></i>Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/products#agrefind" className="block px-4 py-2 hover:bg-gray-100 font-inter">AGReFIND</Link>
                <Link to="/products#auditass" className="block px-4 py-2 hover:bg-gray-100 font-inter">Auditass</Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="/services" className="hover:text-[#7ed957] transition-colors duration-300 font-inter flex items-center">
                <i className="fas fa-cogs mr-2"></i>Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/services#software-development" className="block px-4 py-2 hover:bg-gray-100 font-inter">Software Development</Link>
                <Link to="/services#agri-data-management" className="block px-4 py-2 hover:bg-gray-100 font-inter">Agri-Data Management</Link>
                <Link to="/services#field-trials" className="block px-4 py-2 hover:bg-gray-100 font-inter">Field Trials</Link>
                <Link to="/services#market-research" className="block px-4 py-2 hover:bg-gray-100 font-inter">Market Research</Link>
                <Link to="/services#consultancy" className="block px-4 py-2 hover:bg-gray-100 font-inter">Consultancy</Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="/news" className="hover:text-[#7ed957] transition-colors duration-300 font-inter flex items-center">
                <i className="fas fa-newspaper mr-2"></i>News/Updates
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/news#recent-projects" className="block px-4 py-2 hover:bg-gray-100 font-inter">Projects & Activities</Link>
                <Link to="/news#featured-service" className="block px-4 py-2 hover:bg-gray-100 font-inter">Featured Service</Link>
                <Link to="/news#industry-insights" className="block px-4 py-2 hover:bg-gray-100 font-inter">Industry Insights</Link>
              </div>
            </div>
            <Link to="/contact" className="hover:text-[#7ed957] transition-colors duration-300 font-inter">
              <i className="fas fa-phone mr-2"></i>Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20 mt-4 pt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-home mr-2"></i>Home
              </Link>
              <Link to="/about" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-info-circle mr-2"></i>About Us
              </Link>
              <Link to="/products" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-box mr-2"></i>Products
              </Link>
              <Link to="/services" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-cogs mr-2"></i>Services
              </Link>
              <Link to="/news" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-newspaper mr-2"></i>News/Updates
              </Link>
              <Link to="/contact" className="block py-2 hover:text-[#7ed957] transition-colors duration-300 font-inter" onClick={toggleMenu}>
                <i className="fas fa-phone mr-2"></i>Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
