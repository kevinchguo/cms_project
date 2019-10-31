const express = require('express');
const userStatusRouter = express.Router();

userStatusRouter.route('/')
.get((req, res) => {
    return new req.db.UserStatus().fetchAll().then((userStatuses) => {
        return res.json(userStatuses);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = userStatusRouter;