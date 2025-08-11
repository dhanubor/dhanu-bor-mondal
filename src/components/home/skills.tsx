import React from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiExpress,
  SiGit,
  SiFigma,
  SiStripe,
} from 'react-icons/si'

const skills = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs className='text-gray-900 dark:text-white' />,
  },
  { name: 'React', icon: <SiReact className='text-sky-500' /> },
  { name: 'TypeScript', icon: <SiTypescript className='text-blue-600' /> },
  { name: 'Node.js', icon: <SiNodedotjs className='text-green-600' /> },
  { name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-sky-400' /> },
  { name: 'Framer Motion', icon: <SiFramer className='text-pink-500' /> },
  { name: 'Firebase', icon: <SiFirebase className='text-yellow-500' /> },
  {
    name: 'Express.js',
    icon: <SiExpress className='text-gray-800 dark:text-gray-200' />,
  },
  { name: 'Git & GitHub', icon: <SiGit className='text-orange-500' /> },
  { name: 'Figma', icon: <SiFigma className='text-purple-500' /> },
  { name: 'Stripe', icon: <SiStripe className='text-indigo-500' /> },
]

const Skills = () => {
  return (
    <section className='py-16 bg-white dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-10'>
          My Skills
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-transform transform hover:-translate-y-1'
            >
              <div className='text-5xl mb-3'>{skill.icon}</div>
              <p className='text-sm font-medium text-gray-700 dark:text-gray-300 text-center'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
