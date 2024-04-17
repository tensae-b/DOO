import express from "express";
import payload from "payload";
import nodemailer from 'nodemailer'
// const cors = require("cors");

// const { MongoClient } = require("mongodb");
// const dbName = "HR";

require("dotenv").config();
const app = express();

// app.use(cors());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {

  const transport = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'tensaeb2016@gmail.com',
      pass: 'jqbs ibzj xhys ijtc',
    },
  })
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    email: {
      fromName: 'Admin',
      fromAddress: 'admin@example.com',
      transport,
    },
  });




  app.listen(3000);
};

start();
