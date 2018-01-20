const router = require("express").Router();
const parentRoutes = require("./parent");

// Parent routes
router.use("/parent", parentRoutes);

module.exports = router;
