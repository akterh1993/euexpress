"use client";
import Link from "next/link";
import { ROUTES } from "../router/route";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center space-x-2">
          <img src="/images/logo/EUEXPRESS.png" alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-blue-600">EUExpress.co</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {Object.entries(ROUTES).map(([key, path]) => {
            if (key === "LOGIN") return null;
            return (
              <Link key={key} href={path} className="text-gray-700 hover:text-blue-600">
                {key.charAt(0) + key.slice(1).toLowerCase()}
              </Link>
            );
          })}

          {/* Login */}
          <Link
            href={ROUTES.LOGIN}
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {Object.entries(ROUTES).map(([key, path]) => (
            <Link
              key={key}
              href={path}
              className="block px-4 py-3 border-b border-gray-200 text-gray-700 hover:bg-blue-50"
              onClick={() => setMenuOpen(false)}
            >
              {key.charAt(0) + key.slice(1).toLowerCase()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
