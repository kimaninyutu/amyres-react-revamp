
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Settings, 
  Box, 
  Newspaper,
  MapPin,
  Phone,
  Mail,
  Send,
  Code,
  Database,
  Briefcase,
  TrendingUp,
  Users
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out AMYRES AGTECH')}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`Check out AMYRES AGTECH: ${window.location.href}`)}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/amyres-logo.png" 
                alt="AMYRES AGTECH Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-poppins">AMYRES AGTECH</h3>
                <div className="text-sm text-blue-200">Research • Innovation • Consultancy</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading agricultural innovation through research, technology, and sustainable practices. 
              Empowering farmers and agribusinesses with data-driven solutions for a sustainable future.
            </p>

            {/* Newsletter Section */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="flex items-center space-x-2 text-lg font-semibold mb-3">
                <Mail size={16} />
                <span>Stay Updated</span>
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="flex items-center space-x-2 text-lg font-semibold mb-4">
              <Home size={16} />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Home size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Info size={14} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Settings size={14} />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Box size={14} />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Newspaper size={14} />
                  <span>News</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="flex items-center space-x-2 text-lg font-semibold mb-4">
              <Settings size={16} />
              <span>Services</span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#software-development" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Code size={14} />
                  <span>Software Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services#agri-data-management" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Database size={14} />
                  <span>Agri-Data Management</span>
                </Link>
              </li>
              <li>
                <Link to="/services#field-trials" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <TrendingUp size={14} />
                  <span>Field Trials</span>
                </Link>
              </li>
              <li>
                <Link to="/services#market-research" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <TrendingUp size={14} />
                  <span>Market Research</span>
                </Link>
              </li>
              <li>
                <Link to="/services#consultancy" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
                  <Briefcase size={14} />
                  <span>Consultancy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="flex items-center space-x-2 text-lg font-semibold mb-4">
              <Phone size={16} />
              <span>Contact Info</span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-sm text-gray-400">Address</span>
                  <a 
                    href="https://maps.google.com/?q=Nyeri,Kenya" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Nyeri, Kenya
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-sm text-gray-400">Phone</span>
                  <a 
                    href="tel:+254769125073" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +254-769-125-073
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <a 
                    href="mailto:hello@amyres.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    hello@amyres.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/amyresagtech" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-sm"></i>
                </a>
                <a 
                  href="https://twitter.com/amyresagtech" 
                  className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-sm"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/company/amyresagtech/" 
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-sm"></i>
                </a>
                <a 
                  href="https://instagram.com/amyresagtech" 
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a 
                  href="https://youtube.com/@amyresagtech" 
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube text-sm"></i>
                </a>
              </div>

              {/* Social Sharing */}
              <div className="mt-4">
                <h6 className="text-sm font-semibold mb-2">Share Our Website</h6>
                <div className="flex space-x-2">
                  <button 
                    onClick={shareOnFacebook}
                    className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Share on Facebook"
                  >
                    <i className="fab fa-facebook-f text-xs"></i>
                  </button>
                  <button 
                    onClick={shareOnTwitter}
                    className="w-8 h-8 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Share on Twitter"
                  >
                    <i className="fab fa-twitter text-xs"></i>
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="w-8 h-8 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Share on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-xs"></i>
                  </button>
                  <button 
                    onClick={shareOnWhatsApp}
                    className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label="Share on WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">&copy; 2025 AMYRES AGTECH. All Rights Reserved.</p>
            <p className="text-sm text-blue-200">Research • Innovation • Consultancy</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
