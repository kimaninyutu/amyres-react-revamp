
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white">
      {/* Wave Animation */}
      <div className="relative">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-current text-white opacity-20"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/images/amyres-logo.png" 
                alt="AMYRES AGTECH Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-poppins">AMYRES AGTECH</h3>
                <div className="text-[#7ed957] text-sm font-medium">Research • Innovation • Consultancy</div>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed font-inter">
              Leading agricultural innovation through research, technology, and sustainable practices. 
              Empowering farmers and agribusinesses with data-driven solutions for a sustainable future.
            </p>

            {/* Newsletter Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 font-poppins">
                <i className="fas fa-envelope mr-2"></i> Stay Updated
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800 border-0 focus:outline-none focus:ring-2 focus:ring-[#7ed957] font-inter"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#7ed957] hover:bg-[#5cb85c] px-4 py-2 rounded-lg transition-colors duration-300 font-medium font-poppins"
                >
                  <i className="fas fa-paper-plane mr-1"></i> Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              <i className="fas fa-link mr-2"></i> Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter">
                  <i className="fas fa-home mr-2"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter">
                  <i className="fas fa-info-circle mr-2"></i> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter">
                  <i className="fas fa-cogs mr-2"></i> Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter">
                  <i className="fas fa-box mr-2"></i> Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter">
                  <i className="fas fa-newspaper mr-2"></i> News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              <i className="fas fa-phone mr-2"></i> Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-[#7ed957]"></i>
                <div>
                  <span className="block text-sm text-white/70">Address</span>
                  <a 
                    href="https://maps.google.com/?q=Nyeri,Kenya" 
                    className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Nyeri, Kenya
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone mt-1 text-[#7ed957]"></i>
                <div>
                  <span className="block text-sm text-white/70">Phone</span>
                  <a 
                    href="tel:+254769125073" 
                    className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter"
                  >
                    +254-769-125-073
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope mt-1 text-[#7ed957]"></i>
                <div>
                  <span className="block text-sm text-white/70">Email</span>
                  <a 
                    href="mailto:hello@amyres.com" 
                    className="text-white/90 hover:text-[#7ed957] transition-colors duration-300 font-inter"
                  >
                    hello@amyres.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 font-poppins">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/amyresagtech" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7ed957] transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://twitter.com/amyresagtech" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7ed957] transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/company/amyresagtech/" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7ed957] transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://instagram.com/amyresagtech" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7ed957] transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://youtube.com/@amyresagtech" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7ed957] transition-colors duration-300"
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
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-white/90 font-inter">&copy; 2025 AMYRES AGTECH. All Rights Reserved.</p>
            <p className="text-[#7ed957] text-sm font-medium">Research • Innovation • Consultancy</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-[#7ed957] transition-colors duration-300 font-inter">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-[#7ed957] transition-colors duration-300 font-inter">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-[#7ed957] transition-colors duration-300 font-inter">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
