var express = require("express");
var db = require("../models");
var router = express.Router();

// Import the model (.js) to use its database functions.
// Create all our routes and set up logic within those routes where required.

//router.get("/child", function (req, res) {
router.get("/child/:id", function (req, res) {
    var id = req.params.id;
    //console.log(req.params.id);
    /* var missions_assigned = [
         {
             "mission_title": "Sweep The Floor"
         },
         {
             "mission_title": "unload the dishwasher"
         }];

     var rewards_earned = [
         {
             "reward_id": "Ice Cream"
         },
         {
             "reward_id": "Comic Book"
         }];

     var hero = {
         "nickname": "sylar"
     }; */

    db.children.findOne({
        where: {
            id
        },
        include: [db.active_rewards, db.active_missions]
    }).then(function (childData) {
        //console.log(childData);

        var hero = {
            nickname:childData.nickname,
            first_name:childData.first_name,
            avatar:childData.avatar,
            points:childData.points
        };

        //console.log(hero);

        var missions_assigned = childData.active_missions;
        var rewards_earned = childData.active_rewards;

        res.render('child', {
            layout: 'child_layout',
            childSummaryPage: true,
            missions_assigned: missions_assigned,
            rewards_earned: rewards_earned,
            child: hero
        });
    })
});

//router.get("/child-missions", function (req, res) {
router.get("/child-missions/:id", function (req, res) {

    var id = req.params.id;
    //console.log(req.params.id);
    /*  var hero = {
          "nickname": "sylar"
      };

      var missions_assigned = [
          {
              "mission_id": "sample1",
              "mission_title": "sweep the floor",
              "mission_point_value": 5,
              "mission_description": "Sweep with the broom by making short motions across the floor. Try to be careful not to fling dust everywhere by keeping each sweep short. Sweep all dust" +
              "and such to one location. sweep everything into the dustpan, then dump the dustpan contents into the trashcan, and put the broom and dustpan away."
          },
          {
              "mission_id": "sample2",
              "mission_title": "unload the dishwasher",
              "mission_point_value": 7,
              "mission_description": "Take all dishes out of the washer, and put them where they go in the kitchen." +
              "Double check to be sure they are clean!"
          }];*/

    db.children.findOne({
        where: {
            id
        },
        include: [db.active_missions]
    }).then(function (childData) {
        console.log(childData);

        var hero = {
            nickname:childData.nickname,
            first_name:childData.first_name,
            avatar:childData.avatar,
            points:childData.points
        };
        var missions_assigned = childData.active_missions;

        res.render('child', {
            layout: 'child_layout',
            childMissionsPage: true,
            missions_assigned: missions_assigned,
            child: hero
        });
    })
});


router.get("/child-rewards", function (req, res) {
    var id = req.params.id;
    //console.log(req.params.id);
    var rewards_available = [
        {

            "reward_id": "ice cream",
            "reward_points_required": 3
        },
        {
            "reward_id": "comic book",
            "reward_points_required": 10
        }
    ];

    console.log(rewards_available);

    var hero = {
        "nickname": "Sylar"
    };

    res.render('child', {
        layout: 'child_layout',
        childRewardsPage: true,
        rewards: rewards_available,
        child: hero
    });
});

router.get('/child-comics', function (req, res) {
    var id = req.params.id;
    //console.log(req.params.id);
    var hero = {
        "nickname": "Sylar"
    };

    var comics_earned = {
        "comic_id": "Batman"
    };

    res.render('child', {layout: 'child_layout', childsComicsPage: true, child: hero, comics: comics_earned});
});


// Export routes for server.js to use.
module.exports = router;
