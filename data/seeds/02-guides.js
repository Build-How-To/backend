
exports.seed = function(knex) {
  return knex('guides')
    .truncate()
    .then (function() {
      return knex('guides').insert([
        {
          "title": "Upgrade your career",
          "description": "Get a better career in a few (easy?) steps!",
          "category": "tech",
          "difficulty": "hard",
          "creator_user_id": "1"
        },
        {
          "title": "Make a dubstep tune",
          "description": "Create a new dancefloor hit from scratch!",
          "category": "music",
          "difficulty": "hard",
          "creator_user_id": "1"
        }
      ])
    })
};
