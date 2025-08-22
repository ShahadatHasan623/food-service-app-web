import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  productsCollections: "foodCollection",
  userCollections: "foodUser"
};

let cachedClient = null;

export default async function dbConnect(collectionName) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.off1efx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  if (cachedClient) {
    return cachedClient.db("Food").collection(collectionName);
  }

  const client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
  });

  await client.connect();
  cachedClient = client;

  return client.db("Food").collection(collectionName);
}
