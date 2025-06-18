
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
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Products Introduction */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Transforming Agriculture Through Technology</h2>
          <p className="text-xl text-gray-600 font-inter">
            Discover our cutting-edge agricultural technology solutions designed to bridge the gap between research and practical farming applications.
          </p>
        </section>

        {/* AGReFIND Product Showcase */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-6 border-b-2 border-[#004aad]/10">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl"></div>
            <div>
              <h2 className="text-3xl font-bold text-[#004aad] mb-2 font-poppins">AGReFIND</h2>
              <p className="text-xl text-gray-600 font-inter italic">Bridging the Gap Between Agricultural Research and Farmers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-4 font-poppins">About AGReFIND</h3>
              <p className="text-gray-600 mb-6 font-inter">
                AGReFIND is an AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring access to actionable, up-to-date information, driving the adoption of effective agricultural innovations.
              </p>

              <div className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins flex items-center gap-2">
                  <i className="fas fa-users"></i> Target Users
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 flex items-center gap-2 font-inter">
                    <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                    Smallholder farmers
                  </li>
                  <li className="text-gray-600 flex items-center gap-2 font-inter">
                    <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                    Large scale farmers
                  </li>
                  <li className="text-gray-600 flex items-center gap-2 font-inter">
                    <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                    Researchers
                  </li>
                  <li className="text-gray-600 flex items-center gap-2 font-inter">
                    <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                    NGOs
                  </li>
                  <li className="text-gray-600 flex items-center gap-2 font-inter">
                    <span className="w-2 h-2 bg-[#7ed957] rounded-full"></span>
                    Other agribusinesses
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins flex items-center gap-2">
                  <i className="fas fa-bullseye"></i> Our Goal
                </h4>
                <p className="text-gray-600 font-inter">
                  Increase the adoption of agricultural research findings among smallholder farmers, commercial farmers, NGOs, and research institutions in Kenya.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins flex items-center justify-center gap-2">
                  <i className="fas fa-sign-in-alt"></i>
                  Login to AGReFIND
                </button>
                <button className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins flex items-center justify-center gap-2">
                  <i className="fas fa-download"></i>
                  Download App
                </button>
              </div>
            </div>

            <div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#004aad] mb-2 font-poppins">App Features & Screenshots</h3>
                <p className="text-gray-600 font-inter">Explore the powerful features of AGReFIND</p>
              </div>
              <Carousel 
                images={productImages}
                autoPlay={true}
                interval={5000}
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Key Features</h2>
            <p className="text-xl text-gray-600 font-inter">Discover what makes AGReFIND the perfect agricultural companion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">AI-Powered Recommendations</h3>
              <p className="text-gray-600 font-inter">Get personalized farming advice based on your location, crop type, and farming practices using advanced AI algorithms.</p>
            </div>
            <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">Research Database</h3>
              <p className="text-gray-600 font-inter">Access a comprehensive database of agricultural research findings, studies, and best practices from leading institutions.</p>
            </div>
            <div className="bg-gradient-to-br from-[#0097b2]/10 to-[#004aad]/10 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097b2] to-[#004aad] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">Location-Based Solutions</h3>
              <p className="text-gray-600 font-inter">Receive recommendations tailored to your specific geographical location and local farming conditions.</p>
            </div>
            <div className="bg-gradient-to-br from-[#004aad]/10 to-[#7ed957]/10 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#7ed957] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">Performance Analytics</h3>
              <p className="text-gray-600 font-inter">Track your farming performance with detailed analytics and insights to optimize your agricultural practices.</p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">More Products Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8 font-inter">
            We're continuously developing new agricultural technology solutions to meet the evolving needs of farmers and agribusinesses.
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl p-6 border-2 border-dashed border-[#004aad]/30 min-w-[250px]">
              <div className="w-16 h-16 bg-[#004aad]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-mobile-alt text-[#004aad] text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-[#004aad] mb-3 font-poppins">Auditass</h3>
              <p className="text-gray-600 mb-4 font-inter">Agricultural audit and assessment platform</p>
              <span className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-4 py-2 rounded-full text-sm font-medium font-poppins">
                In Development
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
