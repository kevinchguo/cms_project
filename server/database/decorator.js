const Category = require("./models/Category");
const Condition = require("./models/Condition");
const Creature = require("./models/Creature");
const CreatureStatus = require("./models/CreatureStatus");
const Image = require("./models/Image");
const User = require("./models/User");
const UserStatus = require("./models/UserStatus");

module.exports = function(req, res, next) {
  req.db = {
    Category: Category,
    Condition: Condition,
    Creature: Creature,
    CreatureStatus: CreatureStatus,
    Image: Image,
    User: User,
    UserStatus: UserStatus
  };
  next();
};
