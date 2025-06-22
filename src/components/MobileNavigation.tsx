
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  cartCount: number;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  isMenuOpen, 
  toggleMenu, 
  cartCount 
}) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center space-x-4">
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

      {/* Mobile Navigation Menu */}
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
    </>
  );
};

export default MobileNavigation;
