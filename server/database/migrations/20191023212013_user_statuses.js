exports.up = function(knex) {
  return knex.schema.createTable("user_statuses", table => {
    table.increments();
    table.string("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_statuses");
};
