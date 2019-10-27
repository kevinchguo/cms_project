const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const PORT = process.env.EXPRESS_HOST_PORT;

const app = express();

app.get("");

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
