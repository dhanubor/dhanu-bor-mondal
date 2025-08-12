'use client'

import React, { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser' // ✅ নতুন প্যাকেজ

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!formRef.current) return

    emailjs
      .sendForm(
        'dhanubor121', // MailJS Service ID
        'template_o4772cb', // MailJS Template ID
        formRef.current,
        '2SpP0k6JnCxetSSUn' // MailJS Public Key
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!')
          setLoading(false)
          formRef.current?.reset()
        },
        (error) => {
          setStatus('❌ Failed to send message. Try again.')
          console.error(error)
          setLoading(false)
        }
      )
  }

  return (
    <form ref={formRef} onSubmit={sendEmail} className='space-y-4'>
      <input
        type='text'
        name='user_name'
        placeholder='Your Name'
        className='w-full border rounded p-2'
        required
      />
      <input
        type='email'
        name='user_email'
        placeholder='Your Email'
        className='w-full border rounded p-2'
        required
      />
      <textarea
        name='message'
        placeholder='Your Message'
        rows={5}
        className='w-full border rounded p-2'
        required
      ></textarea>

      <button
        type='submit'
        disabled={loading}
        className='bg-primary text-black px-4 py-2 rounded hover:bg-primary/80 transition'
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && <p className='text-sm mt-2'>{status}</p>}
    </form>
  )
}

export default ContactForm
