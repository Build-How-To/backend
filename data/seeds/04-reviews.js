
exports.seed = function(knex) {
  return knex('reviews')
    .truncate()
    .then(function() {
      return knex('reviews').insert([
        {
          "review": "I loved this guide!",
          "guide_id": "1",
          "author_user_id": "1"
        },
        {
          "review": "I thought this guide was just meh...",
          "guide_id": "1",
          "author_user_id": "2"
        }
      ])
    })
};
