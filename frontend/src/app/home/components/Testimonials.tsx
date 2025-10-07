"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar?: string; // optional avatar image
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((res) => res.json())
      .then((data: Testimonial[]) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  if (testimonials.length === 0) return null; // optional: loading state

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">
          What Our Customers Say
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300"
            >
              <p className="text-gray-800 mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <p className="font-semibold text-gray-900">- {t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
