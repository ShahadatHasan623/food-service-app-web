"use client";
import Image from "next/image";
import loginImage from "../../../public/login.png";
import LoginFrom from "./components/LoginFrom";

export default function LoginPage() {
  

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-gray-100 justify-center items-center">
        <Image
          src={loginImage}
          alt="Login illustration"
          className="max-w-md rounded-lg"
          priority
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 justify-center items-center bg-white">
        <LoginFrom></LoginFrom>
      </div>
    </div>
  );
}
