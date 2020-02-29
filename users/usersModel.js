const userDB = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
  findById
}

async function add(user) {
  const [id] = await userDB('users').insert(user);

  return findById(id);
}

function findBy(filter) {
  return userDB('users').where(filter);
}

function findById(id) {
  return userDB('users')
    .where({ id })
    .select('username')
    .first();
}
