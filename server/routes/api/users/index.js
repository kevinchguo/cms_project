const express = require("express");
const userRouter = express.Router();

userRouter
  .route("/")
  .get((req, res) => {
    return new req.db.User()
      .fetchAll()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        res.status(400).json({ message: err });
      });
  })
  .post((req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const user_status = req.body.user_status;
    // return new req.db.User({ email, name, password, user_status }).save()
    //     .then((user) => {
    //         return res.json({ success: true });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.sendStatus(500);
    //     })
    return res.json({ success: true });
  });

module.exports = userRouter;
