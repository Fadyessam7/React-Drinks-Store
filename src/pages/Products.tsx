"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { Product, Category } from "../types";
import { products as allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState("name-asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Check if there's a category in the URL
    const categoryParam = searchParams.get("category");
    if (
      categoryParam &&
      ["wine", "beer", "spirits", "non-alcoholic", "all"].includes(
        categoryParam
      )
    ) {
      setCategory(categoryParam as Category);
    } else if (categoryParam === "featured") {
      // Handle featured products
      setProducts(allProducts.filter((product) => product.featured));
      return;
    }

    setProducts(allProducts);
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, category, sortBy, searchTerm]);

  return (
    <div className="container-custom py-8 mx-2">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <ProductFilter
            onCategoryChange={setCategory}
            onSortChange={setSortBy}
            onSearchChange={setSearchTerm}
          />
        </div>

        <div className="md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-gray-600">
                Try changing your filters or search term to find what you're
                looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
