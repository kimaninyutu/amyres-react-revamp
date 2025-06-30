"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Send, Star, ArrowLeft, ArrowRight, User, MessageSquare, CheckCircle } from "lucide-react"

const Contact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const testimonials = [
    {
      text: "AMYRES AgTech provided exceptional insights that have transformed our farming practices. Their field trials and data analytics were exactly what we needed.",
      author: "John Kunje",
      role: "Agribusiness Owner",
      rating: 5,
    },
    {
      text: "The literature review service gave us a solid foundation for our research. AMYRES AgTech made it easy to access the latest studies and insights.",
      author: "Maria Kizia",
      role: "Researcher",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      main: "+254-769-125-073",
      sub: "Mon - Fri, 8AM - 6PM",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "tel:+254769125073",
    },
    {
      icon: Mail,
      title: "Email Us",
      main: "hello@amyres.com",
      sub: "We respond within 24 hours",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "mailto:hello@amyres.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      main: "Nyeri, Central Kenya",
      sub: "By appointment only",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      href: "https://maps.google.com/?q=Nyeri,Kenya",
    },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      color: "bg-blue-600 hover:bg-blue-700",
      handle: "@amyresagtech",
      href: "https://facebook.com/amyresagtech",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      color: "bg-sky-500 hover:bg-sky-600",
      handle: "@amyresagtech",
      href: "https://twitter.com/amyresagtech",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      handle: "@amyresagtech",
      href: "https://instagram.com/amyresagtech",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "bg-blue-700 hover:bg-blue-800",
      handle: "AMYRES AgTech",
      href: "https://www.linkedin.com/company/amyresagtech/",
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      color: "bg-green-500 hover:bg-green-600",
      handle: "+254-769-125-073",
      href: "https://wa.me/254769125073",
    },
  ]

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Hero */}
        <section className="pt-20 pb-16 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Ready to take your agricultural business to the next level? Our experts are ready to provide you with
              personalized consulting and research-backed strategies.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Form Section */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Send us a Message</h2>
                    <p className="text-slate-600 mb-8">
                      Have a question or want to discuss your agricultural needs? Fill out the form below and we'll get
                      back to you within 24 hours.
                    </p>

                    {submitStatus === "success" && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Your full name"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                          Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                          <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={6}
                              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                              placeholder="Tell us about your agricultural needs, challenges, or questions..."
                          />
                        </div>
                      </div>

                      <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              Sending...
                            </>
                        ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Contact Info Section */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="text-blue-100 mb-8">
                      Get in touch with us through any of these channels. We're here to help you grow your agricultural
                      business.
                    </p>

                    <div className="space-y-6">
                      {contactMethods.map((contact, index) => (
                          <a
                              key={index}
                              href={contact.href}
                              target={contact.href.startsWith("http") ? "_blank" : undefined}
                              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                          >
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <contact.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{contact.title}</h4>
                              <p className="text-blue-100">{contact.main}</p>
                              <p className="text-sm text-blue-200">{contact.sub}</p>
                            </div>
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section - Improved Design */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Connect With Us
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                Follow us on social media for the latest updates, agricultural insights, and research findings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div
                          className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i className={`${social.icon} text-white text-2xl`}></i>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">{social.name}</h3>
                      <p className="text-sm text-slate-500">{social.handle}</p>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white/50 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto">
                            <div className="flex justify-center mb-6">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <blockquote className="text-xl lg:text-2xl text-slate-700 mb-8 font-light italic leading-relaxed">
                              "{testimonial.text}"
                            </blockquote>
                            <div>
                              <p className="font-bold text-xl text-slate-800 mb-2">{testimonial.author}</p>
                              <p className="text-slate-600">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-8 gap-4">
                  <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                          }`}
                      />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Contact
