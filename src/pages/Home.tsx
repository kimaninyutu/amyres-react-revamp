import type React from "react"
import HomeCarousel from "../components/HomeCarousel"

const Home: React.FC = () => {
  return (
      <div className="min-h-screen">
        {/* Hero Carousel Section - First Section */}
        <section className="bg-alternating-1 section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                <h2 className="heading-lg text-amyres-blue">Welcome to AMYRES AGTECH</h2>
                <p className="text-body text-base lg:text-lg">
                  Transforming agriculture through <strong>research, innovation, and technology</strong>. We bridge the
                  gap between scientific research and practical farming solutions.
                </p>
                <div className="space-y-4 lg:space-y-6">
                  <h3 className="heading-md">Our Impact:</h3>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl flex-shrink-0">🌱</span>
                      <span className="text-sm lg:text-base">Cutting-edge agricultural research and field trials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl flex-shrink-0">📊</span>
                      <span className="text-sm lg:text-base">Data-driven insights for better farming decisions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl flex-shrink-0">💡</span>
                      <span className="text-sm lg:text-base">Innovative AgTech solutions tailored for you</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl flex-shrink-0">🤝</span>
                      <span className="text-sm lg:text-base">Partnership approach to sustainable agriculture</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="glass-amyres rounded-3xl p-3 sm:p-4 lg:p-6">
                  <HomeCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Enhanced with Mission Statement */}
        <section className="bg-alternating-2 section-padding">
          <div className="section-container">
            <div className="text-center max-w-5xl mx-auto space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <h1 className="heading-xl">
                <span className="gradient-text">
                  AMYRES AGTECH: Powering insightful innovations for sustainable agriculture
                </span>
                </h1>
                <p className="text-xl lg:text-2xl text-body font-medium">
                  "We don't just deliver AgTech, we build it with you, for you"
                </p>
              </div>

              {/* Enhanced Mission Description */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-white/20">
                <p className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6">
                  We believe the knowledge to transform agriculture already exists. Our mission is to bridge the gap
                  between research, technology, and real-world agricultural success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-lightbulb text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">Research to Reality</h3>
                    <p className="text-sm text-slate-600">
                      Translating scientific research into practical agricultural solutions
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-users text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">Collaborative Approach</h3>
                    <p className="text-sm text-slate-600">Working with farmers, cooperatives, and value chain actors</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-chart-line text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">Measurable Impact</h3>
                    <p className="text-sm text-slate-600">
                      Turning potential into lasting prosperity for Kenya's agriculture
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/about" className="btn-modern btn-primary">
                  <i className="fas fa-info-circle mr-2"></i>
                  Learn More About Us
                </a>
                <a href="/contact" className="btn-modern btn-primary">
                  <i className="fas fa-phone mr-2"></i>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section - New */}
        <section className="bg-alternating-1 section-padding">
          <div className="section-container">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="heading-lg mb-6">
                <span className="gradient-text">From Knowledge to Action</span>
              </h2>
              <p className="text-body max-w-3xl mx-auto text-base lg:text-lg">
                Based in Nyeri — the heart of Kenya's agricultural ecosystem — we ensure good ideas don't stay stuck in
                reports or boardrooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="glass-amyres rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-university text-blue-600 text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3">Research Institutions</h3>
                <p className="text-body text-sm">Partnering with leading agricultural research centers</p>
              </div>

              <div className="glass-amyres rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tractor text-emerald-600 text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3">Farmers & Growers</h3>
                <p className="text-body text-sm">Direct collaboration with agricultural producers</p>
              </div>

              <div className="glass-amyres rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-blue-600 text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3">Agribusinesses</h3>
                <p className="text-body text-sm">Supporting exporters and input suppliers</p>
              </div>

              <div className="glass-amyres rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-emerald-600 text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3">Cooperatives</h3>
                <p className="text-body text-sm">Empowering farmer cooperatives and associations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="bg-alternating-2 section-padding">
          <div className="section-container">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="heading-lg mb-6">
                <span className="gradient-text">Why Choose AMYRES AGTECH?</span>
              </h2>
              <p className="text-body max-w-3xl mx-auto text-base lg:text-lg">
                We bridge the gap between agricultural research and practical farming solutions through innovative
                technology and data-driven insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="glass-amyres rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amyres-blue/20 to-amyres-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-microscope text-amyres-blue text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4">Research Excellence</h3>
                <p className="text-body text-sm lg:text-base">
                  Cutting-edge agricultural research translated into practical, field-tested solutions for real-world
                  farming challenges.
                </p>
              </div>
              <div className="glass-amyres rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amyres-green/20 to-amyres-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-laptop-code text-amyres-green text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4">Tech Innovation</h3>
                <p className="text-body text-sm lg:text-base">
                  AI-powered solutions, mobile applications, and data analytics platforms designed specifically for
                  agricultural needs.
                </p>
              </div>
              <div className="glass-amyres rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amyres-teal/20 to-amyres-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-users text-amyres-teal text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4">Partnership Approach</h3>
                <p className="text-body text-sm lg:text-base">
                  We work directly with farmers, researchers, and stakeholders to co-create solutions that truly meet your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-alternating-3 section-padding">
          <div className="section-container">
            <div className="text-center">
              <div className="glass-amyres rounded-3xl p-8 lg:p-12 xl:p-16 max-w-4xl mx-auto">
                <h2 className="heading-lg mb-4 lg:mb-6 text-amyres-blue">Ready to Transform Your Agriculture?</h2>
                <p className="text-base lg:text-lg text-body mb-6 lg:mb-8 max-w-2xl mx-auto">
                  Join the agricultural revolution with AMYRES AGTECH. Let's work together to build sustainable,
                  profitable farming solutions tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                      href="https://calendly.com/aoko-amyres/discovery-session"
                      className="btn-modern btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Schedule Discovery Call
                  </a>
                  <a href="/services" className="btn-modern btn-outline">
                    <i className="fas fa-cogs mr-2"></i>
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home
