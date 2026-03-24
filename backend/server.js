const express = require("express");
const cors = require("cors");
const contactRouter = require("./drivers/contactDriver");
require("dotenv").config();

const app = express();

// ✅ CORS (FIXED)
app.use(
  cors({
    origin: [
      "https://civic-safety-j82d.vercel.app", // ❌ slash removed
      "http://localhost:3000",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/contact", contactRouter);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// ✅ Static folder
app.use("/uploads", express.static("uploads"));

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));