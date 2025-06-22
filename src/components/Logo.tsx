
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <Link to="/" className="flex items-center space-x-4 group">
      <div className="relative">
        <div className={`rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 shadow-lg ${
          isScrolled ? 'w-12 h-12 p-2' : 'w-16 h-16 p-3'
        }`}>
          <img 
            src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png" 
            alt="AMYRES AGTECH Logo" 
            className="object-cover w-full h-full rounded-full transition-all duration-300"
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
  );
};

export default Logo;
