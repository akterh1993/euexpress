"use client";
import { motion } from "framer-motion";

const categories = ["Electronics", "Fashion", "Home", "Toys"];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Categories</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{cat}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
