import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const productCollection = dbConnect(collectionNameObj.productsCollections);
  const data = await productCollection.find({}).toArray();

  return (
    <div className="my-20">
      <div className="text-center max-w-3xl mx-auto my-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Food Products
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Explore our fresh and healthy food products sourced directly from
          farms. From organic fruits and vegetables to wholesome meals, find
          everything you need for a nutritious lifestyle. Quality and taste,
          delivered to your doorstep.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-0 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden flex flex-col h-full"
          >
            <div className="relative w-full h-64 md:h-72 lg:h-46">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="card-body flex flex-col flex-1">
              <h2 className="card-title text-lg md:text-xl font-semibold">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base flex-1">
                {product.description}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/services/${product._id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
