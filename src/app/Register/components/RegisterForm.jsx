"use client";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import React from "react";
export default function RegisterForm() {
  const handleSubmit =async (e) => {
    e.preventDefault();
    const form =e.target;
    const name =form.name.value;
    const email =form.email.value;
    const password =form.password.value;
    // console.log({name,email,password})
   await RegisterUser({name,email,password})
  };

  const handleGoogleSignUp = () => {
    // handle google signup logic here
    console.log("Google SignUp clicked");
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

      <button
        onClick={handleGoogleSignUp}
        className="w-full border-2 border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4285F4"
            d="M23.64 12.2c1.44 0 2.72.5 3.73 1.48l2.78-2.78C28.8 9.08 26.42 8 23.64 8 14.94 8 8 14.94 8 23.64c0 8.7 6.94 15.64 15.64 15.64 9 0 14.8-6.36 14.8-15.28 0-1.04-.1-1.84-.22-2.64H23.64v4.92h11.8c-.48 2.56-2.56 7.48-11.8 7.48-6.68 0-12.08-5.4-12.08-12.08s5.4-12.08 12.08-12.08z"
          />
        </svg>
        Sign up with Google
      </button>
    </div>
  );
}
