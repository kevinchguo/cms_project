const express = require('express');
const UserStatus = require('../../../database/models/UserStatus');
const userStatusRouter = express.Router();

userStatusRouter.route('/')
.get((req, res) => {
    return new UserStatus().fetchAll().then((userStatuses) => {
        return res.json(userStatuses);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})
.post((req, res) => {
    const newUserStatus = req.body;

    return new UserStatus(newUserStatus).save().then(results => {
        res.status(200).json(results);
    })
    .catch((err) => {
        res.send(err);
    })
})
.put((req, res) => {
    const putObj = req.body;

    return new UserStatus({'id': putObj.id}).fetch().then((userStatus) => {
        userStatus.set({ 'status': putObj.status }).save();
        res.send(userStatus);
    })
    .catch(() => {
        res.status(400).json(userStatus);
    })
})
.delete((req, res) => {
    const delId = req.body.id;

    return new UserStatus({'id': delId}).destroy().then(() => {
        res.status(200).send('successfully deleted');
    })
    .catch((err) => {
        res.status(400).send(err);
    })
})

module.exports = userStatusRouter;