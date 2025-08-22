import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj ={
    productsCollections:"foodCollection"
}
export default function dbConnect(collectionName) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.off1efx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("Food").collection(collectionName);
}
