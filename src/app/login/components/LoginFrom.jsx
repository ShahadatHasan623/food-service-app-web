"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogin from "../SocialLogin";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.error,
        });
      } else {
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: error.message || "Please try again",
      });
    }
  };

  return (
    <div className="w-full max-w-md p-6 shadow-lg rounded-xl border">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome Back 👋
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Google Login */}
      <div>
        <SocialLogin></SocialLogin>
      </div>
      <p>
        Don't have an account{" "}
        <Link className="text-red-600 hover:underline" href="/Register">
          Register
        </Link>
      </p>
    </div>
  );
}
