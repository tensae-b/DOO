import express from "express";
import payload from "payload";
import cors from "cors"; 
import session from 'express-session';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { MongoClient } from 'mongodb';
const dbName = "HR";

require("dotenv").config();
const app = express();
const cookieSecret = process.env.cookiesecret;
// const cookieParser = require('cookie-parser');
app.use(cors({
  origin: "http://localhost:5173", // Replace this with your frontend URL
  // method:["GET","POST"],
  credentials: true // Allow credentials
}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser(cookieSecret));

// Optionally use a session middleware if you need more complex session management
app.use(session({
  key:"userID",
  secret: cookieSecret,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:60*60*24
  }
}));

// app.post('/set-session', async (req, res) => {
//   try {
//     const newSession = req.body || {};

//     // Validate and sanitize session data (important for security)

//     // Store session data in a cookie
//     res.cookie('auth-session', JSON.stringify(newSession), {
//       httpOnly: true, // Prevent client-side JavaScript access
//       secure: true,   // Only send over HTTPS (if applicable)
//     });

//     res.json({ message: 'Session stored successfully' });
//   } catch (error) {
//     console.error('Error storing session:', error);
//     res.status(500).json({ message: 'Failed to store session' });
//   }
// });

// app.delete('/delete-session', (req, res) => {
//   res.clearCookie('auth-session');
//   res.json({ message: 'Session deleted' });
// });

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
  app.get("/protect", async (req, res) => {
    res.json({message:"work it"})
    
  });
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