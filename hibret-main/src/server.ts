import express from "express";
import payload from "payload";
import cors from "cors"; 
import session from 'express-session';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import formatResponse from "./middleware/format/formatesponse";
import { validationResult } from 'express-validator'
// import verifyToken from './middleware/verify'

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
app.use(bodyParser.json());

app.use(cookieParser(cookieSecret));

// Optionally use a session middleware if you need more complex session management
app.use(session({
  key:"userID",
  secret: cookieSecret,
  resave: false,
  saveUninitialized: true,
  cookie:{
    expires:60*60*24*3
  }
}));
// app.use(formatResponse)

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
  // app.get("/protect", verifyToken,async (req, res) => {
  //   res.json({message:"work it"})
    
  // });
  app.post('/users/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userData = await login({ email, password });
      if (userData) {
        req.session.user = userData; // Store user data in session
        // localStorage.setItem('userId', userData); // Store a specific key (e.g., userId)
        res.json(userData);
      } else {
        res.status(401).json({ error: 'Invalid login credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
      
  });
  // app.get('/users/profile', (req, res ) => {
  //   // Check for user data in session after applying sessionMiddleware
  //    // Store the user data in a variable
  //    if (req.user){
  //     res.json({
  //       message: `This is the user profile for user`,
        
  //     });
  //     else {
  //       res.status(403).json({ message: 'Unauthorized' });
  //     }

  //    }
  
     
  //   }
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
  app.listen(3002);
};

start();