const bookshelf = require("../bookshelf");
require("../models/User");

class UserStatus extends bookshelf.Model {
  get tableName() {
    return "user_statuses";
  }
  get timestamps() {
    return true;
  }

  user() {
    return this.belongsToMany("Users", "users");
  }
}

module.exports = bookshelf.model("UserStatus", UserStatus);
