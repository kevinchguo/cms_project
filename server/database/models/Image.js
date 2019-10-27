const bookshelf = require("../bookshelf");

class Image extends bookshelf.Model {
  get tableName() {
    return "images";
  }
  get timestamps() {
    return true;
  }

  creature_id() {
    return this.belongsTo("Creature");
  }
}

module.exports = bookshelf.model("Image", Image);
