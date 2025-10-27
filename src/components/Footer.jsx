import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌸</div>
              <h4 className="text-xl font-bold">PetalStars</h4>
            </div>
            <p className="text-gray-300">
              Bringing Myanmar's magical stories to children worldwide.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-white">
                  Books
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Categories</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Fairy Tales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Picture Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Activity Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Award Winners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-purple-400">
                📘
              </a>
              <a href="#" className="text-2xl hover:text-purple-400">
                📷
              </a>
              <a href="#" className="text-2xl hover:text-purple-400">
                🐦
              </a>
              <a href="#" className="text-2xl hover:text-purple-400">
                📺
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                #PetalStars #KidsBooks #MyanmarStories
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            © 2025 PetalStars Book Store. All rights reserved. Made with 💜 for
            Myanmar's children.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
