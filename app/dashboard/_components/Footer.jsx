import React from "react";
import { CopyrightIcon, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Section */}
        <div className="flex items-center text-sm">
          <CopyrightIcon className="mr-2 h-5 w-5 text-cyan-400" />
          <span>{new Date().getFullYear()} Shuggestor AI. All Rights Reserved.</span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/HimKasera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/himkasera/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/him_kasera/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            {/* Instagram SVG Icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.5 3h9a4.5 4.5 0 014.5 4.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm9.75 3.75h.008M12 8.625a3.375 3.375 0 100 6.75 3.375 3.375 0 000-6.75z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;