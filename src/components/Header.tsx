import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Listen for cart updates
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.quantity, 0));
    };

    // Initial load
    handleCartUpdate();
    
    // Listen for storage changes
    window.addEventListener('storage', handleCartUpdate);
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('storage', handleCartUpdate);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-amyres-blue-solid text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <i className="fas fa-bullhorn text-amyres-green"></i>
          <span>
            New Feature Alert! Complimentary Discovery Calls Now Available! 
            <a 
              href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-amyres-green hover:text-white transition-colors duration-300 font-semibold underline"
            >
              Learn More →
            </a>
          </span>
        </div>
        {/* Optional close button */}
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.currentTarget.parentElement?.style.setProperty('display', 'none');
          }}
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      </div>

      {/* Main Header */}
      <header 
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'navbar-header-scrolled py-2' 
            : 'navbar-header py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Section with Circular Design */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                {/* Circular background for logo */}
                <div className={`rounded-full bg-white/15 backdrop-blur-sm border border-white/30 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 shadow-lg ${
                  isScrolled ? 'w-12 h-12 p-2' : 'w-16 h-16 p-3'
                }`}>
                  <img 
                    src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png" 
                    alt="AMYRES AGTECH Logo" 
                    className="object-contain w-full h-full transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amyres-green/20 to-amyres-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <h1 className="text-xl font-bold font-poppins text-white">
                  AMYRES AGTECH
                </h1>
                <p className="text-sm text-white/80 font-inter">Research • Innovation • Development</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className="nav-link group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md"
              >
                <span className="flex items-center space-x-2 text-white font-medium font-inter">
                  <i className="fas fa-home text-white/90"></i>
                  <span>Home</span>
                </span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/70 to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              <div className="relative group">
                <Link 
                  to="/about" 
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium font-inter"
                >
                  <i className="fas fa-info-circle text-white/90"></i>
                  <span>About Us</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                    <Link to="/about#background" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter first:rounded-t-2xl">Background</Link>
                    <Link to="/about#what-we-do" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter">What We Do</Link>
                    <Link to="/about#team" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter last:rounded-b-2xl">The Team</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link 
                  to="/products" 
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium font-inter"
                >
                  <i className="fas fa-box text-white/90"></i>
                  <span>Products</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                    <Link to="/products#agrefind" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter first:rounded-t-2xl">AGReFIND</Link>
                    <Link to="/products#auditass" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter last:rounded-b-2xl">Auditass</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link 
                  to="/services" 
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium font-inter"
                >
                  <i className="fas fa-cogs text-white/90"></i>
                  <span>Services</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                    <Link to="/services#software-development" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter first:rounded-t-2xl">Software Development</Link>
                    <Link to="/services#agri-data-management" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter">Agri-Data Management</Link>
                    <Link to="/services#field-trials" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter">Field Trials</Link>
                    <Link to="/services#market-research" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter">Market Research</Link>
                    <Link to="/services#consultancy" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter last:rounded-b-2xl">Consultancy</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link 
                  to="/news" 
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium font-inter"
                >
                  <i className="fas fa-newspaper text-white/90"></i>
                  <span>News</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                    <Link to="/news#recent-projects" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter first:rounded-t-2xl">Projects & Activities</Link>
                    <Link to="/news#featured-service" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter">Featured Service</Link>
                    <Link to="/news#industry-insights" className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 font-inter last:rounded-b-2xl">Industry Insights</Link>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="nav-link relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md group"
              >
                <span className="flex items-center space-x-2 text-white font-medium font-inter">
                  <i className="fas fa-phone text-white/90"></i>
                  <span>Contact</span>
                </span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/70 to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              {/* Cart Icon */}
              <Link to="/cart" className="cart-icon ml-4 p-2 rounded-xl hover:bg-white/20 transition-all duration-300">
                <ShoppingCart className="w-6 h-6 text-white" />
                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount}
                  </span>
                )}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Cart Icon */}
              <Link to="/cart" className="cart-icon p-2 rounded-xl hover:bg-white/20 transition-all duration-300">
                <ShoppingCart className="w-6 h-6 text-white" />
                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <button
                onClick={toggleMenu}
                className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              >
                {isMenuOpen ? 
                  <X className="h-6 w-6 text-white" /> : 
                  <Menu className="h-6 w-6 text-white" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-6 border-t border-white/30 mt-4 pt-6">
              <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-4 space-y-2">
                <Link to="/" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-home text-blue-600"></i>
                  <span>Home</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-info-circle text-purple-600"></i>
                  <span>About Us</span>
                </Link>
                <Link to="/products" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-box text-emerald-600"></i>
                  <span>Products</span>
                </Link>
                <Link to="/services" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-cogs text-blue-600"></i>
                  <span>Services</span>
                </Link>
                <Link to="/news" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-newspaper text-orange-600"></i>
                  <span>News</span>
                </Link>
                <Link to="/contact" className="flex items-center space-x-3 py-3 px-4 hover:bg-white/70 rounded-xl transition-colors duration-200 text-slate-700 font-inter" onClick={toggleMenu}>
                  <i className="fas fa-phone text-emerald-600"></i>
                  <span>Contact</span>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
