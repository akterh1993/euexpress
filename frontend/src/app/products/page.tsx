"use client";
import ProductGrid from "./components/ProductGrid";

const products = [
  { id: 1, name: "Apple Watch", price: 399, vendor: "Apple", category: "watches", image: "/images/products/apple watch.jpeg" },
  { id: 2, name: "Samsung Galaxy Watch", price: 299, vendor: "Samsung", category: "watches", image: "/images/products/samsung watch.png" },
  { id: 3, name: "AirPods Pro", price: 249, vendor: "Apple", category: "earbuds", image: "/images/products/airpods.png" },
  { id: 4, name: "Sony WF-1000XM4", price: 199, vendor: "Sony", category: "earbuds", image: "/images/products/sony wf.png" },
  { id: 5, name: "DJI Drone", price: 499, vendor: "DJI", category: "drones", image: "/images/products/drone.jpeg" },
  { id: 6, name: "Gaming Mouse", price: 69, vendor: "Logitech", category: "gaming", image: "/images/products/mouse.png" },
  { id: 7, name: "Denim Pant", price: 99, vendor: "Denim", category: "pant", image: "/images/products/pant.png" },
  { id: 8, name: "T- Shirt", price: 60, vendor: "Denim", category: "T-Shirt", image: "/images/products/t-shirt.png" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}


