"use client";

import type React from "react";

import { useState } from "react";
import type { SortOption } from "../interfaces";
import { Category } from "../types";

interface ProductFilterProps {
  onCategoryChange: (category: Category) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (search: string) => void;
}

const ProductFilter = ({
  onCategoryChange,
  onSortChange,
  onSearchChange,
}: ProductFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories: { label: string; value: Category }[] = [
    { label: "All Products", value: "all" },
    { label: "Fruit Juices", value: "fruit-juices" },
    { label: "Soft Drinks", value: "soft-drinks" },
    { label: "Sparkling Water", value: "sparkling-water" },
    { label: "Egyptian Specialties", value: "egyptian-specialties" },
  ];

  const sortOptions: SortOption[] = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
  ];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === category.value
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Sort By</h3>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
