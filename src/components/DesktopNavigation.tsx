
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const DesktopNavigation: React.FC = () => {
  return (
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
    </nav>
  );
};

export default DesktopNavigation;
