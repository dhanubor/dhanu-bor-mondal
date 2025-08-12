'use client'

import React, { useState, FormEvent } from 'react'

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    // এখানে মেইল পাঠানো নেই, শুধু সিমুলেট করছি
    setTimeout(() => {
      setLoading(false)
      setStatus('✅ Message sent successfully! (Simulation)')
      e.currentTarget.reset()
    }, 1500)
  }

  return (
    <form onSubmit={sendEmail} className='space-y-4'>
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
