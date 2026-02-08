import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // mobile menu close after click
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
                 flex items-center justify-between
                 py-1 px-6
                 bg-blue-200/90 backdrop-blur-md
                 shadow-md"
    >
      {/* Left side: Logo + Text */}
      <div className="flex items-center gap-2 whitespace-nowrap">
        <img src="/civic.png" alt="Logo" className="w-6 h-6 rounded-full" />
        <span className="font-bold text-lg text-blue-700">Civic Safety</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-wrap gap-6 text-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="hover:text-blue-600 transition"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full
                        bg-blue-200/90 backdrop-blur-md shadow-md">
          <ul className="flex flex-col px-6 py-3 gap-3 text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="w-full text-left hover:text-blue-600 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;