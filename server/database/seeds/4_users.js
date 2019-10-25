exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "kevin@devleague.com",
          name: "Kevin",
          password: "kguo",
          user_status: 1
        },
        {
          email: "lewis@devleague.com",
          name: "Lewis",
          password: "lnozaki",
          user_status: 1
        },
        {
          email: "justin@devleague.com",
          name: "Justin",
          password: "jbenson",
          user_status: 1
        },
        {
          email: "calvin@devleague.com",
          name: "Calvin",
          password: "cmoon",
          user_status: 1
        },
        {
          email: "lstratiff0@nsw.gov.au",
          name: "Land",
          password: "NTZPLxjt",
          user_status: 1
        },
        {
          email: "kkynder1@hexun.com",
          name: "Kimberly",
          password: "dMXuxxD1QX",
          user_status: 1
        },
        {
          email: "aglaisner2@cdbaby.com",
          name: "Amalle",
          password: "P7kaUCDPv6L",
          user_status: 1
        },
        {
          email: "pcosgriff3@nifty.com",
          name: "Pris",
          password: "Br82s3QPIOI",
          user_status: 1
        },
        {
          email: "scorneille4@pen.io",
          name: "Skipper",
          password: "JtHzGrkjra",
          user_status: 1
        },
        {
          email: "nbusch5@google.ru",
          name: "Norby",
          password: "e5eIAR3VjA",
          user_status: 1
        },
        {
          email: "dmitroshinov6@bluehost.com",
          name: "Dara",
          password: "6wPe0hrkTd",
          user_status: 1
        }
      ]);
    });
};
