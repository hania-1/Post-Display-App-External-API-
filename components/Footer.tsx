import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <h1 className="text-lg font-bold">LOGO</h1>
          <p className="text-sm">Connecting people with amazing content.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-x-2">
            <IoLogoGithub size={24} />
            <Link
              href="https://github.com/hania-1"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline hover:text-gray-400 transition"
            >
              GitHub
            </Link>
          </div>
          <div className="flex items-center gap-x-2">
            <FaLinkedin size={24} />
            <Link
              href="https://www.linkedin.com/in/hania-rizwan-a575072b6/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline hover:text-gray-400 transition"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {["home", "about", "post", "contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className="hover:text-indigo-400 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Information */}
        <p className="text-sm text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
