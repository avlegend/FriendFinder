// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const friends = require("../data/friends");

// Routes
// =============================================================
module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  // POST DATA
  // =============================================================
  // Create New Characters - takes in JSON input
  app.post("/api/friends", (req, res) => {
    
    //get score from incoming user
    let friendScore = req.body.scores;

    let currentLUser = null;

    let currentLScore = null;

    for (var i = 0; i < friends.length; i++) {
      //Here i represents index of each object in aray
      //any vars here will reset each loop
      let counter = 0;

      for (var j = 0; j < friends[i].scores.length; j++) {
        //Here j represents each index in each users score array AND the index in the incoming users score array
        counter += Math.abs(friends[i].scores[j] - friendScore[j]);


      }
      //We ahve completed a full cycle of comparing scores BUT we have yet to move on tomt he next obect
      if (!currentLUser) {
        currentLUser = friends[i];
        currentLScore = counter;
      }
      else {
        //means we are doing a real comparison
        if (counter < currentLScore) {
          currentLUser = friends[i];
          currentLScore = counter;
        }
      }


    }

    //now we reach up in scope to vars
    res.json(currentLUser);

    //write a double loop
    //inner loop for each friends score
    // compare each value from friends score and incoming friend score
    // keeping the value positive using absolute value
  });
};