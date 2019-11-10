const express = require('express');
const CreatureStatus = require("../../../database/models/CreatureStatus");
const creatureStatusRouter = express.Router();

creatureStatusRouter.route('/')
.get((req, res) => {
    return new CreatureStatus().fetchAll().then((creatureStatuses) => {
        return res.json(creatureStatuses);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
.post((req, res) => {
    const newCreatureStatus = req.body;

    return new CreatureStatus(newCreatureStatus).save().then(results => {
        res.status(200).json(results);
    })
    .catch((err) => {
        res.send(err);
    })
})
.put((req, res) => {
    const putObj = req.body;

    return new CreatureStatus({'id': putObj.id}).fetch().then((creatureStatus) => {
        creatureStatus.set({ 'status': putObj.status }).save();
        res.send(creatureStatus);
    })
    .catch(() => {
        res.status(400).json(creatureStatus);
    })
})
.delete((req, res) => {
    const delId = req.body.id;

    return new CreatureStatus({'id': delId}).destroy().then(() => {
        res.status(200).send('successfully deleted');
    })
    .catch((err) => {
        res.status(400).send(err);
    })
})

module.exports = creatureStatusRouter;