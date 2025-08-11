'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import dhanu from '@/app/images/projects/Dhanu-01.jpg'
import { Linkedin } from 'lucide-react'
import { BsYoutube } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa' // Github icon

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhanu-bor-mondal-72788727b/',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@dhanujoy1091',
    icon: BsYoutube,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/dhanubor',
    icon: FaGithub,
  },
]

const Hero = () => {
  return (
    <section className='relative isolate overflow-hidden py-16 sm:py-20'>
      {/* Top gradient background */}
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
                     -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
                     opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12'>
        {/* Text Content */}
        <motion.div
          className='flex-1 text-center lg:text-left'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
            Hi, I’m <span className='text-primary'>Dhanu Bor Mondal</span>
          </h1>
          <p className='mt-4 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0'>
            A passionate <strong>Full-Stack Web Developer</strong> with 3+ years
            of experience building fast, scalable & user-friendly applications
            using{' '}
            <span className='font-medium'>
              Next.js, React, TypeScript, Node.js, MongoDB
            </span>{' '}
            and more.
          </p>
          <p className='mt-3 text-muted-foreground max-w-2xl mx-auto lg:mx-0'>
            I specialize in creating responsive, conversion-optimized web apps —
            from landing pages to complex booking systems & real-time
            dashboards. Let’s build something impactful together!
          </p>

          <div className='mt-6 flex flex-wrap gap-4 justify-center lg:justify-start'>
            <Button asChild size='lg'>
              <Link href='/project'>View My Projects</Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <a href='/dhanu-bor.pdf' download>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className='mt-6 flex gap-4 justify-center lg:justify-start'>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition'
              >
                <Icon className='w-5 h-5 text-primary' />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className='flex-1 flex justify-center'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/30'>
            <Image
              src={dhanu}
              alt='Dhanu Bor Mondal'
              fill
              className='object-cover'
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient background */}
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]
                     -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
                     opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}

export default Hero
