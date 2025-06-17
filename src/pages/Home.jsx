
import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselImages = [
    {
      src: '/images/Home.png',
      alt: 'AMYRES Home - Agricultural Innovation'
    },
    {
      src: '/images/About.png',
      alt: 'About AMYRES - Research Excellence'
    },
    {
      src: '/images/Contact.png',
      alt: 'Contact AMYRES - Get In Touch'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-poppins">
              Welcome to <span className="text-blue-600">AMYRES AGTECH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-inter">
              Your Research, Innovation and Development Partner
            </p>
            <p className="text-lg text-blue-700 font-medium italic">
              "Powering insightful innovations for sustainable agriculture"
            </p>
          </div>
          
          <div className="mb-12">
            <Carousel images={carouselImages} autoPlay={true} interval={4000} />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
              Transforming Agriculture Through Innovation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-microscope text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center font-poppins">
                  Research Excellence
                </h3>
                <p className="text-gray-600 text-center leading-relaxed font-inter">
                  Cutting-edge agricultural research and technology development to drive innovation 
                  in farming practices and sustainable agriculture.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-seedling text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center font-poppins">
                  Sustainable Solutions
                </h3>
                <p className="text-gray-600 text-center leading-relaxed font-inter">
                  Developing environmentally-friendly technologies and practices that promote 
                  sustainable farming while maintaining productivity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-users text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center font-poppins">
                  Knowledge Transfer
                </h3>
                <p className="text-gray-600 text-center leading-relaxed font-inter">
                  Bridging the gap between research and practice by delivering actionable 
                  insights to farmers and agricultural stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Ready to Transform Your Agricultural Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Join us in revolutionizing agriculture through research, innovation, and sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </a>
              <a 
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
