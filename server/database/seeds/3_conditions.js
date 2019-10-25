exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("conditions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("conditions").insert([
        { condition: "newborn" },
        { condition: "young" },
        { condition: "adult" },
        { condition: "elder" },
        { condition: "deceased" }
      ]);
    });
};
