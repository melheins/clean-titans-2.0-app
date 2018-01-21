const router = require("express").Router();
const db = require("../../models");

//CHILD ROUTES

router.get('/missions/:id', (req, res) => {
    const childId = req.params.id;
    //console.log("c mission, id=" + childId);
    db.active_missions.findAll({
        where: {
            childId
        },
        include: [db.missions]
    }).then(function (childData) {
       // console.log(childData);
        res.json(childData);
    })
});

router.get('/rewards/:id', (req, res) => {
    const childId = req.params.id;
    //console.log("c mission, id=" + childId);
    db.active_rewards.findAll({
        where: {
            childId
        },
        include: [db.rewards]
    }).then(function (childData) {
        // console.log(childData);
        res.json(childData);
    })
});

module.exports = router;
