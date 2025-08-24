"use client";
import Link from "next/link";
import { ROUTES } from "../router/route";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        
        {/* Logo & Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo/EUEXPRESS.png" alt="Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-yellow-400">EUExpress.co</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Fast, smart, and AI-powered eCommerce platform connecting vendors and customers globally.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {Object.entries(ROUTES).map(([key, path]) => {
              if (key === "LOGIN") return null;
              return (
                <li key={key}>
                  <Link href={path} className="hover:text-yellow-400 transition">
                    {key.charAt(0) + key.slice(1).toLowerCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedinIn /></a>
          </div>
        </motion.div>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} EUExpress.co. All rights reserved.
      </div>
    </footer>
  );
}
