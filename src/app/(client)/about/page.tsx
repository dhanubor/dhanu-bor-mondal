'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HireMeCTA } from '@/components/home/HireMeCTA'
import { Button } from '@/components/ui/button'
import dhanu from '@/app/images/dhanu.jpg'

const About = () => {
  return (
    <section className='relative py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden'>
      {/* Top background shape */}
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] 
                     bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12'>
        {/* Image */}
        <motion.div
          className='flex-1 flex justify-center'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className='relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-500/20'>
            <Image
              src={dhanu} // নিজের ছবি বসাও
              alt='About Me'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className='flex-1 text-center lg:text-left'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
            About Me
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            I’m <strong>Dhanu Bor Mondal</strong>, a passionate{' '}
            <strong>Full-Stack Web Developer</strong> with{' '}
            <strong>3+ years</strong> of experience crafting{' '}
            <span className='text-blue-600 dark:text-blue-400'>
              scalable, high-performance, and user-friendly applications
            </span>{' '}
            using modern tech like Next.js, React, TypeScript, Node.js, and
            MongoDB.
          </p>
          <p className='mt-4 text-gray-700 dark:text-gray-400'>
            I specialize in building{' '}
            <strong>conversion-optimized, responsive web apps</strong> — from
            sleek landing pages to complex booking systems and real-time
            dashboards. My mission is to help businesses grow through clean
            code, performance-driven UI, and seamless UX.
          </p>

          {/* Achievements */}
          {/* <ul className='mt-6 space-y-3 text-gray-700 dark:text-gray-400'>
            <li>
              🚀 Optimized load times up to <strong>40% faster</strong>
            </li>
            <li>
              🎯 Increased client conversions by <strong>+35%</strong>
            </li>
            <li>
              🛠 Delivered <strong>20+ projects</strong> for clients in 5+
              countries
            </li>
            <li>🔐 Implemented secure authentication & API handling</li>
            <li>🤝 Strong collaboration with remote teams</li>
          </ul> */}

          {/* Skills */}
          <div className='mt-8 flex flex-wrap gap-3 justify-center lg:justify-start'>
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'Tailwind CSS',
              'Framer Motion',
              'Firebase',
              'Express.js',
              'Stripe Integration',
              'Git & GitHub',
              'Figma',
            ].map((skill, i) => (
              <span
                key={i}
                className='px-4 py-2 bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium'
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className='mt-8'>
            <Button asChild size='lg' variant='outline'>
              <a href='/dhanu-bor.pdf' download>
                📄 Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <HireMeCTA />
    </section>
  )
}

export default About
