const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/auth.routes");

// middleware
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Artisan Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


