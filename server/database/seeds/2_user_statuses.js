exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_statuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_statuses").insert([
        { status: "active" },
        { status: "inactive" }
      ]);
    });
};
