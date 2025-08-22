import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import React from "react";
import Image from "next/image";

export default async function ServiceDetails({ params }) {
  const { id } =await params; 

  // dbConnect directly returns the collection
  const productCollection = await dbConnect(
    collectionNameObj.productsCollections
  );

  // MongoDB query
  const query = { _id: id }; // string _id
  const singleData = await productCollection.findOne(query);

  // fallback if product not found
  if (!singleData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-500">
          Product not found ❌
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 my-16">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Product Image */}
        <div className="relative w-full h-80">
          <Image
            src={singleData.img || "/placeholder.png"}
            alt={singleData.name || "Product"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{singleData.name}</h1>

          <p className="text-gray-600 leading-relaxed">
            {singleData.description || "No description available."}
          </p>

          <p className="text-xl font-semibold text-green-600">
            Price: ${singleData.price}
          </p>

          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
