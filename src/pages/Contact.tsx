
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "AMYRES AgTech provided exceptional insights that have transformed our farming practices. Their field trials and data analytics were exactly what we needed.",
      author: "John Kunje",
      role: "Agribusiness Owner",
      avatar: "👨‍🌾"
    },
    {
      text: "The literature review service gave us a solid foundation for our research. AMYRES AgTech made it easy to access the latest studies and insights.",
      author: "Maria Kizia",
      role: "Researcher",
      avatar: "👩‍🔬"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004aad] via-[#0097b2] to-[#7ed957] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl floating"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7ed957]/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-[#0097b2]/10 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fadeInUp">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 font-light leading-relaxed">
              Ready to take your agricultural business to the next level?
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our experts are ready to provide you with personalized consulting and research-backed strategies for your farm or agribusiness.
            </p>
            <button className="btn-modern btn-primary text-lg">
              <span className="relative z-10">Contact Us Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
            </button>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📞",
                title: "Call Us",
                main: "+254-769-125-073",
                sub: "Mon - Fri, 8AM - 6PM",
                color: "from-[#004aad] to-[#0097b2]",
                delay: "delay-100"
              },
              {
                icon: "✉️",
                title: "Email Us", 
                main: "info@amyres.co.ke",
                sub: "We respond within 24 hours",
                color: "from-[#0097b2] to-[#7ed957]",
                delay: "delay-200"
              },
              {
                icon: "📍",
                title: "Visit Us",
                main: "Nyeri, Central Kenya",
                sub: "By appointment only",
                color: "from-[#7ed957] to-[#5cb85c]",
                delay: "delay-300"
              }
            ].map((contact, index) => (
              <div key={index} className={`card-modern group animate-fadeInUp ${contact.delay}`}>
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transform group-hover:rotate-12 transition-transform duration-300 shadow-glow`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#004aad] mb-4 font-poppins">{contact.title}</h3>
                  <p className="text-xl text-gray-800 font-semibold mb-2">{contact.main}</p>
                  <span className="text-gray-600 font-medium">{contact.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="mb-20 animate-fadeInUp delay-400">
          <div className="glass rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins mb-4">
                <span className="gradient-text">Connect With Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow us on social media for the latest updates, agricultural insights, and research findings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: "Facebook", icon: "📘", color: "bg-[#4267B2]", handle: "@amyresagtech" },
                { name: "Twitter", icon: "🐦", color: "bg-[#1DA1F2]", handle: "@amyresagtech" },
                { name: "Instagram", icon: "📷", color: "bg-[#E4405F]", handle: "@amyresagtech" },
                { name: "LinkedIn", icon: "💼", color: "bg-[#0077B5]", handle: "AMYRES AgTech" },
                { name: "WhatsApp", icon: "💬", color: "bg-[#25D366]", handle: "+254-769-125-073" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="glass rounded-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-3 group"
                >
                  <div className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {social.icon}
                  </div>
                  <h3 className="font-bold text-[#004aad] text-center mb-2 font-poppins">{social.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="animate-fadeInUp delay-500">
          <div className="glass rounded-3xl p-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins mb-4">
                <span className="gradient-text">What Our Clients Say</span>
              </h2>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="text-center max-w-4xl mx-auto">
                        <div className="text-6xl mb-6">{testimonial.avatar}</div>
                        <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                          <span className="text-white text-2xl">💬</span>
                        </div>
                        <blockquote className="text-2xl text-gray-700 mb-8 font-light italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-xl text-[#004aad] mb-2 font-poppins">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-600 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-14 h-14 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  ←
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-14 h-14 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  →
                </button>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#004aad] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
