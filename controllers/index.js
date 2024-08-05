const Product = require("../models/product");

exports.showAllProducts = (req, res) => {
  const products = Product.getAllproduct();
  res.send(products);
};

exports.showProductById = (req, res) => {
  const { id } = req.params;
  const product = Product.getProductById(id);

  if (!product) {
    res.status(404).send(`Product with id ${id} is not found`);
  } else {
    res.status(200).json(product);
  }
};
