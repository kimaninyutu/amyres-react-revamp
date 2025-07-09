"use client"

import type React from "react"
import { useState, useEffect } from "react"
import AnnouncementBar from "./AnnouncementBar"
import Logo from "./Logo"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Main Header */}
        <header
            className={`transition-all duration-500 bg-gradient-to-r from-blue-600 to-emerald-600 ${
                isScrolled ? "py-2 shadow-lg backdrop-blur-md bg-opacity-95" : "py-3 md:py-4"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <Logo isScrolled={isScrolled} />

              {/* Desktop Navigation */}
              <DesktopNavigation />

              {/* Mobile Navigation */}
              <MobileNavigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
            </div>
          </div>
        </header>
      </div>
  )
}

export default Header
