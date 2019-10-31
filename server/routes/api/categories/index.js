const express = require('express');
const categoryRouter = express.Router();

categoryRouter.route('/')
.get((req, res) => {
    return new req.db.Category().fetchAll().then((categories) => {
        res.json(categories);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = categoryRouter;