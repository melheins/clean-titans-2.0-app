const router = require("express").Router();
//const parentController = require("../../controllers/parentController");
const db = require("../../models");

//PARENT ROUTES
router.get('/team/:id', (req, res) => {
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

router.get('/missions', (req, res) => {
    db.missions.findAll({}).then(function (data) {
        //console.log(data);
        //const missions = data;
        res.json(data);
    })
});


router.get('/rewards', (req, res) => {
    db.rewards.findAll({}).then(function (data) {
        //console.log(data);
        //const rewards = data;
        res.json(data);
    })
});

module.exports = router;
