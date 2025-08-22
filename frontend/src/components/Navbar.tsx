"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Become Vendor", href: "/vendor/register" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image
                  src="/images/logo/EUEXPRESS.png"  // PNG logo
                  alt="E-Shop Logo"
                  width={50}
                  height={60}
                  className="object-contain"
                />
                <span className="text-2xl font-bold text-blue-600">EUEXPRESS.CO</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium hover:text-blue-600 transition ${
                  pathname === link.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded"
                  />
                )}
              </Link>
            ))}

            <Link
              href="/login"
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 border-b border-gray-200 font-medium hover:bg-blue-50 transition ${
                  pathname === link.href ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block m-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
