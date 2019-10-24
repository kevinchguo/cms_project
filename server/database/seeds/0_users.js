exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "kevin@devleague.com",
          password: "kguo"
        },
        {
          email: "lewis@devleague.com",
          password: "lnozaki"
        },
        {
          email: "justin@devleague.com",
          password: "jbenson"
        },
        {
          email: "calvin@devleague.com",
          password: "cmoon"
        },
        {
          email: "bdefau4@etsy.com",
          password: "U73iruoyZZFv"
        },
        {
          email: "jnursey5@flickr.com",
          password: "oien6N"
        },
        {
          email: "jgirardey6@netvibes.com",
          password: "tIHQmIIvS"
        },
        {
          email: "mtomala7@shop-pro.jp",
          password: "v97Yr3c"
        },
        {
          email: "npettinger8@eventbrite.com",
          password: "FfAdcOQm"
        },
        {
          email: "bworham9@so-net.ne.jp",
          password: "FxbF7Aclgj"
        }
      ]);
    });
};
