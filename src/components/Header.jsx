
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Box, 
  Settings, 
  Newspaper, 
  Phone, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative">
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
              <h1 className="text-xl md:text-2xl font-bold font-poppins">
                AMYRES AGTECH
              </h1>
              <p className="text-sm text-blue-200 font-inter">
                "Powering insightful innovations for sustainable agriculture"
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                >
                  <Home size={16} />
                  <span>Home</span>
                </Link>
              </li>
              
              <li className="relative group">
                <button 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => handleDropdownToggle('about')}
                >
                  <Info size={16} />
                  <span>About Us</span>
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/about#background" className="block px-4 py-2 hover:bg-blue-50 rounded-t-lg">Background</Link>
                  <Link to="/about#what-we-do" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">What We Do</Link>
                </div>
              </li>

              <li className="relative group">
                <button 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => handleDropdownToggle('products')}
                >
                  <Box size={16} />
                  <span>Products</span>
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/products#AGReFIND" className="block px-4 py-2 hover:bg-blue-50 rounded-t-lg">AGReFIND</Link>
                  <Link to="/products#Auditass" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">Auditass</Link>
                </div>
              </li>

              <li className="relative group">
                <button 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => handleDropdownToggle('services')}
                >
                  <Settings size={16} />
                  <span>Services</span>
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/services#software-development" className="block px-4 py-2 hover:bg-blue-50">Software Development</Link>
                  <Link to="/services#agri-data-management" className="block px-4 py-2 hover:bg-blue-50">Agri-Data Management</Link>
                  <Link to="/services#field-trials" className="block px-4 py-2 hover:bg-blue-50">Field Trials</Link>
                  <Link to="/services#market-research" className="block px-4 py-2 hover:bg-blue-50">Market Research</Link>
                  <Link to="/services#training" className="block px-4 py-2 hover:bg-blue-50">Training Needs Assessment</Link>
                  <Link to="/services#app-development" className="block px-4 py-2 hover:bg-blue-50">App Development</Link>
                  <Link to="/services#consultancy" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">Consultancy</Link>
                </div>
              </li>

              <li className="relative group">
                <button 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => handleDropdownToggle('news')}
                >
                  <Newspaper size={16} />
                  <span>News/Updates</span>
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/news#recent-projects" className="block px-4 py-2 hover:bg-blue-50 rounded-t-lg">Projects & Activities</Link>
                  <Link to="/news#featured-service" className="block px-4 py-2 hover:bg-blue-50">Featured Service</Link>
                  <Link to="/news#industry-insights" className="block px-4 py-2 hover:bg-blue-50 rounded-b-lg">Industry Insights</Link>
                </div>
              </li>

              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home size={16} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info size={16} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Box size={16} />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings size={16} />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/news" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Newspaper size={16} />
                  <span>News/Updates</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-2 py-2 hover:text-blue-200 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={16} />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
