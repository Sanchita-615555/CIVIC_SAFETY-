import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Issues", id: "issues" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="w-full
                 flex flex-col md:flex-row md:items-center md:justify-between
                 px-6 lg:px-12 py-3
                 bg-blue-200/90 backdrop-blur-md
                 shadow-md"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-3">
          <img src="/civic.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-lg md:text-xl text-blue-700">
            Civic Safety
          </span>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-700 text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`w-full md:w-auto transition-all duration-300 
                    ${open ? "block mt-4" : "hidden md:flex"}
                    md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-base md:text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="w-full text-left md:text-center hover:text-blue-600 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;