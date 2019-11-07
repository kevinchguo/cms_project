const bookshelf = require("../bookshelf");
require("../models/Creature");

class CreatureStatus extends bookshelf.Model {
  get tableName() {
    return "creature_statuses";
  }
  get timestamps() {
    return true;
  }

  creature() {
    return this.belongsToMany("Creature", "creatures");
  }
}

module.exports = bookshelf.model("CreatureStatus", CreatureStatus);
