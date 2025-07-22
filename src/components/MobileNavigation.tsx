"use client"

import type React from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { useState } from "react"

interface MobileNavigationProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleLinkClick = () => {
    closeMenu()
    setExpandedSection(null)
  }

  return (
      <>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
              onClick={toggleMenu}
              className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 hover:shadow-md"
              aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-0 z-40">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu}></div>

              {/* Slide-out Menu */}
              <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-emerald-600">
                    <h2 className="text-lg font-bold text-white">Menu</h2>
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                      {/* Home */}
                      <Link
                          href="/"
                          className="flex items-center space-x-3 py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                          onClick={handleLinkClick}
                      >
                        <i className="fas fa-home text-blue-600 w-5"></i>
                        <span>Home</span>
                      </Link>

                      {/* About Us */}
                      <div>
                        <button
                            onClick={() => toggleSection("about")}
                            className="flex items-center justify-between w-full py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                        >
                          <div className="flex items-center space-x-3">
                            <i className="fas fa-info-circle text-blue-600 w-5"></i>
                            <span>About Us</span>
                          </div>
                          <ChevronRight
                              className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedSection === "about" ? "rotate-90" : ""
                              }`}
                          />
                        </button>
                        {expandedSection === "about" && (
                            <div className="ml-8 mt-2 space-y-1">
                              <Link
                                  href="/about#background"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Background
                              </Link>
                              <Link
                                  href="/about#what-we-do"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                What We Do
                              </Link>
                              <Link
                                  href="/about#team"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                The Team
                              </Link>
                            </div>
                        )}
                      </div>

                      {/* Products */}
                      <div>
                        <button
                            onClick={() => toggleSection("products")}
                            className="flex items-center justify-between w-full py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                        >
                          <div className="flex items-center space-x-3">
                            <i className="fas fa-box text-emerald-600 w-5"></i>
                            <span>Products</span>
                          </div>
                          <ChevronRight
                              className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedSection === "products" ? "rotate-90" : ""
                              }`}
                          />
                        </button>
                        {expandedSection === "products" && (
                            <div className="ml-8 mt-2 space-y-1">
                              <Link
                                  href="/products#products-development"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                AGReFIND
                              </Link>
                              <Link
                                  href="/products#products-development"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Auditass
                              </Link>
                            </div>
                        )}
                      </div>

                      {/* Services */}
                      <div>
                        <button
                            onClick={() => toggleSection("services")}
                            className="flex items-center justify-between w-full py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                        >
                          <div className="flex items-center space-x-3">
                            <i className="fas fa-cogs text-blue-600 w-5"></i>
                            <span>Services</span>
                          </div>
                          <ChevronRight
                              className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedSection === "services" ? "rotate-90" : ""
                              }`}
                          />
                        </button>
                        {expandedSection === "services" && (
                            <div className="ml-8 mt-2 space-y-1">
                              <Link
                                  href="/services#field-trials"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Field Trials
                              </Link>
                              <Link
                                  href="/services#agri-data-management"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Agri-Data Management
                              </Link>
                              <Link
                                  href="/services#market-research"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Market Research
                              </Link>
                              <Link
                                  href="/services#consultancy"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Consultancy
                              </Link>
                            </div>
                        )}
                      </div>

                      {/* News */}
                      <div>
                        <button
                            onClick={() => toggleSection("news")}
                            className="flex items-center justify-between w-full py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                        >
                          <div className="flex items-center space-x-3">
                            <i className="fas fa-newspaper text-orange-600 w-5"></i>
                            <span>News</span>
                          </div>
                          <ChevronRight
                              className={`h-4 w-4 transition-transform duration-200 ${
                                  expandedSection === "news" ? "rotate-90" : ""
                              }`}
                          />
                        </button>
                        {expandedSection === "news" && (
                            <div className="ml-8 mt-2 space-y-1">
                              <Link
                                  href="/news#recent-projects"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Projects & Activities
                              </Link>
                              <Link
                                  href="/news#featured-service"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Featured Service
                              </Link>
                              <Link
                                  href="/news#industry-insights"
                                  className="block py-2 px-4 text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                  onClick={handleLinkClick}
                              >
                                Industry Insights
                              </Link>
                            </div>
                        )}
                      </div>

                      {/* Contact */}
                      <Link
                          href="/contact"
                          className="flex items-center space-x-3 py-3 px-4 hover:bg-slate-100 rounded-xl transition-colors duration-200 text-slate-700 font-medium"
                          onClick={handleLinkClick}
                      >
                        <i className="fas fa-phone text-emerald-600 w-5"></i>
                        <span>Contact</span>
                      </Link>
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-4 border-t border-slate-200 bg-slate-50">
                    <p className="text-xs text-slate-500 text-center">
                      © 2025 AMYRES AGTECH
                      <br />
                      We build it with you, for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
  )
}

export default MobileNavigation
