const bookshelf = require("../bookshelf");
require("../models/Creature");
class Image extends bookshelf.Model {
  get tableName() {
    return "images";
  }
  get timestamps() {
    return true;
  }

  creature_id() {
    return this.belongsToMany("Creature", "creatures");
  }
}

module.exports = bookshelf.model("Image", Image);
