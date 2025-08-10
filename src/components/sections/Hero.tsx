'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Dhanu Bor Mondal</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            A passionate <strong>Full-Stack Web Developer</strong> with 3+ years of experience building 
            fast, scalable & user-friendly applications using <span className="font-medium">Next.js, React, TypeScript, Node.js, MongoDB</span> and more.
          </p>

          <p className="mt-3 text-gray-700 dark:text-gray-400 max-w-2xl">
            I specialize in creating responsive, conversion-optimized web apps — from landing pages to complex booking systems & real-time dashboards. Let’s build something impactful together!
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/project"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg shadow-md transition-colors"
            >
              Let’s Work Together
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-500/30">
            <Image
              src="/images/profile.jpg" // তোমার ছবি এখানে বসাতে হবে
              alt="Dhanu Bor Mondal"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
