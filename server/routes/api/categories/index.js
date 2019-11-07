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
        res.send('category id not found');
    })
})
.delete((req, res) => {
    const delId = req.body.id;

    return new Category({'id': delId}).destroy().then(() => {
        res.send('successfully deleted');
    })
    .catch(() => {
        res.send('category id not found');
    })
})
module.exports = categoryRouter;