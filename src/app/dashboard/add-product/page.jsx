"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", description: "", price: "", img: "" });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://foodies-app-web.vercel.app/api/products", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been added successfully.",
        }).then(() => router.push("/products"));

        setForm({ name: "", description: "", price: "", img: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message || "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to add product.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="img" placeholder="Image URL" value={form.img} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Add Product</button>
      </form>
    </div>
  );
}
