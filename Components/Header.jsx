'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import heroImage from '@/public/header-image.jpeg';

const Header = () => {
  const typewriterRef = useRef(null);
  const indexRef = useRef(0); // Use useRef to preserve index state
  const timeoutRef = useRef(null);

  const typeWriter = () => {
    const roles = ["Full Stack Developer", "UI/UX Designer", "App Developer"];
    const text = roles[indexRef.current];
    let charIndex = 0;
    
    const type = () => {
      if (typewriterRef.current) {
        typewriterRef.current.textContent = text.slice(0, charIndex);
        charIndex++;
        
        if (charIndex <= text.length) {
          timeoutRef.current = setTimeout(type, 100);
        } else {
          timeoutRef.current = setTimeout(() => {
            indexRef.current = (indexRef.current + 1) % roles.length;
            typeWriter();
          }, 1500);
        }
      }
    };
    type();
  };

  useEffect(() => {
    typeWriter();

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []); // Run only once on mount

  return (
    <header className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8">
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Welcome to <br /> <span className="text-indigo-500">CODE WITH UNCLE-JOSHI</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light">
          I am a <span ref={typewriterRef} className="text-indigo-400 border-r-4 border-indigo-500"></span>
        </h2>
        <p className="text-lg text-gray-300">
          Building seamless experiences from the first pixel to the last endpoint. <br />
          Designing experiences that connect people, not just pixels. <br />
          Exploring the future, one byte at a time.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="mt-4 px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-600 transition duration-300">
            Join Us
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="w-80 h-80 relative">
          <Image 
            src={heroImage} 
            alt="Hero" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
