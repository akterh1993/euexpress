"use client";

import { useState, useEffect } from "react";
import CategoryGrid from "./components/CategoryGrid";

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Categories</h1>
      <CategoryGrid categories={categories} />
    </div>
  );
}
