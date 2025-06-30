import type React from "react"

const Home: React.FC = () => {
  return (
      <div className="min-h-screen">
        {/* Discovery Call Hero Section - First Section */}
        <section className="bg-alternating-1 section-padding">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="heading-lg text-amyres-blue">🚀 Ready to Transform Your Agricultural Operations?</h2>
                <p className="text-body">
                  Join us for a <strong>Complimentary Discovery Call</strong> and discover how AMYRES AGTECH can
                  revolutionize your farming practices with cutting-edge research and innovative solutions.
                </p>

                <div className="space-y-6">
                  <h3 className="heading-md">What You'll Get:</h3>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl">✅</span>
                      <span>Personalized assessment of your agricultural challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl">✅</span>
                      <span>Expert insights on sustainable farming practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl">✅</span>
                      <span>Customized recommendations for your specific needs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl">✅</span>
                      <span>Introduction to our innovative AgTech solutions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amyres-green text-xl">✅</span>
                      <span>No obligation - completely FREE consultation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <a
                      href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech"
                      className="btn-modern btn-primary inline-flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <span>📅</span>
                    <span>Book Your Discovery Call Now</span>
                  </a>
                  <p className="text-sm text-slate-600">Limited slots available - Book today!</p>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="glass-amyres rounded-3xl p-4 lg:p-6">
                  <div className="rounded-2xl overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem]">
                    <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                      <source src="/videos/discovery-call.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section - Alternating Background */}
        <section className="bg-alternating-2 section-padding">
          <div className="section-container">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h1 className="heading-xl">
              <span className="gradient-text">
                AMYRES AGTECH: Powering insightful innovations for sustainable agriculture
              </span>
              </h1>
              <p className="text-xl text-body">"We don't just deliver AgTech, we build it with you, for you"</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#about" className="btn-modern btn-primary">
                  Learn More About Us
                </a>
                <a href="/contact" className="btn-modern btn-outline">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Alternating Background */}
        <section className="bg-alternating-1 section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-6">
                <span className="gradient-text">Why Choose AMYRES AGTECH?</span>
              </h2>
              <p className="text-body max-w-3xl mx-auto">
                We bridge the gap between agricultural research and practical farming solutions through innovative
                technology and data-driven insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-amyres rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amyres-blue/20 to-amyres-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-microscope text-amyres-blue text-2xl"></i>
                </div>
                <h3 className="heading-md mb-4">Research Excellence</h3>
                <p className="text-body">
                  Cutting-edge agricultural research translated into practical, field-tested solutions for real-world
                  farming challenges.
                </p>
              </div>

              <div className="glass-amyres rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amyres-green/20 to-amyres-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-laptop-code text-amyres-green text-2xl"></i>
                </div>
                <h3 className="heading-md mb-4">Tech Innovation</h3>
                <p className="text-body">
                  AI-powered solutions, mobile applications, and data analytics platforms designed specifically for
                  agricultural needs.
                </p>
              </div>

              <div className="glass-amyres rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-amyres-teal/20 to-amyres-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-amyres-teal text-2xl"></i>
                </div>
                <h3 className="heading-md mb-4">Partnership Approach</h3>
                <p className="text-body">
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
              <div className="glass-amyres rounded-3xl p-12 lg:p-16 max-w-4xl mx-auto">
                <h2 className="heading-lg mb-6 text-amyres-blue">Ready to Transform Your Agriculture?</h2>
                <p className="text-lg text-body mb-8 max-w-2xl mx-auto">
                  Join the agricultural revolution with AMYRES AGTECH. Let's work together to build sustainable,
                  profitable farming solutions tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                      href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech"
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
