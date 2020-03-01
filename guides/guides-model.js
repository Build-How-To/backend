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
  removeStep
}

function getAllGuides() {
  return guidesDB('guides');
}

function addGuide(guide) {
  return guidesDB('guides')
    .insert(guide)
    .then(guide => {
      return guide;
    })
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
    .select(
      'guides.title',
      'guides.description',
      'steps.step_number',
      'steps.description',
      // 'steps.stepPhoto'
    )
    .join('guides', 'steps.guide_id', 'steps.id')
    .where({ 'guides.id': id })
    .then(steps => {
      return steps.map(step => {
        return {...step}
      })
    })
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
