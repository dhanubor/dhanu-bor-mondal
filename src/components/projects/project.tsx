'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { ExternalLink, Github, Calendar, User, Tag, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

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
  year?: string
  featured?: boolean
  longDescription?: string
  features?: string[]
  challenges?: string[]
}

const projects: Project[] = [
  {
    projectName: 'Food Expiry Tracker',
    projectDescription: 'A system to track and manage expiration dates of food items, reducing waste and ensuring safety.',
    longDescription: 'Food Expiry Tracker is a comprehensive web application designed to help users manage their food inventory efficiently. The system provides intelligent notifications, detailed analytics on food waste patterns, and suggestions for recipe ideas based on items that are about to expire. Built with modern web technologies, it offers a seamless user experience across all devices.',
    client: 'Personal Project',
    category: 'Web Application',
    technologies: ['React', 'Firebase', 'Node.js', 'Express', 'MongoDB'],
    image: foodExpiryImage,
    link: 'https://foodexpirytracker-b19c4.firebaseapp.com/',
    codeLink: 'https://github.com/dhanubor/Food-Expiry-client',
    year: '2025',
    featured: true,
    features: [
      'Real-time expiry notifications',
      'Barcode scanning integration',
      'Recipe suggestions for expiring items',
      'Waste analytics and reporting',
      'Multi-device synchronization',
      'Inventory categorization'
    ],
    challenges: [
      'Implementing real-time notifications across devices',
      'Optimizing database queries for large inventories',
      'Creating an intuitive barcode scanning interface'
    ]
  },
  {
    projectName: 'Sports Club Management',
    projectDescription: 'Backend-powered sports club management app with authentication, role-based access, and payments.',
    longDescription: 'A comprehensive sports club management system that streamlines operations for sports facilities. Features include member management, court booking systems, payment processing through Stripe, and detailed analytics for club administrators. The platform supports multiple user roles and provides real-time availability updates.',
    client: 'Personal Project',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    image: sportClubImage,
    link: 'https://sportaclub-e3e7e.web.app/',
    codeLink: 'https://github.com/dhanubor/sport-club-client',
    year: '2025',
    featured: true,
    features: [
      'Role-based access control',
      'Real-time court booking system',
      'Stripe payment integration',
      'Member management dashboard',
      'Automated email notifications',
      'Revenue analytics and reporting'
    ],
    challenges: [
      'Handling concurrent booking requests',
      'Implementing secure payment processing',
      'Designing flexible role management system'
    ]
  },
  {
    projectName: 'MangoCare Tracker',
    projectDescription: 'A mango farm management tracker to monitor plantation, growth, and care schedules.',
    longDescription: 'MangoCare Tracker is an agricultural technology solution designed specifically for mango farmers. It provides comprehensive tools for monitoring plant health, tracking growth cycles, managing irrigation schedules, and optimizing harvest timing. The application uses modern web technologies to deliver a user-friendly interface for farmers of all technical backgrounds.',
    client: 'Personal Project',
    category: 'Agriculture Tech',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    image: mangoCareImage,
    link: 'https://mangocare-tracker.web.app/',
    codeLink: '',
    year: '2025',
    features: [
      'Plant health monitoring',
      'Growth cycle tracking',
      'Irrigation schedule management',
      'Weather integration',
      'Harvest optimization',
      'Care activity logging'
    ],
    challenges: [
      'Creating intuitive UI for non-technical users',
      'Integrating weather API data',
      'Designing flexible scheduling system'
    ]
  },
]

const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section className='relative py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50'>
        {/* Background decorations */}
        <div className='absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl'></div>
        
        <div className='container mx-auto px-6 relative z-10'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4'>
              <Tag size={16} />
              Featured Projects
            </div>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4'>
              My Recent Work
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Explore my latest projects showcasing modern web development and innovative solutions
            </p>
          </div>

          {/* Compact Projects Grid */}
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto'>
            {projects.map((project) => (
              <div
                key={project.projectName}
                className='group relative bg-white/80 backdrop-blur-sm shadow-md border border-white/20 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer'
                onClick={() => openModal(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full'>
                    Featured
                  </div>
                )}

                {/* Compact Image */}
                <div className='relative h-40 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                  <Image
                    src={project.image}
                    alt={project.projectName}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <div className='flex items-center gap-2 text-white font-medium'>
                      <Eye size={18} />
                      View Details
                    </div>
                  </div>
                </div>

                {/* Compact Content */}
                <div className='p-4'>
                  <div className='mb-2'>
                    <h3 className='text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors'>
                      {project.projectName}
                    </h3>
                    <div className='flex items-center justify-between text-xs text-gray-500 mb-2'>
                      <span>{project.client}</span>
                      {project.year && (
                        <span className='flex items-center gap-1'>
                          <Calendar size={12} />
                          {project.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className='text-gray-700 text-sm leading-relaxed mb-3 line-clamp-2'>
                    {project.projectDescription}
                  </p>

                  {/* Compact Technology Tags */}
                  <div className='flex flex-wrap gap-1 mb-3'>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={tech}
                        className='px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Quick Action Buttons */}
                  <div className='flex gap-2'>
                    {project.link && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors'
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='flex-1 flex items-center justify-center gap-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg text-sm font-medium transition-colors'
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl'>
            {/* Modal Header */}
            <div className='relative h-64 bg-gradient-to-br from-gray-100 to-gray-200'>
              <Image
                src={selectedProject.image}
                alt={selectedProject.projectName}
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors'
              >
                <X size={20} />
              </button>

              {/* Project Title Overlay */}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-center gap-2 mb-2'>
                  {selectedProject.featured && (
                    <span className='px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full'>
                      Featured
                    </span>
                  )}
                  <span className='px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full'>
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className='text-3xl font-bold text-white mb-2'>
                  {selectedProject.projectName}
                </h2>
                <div className='flex items-center gap-4 text-white/90'>
                  <span className='flex items-center gap-1'>
                    <User size={16} />
                    {selectedProject.client}
                  </span>
                  {selectedProject.year && (
                    <span className='flex items-center gap-1'>
                      <Calendar size={16} />
                      {selectedProject.year}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className='p-6 overflow-y-auto max-h-[calc(90vh-16rem)]'>
              <div className='grid gap-8 lg:grid-cols-3'>
                {/* Main Content */}
                <div className='lg:col-span-2 space-y-6'>
                  {/* Description */}
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>Project Overview</h3>
                    <p className='text-gray-700 leading-relaxed'>
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  {selectedProject.features && (
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>Key Features</h3>
                      <ul className='grid gap-2 sm:grid-cols-2'>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className='flex items-start gap-2'>
                            <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                            <span className='text-gray-700'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges */}
                  {selectedProject.challenges && (
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>Technical Challenges</h3>
                      <ul className='space-y-2'>
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className='flex items-start gap-2'>
                            <div className='w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0'></div>
                            <span className='text-gray-700'>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className='space-y-6'>
                  {/* Technologies */}
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-3'>Technologies</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className={`px-3 py-2 rounded-lg text-sm font-medium
                            ${index % 4 === 0 ? 'bg-blue-100 text-blue-800' :
                              index % 4 === 1 ? 'bg-green-100 text-green-800' :
                              index % 4 === 2 ? 'bg-purple-100 text-purple-800' :
                              'bg-orange-100 text-orange-800'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className='space-y-3'>
                    <h3 className='text-lg font-bold text-gray-900'>Project Links</h3>
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg'
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}
                    
                    {selectedProject.codeLink ? (
                      <a
                        href={selectedProject.codeLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg'
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    ) : (
                      <div className='flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed'>
                        <Github size={18} />
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectGrid