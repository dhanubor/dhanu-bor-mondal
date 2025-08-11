import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HireMeCTA() {
  return (
    <section className='py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-primary px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24'>
          {/* Background Shape */}
          <div
            className='absolute -top-24 right-0 -z-10 transform-gpu blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25'
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>

          {/* Text Content */}
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-0 lg:text-left'>
            <h2 className='text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl'>
              Looking for a Web Developer?
            </h2>
            <p className='mt-6 text-lg leading-8 text-primary-foreground/80'>
              I’m available for <strong>full-time jobs</strong> and exciting
              <strong> freelance projects</strong>. Let’s collaborate to build
              modern, fast, and visually stunning web experiences that make your
              brand stand out.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              <Button size='lg' asChild variant='secondary'>
                <Link href='/contact'>Hire Me</Link>
              </Button>
              <Button
                size='lg'
                asChild
                variant='link'
                className='text-primary-foreground'
              >
                <Link href='/portfolio'>
                  View My Work <span aria-hidden='true'>→</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative Right Side */}
          <div className='relative mt-16 h-80 lg:mt-0'>
            <div className='absolute left-0 top-0 w-full h-full bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 transform rotate-3'></div>
            <div className='absolute left-4 top-4 w-full h-full bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 transform rotate-1'></div>
            <div className='absolute left-8 top-8 w-full h-full bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 transform -rotate-1'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
