const express = require("express");
const userRouter = express.Router();
const User = require('../../../database/models/User')

userRouter.route('/')
.get((req, res) => {
  return new User()
    .fetchAll()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    });
})
.post((req, res) => {
  const newUser = req.body;

  return new User(newUser).save().then(results => {
      res.status(200).json(results);
  })
  .catch((err) => {
      res.send(err);
  })
})
.put((req, res) => {
  const putObj = req.body;

  return new User({'id': putObj.id}).fetch().then((user) => {
      user.set({ 
        'email': putObj.email,
        'name': putObj.name,
        'password': putObj.password,
        'user_status': putObj.user_status 
      }).save();
      res.send(user);
  })
  .catch(() => {
      res.status(400).json(user);
  })
})
.delete((req, res) => {
  const delId = req.body.id;

  return new User({'id': delId}).destroy().then(() => {
      res.status(200).send('successfully deleted');
  })
  .catch((err) => {
      res.status(400).send(err);
  })
})

userRouter.post("/new", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const user_status = req.body.user_status;
  return new req.db.User({ email, name, password, user_status })
    .save()
    .then(user => {
      return res.json({ success: true, user: user });
    })
    .catch(err => {
      res.status(400).json({ message: err });
    });
});

userRouter.post("/login", (req, res) => {
  return res.status(200);
});

module.exports = userRouter;
