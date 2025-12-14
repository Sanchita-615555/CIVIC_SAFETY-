const express = require("express");
const cors = require("cors");
const contactRouter = require("./drivers/contactDriver");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Serve uploads folder
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
