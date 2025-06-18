
import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';

const News: React.FC = () => {
  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const newsImages1 = [
    { src: '/images/Home.png', alt: 'Project Image 1' },
    { src: '/images/About.png', alt: 'Project Image 2' },
    { src: '/images/Contact.png', alt: 'Project Image 3' }
  ];

  const featuredServiceImages = [
    { src: '/images/FS/1.png', alt: 'Service Image 1' },
    { src: '/images/FS/2.png', alt: 'Service Image 2' },
    { src: '/images/FS/3.png', alt: 'Service Image 3' },
    { src: '/images/FS/4.png', alt: 'Service Image 4' },
    { src: '/images/FS/5.png', alt: 'Service Image 5' },
    { src: '/images/FS/6.png', alt: 'Service Image 6' },
    { src: '/images/FS/7.png', alt: 'Service Image 7' },
    { src: '/images/FS/8.png', alt: 'Service Image 8' },
    { src: '/images/FS/9.png', alt: 'Service Image 9' },
    { src: '/images/FS/10.png', alt: 'Service Image 10' },
    { src: '/images/FS/11.png', alt: 'Service Image 11' }
  ];

  const industryInsightsImages = [
    { src: '/images/Industry insights/1.png', alt: 'Industry Image 1' },
    { src: '/images/Industry insights/2.png', alt: 'Industry Image 2' },
    { src: '/images/Industry insights/3.png', alt: 'Industry Image 3' }
  ];

  const toggleExpanded = (newsId: string) => {
    setExpandedNews(expandedNews === newsId ? null : newsId);
  };

  return (
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">News & Updates</h2>
          <p className="text-xl text-gray-600 font-inter">
            "Stay informed with the latest developments from our research team."
          </p>
        </section>

        {/* Recent Projects */}
        <article id="Recent-projects" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#004aad] mb-2 font-poppins">Recent Projects and Activities</h2>
            <p className="text-gray-600 flex items-center gap-2 font-inter">
              <i className="fas fa-calendar text-[#7ed957]"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Carousel 
                images={newsImages1}
                autoPlay={true}
                interval={4000}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4 font-inter">
                We are proud to announce the successful completion and launch of our website. We look forward to impactful engagements.
              </p>
              <p className="text-gray-600 mb-4 font-inter">
                Check out our products and services and book a service.
              </p>
              <button 
                onClick={() => toggleExpanded('news1')}
                className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
              >
                {expandedNews === 'news1' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news1' && (
                <div className="mt-4 p-4 bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-lg">
                  <p className="text-gray-600 font-inter">
                    This milestone represents a breakthrough in agricultural research, enabling better farm decision-making for increased productivity.
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Featured Service */}
        <article id="Featured-service" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#004aad] mb-2 font-poppins">Featured Service: Comprehensive Data Analytics</h2>
            <p className="text-gray-600 flex items-center gap-2 font-inter">
              <i className="fas fa-calendar text-[#7ed957]"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Carousel 
                images={featuredServiceImages}
                autoPlay={true}
                interval={3000}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4 font-inter">
                We have expanded our services to include advanced data analytics to help clients make informed decisions.
              </p>
              <button 
                onClick={() => toggleExpanded('news2')}
                className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
              >
                {expandedNews === 'news2' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news2' && (
                <div className="mt-4 p-4 bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-lg">
                  <p className="text-gray-600 font-inter">
                    Our data analytics team is equipped with state-of-the-art tools to provide actionable insights.
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Industry Insights */}
        <article id="Industry-insights" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#004aad] mb-2 font-poppins">Industry Insights</h2>
            <p className="text-gray-600 flex items-center gap-2 font-inter">
              <i className="fas fa-calendar text-[#7ed957]"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Carousel 
                images={industryInsightsImages}
                autoPlay={true}
                interval={4500}
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4 font-inter">
                With advancements in artificial intelligence, agricultural research is experiencing a revolution in predictive analytics and decision-making.
              </p>
              <button 
                onClick={() => toggleExpanded('news3')}
                className="bg-gradient-to-r from-[#0097b2] to-[#004aad] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
              >
                {expandedNews === 'news3' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news3' && (
                <div className="mt-4 p-4 bg-gradient-to-br from-[#0097b2]/10 to-[#004aad]/10 rounded-lg">
                  <p className="text-gray-600 font-inter">
                    AI-powered tools are now capable of analyzing extensive datasets for predictive insights, optimizing farming practices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default News;
