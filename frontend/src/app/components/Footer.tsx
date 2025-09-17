"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const ICONS = { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube };

interface FooterCompany {
  logo: string;
  name: string;
  description: string;
}

interface FooterLink {
  name: string;
  path: string;
}

interface FooterSocial {
  name: string;
  link: string;
  icon: "FaFacebookF" | "FaTwitter" | "FaInstagram" | "FaLinkedinIn" | "FaYoutube";
}

interface FooterData {
  company: FooterCompany;
  quickLinks: FooterLink[];
  socials: FooterSocial[];
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetch("/data/footerData.json")
      .then((res) => res.json())
      .then((data: FooterData) => setFooterData(data))
      .catch((err) => console.error("Failed to load footer data:", err));
  }, []);

  if (!footerData) return null;

  return (
    <footer className="relative bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 text-gray-200 overflow-hidden">
       {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 lg:gap-16 py-16 relative z-10">
        {/* Logo & Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src={footerData.company.logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-extrabold text-yellow-400">
              {footerData.company.name}
            </span>
          </div>
          <p className="text-gray-100 max-w-sm leading-relaxed">
            {footerData.company.description}
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold text-xl mb-5 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {footerData.quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold text-xl mb-5 text-white">Follow Us</h3>
          <div className="flex gap-5">
            {footerData.socials.map((social, idx) => {
              const Icon = ICONS[social.icon];
              return (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 p-2 rounded-full bg-white/10 hover:bg-white/20 shadow-md"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <div className="wave-wrapper relative w-[200%] h-20 animate-wave">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#footerGradient)"
              fillOpacity="0.6"
              d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,213.3C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <defs>
              <linearGradient id="footerGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-gray-200 text-sm md:text-base relative z-10">
        &copy; {new Date().getFullYear()} {footerData.company.name}. All rights
        reserved.
      </div>

      <style jsx>{`
        .animate-wave {
          animation: waveMove 20s linear infinite;
        }
        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
