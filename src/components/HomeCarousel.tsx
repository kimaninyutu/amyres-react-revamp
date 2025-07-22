"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
    src: string
    alt: string
    title: string
    description: string
}

const HomeCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imagesLoaded, setImagesLoaded] = useState(false)

    const images: CarouselImage[] = [
        {
            src: "/images/agtechfarmertablet.jpg",
            alt: "Farmer using digital technology in the field",
            title: "Smart Farming Solutions",
            description: "Empowering farmers with cutting-edge digital tools and real-time data analytics",
        },
        {
            src: "/images/aerialsmartfarming.jpg",
            alt: "Aerial view of smart agricultural fields",
            title: "Precision Agriculture",
            description: "Advanced monitoring and management systems for optimized crop production",
        },
        {
            src: "/images/farmerfieldtech.jpg",
            alt: "Farmer with tablet technology in crop field",
            title: "Data-Driven Decisions",
            description: "Transform agricultural practices with intelligent insights and recommendations",
        },
        {
            src: "/images/handstabletanalytics.jpg",
            alt: "Agricultural data analytics on mobile device",
            title: "Agricultural Innovation",
            description: "Bridging technology and traditional farming for sustainable growth",
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [images.length])

    useEffect(() => {
        // Simulate loading completion after a short delay
        const loadTimer = setTimeout(() => {
            setImagesLoaded(true)
        }, 500)
        return () => clearTimeout(loadTimer)
    }, [])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-emerald-100">
            {/* Loading indicator - only show if images aren't loaded */}
            {!imagesLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center z-20">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <i className="fas fa-seedling text-4xl text-blue-600 mb-2 animate-pulse"></i>
                        <p className="text-slate-600 text-sm">Loading AgTech Solutions...</p>
                    </div>
                </div>
            )}

            {/* Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentIndex && imagesLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            onLoad={() => {
                                if (index === 0) setImagesLoaded(true)
                            }}
                            onError={(e) => {
                                // Fallback to a solid color background if image fails to load
                                const target = e.target as HTMLImageElement
                                target.style.display = "none"
                                const parent = target.parentElement
                                if (parent) {
                                    parent.style.background = `linear-gradient(135deg, ${
                                        index % 2 === 0 ? "#3B82F6" : "#059669"
                                    }, ${index % 2 === 0 ? "#059669" : "#3B82F6"})`
                                }
                            }}
                        />
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Image content overlay */}
                        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">{image.title}</h3>
                            <p className="text-sm sm:text-base lg:text-lg text-white/90 drop-shadow-md leading-relaxed">
                                {image.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - only show when loaded */}
            {imagesLoaded && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </button>
                </>
            )}

            {/* Dots Indicator - only show when loaded */}
            {imagesLoaded && (
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default HomeCarousel
