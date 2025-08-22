"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const fakeProducts = [
  { id: 1, name: "Smartphone X100", price: 550, vendor: "Tech Gadgets", image: "/images/products/smartphone.jpeg" },
  { id: 2, name: "Wireless Earbuds", price: 120, vendor: "Tech Gadgets", image: "/images/products/Wireless Earbuds.jpeg" },
  { id: 3, name: "Denim Jacket", price: 80, vendor: "Fashion World", image: "/images/products/Denim Jacket.jpeg" },
  { id: 4, name: "Sneakers Pro", price: 95, vendor: "Fashion World", image: "/images/products/Sneakers Pro.jpeg" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-6 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        Featured Products
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {fakeProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
