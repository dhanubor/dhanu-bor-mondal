import ProjectGrid from '@/components/projects/project'
import React from 'react'

const Page = () => {
  return (
    <div>
      <section className='max-w-6xl mx-auto px-4'>
        {/* My Work */}
        <div className='text-center my-7 mb-20'>
          <h1 className='text-4xl font-semibold'>My Work</h1>
          <h3 className='text-xl mt-4 text-gray-600'>
            Explore my portfolio of projects that demonstrate my expertise and
            creativity.
          </h3>
        </div>

        {/* Featured Projects */}
        <div className='text-center my-7'>
          <h1 className='text-4xl font-semibold'>Featured Projects</h1>
          <h3 className='text-xl mt-4 text-gray-600'>
            Browse my collection of work across various industries and
            technologies.
          </h3>
        </div>

        {/* Projects */}
        <ProjectGrid />
      </section>
    </div>
  )
}

export default Page
