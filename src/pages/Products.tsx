
import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';

const Products: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const productImages = [
    { src: '/images/1.png', alt: 'AGReFIND Feature 1' },
    { src: '/images/2.png', alt: 'AGReFIND Feature 2' },
    { src: '/images/3.png', alt: 'AGReFIND Feature 3' },
    { src: '/images/4.png', alt: 'AGReFIND Feature 4' },
    { src: '/images/5.png', alt: 'AGReFIND Feature 5' },
    { src: '/images/6.png', alt: 'AGReFIND Feature 6' },
    { src: '/images/7.png', alt: 'AGReFIND Feature 7' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [productImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Primary Light Background */}
      <section className="bg-most-faded-green pt-20 pb-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">Our Products</span>
            </h1>
            <p className="text-body text-xl max-w-4xl mx-auto">
              We don't just deliver AgTech, we build it with you, for you
            </p>
          </div>
        </div>
      </section>

      {/* Products in Development Section */}
      <section className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              <span className="gradient-text">Products in Development</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">We're developing cutting-edge agricultural technology solutions to meet the evolving needs of farmers and agribusinesses.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* AGReFIND - Coming Soon */}
            <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 border-2 border-dashed border-amyres-green/30">
              <div className="w-20 h-20 bg-gradient-to-br from-amyres-green/20 to-amyres-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-mobile-alt text-amyres-green text-3xl"></i>
              </div>
              <h3 className="heading-md text-amyres-blue mb-4">AGReFIND</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring access to actionable, up-to-date information.
              </p>
              <div className="mb-6">
                <span className="bg-gradient-to-r from-amyres-green to-amyres-teal text-white px-6 py-3 rounded-full text-sm font-medium inline-block mb-4">
                  🚧 In Development
                </span>
                <div className="text-left space-y-2 max-w-sm mx-auto">
                  <p className="text-sm text-slate-600"><strong>Target Users:</strong></p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Smallholder farmers</li>
                    <li>• Large scale farmers</li>
                    <li>• Researchers & NGOs</li>
                    <li>• Agribusinesses</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="btn-modern bg-gray-400 text-white cursor-not-allowed" disabled>
                  <i className="fas fa-clock mr-2"></i>
                  Coming Soon
                </button>
                <p className="text-xs text-slate-500">Stay tuned for updates!</p>
              </div>
            </div>

            {/* Auditass - Coming Soon */}
            <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 border-2 border-dashed border-amyres-blue/30">
              <div className="w-20 h-20 bg-gradient-to-br from-amyres-blue/20 to-amyres-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clipboard-check text-amyres-blue text-3xl"></i>
              </div>
              <h3 className="heading-md text-amyres-blue mb-4">Auditass</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive agricultural audit and assessment platform for monitoring and evaluating farm operations and compliance.
              </p>
              <div className="mb-6">
                <span className="bg-gradient-to-r from-amyres-blue to-amyres-teal text-white px-6 py-3 rounded-full text-sm font-medium inline-block mb-4">
                  🔬 In Development
                </span>
                <div className="text-left space-y-2 max-w-sm mx-auto">
                  <p className="text-sm text-slate-600"><strong>Key Features:</strong></p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Farm audit management</li>
                    <li>• Compliance tracking</li>
                    <li>• Performance assessment</li>
                    <li>• Reporting & analytics</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="btn-modern bg-gray-400 text-white cursor-not-allowed" disabled>
                  <i className="fas fa-clock mr-2"></i>
                  Coming Soon
                </button>
                <p className="text-xs text-slate-500">Stay tuned for updates!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="text-center">
            <div className="glass rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-amyres-blue">
                Stay Updated on Our Product Development
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Be the first to know when our agricultural technology products launch. Join our newsletter for exclusive updates and early access opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-amyres-green/30 focus:outline-none focus:ring-2 focus:ring-amyres-green focus:border-transparent bg-white/80 backdrop-blur-sm"
                  required
                />
                <button className="btn-modern" style={{background: 'linear-gradient(135deg, #7ed957 0%, #004aad 100%)', color: 'white'}}>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
