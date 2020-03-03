
exports.seed = function(knex) {
  return knex('steps')
    .truncate()
    .then(function() {
      return knex('steps').insert([
        {
          "step_number": "1",
          "description": "Get a decent computer with internet access",
          "guide_id": "1"
        },
        {
          "step_number": "2",
          "description": "Sign up to Lambda School",
          "guide_id": "1"
        },
        {
          "step_number": "3",
          "description": "Agree to ISA",
          "guide_id": "1"
        },
        {
          "step_number": "4",
          "description": "Study hard",
          "guide_id": "1"
        },
        {
          "step_number": "5",
          "description": "Get new job!",
          "guide_id": "1"
        },
        {
          "step_number": "6",
          "description": "Profit!",
          "guide_id": "1"
        }
      ])
    })
};
