var express = require("express");
var router = express.Router();

// Import the model (.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

router.get("/parent/:id", function (req, res) {
    var id = req.params.id;
    var rewards;
    var missions;

    db.rewards.findAll({
        limit: 5
    }).then(function (data) {
        //console.log(data);
        rewards = data;
    });

    db.missions.findAll({
        limit: 5
    }).then(function (data) {
        //console.log(data);
        missions = data;
    });

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewardsAct = parentData.active_rewards;
        var missionsAct = parentData.active_missions;
        var rewardsAppr = [];
        var missionsAppr = [];

        //console.log(children);

        //if no missions, set to false
        if (missionsAppr.length === 0) missionsAppr = false;
        else {
            //check for missions that need approval
            for (var i = 0; i < missions.length; i++) {
                if (missionsAct[i].mission_status === "W") missionsAppr.push(missionsAct[i])
            }
        }
        if (rewardsAppr.length === 0) rewardsAppr = false;
        else {
            for (var j = 0; j < missions.length; j++) {
                if (rewardsAct[j].reward_status === "W") rewardsAppr.push(rewardsAct[j])
            }
        }
        res.render('parent', {
            layout: 'parent_layout',
            parentSummaryPage: true,
            child: children,
            reward_approval: rewardsAppr,
            mission_approval: missionsAppr,
            mission: missions,
            reward: rewards,
            pid: id
        });
    })
});


router.get("/parent-team/:id", function (req, res) {
    var id = req.params.id;

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewardsAppr = [];
        var missionsAppr = [];

        //console.log(children);

        //if no missions, set to false
        if (missionsAppr.length === 0) missionsAppr = false;
        else {
            //check for missions that need approval
            for (var i = 0; i < missions.length; i++) {
                if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
            }
        }
        if (rewardsAppr.length === 0) rewardsAppr = false;
        else {
            for (var j = 0; j < missions.length; j++) {
                if (rewards[j].reward_status === "W") rewardsAppr.push(rewards[j])
            }
        }

        res.render('parent', {
            layout: 'parent_layout',
            parentFamilyPage: true,
            child: children,
            reward_approval: rewardsAppr,
            mission_approval: missionsAppr,
            pid: id
            //,name: name
        });
    })

});

router.get("/parent-add-child/:id", function (req, res) {
    var id = req.params.id;

    var avatars = [
        {
            "id": "1", "name": "Batgirl"
        }, {
            "id": "2", "name": "Batboy"
        }, {
            "id": "3", "name": "Captain America"
        }, {
            "id": "4", "name": "Spider-girl"
        }, {
            "id": "5", "name": "Spider-boy"
        }, {
            "id": "6", "name": "Super-girl"
        }, {
            "id": "7", "name": "Super-boy"
        }, {
            "id": "8", "name": "Wonder-girl"
        }];

    res.render('parent', {
        layout: 'parent_layout',
        parentAddChildPage: true,
        pid: id,
        avatars:avatars
    });

});

router.get("/parent-rewards/:id", function (req, res) {
    var id = req.params.id;
    var rewards;

    db.rewards.findAll({}).then(function (data) {
        //console.log(data);
        rewards = data;
    });

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewardsAppr = [];

        //console.log(children);

        //if no missions, set to false

        if (rewardsAppr.length === 0) rewardsAppr = false;
        else {
            for (var j = 0; j < missions.length; j++) {
                if (rewards[j].reward_status === "W") rewardsAppr.push(rewards[j])
            }
        }
        res.render('parent', {
            layout: 'parent_layout',
            parentRewardsPage: true,
            child: children,
            reward_approval: rewardsAppr,
            reward: rewards,
            pid: id
        });
    });
});

router.get("/parent-missions/:id", function (req, res) {
    var id = req.params.id;
    var missions;

    db.missions.findAll({}).then(function (data) {
        //console.log(data);
        missions = data;
    });

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var missionsAppr = [];

        //console.log(children);

        //if no missions, set to false
        if (missionsAppr.length === 0) missionsAppr = false;
        else {
            //check for missions that need approval
            for (var i = 0; i < missions.length; i++) {
                if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
            }
        }

        res.render('parent', {
            layout: 'parent_layout',
            parentMissionsPage: true,
            child: children,
            mission_approval: missionsAppr,
            mission: missions,
            pid: id
        });
    });
});

router.get("/parent-edit-child/:id", function (req, res) {
    var id = req.params.id;
    var rewards;
    var missions;

    db.rewards.findAll({
        limit: 5
    }).then(function (data) {
        //console.log(data);
        rewards = data;
    });

    db.missions.findAll({
        limit: 5
    }).then(function (data) {
        //console.log(data);
        missions = data;
    });

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        var children = parentData.children;
        var rewardsAppr = [];
        var missionsAppr = [];

        //console.log(children);

        //if no missions, set to false
        if (missionsAppr.length === 0) missionsAppr = false;
        else {
            //check for missions that need approval
            for (var i = 0; i < missions.length; i++) {
                if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
            }
        }
        if (rewardsAppr.length === 0) rewardsAppr = false;
        else {
            for (var j = 0; j < missions.length; j++) {
                if (rewards[j].reward_status === "W") rewardsAppr.push(rewards[j])
            }
        }
        res.render('parent', {
            layout: 'parent_layout',
            parentEditChildPage: true,
            child: children,
            reward_approval: rewardsAppr,
            mission_approval: missionsAppr,
            mission: missions,
            reward: rewards,
            pid: id
        });
    });

});

router.get("/parent/redirect/:id", function (req, res) {
    console.log('redirect part 2');
    res.redirect("/parent/" + req.params.id)
});


// Export routes for server.js to use.
module.exports = router;
