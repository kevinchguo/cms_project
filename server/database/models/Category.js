const bookshelf = require("../bookshelf");

class Category extends bookshelf.Model {
  get tableName() {
    return "categories";
  }
  get timestamps() {
    return true;
  }
}

module.exports = bookshelf.model("Category", Category);
