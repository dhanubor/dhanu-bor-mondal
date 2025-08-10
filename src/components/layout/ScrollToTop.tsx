'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50
            bg-blue-600 hover:bg-blue-700 
            dark:bg-blue-500 dark:hover:bg-blue-600
            text-white rounded-full p-3
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 ease-in-out
            hover:scale-110 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            dark:focus:ring-offset-gray-900
            group
          `}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ChevronUp 
            className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" 
          />
          
          {/* Animated background circle */}
          <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
        </button>
      )}
    </>
  )
}

export default ScrollToTop