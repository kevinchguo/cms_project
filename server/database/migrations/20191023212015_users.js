exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("name", 25).notNullable();
    table.string("password").notNullable();
    table
      .integer("user_status")
      .unsigned()
      .references("user_status");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
