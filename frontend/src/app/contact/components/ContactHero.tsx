"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-tight"
      >
        Get in Touch with <span className="text-yellow-400">EUExpress</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
      >
        Have questions or need support? We’re always ready to assist you with AI-powered efficiency. 🚀
      </motion.p>
    </section>
  );
}
