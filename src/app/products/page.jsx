import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const productCollection = dbConnect(collectionNameObj.productsCollections);
  const data = await productCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-4 max-w-7xl mx-auto gap-8 my-16">
      {data.map((products) => {
        return (
          <div key={products._id}>
            <div className="card bg-base-100 h-96 w-76 shadow-sm">
              <figure>
                <Image
                  width={500}
                  height={500}
                  src={products.img}
                  alt="foodies"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{products.name}</h2>
                <p>
                  {products.description}
                </p>
                <div className="card-actions justify-end">
                  <Link href={`/services/${products._id}`} className="btn btn-primary">Details</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
