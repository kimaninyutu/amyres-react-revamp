import type React from "react"
import Link from "next/link"

interface LogoProps {
    isScrolled: boolean
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
    return (
        <Link href="/" className="flex items-center space-x-2 md:space-x-4 group">
            <div className="relative flex-shrink-0">
                <img
                    src="/lovable-uploads/8043aac1-4f1b-4583-9dc8-7bbcdfbab1b4.png"
                    alt="AMYRES AGTECH Logo"
                    className={`rounded-full object-cover transition-all duration-300 group-hover:scale-110 shadow-lg aspect-square ${
                        isScrolled ? "w-12 h-12 md:w-16 md:h-16" : "w-14 h-14 md:w-20 md:h-20"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className={`transition-all duration-300 hidden sm:block ${isScrolled ? "scale-90" : "scale-100"}`}>
                <h1 className="text-lg md:text-xl font-bold font-poppins text-white">AMYRES AGTECH</h1>
                <p className="text-xs md:text-sm text-white/80 font-inter hidden md:block">
                    We don't just deliver AgTech, we build it with you, for you
                </p>
            </div>
            {/* Mobile-only company name */}
            <div className="sm:hidden">
                <h1 className="text-base font-bold font-poppins text-white">AMYRES</h1>
            </div>
        </Link>
    )
}

export default Logo
