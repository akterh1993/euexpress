
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "../products/components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import Testimonials from "./components/Testimonials";
import NewsletterSignup from "./components/NewsletterSignup";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <Testimonials />
        <NewsletterSignup />
      </main>
    </div>
  );
}
