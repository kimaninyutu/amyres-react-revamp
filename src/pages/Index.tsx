
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, BarChart3, Globe, CheckCircle, Rocket } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue-Green Gradient Background */}
      <section className="bg-amyres-gradient section-container relative z-10 pt-8 lg:pt-16 pb-16 lg:pb-24 min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center animate-fadeInUp mb-16">
            <h1 className="heading-xl mb-8 text-white">
              Welcome to{' '}
              <span className="text-amyres-green font-bold">AMYRES AGTECH</span>
            </h1>
            <p className="text-white/90 text-xl mb-12 max-w-4xl mx-auto">
              Powering insightful innovations for sustainable agriculture
            </p>
            <p className="text-white/80 text-lg italic mb-12 max-w-3xl mx-auto">
              "We don't just deliver AgTech, we build it with you, for you"
            </p>
          </div>

          {/* Discovery Call Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="glass-strong rounded-3xl p-8 lg:p-12 bg-white/10 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-amyres-green" />
                <h2 className="heading-lg text-white">
                  Ready to Transform Your Agricultural Operations?
                </h2>
              </div>
              
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Join us for a <span className="text-amyres-green font-semibold">Complimentary Discovery Call</span> and discover how 
                AMYRES AGTECH can revolutionize your farming practices 
                with cutting-edge research and innovative solutions.
              </p>

              <div className="mb-8">
                <h3 className="text-amyres-green text-xl font-semibold mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  {[
                    "Personalized assessment of your agricultural challenges",
                    "Expert insights on sustainable farming practices", 
                    "Customized recommendations for your specific needs",
                    "Introduction to our innovative AgTech solutions",
                    "No obligation - initial consultation provided"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amyres-green flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-modern group w-full justify-center" style={{background: 'linear-gradient(135deg, #7ed957 0%, #004aad 100%)', color: 'white'}}>
                <span className="flex items-center gap-2">
                  📅 BOOK YOUR DISCOVERY CALL NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Right Content - Discovery Call Visual */}
            <div className="glass rounded-3xl p-8 bg-amyres-green/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-block p-6 rounded-full bg-amyres-green/30 mb-6">
                  <div className="text-6xl">🌱</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Complimentary Discovery</h3>
                <p className="text-white/90 text-lg mb-6">
                  Transform your agricultural operations with our expert guidance
                </p>
                
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-amyres-green font-semibold text-lg mb-3">ROI:</h4>
                  <ul className="text-white/90 text-left space-y-2">
                    <li>- Spot inefficiencies and boost productivity</li>
                    <li>- Customized plan on where tech can help</li>
                    <li>- Expert insights backed by your experience</li>
                    <li>- Enhanced investor readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - AMYRES Pattern Background */}
      <section className="bg-amyres-pattern section-padding">
        <div className="section-container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="heading-lg mb-6">
              <span className="gradient-text">Our Expertise</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              We combine cutting-edge technology with deep agricultural expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group animate-fadeInUp delay-200">
              <div className="glass rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-amyres-cream-solid shadow-modern flex items-center justify-center mb-6 text-amyres-blue group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="heading-md mb-4">Data Analytics</h3>
                <p className="text-slate-700 leading-relaxed">Advanced agricultural data analysis and insights for informed decision-making.</p>
              </div>
            </div>

            <div className="group animate-fadeInUp delay-300">
              <div className="glass rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-amyres-cream-solid shadow-modern flex items-center justify-center mb-6 text-amyres-green group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="heading-md mb-4">Sustainable Practices</h3>
                <p className="text-slate-700 leading-relaxed">Promoting eco-friendly farming methods for long-term agricultural success.</p>
              </div>
            </div>

            <div className="group animate-fadeInUp delay-400">
              <div className="glass rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-amyres-cream-solid shadow-modern flex items-center justify-center mb-6 text-amyres-teal group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="heading-md mb-4">Research Innovation</h3>
                <p className="text-slate-700 leading-relaxed">Cutting-edge research and development in agricultural technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section - AMYRES Cream Background */}
      <section className="bg-amyres-cream section-padding">
        <div className="section-container">
          <div className="text-center animate-fadeInUp delay-600">
            <div className="glass rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-amyres-blue">
                Start Your Agricultural{' '}
                <span className="text-amyres-green">Transformation Today</span>
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the growing number of farmers and agribusinesses who trust AMYRES AgTech for their research and development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services" className="btn-modern btn-primary group">
                  <span className="flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link to="/about" className="btn-modern btn-outline">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
