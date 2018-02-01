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
            childId,
            mission_status: {$ne: 'A'}
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
            childId,
            reward_status: {$ne: 'A'}
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

router.post('/rewards/purchase/:id', (req, res) => {
    const rid = req.params.id;
    console.log('Reward Purchasing.....');
    console.log('New Status: ' + req.body.newStatus);
    console.log('Child: ' + req.body.cid);
    console.log('Add Points: ' + req.body.addPoints);
    let currentPoints = 0;
    let newPoints = 0;

    db.active_rewards.findOne({
        where: {id: rid}
    }).then(function (rewardData) {
        console.log(rewardData);
        console.log(req.body.newStatus);
        console.log(rewardData.childId);
        db.active_rewards.create({
            reward_status: req.body.newStatus,
            parentRewardId: rewardData.parentRewardId,
            parentId: rewardData.parentId,
            childId: rewardData.childId,
        }).then(function (rewardData) {
            console.log('Reward Created');
            res.json(rewardData);
        }).then(function () {
            db.children.findOne({
                where: {id: req.body.cid}
            }).then(function (child) {
                //console.log(child);
                currentPoints = child.points;
            }).then(function () {
                    newPoints = currentPoints - req.body.addPoints;
                    console.log("New Points: " + newPoints);
                }
            ).then(function () {
                    db.children.update(
                        {points: newPoints},
                        {where: {id: req.body.cid}}
                    ).then(function (rowsUpdated) {
                        console.log('child updated');
                        //res.json(rowsUpdated);
                    })
                }
            )
        });
    });
});

module.exports = router;
