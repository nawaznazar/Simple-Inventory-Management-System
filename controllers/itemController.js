// controllers/itemController.js

let items = [
  { id: 1, name: "Water Bottle", quantity: 10, price: 5 },
  { id: 2, name: "Juice Pack",  quantity: 20, price: 8 },
  { id: 3, name: "Tea",         quantity: 30, price: 3 },
];

// GET all
const getAllItems = (req, res) => res.json(items);

// GET one
const getItemById = (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

// POST create
const addItem = (req, res) => {
  const { name, quantity, price } = req.body;
  if (!name || quantity == null || price == null) {
    return res.status(400).json({ message: "name, quantity, price are required" });
  }
  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    quantity: Number(quantity),
    price: Number(price),
  };
  items.push(newItem);
  res.status(201).json({ message: "Item added", item: newItem });
};

// PUT replace (full update)
const replaceItem = (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ message: "Item not found" });

  const { name, quantity, price } = req.body;
  if (!name || quantity == null || price == null) {
    return res.status(400).json({ message: "name, quantity, price are required" });
  }
  items[idx] = { id, name, quantity: Number(quantity), price: Number(price) };
  res.json({ message: "Item replaced", item: items[idx] });
};

// PATCH partial update
const updateItem = (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  const { name, quantity, price } = req.body;
  if (name !== undefined) item.name = name;
  if (quantity !== undefined) item.quantity = Number(quantity);
  if (price !== undefined) item.price = Number(price);
  res.json({ message: "Item updated", item });
};

// DELETE
const deleteItem = (req, res) => {
  const id = Number(req.params.id);
  const before = items.length;
  items = items.filter(i => i.id !== id);
  if (items.length === before) return res.status(404).json({ message: "Item not found" });
  res.status(204).send();
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  replaceItem,
  updateItem,
  deleteItem,
};
