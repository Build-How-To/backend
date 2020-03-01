const express = require('express');

const Guides = require('./guides-model');

const router = express.Router();

// get all guides
router.get('/', (req, res) => {
  Guides.getAllGuides()
    .then(guides => {
      guides.map(guide => {
        res.status(200).json(guides)
      })
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error getting all guides!' })
    })
})

// add guide

// update guide
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Guides.getGuideByID(id)
    .then(guide => {
      if (guide) {
        Guides.updateGuide(changes, id)
          .then(updatedGuide => {
            res.json(updatedGuide)
          })
      } else {
        res.status(404).json({ message: 'Could not find guide with that id!' })
      }
    })
    .catch (error => {
      res.status(500).json({ message: 'Error updating that guide!', error })
    })
})

// remove guide
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Guides.removeGuide(id)
    .then(deleted => {
      if (deleted) {
        res.json({ message: 'Guide deleted!' })
      } else {
        res.status(404).json({ message: 'Could not find guide with that id!' })
      }
    })
    .catch (error => {
      res.status(500).json({ message: 'Error deleting that guide!', error })
    })
})

// get buide by ID

// get all steps by guide ID

// add step to guide
router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params;

  Guides.getGuideByID(id)
    .then(guide => {
      if (guide) {
        Guides.addStepToGuide(stepData, id)
          .then(step => {
            res.status(201).json(step)
          })
      } else {
        res.status(404).json({ message: 'Could not find guide with that id!' })
      }
    })
    .catch (error => {
      res.status(500).json({ message: 'Error adding step to that guide!', error })
    })
})

// update step

// remove step

module.exports = router;
