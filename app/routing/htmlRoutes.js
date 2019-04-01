// Dependencies
// =============================================================
let express = require('express');
let path = require("path");
// Sets up the Express App
// =============================================================

//(DATA)
// =============================================================

// Routes
// =============================================================

/* Routes to the survey page */
module.exports = function (app) {

    /* Routes to the home page */
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    // If no matching route is found default to home
    app.get("*", (req, res) => {
        res.redirect('/');
    });

}

// Starts the server to begin listening
// =============================================================




