const router = require("express").Router();
const db = require("../../models");

//CHILD ROUTES

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.children.findOne({
        where: {
            id
        },
        include: [db.avatars]
    }).then(function (childData) {
        // console.log(childData);
        res.json(childData);
    })
});


router.get('/missions/:id', (req, res) => {
    const childId = req.params.id;
    //console.log("childId " + childId);
    //console.log("c mission, id=" + childId);
    db.active_missions.findAll({
        where: {
            childId
        },
        include: [db.parent_missions]
    }).then(function (childData) {
        //console.log(childData);
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
        include: [db.parent_rewards]
    }).then(function (childData) {
        // console.log(childData);
        res.json(childData);
    })
});

router.put('/missions/updatestatus/:id', (req, res) => {
    const mid = req.params.id;
    console.log('Mission Updating.....');
    console.log(req.body.newStatus);

    db.active_missions.update(
        {mission_status: req.body.newStatus},
        {where: {id: mid}}
    ).then(function (rowsUpdated) {
        // console.log(childData);
        res.json(rowsUpdated);
    })
});

module.exports = router;
