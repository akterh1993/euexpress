"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Discover Amazing Products <br /> from Top Vendors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Shop from multiple vendors in one place. Fast, secure & reliable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Shop Now
            </button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/banner/banner.png"
              alt="Hero"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
