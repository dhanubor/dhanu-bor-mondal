import React from 'react'
import image1 from '@/app/images/images.jpeg'
import image2 from '@/app/images/do.jpg'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const projects = [
    {
      projectName: 'Pothole Management System',
      projectDescription:
        'A comprehensive tool for reporting, tracking, and managing road potholes.',
      client: 'Urban Development Authority',
      category: 'Web Application, GIS, Civic Tech',
      technologies: ['React', 'Django', 'PostgreSQL', 'Leaflet.js'],
      features: [
        'GPS-based pothole reporting',
        'Image upload',
        'Repair task tracking and prioritization',
        'Dashboard analytics',
        'Notification system for citizens',
      ],
      image: image1,
      link: 'https://www.example.com/pothole-project',
      codeLink: 'https://github.com/yourusername/pothole-project',
    },
    {
      projectName: 'E-commerce Platform for Handmade Crafts',
      projectDescription:
        'A marketplace for local artisans to sell their handmade products.',
      client: "Independent Artisans' Guild",
      category: 'E-commerce, Web Development, Marketplace',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
      features: [
        'Secure payment gateways',
        'User-friendly product catalog',
        'Order management',
        'Artist profile page',
        'Customer review system',
      ],
      image: '',
      codeLink: 'https://github.com/yourusername/crafts-ecommerce',
    },
    {
      projectName: 'Fitness Tracking Mobile App',
      projectDescription: 'Your personal fitness coach in your pocket.',
      client: 'Active Life Co.',
      category: 'Mobile Application, Health & Fitness',
      technologies: ['Flutter', 'Firebase', 'D3.js'],
      features: [
        'Workout and calorie tracking',
        'Personalized workout plans',
        'Diet tracker',
        'Progress visualization',
        'Social sharing',
      ],
      image: 'image_fitness_app.png',
      link: 'https://www.example.com/fitness-project',
      codeLink: 'https://github.com/yourusername/fitness-app',
    },
    {
      projectName: 'Financial Dashboard',
      projectDescription:
        'A comprehensive financial management tool with budget tracking, investment monitoring, and reporting.',
      client: 'WealthWise Financial',
      category: 'UI/UX, Data Visualization',
      technologies: ['React', 'D3.js', 'Node.js'],
      features: [
        'Expense tracking',
        'Budgeting tools',
        'Investment portfolio visualization',
        'Detailed financial reports',
        'Alerts and notifications',
      ],
      image: 'image_financial_dashboard.png',
      link: 'https://www.example.com/financial-dashboard',
      codeLink: 'https://github.com/yourusername/financial-dashboard',
    },
    {
      projectName: 'Smart Home Automation System',
      projectDescription:
        'An integrated system to control and monitor home appliances and security from a single interface.',
      client: 'Future Living Solutions',
      category: 'IoT, Mobile Application',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React Native'],
      features: [
        'Remote device control',
        'Real-time sensor data',
        'Security alerts and notifications',
        'Energy consumption monitoring',
        'Voice assistant integration',
      ],
      image: 'image_smart_home_automation.png',
      link: 'https://www.example.com/smart-home-project',
      codeLink: 'https://github.com/yourusername/smart-home-system',
    },
    {
      projectName: 'Online Learning Platform',
      projectDescription:
        'A platform for students and educators to connect, share resources, and conduct online classes.',
      client: 'Knowledge Hub',
      category: 'Educational Tech, Web Development',
      technologies: ['Vue.js', 'Firebase', 'WebRTC'],
      features: [
        'Video conferencing',
        'Assignment and quiz management',
        'Resource library',
        'User progress tracking',
        'Discussion forums',
      ],
      image: 'image_online_learning_platform.png',
      link: 'https://www.example.com/elearning-project',
      codeLink: 'https://github.com/yourusername/online-learning-platform',
    },
  ]
  return (
    <div>
      <section>
        <div className='text-center my-7 mb-44'>
          <h1 className='text-4xl font-medium '>My Work</h1>
          <h3 className='text-xl my-4'>
            Explore my portfolio of projects that demonstrate my expertise and
            creativity.
          </h3>
        </div>
        <div className='text-center my-7'>
          <h1 className='text-4xl font-medium '>Featured Projects</h1>
          <h3 className='text-xl my-4'>
            Browse my collection of work across various industries and
            technologies.
          </h3>
        </div>
        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {projects.map((project, index) => (
              <div key={index} className=''>
                <Image
                  src='/profile.png'
                  alt='Picture of the author'
                  width={500}
                  height={300}
                />
                <h2 className='text-xl font-bold my-2.5'>
                  {project.projectName}
                </h2>
                <h4 className='text-base font-semibold border rounded-2xl'>
                  Client : {project.client}
                </h4>
                <p className='font-medium'>{project.projectDescription}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default page
