"use client";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-transform duration-300"
        >
          <div className="relative h-60 w-full">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 mt-1">{product.vendor}</p>
            <p className="text-yellow-400 font-bold mt-2">${product.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
