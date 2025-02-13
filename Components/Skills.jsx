'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAdobe,
} from 'react-icons/si';
import { FaPython } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaDartLang } from "react-icons/fa6";
import { FaLinesLeaning } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'UI/UX Design', icon: <SiAdobe className="text-red-500" /> },
    { name: 'Responsive Design', icon: <DiResponsive className="text-purple-500" /> },
    { name: 'Dart', icon: <FaDartLang className="text-gray-500" /> }, 
    { name: 'Python', icon: <FaPython className="text-blue-500" /> }, 
    { name: 'C++', icon: <TbBrandCpp className="text-blue-700" /> }, 
    { name: 'Figma', icon: <IoLogoFigma className="text-pink-500" /> },
    { name: 'GSAP', icon: <SiJavascript className="text-green-400" /> }, 
    { name: 'Three.js', icon: <FaLinesLeaning className="text-black" /> } 
  ];
  

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-800 text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center"
          >
            <div className="text-5xl mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
