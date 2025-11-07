import React, { useEffect } from "react";
import "../styles/Header.css";

function Header() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <h1>🌸</h1>
            <h1 className="text-2xl font-bold text-purple-800">PetalStars</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Home
            </a>
            <a
              href="#books"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Books
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Contact
            </a>
          </div>
          <button className="md:hidden text-purple-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
