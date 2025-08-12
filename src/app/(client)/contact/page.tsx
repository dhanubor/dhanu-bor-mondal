import ContactForm from '@/components/home/ContactForm'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contant = () => {
  return (
    <div>
      <section>
        <section className='relative py-24 overflow-hidden'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute inset-0 bg-muted/50' />
          </div>

          <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
                Contact Us
              </h1>
              <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                Have a project in mind? I am ready to turn your vision into
                reality
              </p>
            </div>
          </div>
        </section>
        {/* Get in touch */}
        <section className='py-12 px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div>
              <h2 className='text-3xl font-bold mb-4'>Get in touch</h2>
              <p className='text-muted-foreground mb-10'>
                Tell me about your project and how i can help you achieve your
                goals.
              </p>

              <div className='space-y-6'>
                {/* Email */}
                <Card className='bg-muted/50 p-6 flex items-start gap-4'>
                  <div className='rounded-full bg-primary/10 p-2'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Email me</h3>

                    <p className='mt-2 text-primary'>
                      nikhilmistry121203@gmail.com
                    </p>
                  </div>
                </Card>

                {/* Address */}
                <Card className='bg-muted/50 p-6 flex items-start gap-4'>
                  <div className='rounded-full bg-primary/10 p-2'>
                    <MapPin className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Visit me</h3>

                    <p className='mt-2'>
                      Dhumghat Shyamnagor Satkhira Bangladesh
                    </p>
                  </div>
                </Card>

                {/* Phone */}
                <Card className='bg-muted/50 p-6 flex items-start gap-4'>
                  <div className='rounded-full bg-primary/10 p-2'>
                    <Phone className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Call me</h3>
                    <p className='mt-1 text-muted-foreground'>
                      Mon-Fri from 9AM to 10PM EST.
                    </p>
                    <p className='mt-2'>+8801644539394</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className='p-6 lg:p-8'>
              <h2 className='text-2xl font-bold mb-6'>
                Tell me about your project
              </h2>
              <ContactForm />
            </Card>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Contant
