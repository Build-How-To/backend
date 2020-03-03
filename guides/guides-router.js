const express = require('express');

const Guides = require('./guides-model');

const router = express.Router();

// get all guides
router.get('/', (req, res) => {
  Guides.getAllGuides()
    .then(guides => {
      res.json(guides)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error getting all guides!' })
    })
})

// add guide
router.post('/', (req, res) => {
  const guide = req.body;

  Guides.addGuide(guide)
    .then(guide => {
      res.status(201).json({
        message: 'New guide added!',
        id: guide.id,
        title: guide.title,
        description: guide.description
      });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error creating new guide', error })
    })
})

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

// get guide by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Guides.getGuideByID(id)
    .then(guide => {
      if (guide) {
        res.json(guide)
      } else {
        res.status(404).json({ message: 'Could not find guide with that id!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting that guide!', error })
    })
})

// get all steps by guide ID
router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Guides.getAllStepsByGuideID(id)
    .then(steps => {
      if(steps.length) {
        res.json(steps)
      } else {
        res.status(404).json({ message: 'Could not find any steps with that guide id!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting steps for that guide id!', error })
    })
})

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
