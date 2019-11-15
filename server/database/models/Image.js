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
    return this.belongsTo("Creature", 'id', "creature_id");
  }
}

module.exports = bookshelf.model("Image", Image);
