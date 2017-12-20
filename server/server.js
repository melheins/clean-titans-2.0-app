var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Require all models
var db = require("./models/index");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: false}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
// Connect to localhost if not a production environment
if (process.env.NODE_ENV == 'production') {
    // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
    //mongoose.connect('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
}
else {
    mongoose.connect("mongodb://localhost/cleanTitans", {
        useMongoClient: true
    });
}


// When the server starts, create a dummy avatar
db.Avatars
    .create({name: "super girl", link: "tbd"})
    .then(function (dbAvatars) {
        console.log(dbAvatars);
    })
    .catch(function (err) {
        console.log(err.message);
    });

// When the server starts, create a dummy parent and child

db.Parent
    .create({first_name: "Tessy", last_name: "Tester", email: "test@test.org"})
    .then(function (dbParent) {
        console.log(dbParent);
        var parentId = dbParent._id;
        //sessionStorage.setItem('parentId', dbParent._id);

        db.Avatars.findOne({name: "super girl"})
            .then(function (dbAvatars) {
                console.log(dbAvatars);
                var avatarId = dbAvatars._id;

                db.Child
                //.get( parentId = sessionStorage.getItem('parentId'))
                    .create({first_name: "Lisa", nickname: "Supergirl", parent_id: parentId, avatars_id: avatarId})
                    .then(function (dbChild) {
                        console.log(dbChild);
                    })
                    .catch(function (err) {
                        console.log(err.message);
                    });
            })
    })
    .catch(function (err) {
        console.log(err.message);
    });


// Routes


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
