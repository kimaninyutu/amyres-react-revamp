
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Primary Light Background */}
      <section className="bg-header-gradient pt-20 pb-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6 text-white">
              About AMYRES AGTECH
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              We don't just deliver AgTech, we build it with you, for you
            </p>
          </div>
        </div>
      </section>

      {/* Background Section - Faded Green Background */}
      <section id="background" className="bg-faded-green section-padding">
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
                    Amyres Agtech is an agritech research and innovation organization established in 2023 in response to the growing need for a dedicated research organization that could <strong className="text-slate-800">bridge the gap between scientific research and practical, field-based solutions for Kenyan farmers.</strong>
                  </p>
                  <p>
                    The founders, a team of experienced professionals in agricultural science, data science and statistical programming, recognized that while Kenya had a strong base of agricultural research, much of the knowledge was not being effectively transferred to farmers or adapted to local contexts.
                  </p>
                  <p>
                    This created an urgent need for an organization that could work directly with farmers/growers and collaborate with local and international partners to <strong className="text-slate-800">translate research findings into actionable insights.</strong>
                  </p>
                  <p>
                    We are committed to transforming agriculture through research, data and technology.
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

      {/* Mission Section - Most Faded Green Background */}
      <section id="mission" className="bg-most-faded-green section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-bullseye text-blue-600"></i>
              <span className="gradient-text">Our Mission</span>
            </h2>
          </div>
          <div className="glass rounded-3xl p-10 text-center hover:-translate-y-2 transition-all duration-500 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              To accelerate the adoption of sustainable agricultural innovations by integrating research, digital solutions and data intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section - Faded Green Background */}
      <section id="what-we-do" className="bg-faded-green section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 flex items-center justify-center gap-4">
              <i className="fas fa-cogs text-emerald-600"></i>
              <span className="gradient-text">What We Do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {/* Research and Innovation */}
            <div id="research" className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-microscope text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Research and Innovation</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We design and implement scientifically rigorous field trials to evaluate the performance of agro-inputs and post-harvest solutions. These trials not only generate high-quality data for regulatory registration but also provide insights that support farmer adoption and effective product positioning for agri-input companies and development partners.
                </p>
                <p>
                  Our research spans the entire agricultural value chain, addressing key issues such as input efficiency, crop and soil health, climate resilience, and post-harvest management. We work closely with farmers, agribusinesses, and stakeholders to ensure that our findings are actionable and context-specific.
                </p>
                <div className="bg-white/50 rounded-2xl p-6 mt-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Our Research Services:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Field trial design and management</li>
                    <li>Agronomic evaluations</li>
                    <li>Impact assessments</li>
                    <li>Evidence-based recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Tech Development */}
            <div id="tech" className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-laptop-code text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Tech Development</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  To complement our research, AMYRES AgTech develops and deploys contemporary digital technologies that promote sustainable and inclusive agriculture. Our digital innovation arm focuses on designing solutions that are co-created with end users and tailored for the realities of farming in Kenya and the region.
                </p>
                <p>
                  Through these solutions, we aim to modernize farming practices, enhance productivity, and make data-driven agriculture accessible and actionable for farmers at every scale.
                </p>
                <div className="bg-white/50 rounded-2xl p-6 mt-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Our Digital Product Suite:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>AI-powered decision support tools for crop diagnostics, yield forecasting, and climate-smart advisory</li>
                    <li>Farm Management Information Systems (FMIS) that help farmers and agribusinesses plan, track, and report farm operations more efficiently</li>
                    <li>Mobile farm advisory applications that deliver localized, real-time guidance on agronomic practices, pest alerts, and market prices</li>
                    <li>AI-driven chatbots, including WhatsApp-based assistants, that provide farmers with instant, 24/7 access to expert knowledge and support</li>
                    <li>Blockchain-backed market platforms that improve traceability, trust, and transparency across agricultural value chains</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Agri-Data Management */}
            <div id="data" className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-database text-white text-2xl"></i>
              </div>
              <h3 className="heading-md text-slate-800 mb-6">Agri-Data Management</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  At AMYRES AgTech, effective management of agricultural data is a core function that supports our research and digital innovation initiatives. We provide comprehensive agri-data management solutions designed to collect, store, analyze, and visualize complex datasets from farms, value chains, and markets.
                </p>
                <p>
                  Our services include the design and deployment of robust data infrastructure such as cloud-based databases and integrated platforms that ensure data integrity, security, and easy access. We apply advanced data analytics and machine learning to generate actionable insights for smarter decision-making across the agricultural ecosystem.
                </p>
                <div className="bg-white/50 rounded-2xl p-6 mt-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Offerings:</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Custom mobile data collection apps optimized for field conditions, enabling seamless gathering of agronomic, environmental, and market data</li>
                    <li>Centralized data warehouses that unify diverse data sources—ranging from satellite imagery to farm inputs—for comprehensive analysis</li>
                    <li>Interactive real-time dashboards built on platforms like Power BI and Tableau to monitor crop health, weather conditions, supply chains, and market dynamics</li>
                    <li>Predictive analytics models that forecast yields, detect pest and disease outbreaks, and anticipate market demand</li>
                    <li>Implementation of API-enabled data sharing systems that promote interoperability and collaboration among farmers, researchers, extension agents, and policymakers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Most Faded Green Background */}
      <section id="team" className="bg-most-faded-green section-padding">
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
                Aoko collaborates with farmers to boost productivity through innovative, sustainable strategies while minimizing environmental impact. She leverages this expertise to design intuitive digital solutions that address the unique challenges of targeted audiences, enhancing user engagement.
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
                With a background in natural resource management, Joseph leads our research data processing, transforming complex spatial and non-spatial datasets into actionable insights that guide field applications and resource management decisions.
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
                Amisi oversees our research design and analysis by leveraging his experience in processing complex data, developing predictive models and identifying patterns to generate actionable industry-insights through summary statistics, visualizations and comprehensive reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
