// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Mohsin Azam
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center (Navigation Links) */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="/" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
            Home
          </a>
          <a href="/about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
            About
          </a>
          <a href="/blog" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
            Blog
          </a>
          <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Right Section (Social Links) */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-500 dark:hover:text-sky-400 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
