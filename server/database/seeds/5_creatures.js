exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("creatures")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("creatures").insert([
        {
          name: "Cereopsis novaehollandiae",
          description: "Optional reciprocal neural-net",
          user_id: 2,
          category_id: 3,
          creature_status_id: 1,
          condition_id: 2
        },
        {
          name: "Physignathus cocincinus",
          description: "Sharable client-driven knowledge base",
          user_id: 3,
          category_id: 1,
          creature_status_id: 1,
          condition_id: 2
        },
        {
          name: "unavailable",
          description: "Profound non-volatile throughput",
          user_id: 3,
          category_id: 2,
          creature_status_id: 1,
          condition_id: 2
        },
        {
          name: "Choloepus hoffmani",
          description: "Polarised disintermediate concept",
          user_id: 3,
          category_id: 3,
          creature_status_id: 2,
          condition_id: 1
        },
        {
          name: "Vanellus armatus",
          description: "Organic stable hardware",
          user_id: 3,
          category_id: 3,
          creature_status_id: 2,
          condition_id: 4
        },
        {
          name: "Erinaceus frontalis",
          description: "Implemented coherent ability",
          user_id: 4,
          category_id: 1,
          creature_status_id: 3,
          condition_id: 3
        },
        {
          name: "Spermophilus tridecemlineatus",
          description: "Visionary analyzing encoding",
          user_id: 3,
          category_id: 4,
          creature_status_id: 1,
          condition_id: 3
        },
        {
          name: "Oxybelis fulgidus",
          description: "Digitized hybrid productivity",
          user_id: 1,
          category_id: 4,
          creature_status_id: 1,
          condition_id: 2
        },
        {
          name: "Aegypius tracheliotus",
          description: "Right-sized non-volatile parallelism",
          user_id: 4,
          category_id: 3,
          creature_status_id: 1,
          condition_id: 3
        },
        {
          name: "Irania gutteralis",
          description: "Profound asynchronous encoding",
          user_id: 4,
          category_id: 4,
          creature_status_id: 3,
          condition_id: 2
        }
      ]);
    });
};
