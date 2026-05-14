import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-5 sm:px-[7vw] lg:px-[12vw] xl:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rahul Mahto</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Certification", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            // { icon: <FaFacebook />, link: "#" },
            { icon: <FaGithub />, link: "https://github.com/mr-rahulmahto" },
            { icon: <FaLinkedin />, link: "https://linkedin.com/in/rahul-mahto-b9a8972a5" },
            { icon: <FaTwitter />, link: "https://x.com/mr_rahulmahto" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mr.rahulmahto/" },
            // { icon: <FaYoutube />, link: "#" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Rahul Mahto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

