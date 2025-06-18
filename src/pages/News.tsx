
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
    <div className="min-h-screen">
      {/* Hero Section - Primary Light Background */}
      <section className="bg-primary-light pt-20 pb-16">
        <div className="section-container">
          <div className="text-center">
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">News & Updates</span>
            </h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Stay informed with the latest developments from our research team.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Projects - White Background */}
      <article id="Recent-projects" className="bg-white section-padding">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-lg mb-4">Recent Projects and Activities</h2>
            <p className="text-slate-600 flex items-center gap-2">
              <i className="fas fa-calendar text-emerald-600"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-4">
              <Carousel 
                images={newsImages1}
                autoPlay={true}
                interval={4000}
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are proud to announce the successful completion and launch of our website. We look forward to impactful engagements.
                </p>
                <p>
                  Check out our products and services and book a service.
                </p>
              </div>
              <button 
                onClick={() => toggleExpanded('news1')}
                className="btn-modern btn-primary"
              >
                {expandedNews === 'news1' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news1' && (
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-slate-600 leading-relaxed">
                    This milestone represents a breakthrough in agricultural research, enabling better farm decision-making for increased productivity.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Featured Service - Secondary Light Background */}
      <article id="Featured-service" className="bg-secondary-light section-padding">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-lg mb-4">Featured Service: Comprehensive Data Analytics</h2>
            <p className="text-slate-600 flex items-center gap-2">
              <i className="fas fa-calendar text-emerald-600"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-4">
              <Carousel 
                images={featuredServiceImages}
                autoPlay={true}
                interval={3000}
              />
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                We have expanded our services to include advanced data analytics to help clients make informed decisions.
              </p>
              <button 
                onClick={() => toggleExpanded('news2')}
                className="btn-modern btn-secondary"
              >
                {expandedNews === 'news2' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news2' && (
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-slate-600 leading-relaxed">
                    Our data analytics team is equipped with state-of-the-art tools to provide actionable insights.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Industry Insights - Accent Light Background */}
      <article id="Industry-insights" className="bg-accent-light section-padding">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-lg mb-4">Industry Insights</h2>
            <p className="text-slate-600 flex items-center gap-2">
              <i className="fas fa-calendar text-emerald-600"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-2xl p-4">
              <Carousel 
                images={industryInsightsImages}
                autoPlay={true}
                interval={4500}
              />
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                With advancements in artificial intelligence, agricultural research is experiencing a revolution in predictive analytics and decision-making.
              </p>
              <button 
                onClick={() => toggleExpanded('news3')}
                className="btn-modern btn-primary"
              >
                {expandedNews === 'news3' ? 'Read Less' : 'Read More'}
              </button>
              {expandedNews === 'news3' && (
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-slate-600 leading-relaxed">
                    AI-powered tools are now capable of analyzing extensive datasets for predictive insights, optimizing farming practices.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default News;
