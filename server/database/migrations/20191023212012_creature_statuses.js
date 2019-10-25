exports.up = function(knex) {
  return knex.schema.createTable("creature_statuses", table => {
    table.increments();
    table.string("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("creature_statuses");
};
