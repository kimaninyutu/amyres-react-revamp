
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative">
      {/* Curved top edge */}
      <div className="relative">
        <svg 
          className="w-full h-20 fill-current text-slate-50" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <img 
                    src="/images/amyres-logo.png" 
                    alt="AMYRES AGTECH Logo" 
                    className="h-14 w-14 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-full blur-sm"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    AMYRES AGTECH
                  </h3>
                  <div className="text-emerald-600 text-sm font-semibold font-inter">Research • Innovation • Development</div>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed font-inter text-lg">
                Leading agricultural innovation through research, technology, and sustainable practices. 
                Empowering farmers and agribusinesses with data-driven solutions for a sustainable future.
              </p>

              {/* Newsletter Section */}
              <div className="backdrop-blur-xl bg-white/50 rounded-2xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold mb-4 font-poppins text-slate-800 flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-600"></i> 
                  Stay Updated
                </h4>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm font-inter"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold font-poppins shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <i className="fas fa-paper-plane mr-2"></i> 
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-poppins text-slate-800 flex items-center">
                <i className="fas fa-link mr-3 text-purple-600"></i> 
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="group flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-300 font-inter">
                    <i className="fas fa-home mr-3 text-sm group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="relative">
                      Home
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="group flex items-center text-slate-600 hover:text-purple-600 transition-colors duration-300 font-inter">
                    <i className="fas fa-info-circle mr-3 text-sm group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="relative">
                      About Us
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="group flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-inter">
                    <i className="fas fa-cogs mr-3 text-sm group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="relative">
                      Services
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="group flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-300 font-inter">
                    <i className="fas fa-box mr-3 text-sm group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="relative">
                      Products
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="group flex items-center text-slate-600 hover:text-orange-600 transition-colors duration-300 font-inter">
                    <i className="fas fa-newspaper mr-3 text-sm group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="relative">
                      News
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-poppins text-slate-800 flex items-center">
                <i className="fas fa-phone mr-3 text-emerald-600"></i> 
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt mt-1 text-emerald-600 group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">Address</span>
                    <a 
                      href="https://maps.google.com/?q=Nyeri,Kenya" 
                      className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-inter"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Nyeri, Kenya
                    </a>
                  </div>
                </div>
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-phone mt-1 text-blue-600 group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">Phone</span>
                    <a 
                      href="tel:+254769125073" 
                      className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-inter"
                    >
                      +254-769-125-073
                    </a>
                  </div>
                </div>
                <div className="group flex items-start space-x-3">
                  <i className="fas fa-envelope mt-1 text-purple-600 group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <span className="block text-sm text-slate-500 font-medium">Email</span>
                    <a 
                      href="mailto:hello@amyres.com" 
                      className="text-slate-700 hover:text-purple-600 transition-colors duration-300 font-inter"
                    >
                      hello@amyres.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4 font-poppins text-slate-800">Follow Us</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com/amyresagtech" 
                    className="social-link w-12 h-12 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://twitter.com/amyresagtech" 
                    className="social-link w-12 h-12 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center hover:from-blue-400 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/amyresagtech/" 
                    className="social-link w-12 h-12 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="https://instagram.com/amyresagtech" 
                    className="social-link w-12 h-12 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://youtube.com/@amyresagtech" 
                    className="social-link w-12 h-12 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl flex items-center justify-center hover:from-red-500 hover:to-red-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
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
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-600 font-inter">
                &copy; 2025 AMYRES AGTECH. All Rights Reserved.
              </p>
              <p className="text-emerald-600 text-sm font-semibold font-poppins">
                Research • Innovation • Development
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-300 font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-300 font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors duration-300 font-inter">
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
