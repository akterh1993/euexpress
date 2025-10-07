"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  description?: string;
}

export default function CategoriesSection() {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from JSON
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  if (categories.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500">
      <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg">
        Categories
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center cursor-pointer hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="mx-auto mb-4 h-20 w-20 object-contain rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800">{cat.name}</h3>
            {cat.description && (
              <p className="text-gray-600 mt-2 text-sm">{cat.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
