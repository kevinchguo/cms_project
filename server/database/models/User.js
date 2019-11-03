const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get timestamps() {
    return true;
  }

  creature() {
    return this.hasMany("Creature", "creatures");
  }

  // user_status() {
  //   return this.belongsTo("UserStatus");
  // }
}

module.exports = bookshelf.model("User", User);
