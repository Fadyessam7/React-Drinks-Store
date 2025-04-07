"use client";

import type React from "react";

import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-contain"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-gray-800">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-600 font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">{product.volume}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{product.category}</span>
            {product.alcoholContent && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {product.alcoholContent}% ABV
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`mt-3 w-full flex items-center justify-center btn cursor-pointer hover:text-green-700 ${
              product.inStock ? "btn-primary" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-1 " />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
