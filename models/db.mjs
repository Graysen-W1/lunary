// models/db.mjs
// handles MongoDB connection and exports the client
// source: https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// connect to MongoDB and ping to confirm
async function connectToMongo() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// source: https://www.w3schools.com/js/js_dates.asp
function getTodayDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export { client, connectToMongo, getTodayDate };
