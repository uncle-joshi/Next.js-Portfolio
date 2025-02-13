import Header from '@/Components/Header'
import ProjectCard from '@/Components/ProjectCard'
import Skills from '@/Components/Skills'

const Home = () => {

 const ProjectsData = [
  {
    image: "/landing-page.webp",
    title: "Landing Page",
    description: "A simple landing page using HTML, CSS, and JavaScript.",
  },
  {
    image: "/eCommerce-Website.jpg",
    title: "E-Commerce Website",
    description: "An e-commerce website using React, Next.js, and Tailwind CSS.",
  },
  {
    image: "/chatgpt.jpg",
    title: "ChatGPT AI Assistant",
    description: "A chatbot interface using API and React.js",
  },
  {
    image: "/protfolio.jpg",
    title: "Portfolio Website",
    description: "A portfolio website using Next.js, React.js, and Tailwind CSS.",
  }
 ]

  return (
    <section>
      <Header />
      <Skills />
      <div className='px-4 bg-gray-800 mb-5 text-white'>
        <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {
            ProjectsData.map((project, index) => {
              return (
                <ProjectCard 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
              />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home