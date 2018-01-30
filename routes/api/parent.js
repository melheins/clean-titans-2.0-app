const router = require("express").Router();
const db = require("../../models");

//PARENT ROUTES

router.post("/", (req, res) => {
    db.parents.create(req.body)
        .then(function (newParent) {
            res.json(newParent);
            console.log(newParent);
        })
});

router.get('/account/:id', (req, res) => {
    console.log("test");
    console.log(req.params.id);
    const authId = req.params.id;

    db.parents.findOne({
        where: {
            uid: authId
        }
    }).then(function (parentData) {

        //console.log(parentData);
        res.json(parentData);
    })
});

// route for new users
//router.post('/parent');


router.get('/misappr/:id', (req, res) => {
    const parentId = req.params.id;

    db.active_missions.findAll({
        where: {
            parentId,
            mission_status: 'C'
        },
        //include: [db.active_rewards, active_missions]
        include: [db.parent_missions]
        //include: [{ model: db.active_missions, where: {mission_status: 'C'}, required: false },db.parent_missions,]
        //include: [{model: db.active_missions, where: {mission_status: 'C'}, required: false,include: [{model: db.parent_missions, required: false}]},{model: db.active_rewards, where: {reward_status: 'R'}, required: false,include: [{model: db.parent_rewards, required: false}]}],
    }).then(function (missionData) {
        // console.log(parentData);
        res.json(missionData);
    })
});

router.get('/rewappr/:id', (req, res) => {
    const parentId = req.params.id;
    db.active_rewards.findAll({
        where: {
            parentId,
            reward_status: 'R'
        },
        include: [db.parent_rewards]
    }).then(function (rewardData) {
        res.json(rewardData);
    })
});

router.get('/team/:id', (req, res) => {
    console.log("test");
    console.log(req.params.id);
    const parentId = req.params.id;

    db.children.findAll({
        where: {
            parentId
        },
        include: [db.avatars]
    }).then(function (parentData) {
        // console.log(parentData);
        res.json(parentData);
    })
});

router.get('/missions/:id', (req, res) => {
    const parentId = req.params.id;

    db.parent_missions.findAll({
        where: {
            parentId
        }
    }).then(function (data) {
        //console.log(data);
        res.json(data);
    })
});

router.get('/rewards/:id', (req, res) => {
    const parentId = req.params.id;
    db.parent_rewards.findAll({
        where: {
            parentId
        }
    }).then(function (data) {
        //console.log(data);
        res.json(data);
    })
});


module.exports = router;
