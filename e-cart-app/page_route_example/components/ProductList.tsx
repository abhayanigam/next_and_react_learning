"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Shirt", price: 30 },
  { id: 3, name: "Book", price: 15 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded shadow">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
