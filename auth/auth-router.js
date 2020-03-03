const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel.js');
const { jwtSecret } = require('../config/secrets.js');

// register new user
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(user => {
      res.status(201).json({
        message: `Welcome, ${user.username}!`,
        id: user.id
      });
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          id: user.id,
          token
        })
      } else {
        res.status(401).json({ message: 'Invalid credentials!' })
      }
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).json({ error: 'Error logging in!' })
    })
})

// get user by ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(user => {
      if(user) {
        res.json(user)
      } else {
        res.status(404).json({ message: 'Could not find user with that id!'})
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting user by id!', error })
    })
})

function generateToken(user) {
  const payload = {
    username: user.username,
    role: user.role || 'user'
  }

  const options = {
    expiresIn: '24h'
  }

  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
