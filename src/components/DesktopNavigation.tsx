import type React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const DesktopNavigation: React.FC = () => {
  return (
      <nav className="hidden lg:flex items-center space-x-1">
        <Link
            href="/"
            className="nav-link group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md"
        >
        <span className="flex items-center space-x-2 text-white font-medium">
          <i className="fas fa-home text-white/90"></i>
          <span>Home</span>
        </span>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/70 to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>

        <div className="relative group">
          <Link
              href="/about"
              className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium"
          >
            <i className="fas fa-info-circle text-white/90"></i>
            <span>About Us</span>
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </Link>
          <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              <Link
                  href="/about#background"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 first:rounded-t-2xl"
              >
                Background
              </Link>
              <Link
                  href="/about#what-we-do"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700"
              >
                What We Do
              </Link>
              <Link
                  href="/about#team"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 last:rounded-b-2xl"
              >
                The Team
              </Link>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Link
              href="/products"
              className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium"
          >
            <i className="fas fa-box text-white/90"></i>
            <span>Products</span>
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </Link>
          <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              <Link
                  href="/products#products-development"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 first:rounded-t-2xl"
              >
                AGReFIND
              </Link>
              <Link
                  href="/products#products-development"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 last:rounded-b-2xl"
              >
                Auditass
              </Link>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Link
              href="/services"
              className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium"
          >
            <i className="fas fa-cogs text-white/90"></i>
            <span>Services</span>
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </Link>
          <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              <Link
                  href="/services#field-trials"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 first:rounded-t-2xl"
              >
                Field Trials
              </Link>
              <Link
                  href="/services#agri-data-management"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700"
              >
                Agri-Data Management
              </Link>
              <Link
                  href="/services#market-research"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700"
              >
                Market Research
              </Link>
              <Link
                  href="/services#consultancy"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 last:rounded-b-2xl"
              >
                Consultancy
              </Link>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Link
              href="/news"
              className="nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md text-white font-medium"
          >
            <i className="fas fa-newspaper text-white/90"></i>
            <span>News</span>
            <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
          </Link>
          <div className="absolute top-full left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="backdrop-blur-xl bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              <Link
                  href="/news#recent-projects"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 first:rounded-t-2xl"
              >
                Projects & Activities
              </Link>
              <Link
                  href="/news#featured-service"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700"
              >
                Featured Service
              </Link>
              <Link
                  href="/news#industry-insights"
                  className="block px-4 py-3 hover:bg-white/70 transition-colors duration-200 text-slate-700 last:rounded-b-2xl"
              >
                Industry Insights
              </Link>
            </div>
          </div>
        </div>

        <Link
            href="/contact"
            className="nav-link relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md group"
        >
        <span className="flex items-center space-x-2 text-white font-medium">
          <i className="fas fa-phone text-white/90"></i>
          <span>Contact</span>
        </span>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/70 to-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>
      </nav>
  )
}

export default DesktopNavigation
