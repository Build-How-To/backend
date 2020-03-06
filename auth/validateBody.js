module.exports = { 
  validateBody, 
  validateLogin 
};

function validateBody(req, res, next) {
  const body = req.body;
  if (
    !body.username ||
    body.username === null ||
    body.username === '' ||
    !body.password ||
    body.password === null ||
    body.password === '' ||
    !body.email ||
    body.email === null ||
    body.email === '' ||
    !body.first_name ||
    body.first_name === null ||
    body.first_name === '' ||
    !body.last_name ||
    body.last_name === null ||
    body.last_name === ''
  ) {
    res.status(400).json({ message: 'Please include a all required fields: username, password, email, first name, and last name!' })
  } else {
    next();
  }
}

function validateLogin(req, res, next) {
  const body = req.body;
  if (
    !body.username ||
    body.username === null ||
    body.username === '' ||
    !body.password ||
    body.password === null ||
    body.password === ''
  ) {
    res.status(400).json({ message: 'Please include a all required fields: username and password!' })
  } else {
    next();
  }
}
