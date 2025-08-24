"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice", text: "EUExpress is amazing! Fast delivery and AI recommendations are perfect." },
  { name: "Bob", text: "I love the smooth shopping experience and global reach." },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <p className="font-semibold text-gray-900">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
