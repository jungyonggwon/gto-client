import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 fixed top-0 left-0 w-full shadow-md">
      <ul className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="flex gap-4">
          <li><Link to="/" className="text-gray-800 dark:text-white">Home</Link></li>
          <li><Link to="/about" className="text-gray-800 dark:text-white">About</Link></li>
          <li><Link to="/contact" className="text-gray-800 dark:text-white">Contact</Link></li>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
