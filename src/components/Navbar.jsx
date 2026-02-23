import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-100/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
          Bhoomi <span className="text-purple">Purohit</span>
          <span className="w-2 h-2 bg-purple rounded-full mt-2"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-purple transition"
              >
                {item}
              </a>
            ),
          )}
        </div>

        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden text-2xl z-[60]"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40
        bg-[#070a13]
        transition-all duration-300
        ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center gap-6 pt-28 text-lg">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setShowMenu(false)}
                className="text-white hover:text-purple transition"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
