const guidesDB = require('../data/dbConfig.js');

module.exports = {
  getAllGuides,
  addGuide,
  updateGuide,
  removeGuide,
  getGuideByID,
  getAllStepsByGuideID,
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

function updateGuide() {

}

function removeGuide() {

}

function getGuideByID() {

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

function addStepToGuide(step) {
  return projectsDB('steps')
    .insert(step)
    .then(step => {
      return step;
    })
}

function updateStep() {

}

function removeStep() {

}
