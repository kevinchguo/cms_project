const express = require('express');
const userRouter = express.Router();

userRouter.route('/')
.get((req, res) => {
    return new req.db.User().fetchAll().then((users) => {
        return res.json(users);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = userRouter;