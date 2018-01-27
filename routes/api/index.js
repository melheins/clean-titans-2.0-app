const router = require("express").Router();
const parentRoutes = require("./parent");
const childRoutes = require("./child");
const db = require("../../models");


// Parent routes
router.use("/parent", parentRoutes);

// Child routes
router.use("/child", childRoutes);

//Child login
router.get('/childlogin/:id', (req, res) => {
    const parentId = req.params.id;
    db.children.findAll({
        where: {
            parentId
        },
        include: [
            db.avatars
        ]
    }).then(function (parentData) {
        res.json(parentData);
    })
});

module.exports = router;
