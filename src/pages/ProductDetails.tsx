"use client";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number.parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);

        // Find related products (same category, excluding current product)
        const related = products
          .filter(
            (p) =>
              p.category === foundProduct.category && p.id !== foundProduct.id
          )
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-emerald-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-8 mx-4">
      <Link
        to="/products"
        className="flex items-center text-emerald-600 mb-6 hover:underline"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-emerald-600 mr-4">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-500">{product.volume}</span>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm text-gray-500">Category</h3>
                <p className="font-medium capitalize">{product.category}</p>
              </div>

              {product.alcoholContent && (
                <div>
                  <h3 className="text-sm text-gray-500">Alcohol Content</h3>
                  <p className="font-medium">{product.alcoholContent}% ABV</p>
                </div>
              )}
            </div>

            {product.inStock ? (
              <>
                <div className="flex items-center mb-6">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="px-4 py-1">{quantity}</span>

                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary w-full sm:w-auto flex items-center justify-center cursor-pointer hover:text-green-700"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </>
            ) : (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-md mb-6">
                This product is currently out of stock.
              </div>
            )}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-emerald-600 font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
