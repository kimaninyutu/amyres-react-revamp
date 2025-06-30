"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
  autoPlay?: boolean
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      }, interval)

      return () => clearInterval(timer)
    }
  }, [currentIndex, autoPlay, interval, images.length])

  const goToPrevious = (): void => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = (): void => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  if (!images || images.length === 0) return null

  return (
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
              <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || `Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                />
              </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
            <>
              <button
                  onClick={goToPrevious}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Previous image"
              >
                <ChevronLeft size={16} className="md:w-5 md:h-5" />
              </button>
              <button
                  onClick={goToNext}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                  aria-label="Next image"
              >
                <ChevronRight size={16} className="md:w-5 md:h-5" />
              </button>
            </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                  />
              ))}
            </div>
        )}
      </div>
  )
}

export default Carousel
