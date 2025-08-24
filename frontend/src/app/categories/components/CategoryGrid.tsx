"use client";
import CategoryCard from "./CategoryCard";

interface Category {
  id: number;
  name: string;
  image: string;
  description?: string;
}

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {categories.map((cat) => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  );
}
