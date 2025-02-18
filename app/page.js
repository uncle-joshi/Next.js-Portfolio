import CourseCard from '@/Components/Course/CourseCard'
import Header from '@/Components/Header'
import Projects from '@/Components/Projects/Projects'
import Skills from '@/Components/Skills'

const Home = () => {

  return (
    <section>
      <Header />
      <Skills />
     <Projects />
     <CourseCard />
    </section>
  )
}

export default Home