"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const NavLinks = [
    { name: "PROJECT", path: "/Project" },
    { name: "COURSE", path: "/Course" },
    { name: "BLOG", path: "/Blog" },
    { name: "CONTENT", path: "/Content" },
  ];

  // GSAP Animation for Menu
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold glow-effect">
          CODE WITH <span className="text-yellow-500">UNCLE-JOSHI</span>
        </Link>

        {/* Menu Icon for Mobile */}
        <div
          className="md:hidden text-yellow-500 text-3xl cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-purple-900 px-4 py-2 rounded-full hover:bg-transparent hover:border-2 hover:border-purple-900">
            LOGIN
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`top-0 fixed bg-gray-800 right-0 w-3/4 h-full p-10 text-white flex flex-col gap-8 transform translate-x-full md:hidden transition duration-500 ease-in-out`}
      >
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-yellow-500"
          >
            {link.name}
          </Link>
        ))}
        <button className="bg-purple-900 px-4 py-2 rounded-full hover:bg-transparent hover:border-2 hover:border-purple-900">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
