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
const creatureRoutes = require("./routes/api/creatures/");
const imageRoutes = require("./routes/api/images");
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
// app.use(
//   session({
//     store: new RedisStore({ client }),
//     secret: process.env.REDIS_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );
// app.use(passport.initialize()); //starts up passport and sets up middleware
// app.use(passport.session()); //current session we are using

// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     return new User({ username: username })
//       .fetch()
//       .then(user => {
//         console.log(user);

//         if (user === null) {
//           return done(null, false, { message: "bad username or password" });
//         } else {
//           user = user.toJSON();

//           bcrypt.compare(password, user.password).then(res => {
//             // Happy route: username exists, password matches
//             if (res) {
//               return done(null, user); // this is the 'user' that goes to passport.serializeUser
//             }
//             // Error Route: Username exists, password does not match
//             else {
//               return done(null, false, { message: "bad username or password" });
//             }
//           });
//         }
//       })
//       .catch(err => {
//         console.log("error: ", err);
//         return done(err);
//       });
//   })
// );

// // user comes from database then return the session object
// passport.serializeUser(function(user, done) {
//   console.log("serializing");

//   return done(null, { id: user.id, username: user.username });
// });

// //comes back to website with a cookie
// passport.deserializeUser(function(user, done) {
//   console.log("deserializing");
//   console.log(user);
//   return done(null, user);
// });

// app.use(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/"
//   })
// );

// // Copy and paste into route if you need to authenticate and throw it after the "/api/***"
// function isAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.redirect("/");
//   }
// }

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
