const bookshelf = require("../bookshelf");
require("../models/Creature");
require("../models/UserStatus");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get timestamps() {
    return true;
  }

  creature() {
    return this.hasMany("Creature");
  }

  user_status() {
    return this.hasOne("UserStatus");
  }
}

module.exports = bookshelf.model("User", User);
