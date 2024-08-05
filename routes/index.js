const router = require("express").Router();

router.use("/products", require("./products"));
router.use(require("./order"));

module.exports = router;
