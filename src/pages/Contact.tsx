import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "AMYRES AgTech provided exceptional insights that have transformed our farming practices. Their field trials and data analytics were exactly what we needed.",
      author: "John Kunje",
      role: "Agribusiness Owner",
      rating: 5
    },
    {
      text: "The literature review service gave us a solid foundation for our research. AMYRES AgTech made it easy to access the latest studies and insights.",
      author: "Maria Kizia",
      role: "Researcher",
      rating: 5
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      main: "+254-769-125-073",
      sub: "Mon - Fri, 8AM - 6PM",
      color: "text-blue-600",
      href: "tel:+254769125073"
    },
    {
      icon: Mail,
      title: "Email Us",
      main: "info@amyres.co.ke",
      sub: "We respond within 24 hours",
      color: "text-purple-600",
      href: "mailto:hello@amyres.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      main: "Nyeri, Central Kenya",
      sub: "By appointment only",
      color: "text-emerald-600",
      href: "https://maps.google.com/?q=Nyeri,Kenya"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <i className="fab fa-facebook text-2xl" />,
      color: "hover:text-blue-600",
      handle: "@amyresagtech",
      href: "#"
    },
    {
      name: "X (Twitter)",
      icon: <i className="fab fa-x-twitter text-2xl" />,
      color: "hover:text-neutral-800",
      handle: "@amyresagtech",
      href: "#"
    },
    {
      name: "Instagram",
      icon: <i className="fab fa-instagram text-2xl" />,
      color: "hover:text-pink-600",
      handle: "@amyresagtech",
      href: "#"
    },
    {
      name: "LinkedIn",
      icon: <i className="fab fa-linkedin text-2xl" />,
      color: "hover:text-blue-700",
      handle: "AMYRES AgTech",
      href: "#"
    },
    {
      name: "WhatsApp",
      icon: <i className="fab fa-whatsapp text-2xl" />,
      color: "hover:text-green-600",
      handle: "+254-769-125-073",
      href: "#"
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl floating"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl floating-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Hero */}
        <section className="bg-primary-light pt-20 pb-16 relative z-10">
          <div className="section-container text-center animate-fadeInUp">
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-body text-xl mb-8 max-w-3xl mx-auto">
              Ready to take your agricultural business to the next level? Our experts are ready to provide you with personalized consulting and research-backed strategies.
            </p>
            <button className="btn-modern btn-primary group">
            <span className="relative z-10 flex items-center gap-2">
              Contact Us Now
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            </button>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="bg-white section-padding relative z-10">
          <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((contact, index) => (
                <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`contact-method animate-fadeInUp delay-${(index + 1) * 100} group`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${contact.color} bg-gradient-to-br from-slate-100 to-white shadow-modern transform group-hover:scale-110 transition-all duration-300`}>
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <h3 className="heading-md text-slate-800 mb-4">{contact.title}</h3>
                    <p className="text-xl font-semibold text-slate-700 mb-2">{contact.main}</p>
                    <span className="text-slate-500">{contact.sub}</span>
                  </div>
                </a>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-secondary-light section-padding animate-fadeInUp delay-400 relative z-10">
          <div className="section-container">
            <div className="glass-strong rounded-3xl p-12 max-w-5xl mx-auto text-center">
              <h2 className="heading-lg mb-4">
                <span className="gradient-text">Connect With Us</span>
              </h2>
              <p className="text-body max-w-2xl mx-auto mb-10">
                Follow us on social media for the latest updates, agricultural insights, and research findings.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className={`group ${social.color} text-slate-600 animate-scaleIn delay-${(index + 1) * 100}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                    </a>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 text-center">
                {socialLinks.map((social, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-semibold text-slate-700">{social.name}</p>
                      <p className="text-slate-500 text-xs">{social.handle}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-accent-light section-padding animate-fadeInUp delay-500 relative z-10">
          <div className="section-container max-w-5xl mx-auto text-center">
            <h2 className="heading-lg mb-12">
              <span className="gradient-text">What Our Clients Say</span>
            </h2>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="testimonial-card text-center max-w-4xl mx-auto">
                          <div className="flex justify-center mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-2xl text-slate-700 mb-8 font-light italic leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                          <div>
                            <p className="font-bold text-xl text-slate-800 mb-2 font-poppins">
                              {testimonial.author}
                            </p>
                            <p className="text-slate-600">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-4">
                <button onClick={prevTestimonial} className="nav-btn">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="nav-btn">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Contact;
