
import React, { useState } from 'react';

const Contact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      info: '+254-769-125-073',
      details: 'Mon - Fri, 8AM - 6PM',
      action: 'tel:+254769125073'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      info: 'hello@amyres.com',
      details: 'We respond within 24 hours',
      action: 'mailto:hello@amyres.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      info: 'Nyeri, Central Kenya',
      details: 'By appointment only',
      action: 'https://maps.google.com/?q=Nyeri,Kenya'
    }
  ];

  const socialMediaLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/amyresagtech',
      description: 'Follow our page for updates',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/amyresagtech',
      description: 'Get real-time updates',
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/amyresagtech',
      description: 'See our work in action',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/company/amyresagtech/',
      description: 'Professional networking',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/254769125073',
      description: 'Quick messaging',
      color: 'hover:bg-green-500'
    }
  ];

  const testimonials = [
    {
      content: "AMYRES AgTech provided exceptional insights that have transformed our farming practices. Their field trials and data analytics were exactly what we needed.",
      author: "John Kunje",
      position: "Agribusiness Owner"
    },
    {
      content: "The literature review service gave us a solid foundation for our research. AMYRES AgTech made it easy to access the latest studies and insights.",
      author: "Maria Kizia",
      position: "Researcher"
    }
  ];

  const handleContactForm = () => {
    console.log('Contact form functionality to be implemented');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="contact-page bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Contact Introduction */}
        <section className="contact-intro mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4 font-poppins">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-4 font-inter">
              Ready to take your agricultural business to the next level? Please reach out to us today!
            </p>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Our experts are ready to provide you with personalized consulting and research-backed strategies for your farm or agribusiness.
            </p>
            <button 
              onClick={handleContactForm}
              className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins"
            >
              Contact Us Now
            </button>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="contact-methods mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="contact-card bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="contact-icon w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${method.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-2 font-poppins">{method.title}</h3>
                <a 
                  href={method.action}
                  className="text-lg text-gray-700 hover:text-[#004aad] transition-colors duration-300 font-inter"
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {method.info}
                </a>
                <p className="text-sm text-gray-500 mt-2 font-inter">{method.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-media-section mb-12">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Connect With Us</h2>
              <p className="text-lg text-gray-600 font-inter">
                Follow us on social media for the latest updates, agricultural insights, and research findings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-media-card bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg ${social.color} hover:text-white group`}
                >
                  <div className="social-icon w-12 h-12 bg-[#004aad] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <i className={`${social.icon} text-white group-hover:text-[#004aad] text-lg transition-colors duration-300`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2 font-poppins transition-colors duration-300">{social.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white font-inter transition-colors duration-300">{social.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="testimonials-section">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">What Our Clients Say</h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="testimonial-carousel">
                <div className="testimonial bg-[#004aad]/5 rounded-xl p-8 text-center">
                  <div className="quote-icon text-4xl text-[#004aad] mb-4">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-inter">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="testimonial-author">
                    <strong className="text-[#004aad] text-lg font-poppins">
                      {testimonials[currentTestimonial].author}
                    </strong>
                    <p className="text-gray-600 font-inter">{testimonials[currentTestimonial].position}</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Controls */}
              <div className="testimonial-controls flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0097b2] hover:scale-110"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#0097b2] hover:scale-110"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-[#004aad]' : 'bg-gray-300'
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
