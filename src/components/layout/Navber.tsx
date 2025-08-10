'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-blue-600 dark:text-blue-400"
          >
            Dhanu Bor Mondal
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Link href={navLink.path}>{navLink.name}</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4">
            <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Link href={navLink.path} onClick={() => setIsOpen(false)}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navber
