/*

import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-1 px-4
      text-gray-800 font-medium text-sm bg-blue-200 backdrop-blur-sm 
      absolute top-2 left-4 right-4 rounded-lg shadow-md z-50">
      
      {/* Left side logo + text }
      <div className="flex items-center space-x-2">
        <img src="/civic.png" alt="Logo" className="w-6 h-6 rounded-full"/>
        <span className="font-bold text-lg text-blue-700"> Civic Safety </span>
      </div>

      {/* Right side menu }
      <div className="flex space-x-4 ml-6">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#issues" className="hover:text-blue-600 transition">Issues</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;




*/




import React from "react";

function Navbar() {
  return (
    <nav
      className="relative w-[95%] max-w-7xl mx-auto
      flex items-center justify-between
      py-2 px-4
      bg-blue-200/90 backdrop-blur-md
      shadow-md rounded-lg mt-4"
    >
      {/* Left side: Logo + Text */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <img
          src="/civic.png"
          alt="Logo"
          className="w-6 h-6 rounded-full"
        />
        <span className="font-bold text-lg text-blue-700">Civic Safety</span>
      </div>

      {/* Right side menu */}
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#issues" className="hover:text-blue-600 transition">Issues</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
