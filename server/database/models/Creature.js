const bookshelf = require("../bookshelf");

class Creature extends bookshelf.Model {
  get tableName() {
    return "creatures";
  }
  get timestamps() {
    return true;
  }

  created_by() {
    return this.belongsTo("User");
  }

  category() {
    return this.belongsTo("Category");
  }

  creature_status() {
    return this.belongsTo("CreatureStatus");
  }

  condition() {
    return this.belongsTo("Condition");
  }
}

module.exports = bookshelf.model("Creature", Creature);
