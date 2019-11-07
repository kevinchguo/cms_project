const express = require("express");
const creatureRouter = express.Router();

creatureRouter.route("/").get((req, res) => {
  return req.db.Creature.fetchAll({
    withRelated: [
      "user_id",
      "category_id",
      "creature_status_id",
      "condition_id"
    ]
  })
    .then(creatures => {
      return res.json(creatures);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = creatureRouter;
