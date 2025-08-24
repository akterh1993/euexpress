"use client";

import CategoryGrid from "./components/CategoryGrid";

const categories = [
  { id: 1, name: "Watches", image: "/categories/watch.jpg", description: "Smart & stylish watches" },
  { id: 2, name: "Earbuds", image: "/categories/earbuds.jpg", description: "High-quality wireless earbuds" },
  { id: 3, name: "Drones", image: "/categories/drone.jpg", description: "Capture stunning aerial views" },
  { id: 4, name: "Gaming", image: "/categories/gaming.jpg", description: "Top-notch gaming gear" },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Categories</h1>
      <CategoryGrid categories={categories} />
    </div>
  );
}
