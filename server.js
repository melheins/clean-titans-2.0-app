const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const path = require("path");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);
// Serve up static assets
app.use(express.static("client/build"));
app.use('/*', function (req, res) {
    const index = path.join(__dirname, 'client', 'build', 'index.html');
    res.sendFile(index);
});

// Auth) info
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://regas.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://regas.auth0.com/userinfo',
    issuer: 'regas.auth0.com',
    algorithms: ['RS256']
});


// Requiring our models for syncing
const db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: false}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

