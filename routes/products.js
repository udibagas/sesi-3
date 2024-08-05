const router = require("express").Router();
const { showProductById, showAllProducts } = require("../controllers");

router.get("/", showAllProducts);
router.get("/:id", showProductById);

module.exports = router;
