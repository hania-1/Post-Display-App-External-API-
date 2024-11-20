"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-800 text-white shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center`}
      >
        <ul className="flex flex-col md:flex-row gap-8 md:gap-6 text-center py-4">
          {["Home", "About", "Post", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-indigo-300 cursor-pointer transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
