"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        About <span className="text-blue-600">EUExpress</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-3xl"
      >
        We are redefining <span className="font-semibold">eCommerce</span> with speed, intelligence, 
        and a customer-first mindset powered by{" "}
        <span className="text-blue-500">AI innovation</span>.
      </motion.p>
    </section>
  );
}
