"use client";

import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="title">Categories</h2>
      <ul className="category-list">
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Books</li>
      </ul>
    </aside>
  );
}
