// src/server/connect-db.ts;

import mongoose from 'mongoose';
const uri = process.env['MONGODB_URI'] as string;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

/**
 * The function `connect` connects to a database using the `mongoose` library in TypeScript.
 * @returns The function `connect` is returning `undefined`.
 */
const connect = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('uri', uri);
    console.log('Already connected to database');
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to database');
  } catch (error) {
    throw new Error('Error connecting to database');
  }
};
export default connect;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = process.env['MONGODB_URI'] as string;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function connect() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// export default connect;
