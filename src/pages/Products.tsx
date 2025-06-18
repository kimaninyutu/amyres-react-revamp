
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
      <section className="bg-primary-light pt-20 pb-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">Transforming Agriculture Through Technology</span>
            </h1>
            <p className="text-body text-xl max-w-4xl mx-auto">
              Discover our cutting-edge agricultural technology solutions designed to bridge the gap between research and practical farming applications.
            </p>
          </div>
        </div>
      </section>

      {/* AGReFIND Product Showcase - White Background */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12 pb-8 border-b-2 border-slate-200">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
            </div>
            <div>
              <h2 className="heading-lg mb-4">AGReFIND</h2>
              <p className="text-body italic">Bridging the Gap Between Agricultural Research and Farmers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="heading-md text-slate-800 mb-4">About AGReFIND</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  AGReFIND is an AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring access to actionable, up-to-date information, driving the adoption of effective agricultural innovations.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
                  <i className="fas fa-users text-blue-600"></i> Target Users
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Smallholder farmers', 'Large scale farmers', 'Researchers', 'NGOs', 'Other agribusinesses'].map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-600">{user}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
                  <i className="fas fa-bullseye text-emerald-600"></i> Our Goal
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Increase the adoption of agricultural research findings among smallholder farmers, commercial farmers, NGOs, and research institutions in Kenya.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-modern btn-primary flex items-center justify-center gap-2">
                  <i className="fas fa-sign-in-alt"></i>
                  Login to AGReFIND
                </button>
                <button className="btn-modern btn-secondary flex items-center justify-center gap-2">
                  <i className="fas fa-download"></i>
                  Download App
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="heading-md text-slate-800 mb-2">App Features & Screenshots</h3>
                <p className="text-slate-600">Explore the powerful features of AGReFIND</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <Carousel 
                  images={productImages}
                  autoPlay={true}
                  interval={5000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Secondary Light Background */}
      <section className="bg-secondary-light section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">
              <span className="gradient-text">Key Features</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">Discover what makes AGReFIND the perfect agricultural companion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">AI-Powered Recommendations</h3>
              <p className="text-slate-600 leading-relaxed">Get personalized farming advice based on your location, crop type, and farming practices using advanced AI algorithms.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-database text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Research Database</h3>
              <p className="text-slate-600 leading-relaxed">Access a comprehensive database of agricultural research findings, studies, and best practices from leading institutions.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Location-Based Solutions</h3>
              <p className="text-slate-600 leading-relaxed">Receive recommendations tailored to your specific geographical location and local farming conditions.</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Performance Analytics</h3>
              <p className="text-slate-600 leading-relaxed">Track your farming performance with detailed analytics and insights to optimize your agricultural practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Accent Light Background */}
      <section className="bg-accent-light section-padding">
        <div className="section-container">
          <div className="text-center">
            <h2 className="heading-lg mb-6">
              <span className="gradient-text">More Products Coming Soon</span>
            </h2>
            <p className="text-body mb-12 max-w-3xl mx-auto">
              We're continuously developing new agricultural technology solutions to meet the evolving needs of farmers and agribusinesses.
            </p>
            <div className="flex justify-center">
              <div className="glass rounded-2xl p-10 border-2 border-dashed border-blue-300 min-w-[300px] hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
                </div>
                <h3 className="heading-md text-slate-800 mb-4">Auditass</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">Agricultural audit and assessment platform</p>
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
