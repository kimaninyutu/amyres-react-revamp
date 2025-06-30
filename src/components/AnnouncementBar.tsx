"use client"

import type React from "react"
import { useState } from "react"

const AnnouncementBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true)

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="bg-amyres-blue-solid text-white relative overflow-hidden">
            {/* Mobile: Single line with left-to-right animation and direct link */}
            <div className="block sm:hidden py-2 px-4 relative overflow-hidden">
                <a
                    href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                >
                    <div className="animate-scroll-left-right whitespace-nowrap text-xs font-medium flex items-center gap-2 text-white hover:text-amyres-green transition-colors duration-300">
                        <i className="fas fa-bullhorn text-amyres-green"></i>
                        <span>
              New Feature Alert! Complimentary Discovery Calls Now Available!
              <span className="ml-2 text-amyres-green font-semibold">Tap to Learn More →</span>
            </span>
                    </div>
                </a>
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 bg-black/20 rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={handleClose}
                >
                    <i className="fas fa-times text-xs"></i>
                </button>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden sm:block py-2 px-4 text-center text-sm font-medium">
                <div className="container mx-auto flex items-center justify-center gap-2">
                    <i className="fas fa-bullhorn text-amyres-green"></i>
                    <span>
            New Feature Alert! Complimentary Discovery Calls Now Available!
            <a
                href="https://calendly.com/aoko-amyres/discovery-session"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-amyres-green hover:text-white transition-colors duration-300 font-semibold underline"
            >
              Learn More →
            </a>
          </span>
                </div>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300"
                    onClick={handleClose}
                >
                    <i className="fas fa-times text-xs"></i>
                </button>
            </div>
        </div>
    )
}

export default AnnouncementBar
