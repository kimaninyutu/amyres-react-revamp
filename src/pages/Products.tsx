"use client"

import type React from "react"
import { useState, useEffect } from "react"

const Products: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const productImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "AGReFIND Feature 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "AGReFIND Feature 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "AGReFIND Feature 3" },
    { src: "/placeholder.svg?height=400&width=600", alt: "AGReFIND Feature 4" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [productImages.length])

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section - Consistent styling */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                "We don't just deliver AgTech, we build it with you, for you"
              </p>
            </div>
          </div>
        </section>

        {/* Products in Development Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Products in Development
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
                We're developing cutting-edge agricultural technology solutions to meet the evolving needs of farmers and
                agribusinesses.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* AGReFIND - Coming Soon */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-dashed border-emerald-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-mobile-alt text-emerald-600 text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 text-center">AGReFIND</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-center text-sm md:text-base">
                  AI-powered mobile application that connects stakeholders to localized agricultural research, ensuring
                  access to actionable, up-to-date information.
                </p>
                <div className="mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium inline-block mb-4">
                  🚧 In Development
                </span>
                  <div className="text-left space-y-2 max-w-sm mx-auto">
                    <p className="text-sm font-semibold text-slate-700">Target Users:</p>
                    <ul className="text-xs md:text-sm text-slate-600 space-y-1">
                      <li>• Smallholder farmers</li>
                      <li>• Large scale farmers</li>
                      <li>• Researchers & NGOs</li>
                      <li>• Agribusinesses</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-center">
                  <button
                      className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed text-sm md:text-base"
                      disabled
                  >
                    <i className="fas fa-clock mr-2"></i>
                    Coming Soon
                  </button>
                  <p className="text-xs text-slate-500">Stay tuned for updates!</p>
                </div>
              </div>

              {/* Auditass - Coming Soon */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-dashed border-blue-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clipboard-check text-blue-600 text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 text-center">Auditass</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-center text-sm md:text-base">
                  Comprehensive agricultural audit and assessment platform for monitoring and evaluating farm operations
                  and compliance.
                </p>
                <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium inline-block mb-4">
                  🔬 In Development
                </span>
                  <div className="text-left space-y-2 max-w-sm mx-auto">
                    <p className="text-sm font-semibold text-slate-700">Key Features:</p>
                    <ul className="text-xs md:text-sm text-slate-600 space-y-1">
                      <li>• Farm audit management</li>
                      <li>• Compliance tracking</li>
                      <li>• Performance assessment</li>
                      <li>• Reporting & analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-center">
                  <button
                      className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed text-sm md:text-base"
                      disabled
                  >
                    <i className="fas fa-clock mr-2"></i>
                    Coming Soon
                  </button>
                  <p className="text-xs text-slate-500">Stay tuned for updates!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Stay Updated on Our Product Development
                </h2>
                <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Be the first to know when our agricultural technology products launch. Join our newsletter for exclusive
                  updates and early access opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 text-sm md:text-base rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                      required
                  />
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base whitespace-nowrap">
                    <i className="fas fa-paper-plane mr-2"></i>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Products
