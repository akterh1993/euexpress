"use client";

import { useState, useEffect } from "react";
import ProductGrid from "./components/ProductGrid";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <section className="w-full min-h-screen py-16 px-6 bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg"
      >
        All Products
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
