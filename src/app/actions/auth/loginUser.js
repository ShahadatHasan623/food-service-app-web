"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // connect to db
  const userCollection = await dbConnect(collectionNameObj.userCollections);

  // find user by email
  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // check password
  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) return null;

  // success
  return user;
};
