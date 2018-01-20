const db = require("../models");

// Defining methods for the parentController
/**module.exports = {
    findAll: function(req, res) {
        db.children
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.children
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};  **/

router.get("/parent/team", function (req, res) {
    const id = req.params.id;

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children, db.active_rewards, db.active_missions]
    }).then(function (parentData) {

        const children = parentData.children;
        const rewardsAppr = [];
        const missionsAppr = [];

        //console.log(children);

        //if no missions, set to false
        if (missionsAppr.length === 0) missionsAppr = false;
        else {
            //check for missions that need approval
            for (const i = 0; i < missions.length; i++) {
                if (missions[i].mission_status === "W") missionsAppr.push(missions[i])
            }
        }
        if (rewardsAppr.length === 0) rewardsAppr = false;
        else {
            for (const j = 0; j < missions.length; j++) {
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

// Export routes for server.js to use.
module.exports = router;
