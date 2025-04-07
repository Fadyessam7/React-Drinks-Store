"use client";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Redirect to home if accessed directly without checkout
  useEffect(() => {
    if (cartItems.length > 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  return (
    <div className="container-custom py-16 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 rounded-full p-3">
            <Check className="h-12 w-12 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being
          processed. You will receive an email confirmation shortly.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Order Details</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">
              #DRK{Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Delivery:</span>
            <span className="font-medium">
              {new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
          <Link to="#" className="btn btn-secondary">
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
