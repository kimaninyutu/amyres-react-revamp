
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Rocket } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Discovery Call */}
      <section className="bg-header-gradient section-container relative z-10 pt-32 lg:pt-40 pb-16 lg:pb-24 min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center animate-fadeInUp mb-16">
            <h1 className="heading-xl mb-8 text-white">
              AMYRES AGTECH: Powering insightful innovations for sustainable agriculture
            </h1>
            <p className="text-white/80 text-lg italic mb-12 max-w-3xl mx-auto">
              "We don't just deliver AgTech, we build it with you, for you"
            </p>
          </div>

          {/* Discovery Call Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="glass-strong rounded-3xl p-8 lg:p-12 bg-white/10 backdrop-blur-lg">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-amyres-green" />
                <h2 className="heading-lg text-white">
                  🚀 Ready to Transform Your Agricultural Operations?
                </h2>
              </div>
              
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Join us for a <span className="text-amyres-green font-semibold">Complimentary Discovery Call</span> and discover how 
                AMYRES AGTECH can revolutionize your farming practices 
                with cutting-edge research and innovative solutions.
              </p>

              <div className="mb-8">
                <h3 className="text-amyres-green text-xl font-semibold mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  {[
                    "✅ Personalized assessment of your agricultural challenges",
                    "✅ Expert insights on sustainable farming practices", 
                    "✅ Customized recommendations for your specific needs",
                    "✅ Introduction to our innovative AgTech solutions",
                    "✅ No obligation - completely FREE consultation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
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
                <p className="text-white/80 text-center text-sm">Limited slots available - Book today!</p>
              </div>
            </div>

            {/* Right Content - Discovery Call Visual */}
            <div className="glass rounded-3xl p-8 bg-amyres-green/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="discovery-video-container rounded-2xl overflow-hidden mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-amyres-green to-amyres-blue rounded-lg flex items-center justify-center">
                    <div className="text-6xl">🌱</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Complimentary Discovery</h3>
                <p className="text-white/90 text-lg mb-6">
                  Transform your agricultural operations with our expert guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
