
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
      {/* Hero Section - Faded Blue Gradient Header */}
      <section className="bg-header-gradient section-container relative z-10 pt-8 lg:pt-16 pb-16 lg:pb-24">
        <div className="text-center animate-fadeInUp">
          <h1 className="heading-xl mb-6 text-white">
            News & Updates
          </h1>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            "We don't just deliver AgTech, we build it with you, for you"
          </p>
        </div>
      </section>

      {/* Featured Discovery Call Announcement - Most Faded Green Background */}
      <article className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="glass-strong rounded-3xl p-12 lg:p-16 animate-fadeInUp">
            <div className="mb-8 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amyres-green to-amyres-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </div>
              <h2 className="heading-lg mb-4 text-amyres-blue">
                🚀 NEW: Complimentary Discovery Call Available!
              </h2>
              <p className="text-slate-700 flex items-center gap-2 font-medium">
                <i className="fas fa-calendar text-amyres-teal"></i>
                Published on: January 2025
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-2xl p-4 bg-white/50 backdrop-blur-sm">
                <div className="discovery-video-container rounded-2xl overflow-hidden aspect-video">
                  <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                  >
                    <source src="/videos/discovery-call.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                  <p>
                    <strong>Ready to Transform Your Agricultural Operations?</strong>
                  </p>
                  <p>
                    We're excited to announce that AMYRES AGTECH is now offering <strong> Complimentary Discovery Calls</strong> to help farmers and agribusinesses revolutionize their operations with cutting-edge research and innovative solutions.
                  </p>
                  
                  <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-amyres-blue text-lg font-semibold mb-3">What You'll Get in Your Discovery Call:</h3>
                    <ul className="text-slate-700 space-y-2">
                      <li>✅ Personalized assessment of your agricultural challenges</li>
                      <li>✅ Expert insights on sustainable farming practices</li>
                      <li>✅ Customized recommendations for your specific needs</li>
                      <li>✅ Introduction to our innovative AgTech solutions</li>
                      <li>✅ No obligation - completely FREE consultation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-modern btn-primary group inline-flex"
                  >
                    <span className="flex items-center gap-2">
                      📅 Book Your Discovery Call Now
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </a>
                  <p className="text-slate-600 text-sm mt-2">Limited slots available - Book today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Recent Projects - Faded Green Background */}
      <article id="Recent-projects" className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-lg mb-4 text-amyres-blue">Recent Projects and Activities</h2>
            <p className="text-slate-700 flex items-center gap-2 font-medium">
              <i className="fas fa-calendar text-amyres-teal"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-amyres rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500">
              <Carousel 
                images={newsImages1}
                autoPlay={true}
                interval={4000}
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                <p>
                  We are proud to announce the successful completion and launch of our website. We look forward to impactful engagements.
                </p>
                <p>
                  Check out our products and services and book a service.
                </p>
              </div>
              <button 
                onClick={() => toggleExpanded('news1')}
                className="btn-modern btn-primary group"
              >
                <span className="flex items-center gap-2">
                  {expandedNews === 'news1' ? 'Read Less' : 'Read More'}
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
              {expandedNews === 'news1' && (
                <div className="glass-amyres rounded-2xl p-6 mt-4 animate-fadeInUp">
                  <p className="text-slate-700 leading-relaxed">
                    This milestone represents a breakthrough in agricultural research, enabling better farm decision-making for increased productivity.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Featured Service - Most Faded Green Background */}
      <article id="Featured-service" className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-lg mb-4 text-amyres-blue">Featured Service: Comprehensive Data Analytics</h2>
            <p className="text-slate-700 flex items-center gap-2 font-medium">
              <i className="fas fa-calendar text-amyres-teal"></i>
              Published on: April 1, 2025
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500">
              <Carousel 
                images={featuredServiceImages}
                autoPlay={true}
                interval={3000}
              />
            </div>
            <div className="space-y-6">
              <p className="text-slate-700 leading-relaxed text-lg">
                We have expanded our services to include advanced data analytics to help clients make informed decisions.
              </p>
              <button 
                onClick={() => toggleExpanded('news2')}
                className="btn-modern btn-secondary group"
              >
                <span className="flex items-center gap-2">
                  {expandedNews === 'news2' ? 'Read Less' : 'Read More'}
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
              {expandedNews === 'news2' && (
                <div className="glass rounded-2xl p-6 mt-4 animate-fadeInUp">
                  <p className="text-slate-700 leading-relaxed">
                    Our data analytics team is equipped with state-of-the-art tools to provide actionable insights.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Industry Insights - Faded Green Background */}
      <article id="Industry-insights" className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="glass-strong rounded-3xl p-12 lg:p-16 animate-fadeInUp">
            <div className="mb-8">
              <h2 className="heading-lg mb-4 text-amyres-blue">
                Industry Insights
              </h2>
              <p className="text-slate-700 flex items-center gap-2 font-medium">
                <i className="fas fa-calendar text-amyres-teal"></i>
                Published on: April 1, 2025
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-2xl p-4 bg-white/50 backdrop-blur-sm">
                <Carousel 
                  images={industryInsightsImages}
                  autoPlay={true}
                  interval={4500}
                />
              </div>
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  With advancements in artificial intelligence, agricultural research is experiencing a revolution in predictive analytics and decision-making.
                </p>
                <button 
                  onClick={() => toggleExpanded('news3')}
                  className="btn-modern btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    {expandedNews === 'news3' ? 'Read Less' : 'Read More'}
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </button>
                {expandedNews === 'news3' && (
                  <div className="glass rounded-2xl p-6 mt-4 bg-white/70 backdrop-blur-sm animate-fadeInUp">
                    <p className="text-slate-700 leading-relaxed">
                      AI-powered tools are now capable of analyzing extensive datasets for predictive insights, optimizing farming practices.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default News;
