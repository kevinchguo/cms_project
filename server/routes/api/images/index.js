const express = require('express');
const imageRouter = express.Router();

imageRouter.route('/')
.get((req, res) => {
    return new req.db.Image().fetchAll().then((images) => {
        return res.json(images);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = imageRouter;