"use client";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/about/teamwork.jpg"
          alt="EUExpress Team"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At EUExpress, our mission is to make cross-border shopping seamless 
            and intelligent. With cutting-edge AI systems, we connect vendors 
            and customers globally, ensuring a faster, smoother, and smarter 
            shopping experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
