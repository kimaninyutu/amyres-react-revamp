
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Primary Light Background */}
      <section className="bg-primary-light pt-20 pb-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">About AMYRES AgTech</span>
            </h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Bridging the gap between agricultural research and practical solutions for Kenyan farmers since 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section - White Background */}
      <section id="background" className="bg-white section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-history text-blue-600"></i> 
              <span className="gradient-text">Our Background</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="heading-md text-slate-800 mb-4">Our History</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    AMYRES AgTech is a startup contract research, innovation and consultancy organization established in 2023 in response to the growing need for a dedicated research organization that could <strong className="text-slate-800">bridge the gap between scientific research and practical, field-based solutions for Kenyan farmers.</strong>
                  </p>
                  <p>
                    The founders, a team of experienced professionals in agricultural science, data science and statistical programming, recognized that while Kenya had a strong base of agricultural research, much of the knowledge was not being effectively transferred to farmers or adapted to local contexts.
                  </p>
                  <p>
                    This created an urgent need for an organization that could work directly with farmers, and collaborate with local and international partners to <strong className="text-slate-800">translate research findings into actionable insights.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="heading-md text-slate-800 mb-4">Our Location</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our office is located in Nyeri, Central region of Kenya, giving us access to the country's leading research institutions, agribusiness hubs, and governmental bodies.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-modern-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.699613318311!2d36.97956397477642!3d-0.4419776995536805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182861e3fce0feb3%3A0x4c5d494ba5e19690!2sKenya%20School%20of%20Agriculture%2CNyeri-Wambugu%20Farm!5e0!3m2!1sen!2ske!4v1729251690706!5m2!1sen!2ske"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Secondary Light Background */}
      <section id="what-we-do" className="bg-secondary-light section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-cogs text-emerald-600"></i>
              <span className="gradient-text">What We Do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Agricultural Research and Technology Development</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a research-driven organization, AMYRES AgTech recognizes the critical role of research in value chain development within the agriculture sector. Research drives innovation, enhances efficiency, and creates sustainable solutions that benefit all stakeholders.
                </p>
                <p>
                  Given the challenges in agricultural data, AMYRES AgTech leverages cutting-edge technologies to deliver robust data and information management solutions. These include <strong className="text-slate-800">advanced farm management information systems (FMIS)</strong>, <strong className="text-slate-800">data analytics platforms powered by AI and machine learning</strong>, mobile farm advisory applications, <strong className="text-slate-800">blockchain-enabled market systems</strong>, and innovative Agri-finance technologies driven by <strong className="text-slate-800">fintech solutions</strong>.
                </p>
              </div>
            </div>
            <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-share-alt text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Knowledge and Technology Transfer</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  AMYRES AgTech is dedicated to ensuring that research findings/technologies are disseminated to farmers and other stakeholders. To enhance these efforts, AMYRES AgTech integrates digital solutions to increase productive efficiency, reduce resource waste, improve market access, and support sustainability.
                </p>
                <p>
                  Therefore, AMYRES AgTech works directly with farmers and collaborates with local and international stakeholders like researchers/scientists, input providers, extension service providers by identifying and addressing challenges at every stage of the value chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Accent Light Background */}
      <section id="mission-vision" className="bg-accent-light section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-bullseye text-purple-600"></i>
              <span className="gradient-text">Mission & Vision</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-target text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                At AMYRES AgTech, our mission is to enhance agricultural productivity and sustainability by making research-based knowledge and technologies accessible to every farmer, agribusiness, and stakeholder in Kenya.
              </p>
            </div>
            <div className="glass rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the leading catalyst for sustainable agricultural innovation in Kenya, empowering farmers, agribusinesses, and communities through research-driven solutions that increase productivity, promote environmental sustainability, and enhance food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - AgTech Gradient Background */}
      <section id="team" className="bg-agtech-gradient section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-users text-slate-700"></i>
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">The experts driving agricultural innovation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6"></div>
              <h3 className="heading-md text-slate-800 mb-4">Aoko Pauline</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm">Agriculturalist</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">UI/UX Developer</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Aoko collaborates with farmers to boost productivity through innovative, sustainable strategies while minimizing environmental impact. She leverages this expertise to design intuitive digital solutions.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mx-auto mb-6"></div>
              <h3 className="heading-md text-slate-800 mb-4">Joseph Onyango</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm">Data Scientist</span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm">GIS Specialist</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                With a background in natural resource management, Joseph leads our research data processing, transforming complex spatial and non-spatial datasets into actionable insights.
              </p>
            </div>
            <div className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-6"></div>
              <h3 className="heading-md text-slate-800 mb-4">Amisi Pascal</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">Statistical Programmer</span>
                <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-3 py-1 rounded-full text-sm">Biostatistician</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Amisi oversees our research design and analysis by leveraging his experience in processing complex data, developing predictive models and identifying patterns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
