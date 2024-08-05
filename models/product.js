const products = require("../data/products.json");

class Product {
  static getAllproduct() {
    return products;
  }

  static getProductById(id) {
    return products.find((el) => el.id === Number(id));
  }
}

module.exports = Product;
