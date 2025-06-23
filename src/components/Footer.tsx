
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20">
      {/* Stylized "A" symbol positioned at the top center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative w-24 h-24 bg-gradient-to-br from-amyres-green to-amyres-teal rounded-lg transform rotate-45 shadow-2xl flex items-center justify-center">
          <div className="text-white text-4xl font-bold transform -rotate-45">
            A
          </div>
        </div>
      </div>

      {/* Curved top edge */}
      <div className="relative z-10">
        <svg 
          className="w-full h-24 fill-current text-blue-600" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#3B82F6"
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 relative">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png" 
                    alt="AMYRES AGTECH Logo" 
                    className="h-16 w-16 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-white">
                    AMYRES AGTECH
                  </h3>
                  <div className="text-amyres-green text-sm font-semibold font-inter">Research • Innovation • Development</div>
                </div>
              </div>
              
              <p className="text-white/90 mb-8 leading-relaxed font-inter text-lg">
                Leading agricultural innovation through research, technology, and sustainable practices. 
                Empowering farmers and agribusinesses with data-driven solutions for a sustainable future.
              </p>

              {/* Newsletter Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 font-poppins text-white flex items-center">
                  <i className="fas fa-envelope mr-3 text-amyres-green"></i> 
                  Stay Updated
                </h4>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amyres-green focus:border-transparent bg-white/20 backdrop-blur-sm font-inter text-white placeholder-white/70"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-amyres-green to-amyres-teal hover:from-green-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold font-poppins shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <i className="fas fa-paper-plane mr-2"></i> 
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-poppins text-white flex items-center">
                <i className="fas fa-link mr-3 text-amyres-green"></i> 
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="group flex items-center text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter">
                    <i className="fas fa-home mr-3 text-sm"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="group flex items-center text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter">
                    <i className="fas fa-info-circle mr-3 text-sm"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="group flex items-center text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter">
                    <i className="fas fa-cogs mr-3 text-sm"></i>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="group flex items-center text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter">
                    <i className="fas fa-box mr-3 text-sm"></i>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="group flex items-center text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter">
                    <i className="fas fa-newspaper mr-3 text-sm"></i>
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-poppins text-white flex items-center">
                <i className="fas fa-phone mr-3 text-amyres-green"></i> 
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt mt-1 text-amyres-green"></i>
                  <div>
                    <span className="block text-sm text-white/60 font-medium">Address</span>
                    <span className="text-white/90 font-inter">Nyeri, Kenya</span>
                  </div>
                </div>
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-phone mt-1 text-amyres-green"></i>
                  <div>
                    <span className="block text-sm text-white/60 font-medium">Phone</span>
                    <a 
                      href="tel:+254769125073" 
                      className="text-white/90 hover:text-amyres-green transition-colors duration-300 font-inter"
                    >
                      +254-769-125-073
                    </a>
                  </div>
                </div>
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-envelope mt-1 text-amyres-green"></i>
                  <div>
                    <span className="block text-sm text-white/60 font-medium">Email</span>
                    <a 
                      href="mailto:hello@amyres.com" 
                      className="text-white/90 hover:text-amyres-green transition-colors duration-300 font-inter"
                    >
                      hello@amyres.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4 font-poppins text-white">Follow Us</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com/amyresagtech" 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-white/90"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://twitter.com/amyresagtech" 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 text-white/90"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <X className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/amyresagtech/" 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 text-white/90"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="https://instagram.com/amyresagtech" 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-white/90"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://youtube.com/@amyresagtech" 
                    className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 text-white/90"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 font-inter">
                &copy; 2025 AMYRES AGTECH. All Rights Reserved.
              </p>
              <p className="text-amyres-green text-sm font-semibold font-poppins">
                Research • Innovation • Development
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-amyres-green transition-colors duration-300 font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-amyres-green transition-colors duration-300 font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-amyres-green transition-colors duration-300 font-inter">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
