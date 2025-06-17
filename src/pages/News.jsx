
import React, { useState } from 'react';
import Carousel from '../components/Carousel';

const News = () => {
  const [expandedNews, setExpandedNews] = useState({});

  const newsItems = [
    {
      id: 'recent-projects',
      title: 'Recent Projects and Activities',
      date: 'April 1, 2025',
      images: [
        { src: '/images/Home.png', alt: 'Project Image 1' },
        { src: '/images/About.png', alt: 'Project Image 2' },
        { src: '/images/Contact.png', alt: 'Project Image 3' }
      ],
      summary: 'We are proud to announce the successful completion and launch of our website. We look forward to impactful engagements.',
      content: 'Check out our products and services and book a service.',
      expandedContent: 'This milestone represents a breakthrough in agricultural research, enabling better farm decision-making for increased productivity.'
    },
    {
      id: 'featured-service',
      title: 'Featured Service: Comprehensive Data Analytics',
      date: 'April 1, 2025',
      images: [
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
      ],
      summary: 'We have expanded our services to include advanced data analytics to help clients make informed decisions.',
      expandedContent: 'Our data analytics team is equipped with state-of-the-art tools to provide actionable insights.'
    },
    {
      id: 'industry-insights',
      title: 'Industry Insights',
      date: 'April 1, 2025',
      images: [
        { src: '/images/Industry-insights/1.png', alt: 'Industry Image 1' },
        { src: '/images/Industry-insights/2.png', alt: 'Industry Image 2' },
        { src: '/images/Industry-insights/3.png', alt: 'Industry Image 3' }
      ],
      summary: 'With advancements in artificial intelligence, agricultural research is experiencing a revolution in predictive analytics and decision-making.',
      expandedContent: 'AI-powered tools are now capable of analyzing extensive datasets for predictive insights, optimizing farming practices.'
    }
  ];

  const toggleReadMore = (newsId) => {
    setExpandedNews(prev => ({
      ...prev,
      [newsId]: !prev[newsId]
    }));
  };

  return (
    <div className="news-page bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* News Introduction */}
        <section className="news-intro mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4 font-poppins">
              News & Updates
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              "Stay informed with the latest developments from our research team."
            </p>
          </div>
        </section>

        {/* News Articles */}
        <section className="news-articles space-y-8">
          {newsItems.map((news, index) => (
            <article 
              key={news.id}
              className="news-item bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              {/* News Header */}
              <div className="news-header mb-6">
                <h2 className="text-2xl font-bold text-[#004aad] mb-2 font-poppins">{news.title}</h2>
                <p className="text-gray-600 flex items-center gap-2 font-inter">
                  <i className="fas fa-calendar text-[#7ed957]"></i>
                  Published on: {news.date}
                </p>
              </div>

              {/* News Content */}
              <div className="news-content grid md:grid-cols-2 gap-8 items-center">
                {/* Carousel */}
                <div className="news-carousel">
                  <Carousel 
                    images={news.images}
                    autoPlay={true}
                    interval={3000}
                  />
                </div>

                {/* News Text */}
                <div className="news-text space-y-4">
                  <p className="text-gray-700 leading-relaxed font-inter">{news.summary}</p>
                  {news.content && (
                    <p className="text-gray-700 leading-relaxed font-inter">{news.content}</p>
                  )}
                  
                  <button 
                    onClick={() => toggleReadMore(news.id)}
                    className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
                  >
                    {expandedNews[news.id] ? 'Read Less' : 'Read More'}
                  </button>

                  {expandedNews[news.id] && (
                    <div className="expanded-content mt-4 p-4 bg-[#004aad]/5 rounded-lg border-l-4 border-[#7ed957]">
                      <p className="text-gray-700 leading-relaxed font-inter">{news.expandedContent}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Newsletter Subscription */}
        <section className="newsletter-section bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#004aad] mb-4 font-poppins">Stay Updated</h2>
          <p className="text-gray-600 mb-6 font-inter">
            Subscribe to our newsletter to receive the latest news and updates from AMYRES AgTech.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent font-inter"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#7ed957] to-[#5cb85c] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 font-poppins"
            >
              <i className="fas fa-paper-plane"></i>
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default News;
