const bookshelf = require("../bookshelf");

class Category extends bookshelf.Model {
  get tableName() {
    return "categories";
  }
  get timestamps() {
    return true;
  }
  // creature() {
  //   return this.belongsToMany('Creature');
  // }
}

module.exports = bookshelf.model("Category", Category);
