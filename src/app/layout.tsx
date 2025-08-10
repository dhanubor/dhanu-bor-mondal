import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Components


import Navber from '@/components/layout/Navber'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// Metadata
export const metadata: Metadata = {
  title: {
    default: 'Dhanu Bor Mondal - Full Stack Developer',
    template: '%s | Dhanu Bor Mondal - Full Stack Developer',
  },
  description:
    'Full Stack Developer specializing in React, Next.js, and TypeScript. Building modern web applications with clean code and great user experiences.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Dhanu Bor Mondal' }],
  creator: 'Dhanu Bor Mondal',
  publisher: 'Dhanu Bor Mondal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    title: 'Dhanu Bor Mondal - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and TypeScript.',
    siteName: 'Dhanu Bor Mondal Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dhanu Bor Mondal - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanu Bor Mondal - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and TypeScript.',
    creator: '@johndoe',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content for accessibility */}
          <a
            href='#main-content'
            className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200'
          >
            Skip to main content
          </a>

          {/* Main Layout Structure */}
          <div className='min-h-screen flex flex-col'>
            {/* Header */}
            <Navber />

            {/* Main Content */}
            <main id='main-content' className='flex-grow' role='main'>
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Background Elements */}
          <div className='fixed inset-0 -z-10'>
            {/* Gradient Background */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' />

            {/* Animated Background Shapes */}
            <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob' />
            <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000' />
            <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000' />
          </div>

          {/* Loading Spinner (optional - for page transitions) */}
          <div id='loading-spinner' className='hidden'>
            <div className='fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          </div>
        </ThemeProvider>

        {/* Analytics Scripts (if needed) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
