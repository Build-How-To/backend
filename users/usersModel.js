const userDB = require('../data/dbConfig.js');

module.exports = {
  add,
  find
}

async function add(user) {
  const [id] = await userDB('users').insert(user);

  return findById(id);
}

function find() {
  return userDB('users').select('id', 'username')
}
