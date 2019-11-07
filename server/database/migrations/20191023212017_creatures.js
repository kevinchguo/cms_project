exports.up = function(knex) {
  return knex.schema.createTable("creatures", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("description").notNullable();
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .notNullable();
    table
      .integer("category_id")
      .unsigned()
      .references("categories.id")
      .notNullable();
    table
      .integer("creature_status_id")
      .unsigned()
      .references("creature_statuses.id")
      .notNullable();
    table
      .integer("condition_id")
      .unsigned()
      .references("conditions.id")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("creatures");
};
