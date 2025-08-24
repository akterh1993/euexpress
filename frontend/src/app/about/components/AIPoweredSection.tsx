"use client";
import { motion } from "framer-motion";

export default function AIPoweredSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Powered by <span className="text-yellow-300">AI & Innovation</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-lg"
      >
        Our platform learns, adapts, and optimizes — giving customers a 
        next-gen shopping experience that feels personalized and futuristic.
      </motion.p>
    </section>
  );
}
