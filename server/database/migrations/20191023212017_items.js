exports.up = function(knex) {
  return knex.schema.createTable("items", table => {
    table.increments();
    table.string("img_url").notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table
      .integer("created_by")
      .unsigned()
      .references("users.id");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("items");
};
