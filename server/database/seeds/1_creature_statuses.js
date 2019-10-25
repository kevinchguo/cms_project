exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("creature_statuses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("creature_statuses").insert([
        {
          status: "for_sale"
        },
        {
          status: "sold"
        },
        {
          status: "in_cart"
        }
      ]);
    });
};
