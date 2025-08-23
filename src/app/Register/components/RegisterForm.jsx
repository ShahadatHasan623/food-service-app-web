"use client";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import SocialLogin from "@/app/login/SocialLogin";
import React from "react";
export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    await RegisterUser({ name, email, password, image });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Image</label>
          <input
            type="text"
            name="image"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="image"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-accent transition"
        >
          Register
        </button>
      </form>

      <div className="text-center my-4 text-gray-500">OR</div>

      <SocialLogin></SocialLogin>
    </div>
  );
}
