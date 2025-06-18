
import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "AMYRES AgTech provided exceptional insights that have transformed our farming practices. Their field trials and data analytics were exactly what we needed.",
      author: "John Kunje",
      role: "Agribusiness Owner"
    },
    {
      text: "The literature review service gave us a solid foundation for our research. AMYRES AgTech made it easy to access the latest studies and insights.",
      author: "Maria Kizia",
      role: "Researcher"
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
    <div className="bg-gradient-to-r from-[#0097b2] to-[#7ed957] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Contact Introduction */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-4 font-inter">
            Ready to take your agricultural business to the next level? Please reach out to us today!
          </p>
          <p className="text-lg text-gray-600 mb-6 font-inter">
            Our experts are ready to provide you with personalized consulting and research-backed strategies for your farm or agribusiness.
          </p>
          <button className="bg-gradient-to-r from-[#004aad] to-[#0097b2] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 font-poppins">
            Contact Us Now
          </button>
        </section>

        {/* Contact Methods */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Call Us</h3>
              <p className="text-lg text-gray-600 mb-2 font-inter">+254-769-125-073</p>
              <span className="text-sm text-gray-500 font-inter">Mon - Fri, 8AM - 6PM</span>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#7ed957]/10 to-[#5cb85c]/10 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ed957] to-[#5cb85c] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Email Us</h3>
              <p className="text-lg text-gray-600 mb-2 font-inter">info@amyres.co.ke</p>
              <span className="text-sm text-gray-500 font-inter">We respond within 24 hours</span>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#0097b2]/10 to-[#004aad]/10 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0097b2] to-[#004aad] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#004aad] mb-3 font-poppins">Visit Us</h3>
              <p className="text-lg text-gray-600 mb-2 font-inter">Nyeri, Central Kenya</p>
              <span className="text-sm text-gray-500 font-inter">By appointment only</span>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">Connect With Us</h2>
            <p className="text-xl text-gray-600 font-inter">
              Follow us on social media for the latest updates, agricultural insights, and research findings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-[#4267B2]/10 to-[#4267B2]/20 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-[#4267B2] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-facebook-f text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#004aad] font-poppins">Facebook</h3>
                <p className="text-sm text-gray-600 font-inter">Follow our page</p>
              </div>
            </a>

            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-[#1DA1F2]/10 to-[#1DA1F2]/20 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-twitter text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#004aad] font-poppins">Twitter</h3>
                <p className="text-sm text-gray-600 font-inter">Real-time updates</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-[#E4405F]/10 to-[#E4405F]/20 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-[#E4405F] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-instagram text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#004aad] font-poppins">Instagram</h3>
                <p className="text-sm text-gray-600 font-inter">See our work</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-[#0077B5]/10 to-[#0077B5]/20 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-linkedin-in text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#004aad] font-poppins">LinkedIn</h3>
                <p className="text-sm text-gray-600 font-inter">Professional network</p>
              </div>
            </a>

            <a 
              href="https://www.whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/20 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <i className="fab fa-whatsapp text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#004aad] font-poppins">WhatsApp</h3>
                <p className="text-sm text-gray-600 font-inter">Quick messaging</p>
              </div>
            </a>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#004aad] mb-4 font-poppins">What Our Clients Say</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-[#004aad]/10 to-[#0097b2]/10 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quote-left text-white text-2xl"></i>
              </div>
              <p className="text-lg text-gray-600 mb-6 font-inter italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-[#004aad] text-lg font-poppins">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600 font-inter">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gradient-to-r from-[#004aad] to-[#0097b2] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
