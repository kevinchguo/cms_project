const express = require("express");
const imageRouter = express.Router();

const upload = require("../../services/image.upload");

const singleUpload = upload.single("image"); // key value

imageRouter.post("/", (req, res) => {
  singleUpload(req, res, err => {
    return res.json({ "image url": req.file.location });
  });
});

module.exports = imageRouter;
