import AboutMe from '@/components/home/about'
import Hero from '@/components/home/Hero'
import Skills from '@/components/home/skills'
import ProjectGrid from '@/components/projects/project'
import Contant from './(client)/contact/page'


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectGrid />
      <Contant/>
    </div>
  )
}
