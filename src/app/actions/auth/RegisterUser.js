"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const RegisterUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password || !name) {
    return { success: false, message: "All fields are required" };
  }

  const userCollection = await dbConnect(collectionNameObj.userCollections);

  const existingUser = await userCollection.findOne({ email });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;

    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;

    return { 
      success: true, 
      acknowledged, 
      insertedId: insertedId.toString()
    };
  }

  return {
    success: false,
    message: "User already exists"
  };
};
