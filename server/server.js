const express = require("express");
const decorator = require("./database/decorator");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const bcrypt = require("bcryptjs");
const knex = require("./database/knex");
const flash = require("connect-flash");
const saltRounds = 12;

///// DOTENV & PASSPORT /////
require("dotenv").config();
require("./config/passport")(passport);

///// REDIS /////
const RedisStore = require("connect-redis")(session);
const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URL });

///// ROUTES /////
const categoryRoutes = require("./routes/api/categories");
const conditionRoutes = require("./routes/api/conditions");
const creatureStatusRoutes = require("./routes/api/creature_statuses");
const creatureRoutes = require("./routes/api/creatures/index");
const imageRoutes = require("./routes/api/images/image.upload");
const userStatusRoutes = require("./routes/api/user_statuses");
const userRoutes = require("./routes/api/users");

///// PORT /////
const PORT = process.env.EXPRESS_HOST_PORT;

///// APP /////
const app = express();

///// MIDDLEWARE /////
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(decorator);

///// ROUTES /////
app.use("/api/users", userRoutes);
app.use("/api/creatures", creatureRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/conditions", conditionRoutes);
app.use("/api/creature_statuses", creatureStatusRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/user_statuses", userStatusRoutes);

///// LISTEN /////
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
