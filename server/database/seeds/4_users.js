exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'kevin@devleague.com',
          name: 'kevin',
          password: 'kguo',
          user_status: 1
        },
        {
          email: 'lewis@devleague.com',
          name: 'lewis',
          password: 'lnozaki',
          user_status: 1
        },
        {
          email: 'justin@devleague.com',
          name: 'justin',
          password: 'jbenson',
          user_status: 1
        },
        {
          email: 'calvin@devleague.com',
          name: 'calvin',
          password: 'cmoon',
          user_status: 1
        },
        {
          email: 'lstratiff0@nsw.gov.au',
          name: 'land',
          password: 'NTZPLxjt',
          user_status: 1
        },
        {
          email: 'kkynder1@hexun.com',
          name: 'kimberly',
          password: 'dMXuxxD1QX',
          user_status: 1
        },
        {
          email: 'aglaisner2@cdbaby.com',
          name: 'amalle',
          password: 'P7kaUCDPv6L',
          user_status: 1
        },
        {
          email: 'pcosgriff3@nifty.com',
          name: 'pris',
          password: 'Br82s3QPIOI',
          user_status: 1
        },
        {
          email: 'scorneille4@pen.io',
          name: 'skipper',
          password: 'JtHzGrkjra',
          user_status: 1
        },
        {
          email: 'nbusch5@google.ru',
          name: 'norby',
          password: 'e5eIAR3VjA',
          user_status: 1
        },
        {
          email: 'dmitroshinov6@bluehost.com',
          name: 'dara',
          password: '6wPe0hrkTd',
          user_status: 1
        }
      ]);
    });
};
