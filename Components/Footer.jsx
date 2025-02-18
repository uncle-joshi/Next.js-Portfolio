import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Code with Uncle-Joshi</h1>
        
        <div className="flex space-x-6">
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FaYoutube size={24} />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
