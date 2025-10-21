// routes/itemRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getItemById,
  addItem,
  replaceItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

// Collection routes
router.get("/", getAllItems);     // GET /items
router.post("/", addItem);        // POST /items

// Item routes
router.get("/:id", getItemById);  // GET /items/:id
router.put("/:id", replaceItem);  // PUT /items/:id
router.patch("/:id", updateItem); // PATCH /items/:id
router.delete("/:id", deleteItem);// DELETE /items/:id

module.exports = router;
