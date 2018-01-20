const path = require("path");
const router = require("express").Router();

const db = require("../models");

router.get('/parent/team', (req, res) => {
    const id = 1;

    db.parents.findOne({
        where: {
            id
        },
        include: [db.children]
    }).then(function (parentData) {

        const children = parentData.children;

        //console.log(children);

        res.json(children);

        /**res.render('parent', {
            layout: 'parent_layout',
            parentFamilyPage: true,
            child: children,
            pid: id
            //,name: name
        });**/
    })

});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
