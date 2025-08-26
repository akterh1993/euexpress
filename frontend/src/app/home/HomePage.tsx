"use client";

import React from "react";
import LazyLoadSection from "./components/LazyLoading";

// Lazy load components
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const FeaturedProducts = React.lazy(() => import("../products/components/FeaturedProducts"));
const CategoriesSection = React.lazy(() => import("./components/CategoriesSection"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const NewsletterSignup = React.lazy(() => import("./components/NewsletterSignup"));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <main>
        <LazyLoadSection delay={0}>
          <HeroSection />
        </LazyLoadSection>

        <LazyLoadSection delay={0.2}>
          <FeaturedProducts />
        </LazyLoadSection>

        <LazyLoadSection delay={0.4}>
          <CategoriesSection />
        </LazyLoadSection>

        <LazyLoadSection delay={0.6}>
          <Testimonials />
        </LazyLoadSection>

        <LazyLoadSection delay={0.8}>
          <NewsletterSignup />
        </LazyLoadSection>
      </main>
    </div>
  );
}
