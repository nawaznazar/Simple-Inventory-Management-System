// routes/itemRoutes.js
const express = require("express");
const router = express.Router();

// Import controller functions
const { getAllItems, addItem } = require("../controllers/itemController");

// Define routes
router.get("/", getAllItems);
router.post("/", addItem);

// Export the router
module.exports = router;