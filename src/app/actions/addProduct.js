"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export async function addProduct(data) {
  const { name, description, price, img } = data;

  if (!name || !description || !price || !img) {
    return { success: false, message: "All fields are required" };
  }

  const productCollection = await dbConnect(collectionNameObj.productsCollections);

  const result = await productCollection.insertOne({
    name,
    description,
    price,
    img,
    createdAt: new Date(),
  });

  return { success: true, insertedId: result.insertedId.toString() };
}
