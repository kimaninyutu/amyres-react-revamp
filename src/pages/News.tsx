"use client"

import type React from "react"
import { useState } from "react"
import Carousel from "../components/Carousel.tsx"

const News: React.FC = () => {
  const [expandedNews, setExpandedNews] = useState<string | null>(null)

  const newsImages1 = [
    { src: "/images/Home.png", alt: "Project Image 1" },
    { src: "/images/About.png", alt: "Project Image 2" },
    { src: "/images/Contact.png", alt: "Project Image 3" },
  ]

  const featuredServiceImages = [
    { src: "/images/FS/1.png", alt: "Service Image 1" },
    { src: "/images/FS/2.png", alt: "Service Image 2" },
    { src: "/images/FS/3.png", alt: "Service Image 3" },
    { src: "/images/FS/4.png", alt: "Service Image 4" },
  ]

  const industryInsightsImages = [
    { src: "/images/Industry insights/1.png", alt: "Industry Image 1" },
    { src: "/images/Industry insights/2.png", alt: "Industry Image 2" },
    { src: "/images/Industry insights/3.png", alt: "Industry Image 3" },
  ]

  const toggleExpanded = (newsId: string) => {
    setExpandedNews(expandedNews === newsId ? null : newsId)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section - Consistent with other pages */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">News & Updates</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                "We don't just deliver AgTech, we build it with you, for you"
              </p>
            </div>
          </div>
        </section>

        {/* Featured Discovery Call Announcement */}
        <article className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
              <div className="mb-8 relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  🚀 NEW: Complimentary Discovery Call Available!
                </h2>
                <p className="text-slate-600 flex items-center gap-2 font-medium">
                  <i className="fas fa-calendar text-emerald-600"></i>
                  Published on: January 2025
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-4 lg:p-6">
                    <div className="rounded-2xl overflow-hidden w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem]">
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src="/videos/discovery-call.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 order-1 lg:order-2">
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p className="text-lg md:text-xl font-semibold">Ready to Transform Your Agricultural Operations?</p>
                    <p className="text-base md:text-lg">
                      We're excited to announce that AMYRES AGTECH is now offering{" "}
                      <strong>Complimentary Discovery Calls</strong> to help farmers and agribusinesses revolutionize
                      their operations with cutting-edge research and innovative solutions.
                    </p>

                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-4 md:p-6">
                      <h3 className="text-blue-600 text-lg font-semibold mb-3">
                        What You'll Get in Your Discovery Call:
                      </h3>
                      <ul className="text-slate-700 space-y-2 text-sm md:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✅</span>
                          <span>Personalized assessment of your agricultural challenges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✅</span>
                          <span>Expert insights on sustainable farming practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✅</span>
                          <span>Customized recommendations for your specific needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✅</span>
                          <span>Introduction to our innovative AgTech solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✅</span>
                          <span>No obligation - completely FREE consultation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                        href="https://calendly.com/aoko-amyres/discovery-session"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <span>📅</span>
                      <span className="text-sm md:text-base">Book Your Discovery Call Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                    <p className="text-slate-600 text-xs md:text-sm mt-2">Limited slots available - Book today!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Recent Projects */}
        <article className="py-12 md:py-16 bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Recent Projects and Activities
              </h2>
              <p className="text-slate-600 flex items-center gap-2 font-medium">
                <i className="fas fa-calendar text-emerald-600"></i>
                Published on: April 1, 2025
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <Carousel images={newsImages1} autoPlay={true} interval={4000} />
              </div>
              <div className="space-y-6">
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    We are proud to announce the successful completion and launch of our website. We look forward to
                    impactful engagements.
                  </p>
                  <p className="text-base md:text-lg">Check out our products and services and book a service.</p>
                </div>
                <button
                    onClick={() => toggleExpanded("news1")}
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <span>{expandedNews === "news1" ? "Read Less" : "Read More"}</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                {expandedNews === "news1" && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg animate-fadeIn">
                      <p className="text-slate-700 leading-relaxed">
                        This milestone represents a breakthrough in agricultural research, enabling better farm
                        decision-making for increased productivity.
                      </p>
                    </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Featured Service */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Featured Service: Comprehensive Data Analytics
              </h2>
              <p className="text-slate-600 flex items-center gap-2 font-medium">
                <i className="fas fa-calendar text-emerald-600"></i>
                Published on: April 1, 2025
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                <Carousel images={featuredServiceImages} autoPlay={true} interval={3000} />
              </div>
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  We have expanded our services to include advanced data analytics to help clients make informed
                  decisions.
                </p>
                <button
                    onClick={() => toggleExpanded("news2")}
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <span>{expandedNews === "news2" ? "Read Less" : "Read More"}</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                {expandedNews === "news2" && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg animate-fadeIn">
                      <p className="text-slate-700 leading-relaxed">
                        Our data analytics team is equipped with state-of-the-art tools to provide actionable insights.
                      </p>
                    </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Industry Insights */}
        <article className="py-12 md:py-16 bg-gradient-to-br from-slate-100 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16 max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Industry Insights
                </h2>
                <p className="text-slate-600 flex items-center gap-2 font-medium">
                  <i className="fas fa-calendar text-emerald-600"></i>
                  Published on: April 1, 2025
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-4">
                  <Carousel images={industryInsightsImages} autoPlay={true} interval={4500} />
                </div>
                <div className="space-y-6">
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    With advancements in artificial intelligence, agricultural research is experiencing a revolution in
                    predictive analytics and decision-making.
                  </p>
                  <button
                      onClick={() => toggleExpanded("news3")}
                      className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span>{expandedNews === "news3" ? "Read Less" : "Read More"}</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  {expandedNews === "news3" && (
                      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 animate-fadeIn">
                        <p className="text-slate-700 leading-relaxed">
                          AI-powered tools are now capable of analyzing extensive datasets for predictive insights,
                          optimizing farming practices.
                        </p>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
  )
}

export default News
