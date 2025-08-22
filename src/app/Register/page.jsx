"use client";

import Image from "next/image";
import registerImg from "../../../public/register.png";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="lg:w-1/2 hidden lg:block relative rounded-l-2xl overflow-hidden">
          <Image
            src={registerImg}
            alt="Register"
            fill
            className="object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>
         <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  );
}
