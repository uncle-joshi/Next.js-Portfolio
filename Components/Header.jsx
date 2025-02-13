'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import heroImage from '@/public/header-image.jpeg';

const Header = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(headerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      }, "-=0.5")
      .from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
      }, "-=0.8");

    // Typewriter Animation
    const roles = ["Full Stack Developer", "UI/UX Designer", "App Developer "];
    let index = 0;

    const typeWriter = () => {
      if (index < roles.length) {
        typewriterRef.current.textContent = '';
        const text = roles[index];
        text.split('').forEach((char, i) => {
          setTimeout(() => {
            typewriterRef.current.textContent += char;
          }, i * 100); // Speed of typing
        });
        setTimeout(() => {
          index = (index + 1) % roles.length;
          typeWriter();
        }, text.length * 100 + 1500); // Wait before next word
      }
    };

    typeWriter();
  }, []);

  return (
    <header ref={headerRef} className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8">
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 ref={textRef} className="text-5xl md:text-6xl font-bold">
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
        <div ref={imageRef} className="w-80 h-80 relative">
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
