const express = require('express');
const conditionRouter = express.Router();
const Condition = require('../../../database/models/Condition');

conditionRouter.route('/')
.get((req, res) => {
    return new Condition().fetchAll().then((conditions) => {
        return res.json(conditions);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
.post((req, res) => {
    const newCondition = req.body;

    return new Condition(newCondition).save().then(results => {
        res.status(200).json(results);
    })
    .catch((err) => {
        res.send(err);
    })
})
.put((req, res) => {
    const putObj = req.body;

    return new Condition({'id': putObj.id}).fetch().then((condition) => {
        condition.set({ 'condition': putObj.condition }).save();
        res.send(condition);
    })
    .catch(() => {
        res.status(400).json(condition);
    })
})
.delete((req, res) => {
    const delId = req.body.id;

    return new Condition({'id': delId}).destroy().then(() => {
        res.status(200).send('successfully deleted');
    })
    .catch((err) => {
        res.status(400).send(err);
    })
})

module.exports = conditionRouter;