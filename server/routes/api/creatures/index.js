const express = require("express");
const creatureRouter = express.Router();
const knex = require("knex");

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

creatureRouter.route("/newest").get((req, res) => {
  console.log("newest route works");
  return req.db.Creature.forge()
    .orderBy("sort_by_date", "DESC")
    .fetchAll({
      withRelated: [
        "user_id",
        "category_id",
        "creature_status_id",
        "condition_id"
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = creatureRouter;
