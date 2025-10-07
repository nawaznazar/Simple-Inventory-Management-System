// controllers/itemController.js

// Our "database" (array)
let items = [
  { id: 1, name: "Water Bottle", quantity: 10, price: 5 },
  { id: 2, name: "Juice Pack", quantity: 20, price: 8 },
  { id: 3, name: "Tea", quantity: 30, price: 3 },
];

// GET all items
const getAllItems = (req, res) => {
  res.json(items);
};

// POST new item
const addItem = (req, res) => {
  const { name, quantity, price } = req.body;

  if (!name || quantity == null || price == null) {
    return res
      .status(400)
      .json({ message: "All fields (name, quantity, price) are required" });
  }

  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    quantity,
    price,
  };

  items.push(newItem);
  res.status(201).json({ message: "Item added successfully ✅", item: newItem });
};

// Export controller functions
module.exports = {
  getAllItems,
  addItem,
};
