"use client";
import { motion } from "framer-motion";

interface Category {
  id: number;
  name: string;
  image: string;
  description?: string;
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
    >
      <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
        {category.description && (
          <p className="text-gray-600 text-sm mt-2">{category.description}</p>
        )}
      </div>
    </motion.div>
  );
}
