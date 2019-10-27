const bookshelf = require("../bookshelf");

class CreatureStatus extends bookshelf.Model {
  get tableName() {
    return "creature_statuses";
  }
  get timestamps() {
    return true;
  }
}

module.exports = bookshelf.model("CreatureStatus", CreatureStatus);
