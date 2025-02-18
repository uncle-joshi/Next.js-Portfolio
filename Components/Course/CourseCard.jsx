import React from 'react'
import Card from '../Card'

const CourseCard = () => {

    const CourseData = [
        {
            image: "/frontend.png",
            title: "Frontend Development",
            description: "Basic of Html Css JavaScript and Css library TailwindCss alos JavaScript library React.js Next.js etc"
        },
        {
            image: "/Backend.webp",
            title: "Backend Development",
            description: "Basic of Node.js and Express littleBit Database"
        },
        {
            image: "/full-stack.png",
            title: "Full Stack Development",
            description: "Combine Frontend and Backend Development and more Skills to learn like MySQL and MongoDB"
        },
        {
            image: "/app.jpeg",
            title: "Mobile Development",
            description: "Android and IOS Development (Flutter Development, Dart, etc)"
        }
    ]
  return (
    <section className="p-6 bg-gray-800">
    <h1 className="text-4xl font-bold text-white mb-12 text-center">Course</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {CourseData.map((course, index) => (
        <Card
          key={index} 
          image={course.image} 
          title={course.title} 
          description={course.description}
          index={index}
        />
      ))}
    </div>
  </section>
  )
}

export default CourseCard