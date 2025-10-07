
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Import item routes
const itemRoutes = require("./routes/itemRoutes");

// Root route
app.get("/", (req, res) => {
  res.send("Inventory API is Running 🚀");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy 💪", time: new Date() });
});

// Use item routes
app.use("/items", itemRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found ❌" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
