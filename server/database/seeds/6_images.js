exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        { url: "https://placekitten.com/g/300/300", creature_id: 1 },
        { url: "https://placekitten.com/g/300/200", creature_id: 1 },
        { url: "https://placekitten.com/g/300/300", creature_id: 2 },
        { url: "https://placekitten.com/g/300/300", creature_id: 3 },
        { url: "https://placekitten.com/g/300/300", creature_id: 4 },
        { url: "https://placekitten.com/g/300/300", creature_id: 5 },
        { url: "https://placekitten.com/g/300/300", creature_id: 6 },
        { url: "https://placekitten.com/g/300/300", creature_id: 7 },
        { url: "https://placekitten.com/g/300/300", creature_id: 8 },
        { url: "https://placekitten.com/g/300/300", creature_id: 9 },
        { url: "https://placekitten.com/g/300/300", creature_id: 10 }
      ]);
    });
};
