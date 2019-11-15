exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("creatures")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("creatures").insert([
        {
          name: "python, carpet",
          description: "morelia spilotes variegata",
          user_id: 1,
          category_id: 3,
          creature_status_id: 1,
          condition_id: 1,
          price: 1438,
          sort_by_date: "2019-08-24T12:03:39Z"
        },
        {
          name: "wolf, mexican",
          description: "Canis lupus baileyi",
          user_id: 1,
          category_id: 2,
          creature_status_id: 1,
          condition_id: 1,
          price: 613,
          sort_by_date: "2019-05-10T21:03:53Z"
        },
        {
          name: "bleu, blue-breasted cordon",
          description: "uraeginthus angolensis",
          user_id: 2,
          category_id: 3,
          creature_status_id: 1,
          condition_id: 5,
          price: 3304,
          sort_by_date: "2018-12-27T17:19:23Z"
        },
        {
          name: "eastern box turtle",
          description: "terrapene carolina",
          user_id: 1,
          category_id: 2,
          creature_status_id: 1,
          condition_id: 5,
          price: 9593,
          sort_by_date: "2019-10-05T14:48:33Z"
        },
        {
          name: "red-breasted nuthatch",
          description: "sitta canadensis",
          user_id: 2,
          category_id: 3,
          creature_status_id: 1,
          condition_id: 5,
          price: 1188,
          sort_by_date: "2019-01-09T04:02:04Z"
        },
        {
          name: "savanna baboon",
          description: "papio cynocephalus",
          user_id: 1,
          category_id: 1,
          creature_status_id: 1,
          condition_id: 5,
          price: 7221,
          sort_by_date: "2019-11-02T16:09:39Z"
        },
        {
          name: "woodpecker, red-headed",
          description: "melanerpes erythrocephalus",
          user_id: 1,
          category_id: 1,
          creature_status_id: 1,
          condition_id: 4,
          price: 3710,
          sort_by_date: "2019-09-03T18:26:51Z"
        },
        {
          name: "crowned hawk-eagle",
          description: "spizaetus coronatus",
          user_id: 3,
          category_id: 1,
          creature_status_id: 1,
          condition_id: 3,
          price: 4954,
          sort_by_date: "2019-08-31T17:05:38Z"
        },
        {
          name: "indian mynah",
          description: "acridotheres tristis",
          user_id: 4,
          category_id: 1,
          creature_status_id: 1,
          condition_id: 3,
          price: 7446,
          sort_by_date: "2019-05-23T22:12:13Z"
        },
        {
          name: "eagle, tawny",
          description: "anitibyx armatus",
          user_id: 3,
          category_id: 4,
          creature_status_id: 1,
          condition_id: 2,
          price: 5867,
          sort_by_date: "2019-02-21T19:41:31Z"
        }
      ]);
    });
};
