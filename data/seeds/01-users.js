
exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then (function() {
      return knex('users').insert([
        {
          "username": "adamuser",
          "password": "password",
          "email": "adam@adam.me",
          "first_name": "adam",
          "last_name": "winz"
        },
        {
          "username": "sarah",
          "password": "sarah",
          "email": "sarah@adam.me",
          "first_name": "sarah",
          "last_name": "winz"
        }
      ])
    })
};
