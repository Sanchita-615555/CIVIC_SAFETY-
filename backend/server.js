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

// Serve uploads folder (optional, if you want to access uploaded files)
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));