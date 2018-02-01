const router = require("express").Router();
const db = require("../../models");

//PARENT ROUTES

router.post("/", (req, res) => {
    db.parents.create(req.body)
        .then(function (newParent) {
            res.json(newParent);
            //console.log(newParent);
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
        include: [db.parent_missions, db.children]
    }).then(function (missionData) {
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
        include: [db.parent_rewards, db.children]
    }).then(function (rewardData) {
        res.json(rewardData);
    })
});

router.get('/team/:id', (req, res) => {
    console.log("load team");
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

router.get('/team/addchild/avatars', (req, res) => {
    console.log("load avatars");
    db.avatars.findAll({}).then(function (avatarData) {
        //console.log(avatarData);
        res.json(avatarData);
    })
});

router.post('/team/addchild/save/:id', (req, res) => {
    console.log("create child");
    db.children.create({
        first_name: req.body.name,
        nickname: req.body.nick,
        avatarId: req.body.avatar,
        parentId: req.params.id,
    }).then(function (childData) {
        //console.log(avatarData);
        res.json(childData);
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


router.put('/missions/approvedeny/:id', (req, res) => {
    const mid = req.params.id;
    console.log('Mission Updating.....');
    console.log('New Status: ' + req.body.newStatus);
    console.log('Child: ' + req.body.cid);
    console.log('Add Points: ' + req.body.addPoints);
    let currentPoints = 0;
    let newPoints = 0;

    db.active_missions.update(
        {mission_status: req.body.newStatus},
        {where: {id: mid}}
    ).then(function (rowsUpdated) {
        console.log('Miss updated');
        res.json(rowsUpdated);

        if (req.body.newStatus === 'A') {
            db.children.findOne({
                where: {id: req.body.cid}
            }).then(function (child) {
                //console.log(child);
                currentPoints = child.points;
            }).then(function () {
                    newPoints = currentPoints + req.body.addPoints;
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
        }
    });
});


router.put('/rewards/approve/:id', (req, res) => {
    const rid = req.params.id;
    console.log('Reward Updating.....');
    console.log('New Status: ' + req.body.newStatus);

    db.active_rewards.update(
        {reward_status: req.body.newStatus},
        {where: {id: rid}}
    ).then(function (rowsUpdated) {
        console.log('Reward updated');
        res.json(rowsUpdated);
    });
});
module.exports = router;
