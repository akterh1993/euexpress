"use client";
import ProductGrid from "./ProductGrid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
  image: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch JSON from public folder
  useEffect(() => {
    fetch("/data/featuredProducts.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load featured products:", err));
  }, []);

  if (products.length === 0) return null; // optional: loading state

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12 text-white drop-shadow-lg"
      >
        Featured Products
      </motion.h2>
      <ProductGrid products={products} />
    </section>
  );
}
