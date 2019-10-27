const express = require("express");
const decorator = require("./database/decorator");
const bodyParser = require("body-parser");

require("dotenv").config();

const PORT = process.env.EXPRESS_HOST_PORT;

const app = express();
app.use(decorator);

app.get("/", (req, res) => {
  return req.db.Creature.fetchAll().then(creatures => {
    res.json(creatures);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
