const fs = require("fs");
const router = require("express").Router();
const products = require("../data/products.json");

router.get("/buy/:id/:qty", (req, res) => {
  const { id, qty } = req.params;
  const product = products.find((el) => el.id === Number(id));

  if (!product) {
    return res.status(404).send(`Product with id ${id} is not found`);
  }

  if (Number(qty) > product.stock) {
    return res.status(400).send("Stock ga cukup");
  }

  // kurangi stock
  product.stock -= qty;
  const string = JSON.stringify(products, null, 2);

  fs.writeFile("./data/products.json", string, (err) => {
    if (err) {
      return res
        .status(500)
        .send(`Error write data to database: ${err.message}`);
    }

    res.status(200).json({
      id: product.id,
      productName: product.productName,
      price: product.price,
      qty: Number(qty),
    });
  });
});

module.exports = router;
