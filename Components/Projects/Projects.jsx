import Card from "@/Components/Card"

const Projects = () => {

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
    <section className="p-6 bg-gray-800">
    <h1 className="text-4xl font-bold text-white mb-12 text-center">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {ProjectsData.map((project, index) => (
        <Card
          key={index} 
          image={project.image} 
          title={project.title} 
          description={project.description}
          index={index}
        />
      ))}
    </div>
  </section>
  )
}

export default Projects