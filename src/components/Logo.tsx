
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <Link to="/" className="flex items-center space-x-4 group">
      <div className="relative">
        <img 
          src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png" 
          alt="AMYRES AGTECH Logo" 
          className={`rounded-full object-cover transition-all duration-300 group-hover:scale-110 shadow-lg ${
            isScrolled ? 'w-16 h-16' : 'w-20 h-20'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amyres-green/20 to-amyres-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </div>
      <div className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
        <h1 className="text-xl font-bold font-poppins text-white">
          AMYRES AGTECH
        </h1>
        <p className="text-sm text-white/80 font-inter">We don't just deliver AgTech, we build it with you, for you</p>
      </div>
    </Link>
  );
};

export default Logo;
