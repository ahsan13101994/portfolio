import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#about" className="ml-3 text-xl">
                Syed Ahsan Rizvi
              </a>
            </a>
            <nav className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              <a href="#portfolio" className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#resume" className="mr-5 hover:text-white">
                Resume
              </a>            
              <a
              href="#contact" className="mr-5 hover:text-white">
              Hire Me
              </a>
            </nav>
          </div>
        </header>
      );
}