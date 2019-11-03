const bookshelf = require("../bookshelf");
require("./User");
require("./Category");
require("./CreatureStatus");
require("./Condition");

class Creature extends bookshelf.Model {
  get tableName() {
    return "creatures";
  }
  get timestamps() {
    return true;
  }

  created_by() {
    return this.hasOne("User", ["id"]);
  }

  category() {
    return this.hasOne("Category", ["id"]);
  }

  creature_status() {
    return this.hasOne("CreatureStatus", "id");
  }

  condition() {
    return this.hasOne("Condition", "id");
  }
}

module.exports = bookshelf.model("Creature", Creature);
