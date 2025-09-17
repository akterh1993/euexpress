"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroItem {
  image: string;
  title: string;
  subtitle: string;
  button: string;
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [heroData, setHeroData] = useState<HeroItem[]>([]);

  // Fetch JSON from public folder
  useEffect(() => {
    fetch("/data/heroData.json")
      .then((res) => res.json())
      .then((data: HeroItem[]) => setHeroData(data))
      .catch((err) => console.error("Failed to load hero data:", err));
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (heroData.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroData]);

  if (heroData.length === 0) return null; // optional: loading state

  const { image, title, subtitle, button } = heroData[current];

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            key={title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.p
            key={subtitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-lg drop-shadow-md"
          >
            {subtitle}
          </motion.p>
          <motion.div
            key={button}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition font-medium shadow-lg">
              {button}
            </button>
          </motion.div>
        </div>

        {/* Hero Carousel Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 relative h-[400px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={image}
                alt={`Hero ${current + 1}`}
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
