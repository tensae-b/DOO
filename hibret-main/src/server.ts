import express from "express";
import payload from "payload";
const cors = require("cors");

const { MongoClient } = require("mongodb");
const dbName = "HR";

require("dotenv").config();
const app = express();

app.use(cors());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  const client = new MongoClient(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // Add your own express routes here

  app.get("/invite", async (req, res) => {
    try {
      await client.connect();
      console.log("Connected to MongoDB");

      // Connect to the database
      const db = client.db(dbName);

      // Fetch data from a collection
      const collection = db.collection("users");
      const users = await collection.find({}).toArray();
      console.log("Fetched documents:", users);
      res.send(users);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      // Close the connection
      // await client.close();
      console.log("Connection closed");
    }
  });
  app.listen(3000);
};

start();
