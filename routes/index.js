const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);



/**
router.get('/parent/team', (req, res) => {
    db.Children
        .find({})
        .then((data) => res.status(200).send(data))
        .catch(err => res.json(err));
});  **/

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
