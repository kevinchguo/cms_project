const express = require('express');
const creatureStatusRouter = express.Router();

creatureStatusRouter.route('/')
.get((req, res) => {
    return new req.db.CreatureStatus().fetchAll().then((creatureStatuses) => {
        return res.json(creatureStatuses);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = creatureStatusRouter;