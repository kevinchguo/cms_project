const bookshelf = require("../bookshelf");

class UserStatus extends bookshelf.Model {
  get tableName() {
    return "user_statuses";
  }
  get timestamps() {
    return true;
  }
}

module.exports = bookshelf.model("UserStatus", UserStatus);
