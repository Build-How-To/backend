const guidesDB = require('../data/dbConfig.js');

module.exports = {
  getAllGuides,
  addGuide,
  updateGuide,
  removeGuide,
  getGuideByID,
  getAllStepsByGuideID,
  getStepByID,
  addStepToGuide,
  updateStep,
  removeStep,
  getReviewsByGuideID,
  addReview
}

function getAllGuides() {
  return guidesDB('guides');
}

async function addGuide(guide) {
  const [id] = await guidesDB('guides').insert(guide)

  return getGuideByID(id);
}

function updateGuide(changes, id) {
  return guidesDB('guides')
    .where({ id })
    .update(changes);
}

function removeGuide(id) {
  return guidesDB('guides')
    .where({ id })
    .del()
}

function getGuideByID(id) {
  return guidesDB('guides')
    .where({ id })
    .first()
}

function getAllStepsByGuideID(id) {
  return guidesDB('steps')
    .join('guides', 'guides.id', 'steps.guide_id')
    .select('steps.id', 'guides.title', 'steps.step_number', 'steps.description')
    .where('steps.guide_id', id)
    .orderBy('step_number', 'asc')
}

function getStepByID(id) {
  return guidesDB('steps')
    .where({ id })
    .first()
}

function addStepToGuide(step) {
  return guidesDB('steps')
    .insert(step)
    .then(step => {
      return step;
    })
}

function updateStep(changes, id) {
  return guidesDB('steps')
    .where({ id })
    .update(changes);
}

function removeStep(id) {
  return guidesDB('steps')
    .where({ id })
    .del()
}

function getReviewsByGuideID(id) {
  return guidesDB('reviews')
    .join('guides', 'guides.id', 'reviews.guide_id')
    .select('reviews.id', 'guides.title', 'reviews.review', 'reviews.author_user_id', 'reviews.guide_id')
    .where('reviews.guide_id', id)
}

function addReview(review) {
  return guidesDB('reviews')
    .insert(review)
    .then(review => {
      return review;
    })
}
