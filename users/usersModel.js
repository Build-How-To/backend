const userDB = require('../data/dbConfig.js');

module.exports = {
  add,
  findBy,
  findById,
  getAllUsers,
  remove
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
    .select('username', 'id')
    .first();
}

function getAllUsers() {
  return userDB('users')
    .select('username', 'id', 'email', 'first_name', 'last_name');
}

function remove(id) {
  return userDB('users')
    .where({ id })
    .del() 
}
