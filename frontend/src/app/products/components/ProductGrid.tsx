
"use client";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  vendor: string;
  category: string;
  image: string;
}

export default function ProductGrid({
  products,
  filterCategory,
}: {
  products: Product[];
  filterCategory?: string;
}) {
  const filtered = filterCategory
    ? products.filter((p) => p.category === filterCategory)
    : products;

  return (
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filtered.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}


// "use client";
// import ProductCard from "./ProductCard";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   vendor?: string;
//   category: string;
//   image: string;
// }

// export default function ProductGrid({ products, filterCategory }: { products: Product[], filterCategory?: string }) {
//   const filteredProducts = filterCategory
//     ? products.filter((p) => p.category === filterCategory)
//     : products;

//   return (
//     <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//       {filteredProducts.map((p) => (
//         <ProductCard key={p.id} product={p} />
//       ))}
//     </div>
//   );
// }
