
import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const productImages = [
    { src: '/images/1.png', alt: 'Research Database', caption: { title: 'Research Database', description: 'Access comprehensive agricultural research' } },
    { src: '/images/2.png', alt: 'AI-Powered Insights', caption: { title: 'AI-Powered Insights', description: 'Get personalized recommendations' } },
    { src: '/images/3.png', alt: 'Local Adaptation', caption: { title: 'Local Adaptation', description: 'Localized solutions for your region' } },
    { src: '/images/4.png', alt: 'Expert Network', caption: { title: 'Expert Network', description: 'Connect with agricultural experts' } },
    { src: '/images/5.png', alt: 'Data Analytics', caption: { title: 'Data Analytics', description: 'Track your farming progress' } },
    { src: '/images/6.png', alt: 'Market Information', caption: { title: 'Market Information', description: 'Stay updated with market trends' } },
    { src: '/images/7.png', alt: 'Community Forum', caption: { title: 'Community Forum', description: 'Share knowledge with other farmers' } }
  ];

  const features = [
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Recommendations',
      description: 'Get personalized farming advice based on your location, crop type, and farming practices using advanced AI algorithms.'
    },
    {
      icon: 'fas fa-database',
      title: 'Research Database',
      description: 'Access a comprehensive database of agricultural research findings, studies, and best practices from leading institutions.'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location-Based Solutions',
      description: 'Receive recommendations tailored to your specific geographical location and local farming conditions.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Analytics',
      description: 'Track your farming performance with detailed analytics and insights to optimize your agricultural practices.'
    }
  ];

  const handleLogin = () => {
    // Placeholder for login functionality
    console.log('Login functionality to be implemented');
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    console.log('Download functionality to be implemented');
  };

  return (
    <div className="products-page bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Products Introduction */}
        <section className="products-intro mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4 font-poppins text-center">
              Transforming Agriculture Through Technology
            </h2>
            <p className="text-lg text-gray-600 text-center font-inter">
              Discover our cutting-edge agricultural technology solutions designed to bridge the gap between research and practical farming applications.
            </p>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="product-showcase bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
          {/* Product Header */}
          <div className="product-header flex flex-col md:flex-row items-center gap-6 mb-8 pb-6 border-b-2 border-[#004aad]/10">
            <div className="product-logo">
              <img 
                src="/images/amyres-logo.png" 
                alt="AGReFIND App Icon" 
                className="w-20 h-20 rounded-xl shadow-lg object-contain"
              />
            </div>
            <div className="product-title text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#004aad] mb-2 font-poppins">AGReFIND</h2>
              <p className="text-lg text-gray-600 italic font-inter">
                Bridging the Gap Between Agricultural Research and Farmers
              </p>
            </div>
          </div>

          {/* Product Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Product Information */}
            <div className="product-info">
              <div className="product-description">
                <h3 className="text-2xl font-semibold text-[#004aad] mb-4 font-poppins">About AGReFIND</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-inter">
                  AGReFIND is an AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring access to actionable, up-to-date information, driving the adoption of effective agricultural innovations.
                </p>

                {/* Product Details */}
                <div className="space-y-6">
                  <div className="detail-item bg-[#004aad]/5 rounded-xl p-6 border-l-4 border-[#004aad]">
                    <h4 className="text-lg font-semibold text-[#004aad] mb-3 flex items-center gap-2 font-poppins">
                      <i className="fas fa-users"></i>
                      Target Users
                    </h4>
                    <ul className="space-y-2">
                      {['Smallholder farmers', 'Large scale farmers', 'Researchers', 'NGOs', 'Other agribusinesses'].map((user, index) => (
                        <li key={index} className="text-gray-700 flex items-center gap-2 font-inter">
                          <span className="text-[#7ed957] font-bold">✓</span>
                          {user}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-item bg-[#004aad]/5 rounded-xl p-6 border-l-4 border-[#004aad]">
                    <h4 className="text-lg font-semibold text-[#004aad] mb-3 flex items-center gap-2 font-poppins">
                      <i className="fas fa-bullseye"></i>
                      Our Goal
                    </h4>
                    <p className="text-gray-700 font-inter">
                      Increase the adoption of agricultural research findings among smallholder farmers, commercial farmers, NGOs, and research institutions in Kenya.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="product-actions flex flex-wrap gap-4 justify-center mt-8">
                  <button 
                    onClick={handleLogin}
                    className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                  >
                    <i className="fas fa-sign-in-alt"></i>
                    Login to AGReFIND
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
                  >
                    <i className="fas fa-download"></i>
                    Download App
                  </button>
                </div>
              </div>
            </div>

            {/* Product Showcase Carousel */}
            <div className="product-showcase-carousel">
              <div className="carousel-header text-center mb-6">
                <h3 className="text-xl font-semibold text-[#004aad] mb-2 font-poppins">App Features & Screenshots</h3>
                <p className="text-gray-600 font-inter">Explore the powerful features of AGReFIND</p>
              </div>
              <Carousel 
                images={productImages}
                autoPlay={true}
                interval={4000}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Key Features</h2>
            <p className="text-lg text-gray-600 font-inter">
              Discover what makes AGReFIND the perfect agricultural companion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-[#004aad]/5 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg border-2 border-transparent hover:border-[#004aad]/20"
              >
                <div className="feature-icon w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-inter">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="coming-soon-section bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">More Products Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            We're continuously developing new agricultural technology solutions to meet the evolving needs of farmers and agribusinesses.
          </p>
          
          <div className="upcoming-product inline-block bg-[#004aad]/5 rounded-xl p-8 border-2 border-dashed border-[#004aad]/30">
            <div className="product-placeholder w-16 h-16 bg-[#004aad]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mobile-alt text-[#004aad] text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#004aad] mb-2 font-poppins">Auditass</h3>
            <p className="text-gray-600 mb-4 font-inter">Agricultural audit and assessment platform</p>
            <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-4 py-2 rounded-full text-sm font-medium">
              In Development
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
