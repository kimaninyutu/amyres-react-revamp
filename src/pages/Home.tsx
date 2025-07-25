import type React from "react"
import HomeCarousel from "../components/HomeCarousel"

const Home: React.FC = () => {
  return (
      <div className="min-h-screen">
        {/* Section 1: Welcome - White Background (Keep as is) */}
        <section className="bg-white section-padding">
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

        {/* Section 2: Hero Mission - Blue/Emerald Gradient with Geometric Pattern */}
        <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 overflow-hidden">
          {/* Geometric Pattern Background */}
          <div className="absolute inset-0">
            {/* Large geometric shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute top-20 right-16 w-24 h-24 bg-emerald-300/10 rotate-45 rounded-2xl"></div>
            <div className="absolute bottom-16 left-20 w-40 h-20 bg-blue-300/8 rounded-full blur-lg"></div>
            <div className="absolute bottom-10 right-12 w-28 h-28 bg-white/8 rotate-12 rounded-2xl"></div>

            {/* Medium shapes */}
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-400/15 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-blue-400/12 rotate-45 rounded-lg"></div>

            {/* Small floating elements */}
            <div className="absolute top-16 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-emerald-300/25 rotate-45 rounded-sm"></div>
            <div className="absolute top-1/2 left-16 w-4 h-4 bg-blue-300/30 rounded-full"></div>

            {/* Connecting lines */}
            <div className="absolute top-24 left-1/2 w-20 h-0.5 bg-white/15 rotate-12"></div>
            <div className="absolute bottom-32 right-1/4 w-16 h-0.5 bg-emerald-300/20 -rotate-45"></div>
          </div>

          <div className="section-container relative z-10">
            <div className="text-center max-w-5xl mx-auto space-y-8 lg:space-y-10">
              <div className="space-y-6">
                <h1 className="heading-xl text-white drop-shadow-lg">
                  AMYRES AGTECH: Powering insightful innovations for sustainable agriculture
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 font-medium drop-shadow-md">
                  "We don't just deliver AgTech, we build it with you, for you"
                </p>
              </div>

              {/* Enhanced Mission Description */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20">
                <p className="text-lg lg:text-xl text-white leading-relaxed mb-6 drop-shadow-sm">
                  We believe the knowledge to transform agriculture already exists. Our mission is to bridge the gap
                  between research, technology, and real-world agricultural success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
                  <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-lightbulb text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Research to Reality</h3>
                    <p className="text-sm text-white/90">
                      Translating scientific research into practical agricultural solutions
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-users text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Collaborative Approach</h3>
                    <p className="text-sm text-white/90">Working with farmers, cooperatives, and value chain actors</p>
                  </div>
                  <div className="text-center p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-chart-line text-white text-lg"></i>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Measurable Impact</h3>
                    <p className="text-sm text-white/90">
                      Turning potential into lasting prosperity for Kenya's agriculture
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/about" className="btn-modern bg-white text-blue-600 hover:bg-white/90 hover:shadow-xl">
                  <i className="fas fa-info-circle mr-2"></i>
                  Learn More About Us
                </a>
                <a
                    href="/contact"
                    className="btn-modern bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:shadow-xl"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Value Proposition - White with Subtle Pattern */}
        <section className="relative bg-white section-padding overflow-hidden">
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
            ></div>
          </div>

          <div className="section-container relative z-10">
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

        {/* Section 4: Features - Emerald/Blue Gradient with Wave Pattern */}
        <section className="relative section-padding bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-600 overflow-hidden">
          {/* Wave Pattern Background */}
          <div className="absolute inset-0">
            {/* Wave-like organic shapes */}
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute top-8 left-12 w-20 h-20 text-white/8" viewBox="0 0 100 100">
                <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="currentColor" />
              </svg>
              <svg className="absolute top-16 right-20 w-32 h-16 text-blue-300/10" viewBox="0 0 100 50">
                <ellipse cx="50" cy="25" rx="40" ry="20" fill="currentColor" transform="rotate(15 50 25)" />
              </svg>
              <svg className="absolute bottom-12 left-16 w-28 h-28 text-emerald-300/12" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" fill="currentColor" />
              </svg>
              <svg className="absolute bottom-20 right-12 w-24 h-36 text-white/6" viewBox="0 0 100 150">
                <path d="M50,10 Q80,50 50,90 Q20,130 50,150 Q80,130 50,90 Q20,50 50,10" fill="currentColor" />
              </svg>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-emerald-300/20 rounded-full"></div>
            <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-blue-300/25 rounded-full animate-pulse"></div>
          </div>

          <div className="section-container relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="heading-lg mb-6 text-white drop-shadow-lg">Why Choose AMYRES AGTECH?</h2>
              <p className="text-white/90 max-w-3xl mx-auto text-base lg:text-lg drop-shadow-sm">
                We bridge the gap between agricultural research and practical farming solutions through innovative
                technology and data-driven insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500 border border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-microscope text-white text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4 text-white">Research Excellence</h3>
                <p className="text-white/90 text-sm lg:text-base">
                  Cutting-edge agricultural research translated into practical, field-tested solutions for real-world
                  farming challenges.
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500 border border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-laptop-code text-white text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4 text-white">Tech Innovation</h3>
                <p className="text-white/90 text-sm lg:text-base">
                  AI-powered solutions, mobile applications, and data analytics platforms designed specifically for
                  agricultural needs.
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 text-center hover:-translate-y-2 transition-all duration-500 border border-white/20">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <i className="fas fa-users text-white text-xl lg:text-2xl"></i>
                </div>
                <h3 className="heading-md mb-3 lg:mb-4 text-white">Partnership Approach</h3>
                <p className="text-white/90 text-sm lg:text-base">
                  We work directly with farmers, researchers, and stakeholders to co-create solutions that truly meet your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Call to Action - Light Blue/Emerald Gradient with Hexagonal Pattern */}
        <section className="relative section-padding bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100 overflow-hidden">
          {/* Hexagonal Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%232563eb' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
            ></div>
          </div>

          <div className="section-container relative z-10">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 max-w-4xl mx-auto shadow-2xl border border-white/50">
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
