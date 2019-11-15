const bookshelf = require("../bookshelf");
require("./User");
require("./Category");
require("./CreatureStatus");
require("./Condition");
require("./Image");

class Creature extends bookshelf.Model {
  get tableName() {
    return "creatures";
  }
  get timestamps() {
    return true;
  }

  user_id() {
    return this.hasOne("User", "id", "user_id");
  }

  category_id() {
    return this.hasOne("Category", "id", "category_id");
  }

  creature_status_id() {
    return this.hasOne("CreatureStatus", "id", "creature_status_id");
  }

  condition_id() {
    return this.hasOne("Condition", "id", "condition_id");
  }

  image_id() {
    return this.hasMany('Image');
  }
}

module.exports = bookshelf.model("Creature", Creature);
