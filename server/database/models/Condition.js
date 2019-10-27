const bookshelf = require("../bookshelf");

class Condition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }
  get timestamps() {
    return true;
  }
}

module.exports = bookshelf.model("Condition", Condition);
