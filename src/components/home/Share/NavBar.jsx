import logo from "../../../ui/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      {/* First Layer Navbar */}
      <nav className="navbar bg-brown-800 text-white px-6 py-4 fixed top-0 left-0 w-full z-20 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="logo flex items-center space-x-4">
            <img
              src={logo}
              alt="KFC Logo"
              className="w-12 h-12 rounded-full shadow-lg"
            />
            <h1 className="text-2xl lg:text-3xl font-bold tracking-wide">
              KFC King Food Cafe
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="block lg:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

          {/* Navigation Links */}
          <ul
            className={`nav-links flex-col lg:flex-row lg:flex lg:space-x-10 lg:static absolute bg-brown-800 lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto transition-all duration-300 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="text-center lg:text-left">
              <a
                href="#home"
                className="block lg:inline-block text-lg font-semibold uppercase py-2 px-4 hover:text-cream-100 transition duration-300"
              >
                Home
              </a>
            </li>
            <li className="text-center lg:text-left">
              <a
                href="#menu"
                className="block lg:inline-block text-lg font-semibold uppercase py-2 px-4 hover:text-cream-100 transition duration-300"
              >
                Menu
              </a>
            </li>
            <li className="text-center lg:text-left">
              <a
                href="#about"
                className="block lg:inline-block text-lg font-semibold uppercase py-2 px-4 hover:text-cream-100 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="text-center lg:text-left">
              <a
                href="#contact"
                className="block lg:inline-block text-lg font-semibold uppercase py-2 px-4 hover:text-cream-100 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
