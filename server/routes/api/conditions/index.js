const express = require('express');
const conditionRouter = express.Router();

conditionRouter.route('/')
.get((req, res) => {
    return new req.db.Condition().fetchAll().then((conditions) => {
        return res.json(conditions);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = conditionRouter;