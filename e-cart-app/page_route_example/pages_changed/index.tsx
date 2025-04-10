import React from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

export default function HomePage() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <h1>Welcome to the E-Cart App</h1>
          <ProductList />
          <Cart />
        </main>
      </div>
    );
  }