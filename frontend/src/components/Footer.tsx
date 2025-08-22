"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-200 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Name */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo/EUEXPRESS.png" // PNG logo
              alt="EXPRESS Logo"
              width={100}
              height={80}
              className="object-contain"
            />
            <span className="text-xl font-bold text-white">EUEXPRESS.CO</span>
          </div>
          <p className="text-gray-400">
            Your one-stop shop for gadgets, fashion & more.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="cursor-pointer">Facebook</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="cursor-pointer">Twitter</motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="cursor-pointer">Instagram</motion.a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-gray-500 text-center py-4">
        &copy; {new Date().getFullYear()} EUEXPRESS.CO. All rights reserved.
      </div>
    </motion.footer>
  );
}
