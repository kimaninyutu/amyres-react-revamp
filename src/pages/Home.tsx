
import React from 'react';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  const heroImages = [
    { src: '/images/Home.png', alt: 'AMYRES AgTech Home' },
    { src: '/images/About.png', alt: 'About AMYRES AgTech' },
    { src: '/images/Contact.png', alt: 'Contact AMYRES AgTech' }
  ];

  return (
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Carousel */}
        <section className="mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-[#004aad] mb-4 font-poppins">
                Welcome to AMYRES AGTECH
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-inter">
                "Powering insightful innovations for sustainable agriculture"
              </p>
            </div>
            
            <Carousel 
              images={heroImages}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#004aad] text-center mb-8 font-poppins">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-seedling text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Research & Innovation</h3>
                <p className="text-gray-600 font-inter">Cutting-edge agricultural research and technology development for sustainable farming practices.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mobile-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Digital Solutions</h3>
                <p className="text-gray-600 font-inter">Advanced farm management systems and AI-powered agricultural applications.</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-[#0097b2]/10 to-[#004aad]/10 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0097b2] to-[#004aad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Consultancy</h3>
                <p className="text-gray-600 font-inter">Expert consulting services for agribusinesses, researchers, and development organizations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section>
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">
              Ready to Transform Your Agricultural Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-inter">
              Partner with us to unlock the potential of research-driven agricultural solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
              >
                Explore Our Services
              </a>
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
