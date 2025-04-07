"use client";

import { useState, useEffect } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Get featured products or just take the first 4 if none are marked as featured
    const featured = products.filter((product) => product.featured);
    if (featured.length > 0) {
      setFeaturedProducts(featured);
    } else {
      setFeaturedProducts(products.slice(0, 4));
    }
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById("featured-container");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("featured-container");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 mx-2">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          id="featured-container"
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[250px] max-w-[250px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
