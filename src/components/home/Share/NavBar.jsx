import logo from "../../../ui/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <nav className="bg-gray-800 text-white px-6 py-4 fixed top-0 left-0 w-full z-30 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full shadow-lg"
            />
            <h1 className="text-xl lg:text-2xl font-bold tracking-wide">
              KFC King Food Cafe
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-grow mx-8">
            <input
              type="text"
              placeholder="Search for food, beverages..."
              className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg transition duration-300">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Delivery Options */}
            <div className="hidden lg:flex items-center space-x-2">
              <i className="fas fa-truck text-2xl"></i>
              <span className="text-sm font-medium">Delivery</span>
            </div>

            {/* Language Selector */}
            <div className="hidden lg:block">
              <select
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
                defaultValue="EN"
              >
                <option value="EN">EN</option>
                <option value="ES">ES</option>
                <option value="FR">FR</option>
              </select>
            </div>

            {/* Login / Signup */}
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold">
              Login / Signup
            </button>

            {/* Sidebar Toggle Button */}
            <button
              className="lg:hidden text-white text-2xl focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navbar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={() => setIsSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        <ul className="mt-20 space-y-6 px-6">
          <li>
            <a
              href="#home"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#cart"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              My Cart
            </a>
          </li>
          <li>
            <a
              href="#orders"
              className="block text-lg font-semibold hover:text-amber-400 transition duration-300"
            >
              My Orders
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

/* import logo from "../../../ui/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className="navbar bg-brown-800 text-white px-6 py-4 fixed top-0 left-0 w-full z-20 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
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

          <button
            className="block lg:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

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

export default NavBar; */
