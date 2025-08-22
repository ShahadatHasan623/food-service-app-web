"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const RegisterUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password || !name) {
    return { success: false, message: "All fields are required" };
  }

  const userCollection = await dbConnect(collectionNameObj.userCollections);

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const result = await userCollection.insertOne({
    name,
    email,
    password,
    createdAt: new Date(),
  });

  return {
    success: true,
    insertedId: result.insertedId.toString(),
  };
};
