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

// ToDo
// revisit photo option in guides-model
// add logic to prevent empty strings in register/login fields, also in forms for guiedes/steps, see snippet sent by Samuel
// add logic to prevent duplicate usernames and email addresses during registration
// migrate to postgres
// revisit role authentication for users, include id in token and decrypt upon edit/delete request?

// ADD *.db3 to gitignore!

// install postgres with npm i pg

// migration to postgres:
// in knexfile, in production, change client from 'postgresql' to 'pg'
// in production => connection, take out the entire object and replace it with an environment variable because postgres will assign it automatically
// connection: process.env.DATABASE_URL
// Still in production, remove everything in the migrations object, but leave it as an object.
// migrations: {
//   directory: './data/migrations',
// }
// We also do the same for seeds:
// seeds: {
//     directory: './data/seeds'
// }

// Push to github, and the server should still be up on heroku even after making the changes to knexfile, so you should still be able to send a get request to /
// On heroku, click on configure add-ons
// search for heroku-postgres, click on it, use Hobby-Dev for free, click on Provision.
// Then, go to settings, click on Reveal Config Vars, which is how heroku creates a .env file.  The port config may or may not be there, but it shouldn't need to be changed.  
// Still in settings, enter a key of DB_ENV, value is production.
// Then, go to more, then choose run console.
// From the console in heroku, run knex migrate:latest
// Heroku will say process exited when the command finishes, we can then click run another command.
// In the next terminal on heroku, run the seed files.

// -- Alt tutorial on heroku sqlite to postgres
// go to resources, search for heroku-postgres, click on it, use Hobby-Dev for free, click on Provision.
// go to settings, config vars, enter a key of DB_ENV, value is production.

// in knexfile, in production, change client from 'postgresql' to 'pg'
// in production => connection, take out the entire object and replace it with an environment variable because postgres will assign it automatically
// connection: process.env.DATABASE_URL
// Now, we can either run the console in heroku, or to run the migrations and seeds for heroku from within the local CLI, we can run
// npx heroku run knex migrate:latest -a myAppName
// then to seed the data on the database in heroku, from the local command line, run
// npx heroku run knex seed:run -a myAppName

// VERY IMPORTANT:
// In the model file, for insert requests, we need to pass the id into the insert function, as in 
// async function insert(hobbit) {
//   const [ id ] = await debugger('hobbits').insert(hobbit, 'id');
// }
// This will need to be done for all insert requests in the model files