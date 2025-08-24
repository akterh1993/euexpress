"use client";
import ProductGrid from "./components/ProductGrid";

const products = [
  { id: 1, name: "Apple Watch", price: 399, vendor: "Apple", category: "watches", image: "/products/watch1.jpg" },
  { id: 2, name: "Samsung Galaxy Watch", price: 299, vendor: "Samsung", category: "watches", image: "/products/watch2.jpg" },
  { id: 3, name: "AirPods Pro", price: 249, vendor: "Apple", category: "earbuds", image: "/products/earbuds1.jpg" },
  { id: 4, name: "Sony WF-1000XM4", price: 199, vendor: "Sony", category: "earbuds", image: "/products/earbuds2.jpg" },
  { id: 5, name: "DJI Drone", price: 499, vendor: "DJI", category: "drones", image: "/products/drone1.jpg" },
  { id: 6, name: "Gaming Mouse", price: 69, vendor: "Logitech", category: "gaming", image: "/products/mouse1.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}



// "use client";
// import { useState } from "react";
// import ProductCategoryCard from "./components/ProductCategoryCard";


// interface Category {
//   name: string;
//   slug: string;
//   image: string;
// }

// export default function CategoryGrid({ categories, onSelect }: { categories: Category[], onSelect: (slug: string) => void }) {
//   return (
//     <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//       {categories.map((c) => (
//         <div key={c.slug} onClick={() => onSelect(c.slug)}>
//           <ProductCategoryCard category={c} />
//         </div>
//       ))}
//     </div>
//   );
// }
