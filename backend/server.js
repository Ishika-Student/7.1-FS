// === BACKEND CODE ===
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { name: "Laptop", price: 85000 },
  { name: "Headphones", price: 3499 },
  { name: "Smartwatch", price: 9999 },
  { name: "Keyboard", price: 1299 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("✅ Express API running on http://localhost:5000");
});
