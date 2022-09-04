const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const productsData = require("./data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json(productsData);
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
