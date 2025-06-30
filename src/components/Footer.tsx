"use client"

import type React from "react"
import Link from "next/link"
import { X } from "lucide-react"

const Footer: React.FC = () => {
  return (
      <footer className="relative mt-20">
        {/* Curved top edge with modern design */}
        <div className="relative">
          <svg
              className="w-full h-16 sm:h-24 fill-current text-slate-100"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(248, 250, 252, 1)" />
                <stop offset="50%" stopColor="rgba(241, 245, 249, 0.95)" />
                <stop offset="100%" stopColor="rgba(226, 232, 240, 0.9)" />
              </linearGradient>
            </defs>
            <path
                fill="url(#footerTopGradient)"
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            />
          </svg>
        </div>

        {/* Main footer content with modern styling */}
        <div className="footer-modern bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
            ></div>
          </div>

          <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Section */}
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                  <div className="relative flex-shrink-0">
                    <img
                        src="/placeholder.svg?height=64&width=64"
                        alt="AMYRES AGTECH Logo"
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-green-400/20 rounded-full blur-sm"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins text-white">AMYRES AGTECH</h3>
                    <div className="text-amyres-green text-xs sm:text-sm font-semibold font-inter">
                      Research • Innovation • Development
                    </div>
                  </div>
                </div>

                <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed font-inter text-sm sm:text-base lg:text-lg text-center sm:text-left">
                  Leading agricultural innovation through research, technology, and sustainable practices. Empowering
                  farmers and agribusinesses with data-driven solutions for a sustainable future.
                </p>

                {/* Newsletter Section - Mobile Optimized */}
                <div className="glass-strong rounded-2xl p-4 sm:p-6 border border-white/20 bg-white/10">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-poppins text-white flex items-center justify-center sm:justify-start">
                    <i className="fas fa-envelope mr-2 sm:mr-3 text-amyres-green"></i>
                    Stay Updated
                  </h4>
                  <form className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-amyres-green focus:border-transparent bg-white/20 backdrop-blur-sm font-inter text-white placeholder-white/70"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-amyres-green to-amyres-teal hover:from-green-500 hover:to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 font-semibold font-poppins shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                    >
                      <i className="fas fa-paper-plane mr-1 sm:mr-2"></i>
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 font-poppins text-white flex items-center justify-center sm:justify-start">
                  <i className="fas fa-link mr-2 sm:mr-3 text-amyres-green"></i>
                  Quick Links
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { to: "/", icon: "fas fa-home", text: "Home" },
                    { to: "/about", icon: "fas fa-info-circle", text: "About Us" },
                    { to: "/services", icon: "fas fa-cogs", text: "Services" },
                    { to: "/products", icon: "fas fa-box", text: "Products" },
                    { to: "/news", icon: "fas fa-newspaper", text: "News" },
                  ].map((link) => (
                      <li key={link.to}>
                        <Link
                            href={link.to}
                            className="group flex items-center justify-center sm:justify-start text-white/80 hover:text-amyres-green transition-colors duration-300 font-inter text-sm sm:text-base"
                        >
                          <i
                              className={`${link.icon} mr-2 sm:mr-3 text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300`}
                          ></i>
                          <span className="relative">
                        {link.text}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amyres-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 font-poppins text-white flex items-center justify-center sm:justify-start">
                  <i className="fas fa-phone mr-2 sm:mr-3 text-amyres-green"></i>
                  Contact Info
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  <div className="group flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
                    <i className="fas fa-map-marker-alt text-amyres-green group-hover:scale-110 transition-transform duration-300 sm:mt-1"></i>
                    <div className="text-center sm:text-left">
                      <span className="block text-xs sm:text-sm text-white/60 font-medium">Address</span>
                      <a
                          href="https://maps.google.com/?q=Nyeri,Kenya"
                          className="text-white/90 hover:text-amyres-green transition-colors duration-300 font-inter text-sm sm:text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Nyeri, Kenya
                      </a>
                    </div>
                  </div>
                  <div className="group flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
                    <i className="fas fa-phone text-amyres-green group-hover:scale-110 transition-transform duration-300 sm:mt-1"></i>
                    <div className="text-center sm:text-left">
                      <span className="block text-xs sm:text-sm text-white/60 font-medium">Phone</span>
                      <a
                          href="tel:+254769125073"
                          className="text-white/90 hover:text-amyres-green transition-colors duration-300 font-inter text-sm sm:text-base"
                      >
                        +254-769-125-073
                      </a>
                    </div>
                  </div>
                  <div className="group flex flex-col sm:flex-row items-center sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
                    <i className="fas fa-envelope text-amyres-green group-hover:scale-110 transition-transform duration-300 sm:mt-1"></i>
                    <div className="text-center sm:text-left">
                      <span className="block text-xs sm:text-sm text-white/60 font-medium">Email</span>
                      <a
                          href="mailto:hello@amyres.com"
                          className="text-white/90 hover:text-amyres-green transition-colors duration-300 font-inter text-sm sm:text-base"
                      >
                        hello@amyres.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6 sm:mt-8">
                  <h5 className="font-semibold mb-3 sm:mb-4 font-poppins text-white text-sm sm:text-base">Follow Us</h5>
                  <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
                    {[
                      {
                        href: "https://facebook.com/amyresagtech",
                        icon: "fab fa-facebook-f",
                        color: "hover:from-blue-500 hover:to-blue-600",
                      },
                      {
                        href: "https://twitter.com/amyresagtech",
                        icon: null,
                        color: "hover:from-blue-400 hover:to-blue-500",
                        component: <X size={14} />,
                      },
                      {
                        href: "https://www.linkedin.com/company/amyresagtech/",
                        icon: "fab fa-linkedin-in",
                        color: "hover:from-blue-600 hover:to-blue-700",
                      },
                      {
                        href: "https://instagram.com/amyresagtech",
                        icon: "fab fa-instagram",
                        color: "hover:from-pink-500 hover:to-orange-500",
                      },
                      {
                        href: "https://youtube.com/@amyresagtech",
                        icon: "fab fa-youtube",
                        color: "hover:from-red-500 hover:to-red-600",
                      },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg backdrop-blur-sm border border-white/20 text-white/90`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          {social.component || <i className={`${social.icon} text-sm`}></i>}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/80 font-inter text-sm sm:text-base">
                  &copy; 2025 AMYRES AGTECH. All Rights Reserved.
                </p>
                <p className="text-amyres-green text-xs sm:text-sm font-semibold font-poppins">
                  Research • Innovation • Development
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-white/60 hover:text-amyres-green transition-colors duration-300 font-inter text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
