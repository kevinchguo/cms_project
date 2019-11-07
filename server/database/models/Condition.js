const bookshelf = require("../bookshelf");
require("../models/Creature");

class Condition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }
  get timestamps() {
    return true;
  }
  creature() {
    return this.hasMany("Creature", "creatures");
  }
}

module.exports = bookshelf.model("Condition", Condition);
