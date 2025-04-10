"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import Sidebar from "./Sidebar";
import Cart from  "./Cart";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Shirt", price: 30 },
  { id: 3, name: "Book", price: 15 },
];

// export default function ProductList() {
//   const dispatch = useDispatch();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {products.map(product => (
//         <div key={product.id} className="p-4 border rounded shadow">
//           <h3 className="font-bold text-lg">{product.name}</h3>
//           <p>${product.price}</p>
//           <button
//             onClick={() => dispatch(addToCart(product))}
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Simple E-Cart
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
          {products.map(product => (
            <div
              key={product.id}
              style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                style={{
                  marginTop: "8px",
                  padding: "8px 16px",
                  backgroundColor: "#3B82F6",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <Cart />
      </main>
    </div>
  );
}