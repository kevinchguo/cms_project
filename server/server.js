const express = require("express");
const decorator = require("./database/decorator");
const bodyParser = require("body-parser");

const categoryRoutes = require('./routes/api/categories');
const conditionRoutes = require('./routes/api/conditions');
const creatureStatusRoutes = require('./routes/api/creature_statuses');
const creatureRoutes = require('./routes/api/creatures');
const imageRoutes = require('./routes/api/images');
const userStatusRoutes = require('./routes/api/user_statuses');
const userRoutes = require('./routes/api/users');

require("dotenv").config();

const PORT = process.env.EXPRESS_HOST_PORT;

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(decorator);

app.use('/api/users', userRoutes);
app.use('/api/creatures', creatureRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/conditions', conditionRoutes);
app.use('/api/creature_statuses', creatureStatusRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/user_statuses', userStatusRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
