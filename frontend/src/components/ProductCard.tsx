"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer hover:shadow-xl"
    >
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
      <p className="text-gray-500 text-sm mt-1">{product.vendor}</p>
      <p className="text-xl font-bold mt-2 text-gray-900">${product.price}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </motion.div>
  );
}
