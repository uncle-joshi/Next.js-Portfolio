"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ image, title, description, index }) => {
  const cardRef = useRef(null);
  if (!image) return null; // Handle the case where imageUrl is undefined or empty

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100 }, // Start from the bottom
      {
        opacity: 1,
        y: 0, // Move to the original position
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.5, // Staggered effect
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%', // Animation starts when card is 85% into viewport
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, [index]);

  console.log('Image URL:', image);


  return (
    <div 
      ref={cardRef} 
      className="bg-gradient-to-br cursor-pointer from-gray-800 via-gray-900 to-black rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-indigo-500 hover:border-opacity-50"
    >
      <Image 
        src={image || "hello world"} 
        alt={title}
        width={300} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
