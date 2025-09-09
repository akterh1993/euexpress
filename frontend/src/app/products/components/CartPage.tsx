"use client";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <p className="text-center mt-20 text-xl">Your cart is empty</p>;

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
            <div className="relative w-24 h-24">
              <Image src={item.image} alt={item.name} fill className="object-cover rounded-xl" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.vendor}</p>
              <p className="font-bold">${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition"
          >
            Clear Cart
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
