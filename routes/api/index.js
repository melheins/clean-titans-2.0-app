const router = require("express").Router();
const parentRoutes = require("./parent");
const childRoutes = require("./child");

// Parent routes
router.use("/parent", parentRoutes);

// Child routes
router.use("/child", childRoutes);

module.exports = router;
