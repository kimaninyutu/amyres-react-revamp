
import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Leaf, BarChart3, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced agricultural data analysis and insights for informed decision-making.",
      color: "text-amyres-blue"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Promoting eco-friendly farming methods for long-term agricultural success.",
      color: "text-amyres-green"
    },
    {
      icon: Globe,
      title: "Research Innovation",
      description: "Cutting-edge research and development in agricultural technology.",
      color: "text-amyres-teal"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "5+", label: "Years Experience", icon: CheckCircle }
  ];

  const services = [
    "Software Development",
    "Agricultural Data Management", 
    "Field Trials & Research",
    "Market Research & Analysis",
    "Consultancy Services",
    "Literature Reviews"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements with AMYRES colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl floating" style={{background: 'radial-gradient(circle, rgba(0,74,173,0.2) 0%, rgba(0,151,178,0.1) 100%)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl floating-delayed" style={{background: 'radial-gradient(circle, rgba(126,217,87,0.2) 0%, rgba(0,151,178,0.1) 100%)'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl floating" style={{animationDelay: '4s', background: 'radial-gradient(circle, rgba(0,151,178,0.15) 0%, rgba(126,217,87,0.1) 100%)'}}></div>
      </div>

      {/* Discovery Call Section - FIRST SECTION */}
      <section className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="glass-strong rounded-3xl p-8 lg:p-12 bg-white/10 backdrop-blur-lg animate-fadeInUp">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-amyres-green" />
                <h2 className="heading-lg text-amyres-blue">
                  🚀 Ready to Transform Your Agricultural Operations?
                </h2>
              </div>
              
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                Join us for a <span className="text-amyres-green font-semibold">Complimentary Discovery Call</span> and discover how 
                AMYRES AGTECH can revolutionize your farming practices 
                with cutting-edge research and innovative solutions.
              </p>

              <div className="mb-8">
                <h3 className="text-amyres-blue text-xl font-semibold mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  {[
                    "✅ Personalized assessment of your agricultural challenges",
                    "✅ Expert insights on sustainable farming practices", 
                    "✅ Customized recommendations for your specific needs",
                    "✅ Introduction to our innovative AgTech solutions",
                    "✅ No obligation - completely FREE consultation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern group w-full justify-center mb-4" 
                style={{background: 'linear-gradient(135deg, #7ed957 0%, #004aad 100%)', color: 'white'}}
              >
                <span className="flex items-center gap-2">
                  📅 Book Your Discovery Call Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <p className="text-slate-600 text-center text-sm">Limited slots available - Book today!</p>
            </div>

            {/* Right Content - Discovery Call Visual */}
            <div className="glass rounded-3xl p-8 bg-amyres-green/20 backdrop-blur-sm animate-fadeInUp delay-200">
              <div className="text-center">
                <div className="discovery-video-container rounded-2xl overflow-hidden mb-6">
                  <video 
                    className="w-full h-auto discovery-video" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png" type="video/mp4" />
                    <div className="w-full h-64 bg-gradient-to-br from-amyres-green to-amyres-blue rounded-lg flex items-center justify-center">
                      <div className="text-6xl">🌱</div>
                    </div>
                  </video>
                </div>
                <h3 className="text-2xl font-bold text-amyres-blue mb-4">Complimentary Discovery</h3>
                <p className="text-slate-700 text-lg mb-6">
                  Transform your agricultural operations with our expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - AMYRES Green Background */}
      <section className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                <div className="glass-amyres rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white to-amyres-cream-solid flex items-center justify-center text-amyres-blue">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 font-poppins text-amyres-blue">{stat.number}</h3>
                  <p className="text-slate-700 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - AMYRES Pattern Background */}
      <section className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="heading-lg mb-6">
              <span className="gradient-text">Why Choose AMYRES AgTech?</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              We combine cutting-edge technology with deep agricultural expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group animate-fadeInUp delay-${(index + 2) * 100}`}
              >
                <div className="glass rounded-3xl p-8 h-full hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-amyres-cream-solid shadow-modern flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="heading-md mb-4">{feature.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - AMYRES Blue Background */}
      <section className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="glass-strong rounded-3xl p-12 lg:p-16 animate-fadeInUp delay-500">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 text-amyres-blue">
                <span className="text-amyres-green">Our Services</span>
              </h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                From software development to field trials, we offer comprehensive solutions for modern agriculture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 animate-slideInRight delay-${(index + 1) * 100}`}
                >
                  <CheckCircle className="w-6 h-6 text-amyres-green flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services" className="btn-modern btn-secondary group">
                <span className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - AMYRES Gradient Background */}
      <section className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="text-center animate-fadeInUp delay-600">
            <div className="glass rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-amyres-blue">
                Ready to Transform Your{' '}
                <span className="text-amyres-green">Agricultural Business?</span>
              </h2>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
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

export default Home;
