// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//(DATA)
// =============================================================

// Routes
// =============================================================
// app.get("/home", (req, res) => {
//     res.sendFile(path.join(__dirname, "../app/public/home.html"));
// });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))