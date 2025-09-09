"use client";
import ProductGrid from "./ProductGrid";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
  image: string;
}

const featuredProducts: Product[] = [
  { id: 1, name: "Smart Watch", price: 120, vendor: "Apple", category: "watches", image: "/products/smart watch.jpg" },
  { id: 2, name: "Wireless Earbuds", price: 80, vendor: "Sony", category: "earbuds", image: "/products/earbuds.jpg" },
  { id: 3, name: "Drone Camera", price: 350, vendor: "DJI", category: "drones", image: "/products/drone camera.jpg" },
  { id: 4, name: "Gaming Mouse", price: 60, vendor: "Logitech", category: "gaming", image: "/products/gamming mouse.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Featured Products
      </motion.h2>
      <ProductGrid products={featuredProducts} />
    </section>
  );
}



