"use client";
import { useParams } from "next/navigation";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Apple Watch", price: 399, vendor: "Apple", category: "watches", image: "/products/watch1.jpg" },
  { id: 2, name: "Samsung Galaxy Watch", price: 299, vendor: "Samsung", category: "watches", image: "/products/watch2.jpg" },
  { id: 3, name: "AirPods Pro", price: 249, vendor: "Apple", category: "earbuds", image: "/products/earbuds1.jpg" },
  { id: 4, name: "Sony WF-1000XM4", price: 199, vendor: "Sony", category: "earbuds", image: "/products/earbuds2.jpg" },
  { id: 5, name: "DJI Drone", price: 499, vendor: "DJI", category: "drones", image: "/products/drone1.jpg" },
  { id: 6, name: "Gaming Mouse", price: 69, vendor: "Logitech", category: "gaming", image: "/products/mouse1.jpg" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <div className="min-h-screen p-8">Product not found.</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="max-w-3xl mx-auto">
        <ProductCard product={product} />
        <p className="mt-6 text-gray-700">
          Category: <span className="font-semibold">{product.category}</span>
        </p>
        <p className="mt-2 text-gray-700">
          Vendor: <span className="font-semibold">{product.vendor}</span>
        </p>
        <p className="mt-2 text-gray-700">
          Price: <span className="font-bold">${product.price}</span>
        </p>
      </div>
    </div>
  );
}



// "use client";

// import ProductDetails from "../components/ProductDetails";


// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   vendor?: string;
//   image: string;
//   description?: string;
// }

// // Sample products data
// const products: Product[] = [
//   { id: 1, name: "Apple Watch", price: 399, vendor: "Apple", image: "/products/watch1.jpg", description: "Smart watch with health tracking and notifications." },
//   { id: 2, name: "Samsung Galaxy Watch", price: 299, vendor: "Samsung", image: "/products/watch2.jpg", description: "Advanced smartwatch with fitness features." },
//   { id: 3, name: "AirPods Pro", price: 249, vendor: "Apple", image: "/products/earbuds1.jpg", description: "Noise-canceling wireless earbuds for immersive sound." },
//   { id: 4, name: "Sony WF-1000XM4", price: 199, vendor: "Sony", image: "/products/earbuds2.jpg", description: "Premium sound quality and long battery life." },
// ];

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const productId = parseInt(params.id);
//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-700">
//         <h1 className="text-3xl font-bold">Product Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-20 px-6">
//       <ProductDetails product={product} />
//     </div>
//   );
// }
