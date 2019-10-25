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
          created_by: 2,
          category: 3,
          creature_status: 1,
          condition: 2
        },
        {
          name: "Physignathus cocincinus",
          description: "Sharable client-driven knowledge base",
          created_by: 3,
          category: 1,
          creature_status: 1,
          condition: 2
        },
        {
          name: "unavailable",
          description: "Profound non-volatile throughput",
          created_by: 3,
          category: 2,
          creature_status: 1,
          condition: 2
        },
        {
          name: "Choloepus hoffmani",
          description: "Polarised disintermediate concept",
          created_by: 3,
          category: 3,
          creature_status: 2,
          condition: 1
        },
        {
          name: "Vanellus armatus",
          description: "Organic stable hardware",
          created_by: 3,
          category: 3,
          creature_status: 2,
          condition: 4
        },
        {
          name: "Erinaceus frontalis",
          description: "Implemented coherent ability",
          created_by: 4,
          category: 1,
          creature_status: 3,
          condition: 3
        },
        {
          name: "Spermophilus tridecemlineatus",
          description: "Visionary analyzing encoding",
          created_by: 3,
          category: 4,
          creature_status: 1,
          condition: 3
        },
        {
          name: "Oxybelis fulgidus",
          description: "Digitized hybrid productivity",
          created_by: 1,
          category: 4,
          creature_status: 1,
          condition: 2
        },
        {
          name: "Aegypius tracheliotus",
          description: "Right-sized non-volatile parallelism",
          created_by: 4,
          category: 3,
          creature_status: 1,
          condition: 3
        },
        {
          name: "Irania gutteralis",
          description: "Profound asynchronous encoding",
          created_by: 4,
          category: 4,
          creature_status: 3,
          condition: 2
        }
      ]);
    });
};
