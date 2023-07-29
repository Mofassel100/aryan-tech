// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from 'next-connect';


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aryan-tech:aryantech@cluster0.smw489h.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function handler(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const PcPartsCatagory = client.db("aryan-tech").collection("catagory")
    const PcPartsAll = client.db("aryan-tech").collection("pc-parts")
    // Send a ping to confirm a successful connection
    if (req.method === "GET") {
      const result = await PcPartsCatagory.find({}).toArray();
      res.send(result);
    }
    const handler = nextConnect();
    if (req.method === "GET") {

      const { catagory } = req.query
      const result = await PcPartsAll.find({ catagory }).toArray();
      res.send(result);
    }


    console.log("database connected");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default handler;
