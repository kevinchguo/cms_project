const express = require('express');
const Category = require("../../../database/models/Category");
const categoryRouter = express.Router();

categoryRouter.route('/')
.get((req, res) => {
    return new Category().fetchAll().then((categories) => {
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
        res.send(err);
    })
})
.put((req, res) => {
    const putObj = req.body;

    return new Category({'id': putObj.id}).fetch().then((category) => {
        category.set({ 'category': putObj.category }).save();
        res.send(category);
    })
    .catch(() => {
        res.status(400).json(category);
    })
})
.delete((req, res) => {
    const delId = req.body.id;

    return new Category({'id': delId}).destroy().then(() => {
        res.status(200).send("successfully deleted");
    })
    .catch((err) => {
        res.status(400).send(err);
    })
})
module.exports = categoryRouter;