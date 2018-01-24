const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//const db = require("../models");


// API Routes
router.use("/api", apiRoutes);


module.exports = router;
