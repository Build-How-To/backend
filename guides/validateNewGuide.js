function validateGuide(req, res, next) {
  const body = req.body;
  if (
    !body.title ||
    body.title === null ||
    body.title === '' ||
    !body.description ||
    body.description === null ||
    body.description === '' ||
    !body.category ||
    body.category === null ||
    body.category === '' ||
    !body.difficulty ||
    body.difficulty === null ||
    body.difficulty === '' ||
    !body.creator_user_id ||
    body.creator_user_id === null ||
    body.creator_user_id === ''
  ) {
    res.status(400).json({ message: 'Please include a all required fields: title, description, category, difficulty, creator_user_id' })
  } else {
    next();
  }
}

module.exports = validateGuide;
