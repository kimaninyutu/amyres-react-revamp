import type React from "react"

const About: React.FC = () => {
  return (
      <div className="min-h-screen">
        {/* Section 1: Hero - Blue/Emerald Gradient with Geometric Pattern */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-600 to-emerald-600 overflow-hidden">
          {/* Enhanced Geometric Background Elements */}
          <div className="absolute inset-0">
            {/* Large floating circles */}
            <div className="absolute top-8 left-10 w-32 h-32 bg-white/8 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-16 right-16 w-40 h-40 bg-emerald-300/12 rounded-full blur-xl"></div>
            <div className="absolute bottom-12 left-1/4 w-24 h-24 bg-blue-300/15 rounded-full blur-lg"></div>
            <div className="absolute bottom-8 right-12 w-36 h-36 bg-white/10 rounded-full blur-2xl"></div>

            {/* Geometric shapes */}
            <div className="absolute top-12 left-1/3 w-16 h-16 bg-emerald-300/20 rotate-45 rounded-2xl blur-sm"></div>
            <div className="absolute bottom-16 right-1/3 w-20 h-20 bg-blue-300/18 rotate-12 rounded-2xl blur-md"></div>

            {/* Hexagonal and diamond patterns */}
            <div className="absolute top-20 right-1/4 w-18 h-18 bg-white/15 clip-hexagon"></div>
            <div className="absolute bottom-20 left-1/2 w-14 h-14 bg-emerald-400/25 clip-hexagon rotate-30"></div>

            {/* Small floating elements */}
            <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-white/20 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-emerald-300/30 rounded-full animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">About AMYRES AGTECH</h1>
              <p className="text-lg text-white/90 drop-shadow-sm">
                "We don't just deliver AgTech, we build it with you, for you"
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Background - White with Subtle Grid Pattern */}
        <section id="background" className="relative py-12 md:py-20 bg-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
                className="w-full h-full"
                style={{
                  backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                <i className="fas fa-history text-blue-600"></i>
                Our Background
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Our History</h3>
                  <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                    <p>
                      At Amyres Agtech, we believe the knowledge and innovation to transform agriculture already exists —
                      in our research institutions, our farms, and our agribusinesses. But without the right bridge, that
                      knowledge remains untapped.
                    </p>
                    <p>
                      That's why we founded Amyres in 2023 — to close the gap between research, technology, and real-world
                      agricultural success. We translate scientific research, data, and technology into practical tools
                      and insights that empower farmers, growers, and agribusinesses to boost productivity, reduce risks,
                      and unlock new opportunities.
                    </p>
                    <p>
                      Our team blends experts in agricultural science, data science, and software development to deliver
                      solutions that are innovative, adaptable, and grounded in the realities of Kenyan agriculture.
                    </p>
                    <p>
                      Based in Nyeri — the heart of Kenya's agricultural ecosystem — we work alongside farmers/growers
                      cooperatives, exporters, input suppliers and other value chain actors to ensure good ideas don't
                      stay stuck in reports or boardrooms, and that growth turns into real results for those who feed and
                      fuel our economy.
                    </p>
                    <p>
                      <strong className="text-slate-800">
                        At Amyres Agtech, we don't just innovate — we turn knowledge into action, and potential into
                        lasting prosperity for Kenya's entire agricultural value chain.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Our Location</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                    Our office is located in Nyeri, Central region of Kenya, giving us access to the country's leading
                    research institutions, agribusiness hubs, and governmental bodies.
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.699613318311!2d36.97956397477642!3d-0.4419776995536805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182861e3fce0feb3%3A0x4c5d494ba5e19690!2sKenya%20School%20of%20Agriculture%2CNyeri-Wambugu%20Farm!5e0!3m2!1sen!2ske!4v1729251690706!5m2!1sen!2ske"
                        width="100%"
                        height="250"
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

        {/* Section 3: Mission - Emerald/Blue Gradient with Circular Pattern */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-600 overflow-hidden">
          {/* Circular Pattern Background */}
          <div className="absolute inset-0">
            {/* Large circles */}
            <div className="absolute top-12 left-12 w-40 h-40 bg-white/8 rounded-full blur-2xl"></div>
            <div className="absolute bottom-16 right-16 w-32 h-32 bg-blue-300/15 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300/12 rounded-full blur-lg"></div>

            {/* Medium circles */}
            <div className="absolute top-20 right-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-24 left-1/3 w-20 h-20 bg-blue-300/8 rounded-full blur-sm"></div>

            {/* Small floating circles */}
            <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/5 w-6 h-6 bg-emerald-300/20 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4 text-white drop-shadow-lg">
                <i className="fas fa-bullseye text-white"></i>
                Our Mission
              </h2>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 max-w-4xl mx-auto border border-white/20">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-white text-2xl md:text-3xl"></i>
              </div>
              <p className="text-white leading-relaxed text-lg md:text-xl drop-shadow-sm">
                To accelerate the adoption of sustainable agricultural innovations by integrating research, digital
                solutions and data intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What We Do - Light Background with Organic Pattern */}
        <section
            id="what-we-do"
            className="relative py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
        >
          {/* Organic blob pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-20 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-16 w-24 h-36 bg-emerald-600 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-24 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-12 w-28 h-28 bg-emerald-600 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                <i className="fas fa-cogs text-emerald-600"></i>
                What We Do
              </h2>
            </div>
            <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
              {/* Tech Development */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-laptop-code text-white text-xl md:text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Software Development</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    To complement our research, AMYRES AgTech develops and deploys contemporary digital technologies that
                    promote sustainable and inclusive agriculture. Our digital innovation arm focuses on designing
                    solutions that are co-created with end users and tailored for the realities of farming in Kenya and
                    the region.
                  </p>
                  <p>
                    Through these solutions, we aim to modernize farming practices, enhance productivity, and make
                    data-driven agriculture accessible and actionable for farmers at every scale.
                  </p>
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-4 md:p-6 mt-6">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Our Digital Product Suite:</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm md:text-base">
                      <li>
                        AI-powered decision support tools for crop diagnostics, yield forecasting, and climate-smart
                        advisory
                      </li>
                      <li>
                        Farm Management Information Systems (FMIS) that help farmers and agribusinesses plan, track, and
                        report farm operations more efficiently
                      </li>
                      <li>
                        Mobile farm advisory applications that deliver localized, real-time guidance on agronomic
                        practices, pest alerts, and market prices
                      </li>
                      <li>
                        AI-driven chatbots, including WhatsApp-based assistants, that provide farmers with instant, 24/7
                        access to expert knowledge and support
                      </li>
                      <li>
                        Blockchain-backed market platforms that improve traceability, trust, and transparency across
                        agricultural value chains
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Agri-Data Management */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-database text-white text-xl md:text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Agri-Data Management</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    At AMYRES AgTech, effective management of agricultural data is a core function that supports our
                    research and digital innovation initiatives. We provide comprehensive agri-data management solutions
                    designed to collect, store, analyze, and visualize complex datasets from farms, value chains, and
                    markets.
                  </p>
                  <p>
                    Our services include the design and deployment of robust data infrastructure such as cloud-based
                    databases and integrated platforms that ensure data integrity, security, and easy access. We apply
                    advanced data analytics and machine learning to generate actionable insights for smarter
                    decision-making across the agricultural ecosystem.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-4 md:p-6 mt-6">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Key Offerings:</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm md:text-base">
                      <li>
                        Custom mobile data collection apps optimized for field conditions, enabling seamless gathering of
                        agronomic, environmental, and market data
                      </li>
                      <li>
                        Centralized data warehouses that unify diverse data sources—ranging from satellite imagery to farm
                        inputs—for comprehensive analysis
                      </li>
                      <li>
                        Interactive real-time dashboards built on platforms like Power BI and Tableau to monitor crop
                        health, weather conditions, supply chains, and market dynamics
                      </li>
                      <li>
                        Predictive analytics models that forecast yields, detect pest and disease outbreaks, and
                        anticipate market demand
                      </li>
                      <li>
                        Implementation of API-enabled data sharing systems that promote interoperability and collaboration
                        among farmers, researchers, extension agents, and policymakers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research and Innovation */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fas fa-microscope text-white text-xl md:text-2xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Research and Innovation</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    We design and implement scientifically rigorous field trials to evaluate the performance of
                    agro-inputs and post-harvest solutions. These trials not only generate high-quality data for
                    regulatory registration but also provide insights that support farmer adoption and effective product
                    positioning for agri-input companies and development partners.
                  </p>
                  <p>
                    Our research spans the entire agricultural value chain, addressing key issues such as input
                    efficiency, crop and soil health, climate resilience, and post-harvest management. We work closely
                    with farmers, agribusinesses, and stakeholders to ensure that our findings are actionable and
                    context-specific.
                  </p>
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-4 md:p-6 mt-6">
                    <h4 className="text-base md:text-lg font-semibold text-slate-800 mb-3">Our Research Services:</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm md:text-base">
                      <li>Field trial design and management</li>
                      <li>Agronomic evaluations</li>
                      <li>Impact assessments</li>
                      <li>Evidence-based recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Team - Blue/Emerald Gradient with Diamond Pattern */}
        <section
            id="team"
            className="relative py-12 md:py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 overflow-hidden"
        >
          {/* Diamond Pattern Background */}
          <div className="absolute inset-0">
            {/* Diamond shapes */}
            <div className="absolute top-12 left-16 w-16 h-16 bg-white/10 rotate-45 rounded-lg blur-sm"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-emerald-300/15 rotate-45 rounded-md"></div>
            <div className="absolute bottom-16 left-12 w-20 h-20 bg-blue-300/12 rotate-45 rounded-xl blur-md"></div>
            <div className="absolute bottom-12 right-16 w-14 h-14 bg-white/8 rotate-45 rounded-lg"></div>

            {/* Medium diamonds */}
            <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-white/15 rotate-45 rounded-sm"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-emerald-300/10 rotate-45 rounded-md blur-sm"></div>

            {/* Small floating diamonds */}
            <div className="absolute top-1/4 right-1/5 w-6 h-6 bg-white/20 rotate-45 rounded-sm animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-300/25 rotate-45 rounded-sm"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4 text-white drop-shadow-lg">
                <i className="fas fa-users text-white"></i>
                Meet Our Team
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow-sm">
                The experts driving agricultural innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Team Member 1 - Aoko Pauline */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/20">
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-white/20 p-1">
                    <img
                        src="/placeholder.svg?height=160&width=160&text=Aoko+Pauline"
                        alt="Aoko Pauline"
                        className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin text-sm"></i>
                      </a>
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                          aria-label="Email"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Aoko Pauline</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    Agriculturalist
                  </span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    UI/UX Developer
                  </span>
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Aoko collaborates with farmers to boost productivity through innovative, sustainable strategies while
                    minimizing environmental impact. She leverages this expertise to design intuitive digital solutions
                    that address the unique challenges of targeted audiences, enhancing user engagement.
                  </p>
                </div>
              </div>

              {/* Team Member 2 - Joseph Onyango */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/20">
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-white/20 p-1">
                    <img
                        src="/placeholder.svg?height=160&width=160&text=Joseph+Onyango"
                        alt="Joseph Onyango"
                        className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin text-sm"></i>
                      </a>
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                          aria-label="Email"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Joseph Onyango</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    Data Scientist
                  </span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    GIS Specialist
                  </span>
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    With a background in natural resource management, Joseph leads our research data processing,
                    transforming complex spatial and non-spatial datasets into actionable insights that guide field
                    applications and resource management decisions.
                  </p>
                </div>
              </div>

              {/* Team Member 3 - Amisi Pascal */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group md:col-span-2 lg:col-span-1 border border-white/20">
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden bg-white/20 p-1">
                    <img
                        src="/placeholder.svg?height=160&width=160&text=Amisi+Pascal"
                        alt="Amisi Pascal"
                        className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          aria-label="LinkedIn"
                      >
                        <i className="fab fa-linkedin text-sm"></i>
                      </a>
                      <a
                          href="#"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors duration-300"
                          aria-label="Email"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Amisi Pascal</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    Statistical Programmer
                  </span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    Biostatistician
                  </span>
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Amisi oversees our research design and analysis by leveraging his experience in processing complex
                    data, developing predictive models and identifying patterns to generate actionable industry-insights
                    through summary statistics, visualizations and comprehensive reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default About
