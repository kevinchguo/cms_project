exports.up = function(knex) {
  return knex.schema.createTable("images", table => {
    table.increments();
    table.string("url").notNullable();
    table
      .integer("creature_id")
      .unsigned()
      .references("creatures.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("images");
};
