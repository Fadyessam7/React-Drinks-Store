"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../types";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.volume}</p>
        <p className="text-emerald-600 font-bold mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <Minus className="h-4 w-4" />
          </button>

          <span className="px-3 py-1">{quantity}</span>

          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
