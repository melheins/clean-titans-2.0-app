const router = require("express").Router();
const parentController = require("../../controllers/parentController");

// Matches with "/api/books"
router.route("/")
    .get(parentController.findAll);

// Matches with "/api/books/:id"
router.route("/:id")
    .get(parentController.findById);

module.exports = router;
