const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const guidesRouter = require('../guides/guides-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan('common'));

server.use('/api/auth', authRouter);
server.use('/api/guides', authenticate, guidesRouter);

server.get('/', (req, res) => {
  res.json({ server: 'Up and running! Let\'s make some guides and steps!' })
})

module.exports = server;
