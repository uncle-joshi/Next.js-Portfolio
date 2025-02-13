"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, title, description }) => {
  const cardRef = useRef(null);

  // Scroll Animation
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%', // Animation starts when card is 85% into viewport
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 w-full sm:w-72 hover:scale-105 hover:shadow-2xl hover:border hover:border-indigo-500 hover:border-opacity-50"
    >
      <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
