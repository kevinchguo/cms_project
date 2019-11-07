const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return new req.db.User()
    .fetchAll()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      res.status(400).json({ message: err });
    });
});

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
