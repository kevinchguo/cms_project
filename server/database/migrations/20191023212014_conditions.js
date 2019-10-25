exports.up = function(knex) {
  return knex.schema.createTable("conditions", table => {
    table.increments();
    table.string("condition");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("conditions");
};
