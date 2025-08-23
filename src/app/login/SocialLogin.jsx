"use client";
import { signIn } from "next-auth/react";
import React from "react";
export default function SocialLogin() {
  const handleGooglesign = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };
  return (
    <div>
      <button
        onClick={() => handleGooglesign("google")}
        className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.64 2.58 30.14 0 24 0 14.64 0 6.6 5.74 2.56 14.06l7.98 6.19C12.36 13.08 17.74 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.5 24.5c0-1.57-.14-3.07-.4-4.5H24v9h12.7c-.55 2.9-2.21 5.36-4.7 7.04l7.27 5.64C43.57 37.67 46.5 31.54 46.5 24.5z"
          />
          <path
            fill="#FBBC05"
            d="M10.54 28.25c-1.22-3.56-1.22-7.44 0-11l-7.98-6.19c-3.44 6.89-3.44 16.49 0 23.38l7.98-6.19z"
          />
          <path
            fill="#EA4335"
            d="M24 47c6.14 0 11.64-2.02 15.54-5.5l-7.27-5.64c-2.01 1.38-4.57 2.14-7.27 2.14-6.26 0-11.64-3.58-13.46-8.81l-7.98 6.19C6.6 42.26 14.64 47 24 47z"
          />
        </svg>
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>
    </div>
  );
}
