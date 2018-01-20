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

router.get('/parent/missions', (req, res) => {
    db.missions.findAll({}).then(function (data) {
        //console.log(data);
        //const missions = data;
        res.json(data);
    })
});


router.get('/parent/rewards', (req, res) => {
    db.rewards.findAll({}).then(function (data) {
        //console.log(data);
        //const rewards = data;
        res.json(data);
    })
});


// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
