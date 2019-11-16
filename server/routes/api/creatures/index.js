const express = require("express");
const creatureRouter = express.Router();
const Creature = require("../../../database/models/Creature");

creatureRouter
  .route("/")
  .get((req, res) => {
    return req.db.Creature.fetchAll({
      withRelated: [
        "user_id",
        "category_id",
        "creature_status_id",
        "condition_id",
        'image_id'
      ]
    })
      .then(creatures => {
        return res.json(creatures);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  })
  .post((req, res) => {
    const creature = req.body;
    return new Creature(creature)
      .save()
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        res.send(err);
      })
  })
  .put((req, res) => {
    const putObj = req.body;

    return new Creature({ id: putObj.id })
      .fetch()
      .then(creatureStatus => {
        creatureStatus
          .set({
            name: putObj.name,
            description: putObj.description,
            user_id: putObj.user_id,
            category_id: putObj.category_id,
            creature_status_id: putObj.creature_status_id,
            condition_id: putObj.condition_id,
            price: putObj.price,
            /////DONT FORGET TO DELETE////
            sort_by_date: putObj.sort_by_date
          })
          .save();
        res.send(creatureStatus);
      })
      .catch(() => {
        res.status(400).json(creatureStatus);
      });
  })
  .delete((req, res) => {
    const delId = req.body.id;

    return new Creature({ id: delId })
      .destroy()
      .then(() => {
        res.status(200).send("successfully deleted");
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

creatureRouter.route("/newest").get((req, res) => {
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

creatureRouter.route("/oldest").get((req, res) => {
  return req.db.Creature.forge()
    .orderBy("sort_by_date", "ASC")
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

creatureRouter.route("/highest").get((req, res) => {
  return req.db.Creature.forge()
    .orderBy("price", "DESC")
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

creatureRouter.route("/lowest").get((req, res) => {
  return req.db.Creature.forge()
    .orderBy("price", "ASC")
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

creatureRouter.route("/search").post((req, res) => {
  let keyword = req.body.data;

  if (keyword === "") {
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
  } else {
    keyword.toLowerCase()[0].toUpperCase() + keyword.toLowerCase().slice(1);

    return req.db.Creature.forge()
      .where("name", "like", `%${keyword.toLowerCase()}%`)
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
  }
});

creatureRouter.get("/:id", (req, res) => {
  return req.db.Creature.where({ id: req.params.id })
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
