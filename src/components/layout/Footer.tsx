'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowUp,
  ExternalLink,
  Send,
} from 'lucide-react'

// Types
interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  label: string
}

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Social Links
  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/dhanubor',
      icon: <Github className='w-5 h-5' />,
      label: 'Visit my GitHub profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhanu-bor-mondal-72788727b/',
      icon: <Linkedin className='w-5 h-5' />,
      label: 'Connect with me on LinkedIn',
    },
    {
      name: 'Twitter',
      href: 'https://x.com/Dhanu78996754',
      icon: <Twitter className='w-5 h-5' />,
      label: 'Follow me on Twitter',
    },
    {
      name: 'Email',
      href: 'mailto:nikhilmistry121203@gmail.com',
      icon: <Mail className='w-5 h-5' />,
      label: 'Send me an email',
    },
  ]

  // Footer Navigation Sections
  const footerSections: FooterSection[] = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/portfolio' },
        // { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Projects',
      links: [
        { name: 'Food Expiry Tracker', href: 'https://foodexpirytracker-b19c4.firebaseapp.com/' },
        { name: 'Sports Club Management', href: 'https://sportaclub-e3e7e.web.app/' },
        { name: 'MangoCare Tracker', href: 'https://mangocare-tracker.web.app/' },
       
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: '/dhanu-bor.pdf', external: true },
        {
          name: 'Use This Template',
          href: 'https://github.com/dhanubor/dhanu-bor-mondal',
          external: true,
        },
        // { name: 'Blog RSS', href: '/feed.xml', external: true },
        // { name: 'Sitemap', href: '/sitemap.xml', external: true },
      ],
    },
  ]

  // Newsletter Subscription Handler
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      // Add your newsletter subscription logic here
      // const response = await fetch('/api/subscribe', { ... })

      setIsSubscribed(true)
      setEmail('')

      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000)
    } catch (error) {
      console.error('Subscription error:', error)
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Section */}
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand & Description */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>JD</span>
              </div>
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                Dhanu Bor Mondal
              </span>
            </div>
            <p className='text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed'>
              Full Stack Developer passionate about creating beautiful,
              functional web applications that solve real-world problems.
            </p>

            {/* Contact Info */}
            <div className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
              <div className='flex items-center space-x-2'>
                <MapPin className='w-4 h-4' />
                <span>Dhumghat Shyamnagor Satkhira Bangladesh</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4' />
                <span>+8801644539394</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Mail className='w-4 h-4' />
                <span>nikhilmistry121203@gmail.com
</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4'>
                {section.title}
              </h3>
              <ul className='space-y-2'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200 flex items-center space-x-1 group'
                      {...(link.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        {/* <div className='py-8 border-t border-gray-200 dark:border-gray-800'>
          <div className='max-w-md'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
              Stay Updated
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm mb-4'>
              Get notified about new projects and blog posts.
            </p>
            <form onSubmit={handleSubscribe} className='flex space-x-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm'
                required
              />
              <button
                type='submit'
                disabled={isSubscribed}
                className='px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm font-medium'
              >
                {isSubscribed ? (
                  <>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className='w-4 h-4' />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className='py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
          {/* Copyright */}
          <div className='flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400'>
            <span>© {new Date().getFullYear()} John Doe. Made with</span>
            <Heart className='w-4 h-4 text-red-500 fill-current' />
            <span>using Next.js & TypeScript</span>
          </div>

          {/* Social Links */}
          <div className='flex items-center space-x-4'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.label}
                className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={
                  social.name !== 'Email' ? 'noopener noreferrer' : undefined
                }
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className='p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full transition-colors duration-200 group'
            aria-label='Scroll to top'
          >
            <ArrowUp className='w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400' />
          </button>
        </div>
      </div>

      {/* Back to Top Line */}
      <div className='h-1 bg-gradient-to-r from-blue-600 to-purple-600'></div>
    </footer>
  )
}

export default Footer
