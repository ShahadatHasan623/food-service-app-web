import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export async function POST(req) {
  const data = await req.json();
  const { name, description, price, img } = data;

  if (!name || !description || !price || !img) {
    return new Response(JSON.stringify({ success: false, message: "All fields are required" }), { status: 400 });
  }

  const productCollection = await dbConnect(collectionNameObj.productsCollections);

  const result = await productCollection.insertOne({
    name,
    description,
    price,
    img,
    createdAt: new Date(),
  });

  return new Response(JSON.stringify({ success: true, insertedId: result.insertedId.toString() }), { status: 200 });
}
