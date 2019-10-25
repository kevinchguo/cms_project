exports.up = function(knex) {
  return knex.schema.createTable("creatures", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table
      .integer("created_by")
      .unsigned()
      .references("users.id")
      .notNullable();
    table
      .integer("category")
      .unsigned()
      .references("categories.id")
      .notNullable();
    table
      .integer("creature_status")
      .unsigned()
      .references("creature_statuses.id")
      .notNullable();
    table
      .integer("condition")
      .unsigned()
      .references("conditions.id")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("creatures");
};
