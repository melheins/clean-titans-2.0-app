const path = require("path");
const router = require("express").Router();

const db = require("../models");


//PARENT ROUTES
router.get('/parent/team/:id', (req, res) => {
    console.log("test");
    console.log(req.params.id);
    const id = req.params.id;

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children]
    }).then(function (parentData) {

        const children = parentData.children;
        //console.log(children);
        res.json(children);
    })

});

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
