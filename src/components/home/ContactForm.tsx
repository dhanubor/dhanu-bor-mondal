import React from 'react'

const ContactForm = () => {
  return (
    <form className='space-y-4' >
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
        className='bg-primary text-black px-4 py-2 rounded hover:bg-primary/80 transition'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
