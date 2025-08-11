import Image, { StaticImageData } from 'next/image'
import React from 'react'

import foodExpiryImage from '@/app/images/projects/food_expiry.png'
import sportClubImage from '@/app/images/projects/sport_club.png'
import mangoCareImage from '@/app/images/projects/mango_care.png'

interface Project {
  projectName: string
  projectDescription: string
  client: string
  category: string
  technologies: string[]
  image: StaticImageData
  link?: string
  codeLink?: string
}

const projects: Project[] = [
  {
    projectName: 'Food Expiry Tracker',
    projectDescription:
      'A system to track and manage expiration dates of food items, reducing waste and ensuring safety by notifying users before items expire.',
    client: 'Personal Project',
    category: 'Web Application',
    technologies: ['React', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    image: foodExpiryImage,
    link: 'https://foodexpirytracker-b19c4.firebaseapp.com/',
    codeLink: 'https://github.com/dhanubor/Food-Expiry-client',
  },
  {
    projectName: 'Sports Club Management System',
    projectDescription:
      'Backend-powered sports club management app with authentication, role-based access, court booking, and Stripe payments.',
    client: 'Personal Project',
    category: 'Web Application, Management System',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: sportClubImage,
    link: 'https://sportaclub-e3e7e.web.app/',
    codeLink: 'https://github.com/dhanubor/sport-club-client',
  },
  {
    projectName: 'MangoCare Tracker',
    projectDescription:
      'A mango farm management tracker to monitor plantation, growth, and care schedules for healthy mango production.',
    client: 'Personal Project',
    category: 'Agriculture, Management System',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    image: mangoCareImage,
    link: 'https://mangocare-tracker.web.app/',
    codeLink: '',
  },
]

const ProjectGrid: React.FC = () => {
  return (
    <section className='py-10 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <div
              key={project.projectName}
              className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-1'
            >
              {/* Image */}
              <div className='relative h-48 w-full overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className='object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>

              {/* Content */}
              <div className='p-5 flex flex-col h-full'>
                <h2 className='text-xl font-bold mb-1 text-gray-800'>
                  {project.projectName}
                </h2>
                <p className='text-sm text-gray-500 mb-2'>
                  Client: {project.client}
                </p>
                <p className='text-gray-700 mb-4'>
                  {project.projectDescription}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div></div>
                {/* Buttons */}
                <div className='grid grid-cols-2 gap-3'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded hover:from-blue-700 hover:to-blue-600 transition'
                  >
                    View Live
                  </a>

                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex-1 text-center bg-gray-200  text-black py-2 rounded hover:bg-gray-300 transition'
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid
