const express = require('express');
const creatureRouter = express.Router();

creatureRouter.route('/')
.get((req, res) => {
    return new req.db.Creature().fetchAll().then((creatures) => {
        return res.json(creatures);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = creatureRouter;