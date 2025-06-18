
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004aad] via-[#0097b2] to-[#7ed957] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl floating"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7ed957]/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#0097b2]/10 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24 animate-fadeInUp">
          <div className="glass rounded-3xl p-16 max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight">
              <span className="gradient-text">AMYRES</span>
              <br />
              <span className="text-white text-4xl md:text-5xl font-light">AgTech</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              Powering insightful innovations for sustainable agriculture
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Bridging the gap between agricultural research and practical farming solutions through cutting-edge technology and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-modern btn-primary text-xl">
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
              </button>
              <button className="btn-modern btn-secondary text-xl">
                <span className="relative z-10">View Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-modern animate-fadeInUp delay-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-[#004aad] font-poppins">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To enhance agricultural productivity and sustainability by making research-based knowledge and technologies accessible to every farmer, agribusiness, and stakeholder in Kenya.
              </p>
            </div>

            <div className="card-modern animate-fadeInUp delay-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0097b2] to-[#7ed957] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-white text-3xl">🔮</span>
                </div>
                <h2 className="text-3xl font-bold text-[#004aad] font-poppins">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading catalyst for sustainable agricultural innovation in Kenya, empowering farmers through research-driven solutions that enhance food security.
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="mb-24 animate-fadeInUp delay-400">
          <div className="glass rounded-3xl p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold font-poppins mb-6">
                <span className="gradient-text">Our Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive agricultural research and technology solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧪",
                  title: "Field Trials",
                  description: "Comprehensive experimental trials across Kenya's agroecological zones",
                  color: "from-[#004aad] to-[#0097b2]"
                },
                {
                  icon: "📊",
                  title: "Data Analytics",
                  description: "Transform agricultural data into actionable insights with advanced analytics",
                  color: "from-[#0097b2] to-[#7ed957]"
                },
                {
                  icon: "🔬",
                  title: "Research Services",
                  description: "Literature reviews and market research for informed decision making",
                  color: "from-[#7ed957] to-[#5cb85c]"
                },
                {
                  icon: "📱",
                  title: "App Development",
                  description: "Custom agricultural applications with user-centric design and testing",
                  color: "from-[#5cb85c] to-[#004aad]"
                },
                {
                  icon: "💡",
                  title: "Consultancy",
                  description: "Expert guidance for agricultural innovation and development strategies",
                  color: "from-[#004aad] to-[#7ed957]"
                },
                {
                  icon: "🎓",
                  title: "Training",
                  description: "Capacity building and skills development programs for agricultural stakeholders",
                  color: "from-[#7ed957] to-[#0097b2]"
                }
              ].map((service, index) => (
                <div key={index} className="glass rounded-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#004aad] mb-4 font-poppins">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product - AGReFIND */}
        <section className="mb-24 animate-fadeInUp delay-500">
          <div className="glass rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#004aad] to-[#7ed957] rounded-3xl flex items-center justify-center mb-6 shadow-glow floating">
                    <span className="text-white text-4xl">📱</span>
                  </div>
                  <h2 className="text-4xl font-bold font-poppins mb-4">
                    <span className="gradient-text">AGReFIND</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Bridging the Gap Between Agricultural Research and Farmers
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  An AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring access to actionable, up-to-date information.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-modern btn-primary">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
                  </button>
                  <button className="btn-modern bg-white/20 backdrop-blur-sm text-[#004aad] border border-white/30 hover:bg-white/30">
                    Download App
                  </button>
                </div>
              </div>

              <div className="glass-dark rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-[#004aad]/20 to-[#7ed957]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-[#004aad] to-[#7ed957] rounded-3xl flex items-center justify-center mx-auto mb-6 floating">
                      <span className="text-white text-6xl">📱</span>
                    </div>
                    <p className="text-white text-xl font-semibold">AGReFIND App Preview</p>
                    <p className="text-white/70 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center animate-fadeInUp delay-600">
          <div className="glass rounded-3xl p-16">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              <span className="gradient-text">Ready to Transform Your Agriculture?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Join hundreds of farmers and agribusinesses who trust AMYRES AgTech for innovative agricultural solutions.
            </p>
            <button className="btn-modern btn-primary text-xl">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
