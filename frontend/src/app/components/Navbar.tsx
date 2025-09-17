"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavLink {
  name: string;
  path: string;
}

interface NavbarData {
  logo: {
    src: string;
    name: string;
  };
  links: NavLink[];
  login: NavLink;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);

  useEffect(() => {
    fetch("/data/navbarData.json")
      .then((res) => res.json())
      .then((data: NavbarData) => setNavbarData(data))
      .catch((err) => console.error("Failed to load navbar data:", err));
  }, []);

  if (!navbarData) return null;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={navbarData.logo.src}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-yellow-400">
            {navbarData.logo.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navbarData.links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Login */}
          <Link
            href={navbarData.login.path}
            className="ml-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 font-medium"
          >
            {navbarData.login.name}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 shadow-xl">
          {navbarData.links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block px-4 py-3 border-b border-white/30 text-white hover:bg-white/10 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Login for Mobile */}
          <Link
            href={navbarData.login.path}
            className="block px-4 py-3 mt-2 bg-yellow-400 text-gray-900 text-center rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {navbarData.login.name}
          </Link>
        </div>
      )}
    </nav>
  );
}
