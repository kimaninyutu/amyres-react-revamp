
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, BarChart3, Globe } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - AMYRES Cream Background */}
      <section className="bg-amyres-cream section-container relative z-10 pt-8 lg:pt-16 pb-16 lg:pb-24">
        <div className="text-center animate-fadeInUp">
          <h1 className="heading-xl mb-8">
            Welcome to{' '}
            <span className="gradient-text">AMYRES AGTECH</span>
          </h1>
          <p className="text-body text-xl mb-12 max-w-4xl mx-auto">
            Your trusted partner in agricultural research, innovation, and development. 
            Empowering farmers and agribusinesses with cutting-edge technology and data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

      {/* CTA Section - AMYRES Gradient Background */}
      <section className="bg-amyres-gradient section-padding">
        <div className="section-container">
          <div className="text-center animate-fadeInUp delay-600">
            <div className="glass rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-white">
                Ready to Transform Your{' '}
                <span className="text-amyres-green">Agricultural Business?</span>
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the growing number of farmers and agribusinesses who trust AMYRES AgTech for their research and development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-modern group" style={{background: 'linear-gradient(135deg, #7ed957 0%, #004aad 100%)', color: 'white'}}>
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link to="/about" className="btn-modern bg-white text-amyres-blue hover:bg-amyres-cream-solid">
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
