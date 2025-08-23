"use client"
import React from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

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

  const handleGoogleLogin = async () => {
    try {
      const result = await signIn("google", { redirect: false });

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
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.64 2.58 30.14 0 24 0 14.64 0 6.6 5.74 2.56 14.06l7.98 6.19C12.36 13.08 17.74 9.5 24 9.5z" />
          <path fill="#34A853" d="M46.5 24.5c0-1.57-.14-3.07-.4-4.5H24v9h12.7c-.55 2.9-2.21 5.36-4.7 7.04l7.27 5.64C43.57 37.67 46.5 31.54 46.5 24.5z" />
          <path fill="#FBBC05" d="M10.54 28.25c-1.22-3.56-1.22-7.44 0-11l-7.98-6.19c-3.44 6.89-3.44 16.49 0 23.38l7.98-6.19z" />
          <path fill="#EA4335" d="M24 47c6.14 0 11.64-2.02 15.54-5.5l-7.27-5.64c-2.01 1.38-4.57 2.14-7.27 2.14-6.26 0-11.64-3.58-13.46-8.81l-7.98 6.19C6.6 42.26 14.64 47 24 47z" />
        </svg>
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>
    </div>
  );
}
