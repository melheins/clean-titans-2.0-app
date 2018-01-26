const router = require("express").Router();
const db = require("../../models");

//CHILD ROUTES

router.get('/:id', (req, res) => {
    console.log("test");
    console.log(req.params.id);
    const id = req.params.id;

    db.children.findOne({
        where: {
            id
        },
        include: [db.avatars]
    }).then(function (childData) {
        // console.log(parentData);
        res.json(childData);
    })
});


router.get('/missions/:id', (req, res) => {
    const childId = req.params.id;
    //console.log("c mission, id=" + childId);
    db.active_missions.findAll({
        where: {
            childId
        },
        include: [db.parent_missions]
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
        include: [db.parent_rewards]
    }).then(function (childData) {
        // console.log(childData);
        res.json(childData);
    })
});


module.exports = router;
