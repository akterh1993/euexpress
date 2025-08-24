"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor?: string;
  image: string;
  description?: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 shadow-lg"
    >
      <div className="relative w-full h-96">
        <Image src={product.image} alt={product.name} fill className="object-cover rounded-2xl" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {product.vendor && <p className="text-gray-500 mb-2">{product.vendor}</p>}
        <p className="text-xl font-semibold text-gray-900 mb-4">${product.price}</p>
        {product.description && <p className="text-gray-700">{product.description}</p>}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
