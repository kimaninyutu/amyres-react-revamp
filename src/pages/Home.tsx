
import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Leaf, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced agricultural data analysis and insights for informed decision-making.",
      color: "text-blue-600"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Promoting eco-friendly farming methods for long-term agricultural success.",
      color: "text-emerald-600"
    },
    {
      icon: Globe,
      title: "Research Innovation",
      description: "Cutting-edge research and development in agricultural technology.",
      color: "text-purple-600"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl floating"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section - White/Light Background */}
      <section className="section-container relative z-10 pt-20 lg:pt-32 pb-16 lg:pb-24">
        <div className="text-center animate-fadeInUp">
          <h1 className="heading-xl mb-8">
            Transforming Agriculture Through{' '}
            <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-body text-xl mb-12 max-w-4xl mx-auto">
            We're your trusted partner in agricultural research, innovation, and development. 
            Empowering farmers and agribusinesses with cutting-edge technology and data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services" className="btn-modern btn-primary group">
              <span className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link to="/contact" className="btn-modern btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Subtle Green Gradient Background */}
      <section className="bg-secondary-light section-padding">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                <div className="glass rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2 font-poppins">{stat.number}</h3>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Light Blue Gradient Background */}
      <section className="bg-accent-light section-padding">
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
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-modern flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="heading-md text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - AgTech Gradient Background */}
      <section className="bg-agtech-gradient section-padding">
        <div className="section-container">
          <div className="glass-strong rounded-3xl p-12 lg:p-16 animate-fadeInUp delay-500">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">
                <span className="gradient-text">Our Services</span>
              </h2>
              <p className="text-body max-w-3xl mx-auto">
                From software development to field trials, we offer comprehensive solutions for modern agriculture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 animate-slideInRight delay-${(index + 1) * 100}`}
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
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

      {/* CTA Section - Neutral Pattern Background */}
      <section className="bg-neutral-pattern section-padding">
        <div className="section-container">
          <div className="text-center animate-fadeInUp delay-600">
            <div className="glass rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6">
                Ready to Transform Your{' '}
                <span className="gradient-text">Agricultural Business?</span>
              </h2>
              <p className="text-body mb-8 max-w-2xl mx-auto">
                Join the growing number of farmers and agribusinesses who trust AMYRES AgTech for their research and development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-modern btn-primary group">
                  <span className="flex items-center gap-2">
                    Start Your Project
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

export default Home;
