const express = require('express');
const Category = require("../../../database/models/Category");
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
.post((req, res) => {
    const newCategory = req.body;

    return new Category(newCategory).save().then(results => {
        res.status(200).json(results);
    })
    .catch((err) => {
        console.log('ERROR',err);
    })
})

module.exports = categoryRouter;