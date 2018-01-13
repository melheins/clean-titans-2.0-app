// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use(express.static("public"));

// Handlebars
// =============================================================
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "login_layout"}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// var routes = require("./controllers/test_controller.js");
// app.use("/", routes);

const route1 = require("./controllers/login_controller.js");
const route2 = require("./controllers/parent_controller.js");
const route3 = require("./controllers/child_controller.js");
const route4 = require("./controllers/parent_api_controller.js");
const route5 = require("./controllers/child_api_controller.js");

app.use("/", route1);
app.use("/", route2);
app.use("/", route3);
app.use("/", route4);
app.use("/", route5);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});