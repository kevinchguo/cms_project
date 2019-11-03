const bookshelf = require("../bookshelf");

class CreatureStatus extends bookshelf.Model {
  get tableName() {
    return "creature_statuses";
  }
  get timestamps() {
    return true;
  }

  creature() {
    return this.hasMany("Creature", "creatures");
  }
}

module.exports = bookshelf.model("CreatureStatus", CreatureStatus);
