const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();

// MongoDB setup//
const client = new MongoClient(process.env.MONGO_URI);
let collection;

async function connectDB() {
  await client.connect();
  const db = client.db(process.env.DB_NAME); // database name//
  collection = db.collection(process.env.COLLECTION_NAME); // collection name//
  console.log("MongoDB Atlas connected ");
}
connectDB();

// Multer setup for file uploads//
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST /api/contact//
router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { name, location, emergencyType, description } = req.body;
    const file = req.file ? req.file.filename : null;

    const newContact = {
      name,
      location,
      emergencyType,
      description,
      file,
      createdAt: new Date()
    };

    await collection.insertOne(newContact);

    res.json({ message: "Form submitted successfully " });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving data" });
  }
});

module.exports = router;