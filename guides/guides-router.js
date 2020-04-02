const express = require('express');

const Guides = require('./guides-model');

const router = express.Router();

const validateNewGuide = require('./validateNewGuide');

// get guides by category
router.get('/category', (req, res) => {
  const { category } = req.body;

  Guides.getGuidesByCategory(category)
    .then(guides => {
      if(guides.length) {
        res.json(guides)
      } else {
        res.status(404).json({ message: 'Could not locate guides with that category!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting guides by category!', error })
    })
})

// get guides by difficulty
router.get('/difficulty', (req, res) => {
  const { difficulty } = req.body;

  Guides.getGuidesByDifficulty(difficulty)
    .then(guides => {
      if(guides.length) {
        res.json(guides)
      } else {
        res.status(404).json({ message: 'Could not locate guides with that difficulty!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error getting guides by difficulty!', error })
    })
})

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
router.post('/', validateNewGuide, (req, res) => {
  const guide = req.body;

  Guides.addGuide(guide)
    .then(guide => {
      res.status(201).json({
        message: 'New guide added!',
        id: guide.id,
        title: guide.title,
        description: guide.description,
        creator_user_id: guide.creator_user_id
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
            res.json({
              message: 'Guide updated!'
            })
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
            res.status(201).json({ message: 'Step added!', step })
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
router.put('/steps/:id', (req, res) => {
  const stepData = req.body;
  const { id } = req.params

  Guides.getStepByID(id)
    .then(step => {
      if(step) {
        Guides.updateStep(stepData, id)
          .then(updatedStep => {
            res.json({ message: 'Step updated!', updatedStep });
          })
      } else {
        res.status(404).json({ message: 'Could not locate step with that id!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error updating that step', error })
    })
})

// remove step
router.delete('/steps/:id', (req, res) => {
  const { id } = req.params;
  
  Guides.removeStep(id)
    .then(deleted => {
      if (deleted) {
        res.json({ message: 'Step deleted!' })
      } else {
        res.status(404).json({ message: 'Could not find step with that id!' })
      }
    })
    .catch (error => {
      res.status(500).json({ message: 'Error deleting that step!', error })
    })
})

// get reviews by guide id
router.get('/:id/reviews', (req, res) => {
  const { id } = req.params;

  Guides.getReviewsByGuideID(id)
    .then(reviews => {
      if(reviews.length) {
        res.json(reviews)
      } else {
        res.status(404).json({ message: 'Could not locate any reviews with that guide id! '})
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error getting all reviews!' })
    })
})

// post a new review
router.post('/:id/reviews', (req, res) => {
  const { id } = req.params;
  const reviewData = req.body;

  Guides.getGuideByID(id)
    .then(guide => {
      if(guide) {
        Guides.addReview(reviewData, id)
          .then(review => {
            res.status(201).json({ message: 'Review added!' })
          })
      } else {
        res.status(404).json({ message: 'Could not find guide with that id!' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error adding review to guide!', error })
    })
})

// get reviews by author id
router.get('/:id/reviews_author', (req, res) => {
  const { id } = req.params;

  Guides.getReviewsByAuthorID(id)
    .then(reviews => {
      if(reviews.length) {
        res.json(reviews)
      } else {
        res.status(404).json({ message: 'Could not locate any reviews with that author id! '})
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error getting all reviews!' })
    })
})

// remove review
router.delete('/:id/reviews', (req, res) => {
  const { id } = req.params;
  
  Guides.removeReview(id)
    .then(deleted => {
      if (deleted) {
        res.json({ message: 'Review deleted!' })
      } else {
        res.status(404).json({ message: 'Could not find review with that id!' })
      }
    })
    .catch (error => {
      res.status(500).json({ message: 'Error deleting that review!', error })
    })
})

module.exports = router;

// function validateBody(req, res, next) {
//   let body = req.body;

//   if (!body.title || body.title.length === 0 || /^\s*$/.test(body.title)) {
//     res.status(400).json({ message: "Please, enter a title" });
//   } else if (
//     !body.description ||
//     body.description.length === 0 ||
//     /^\s*$/.test(body.description)
//   ) {
//     res.status(400).json({ message: "Please, enter a description" });
//   } else if (
//     !body.category ||
//     body.category.length === 0 ||
//     /^\s*$/.test(body.category)
//   ) {
//     res
//       .status(400)
//       .json({ message: "Please, place this post under a category" });
//   } else if (
//     !body.difficulty ||
//     body.difficulty.length === 0 ||
//     /^\s*$/.test(body.difficulty)
//   ) {
//     res.status(400).json({ message: "Please, enter a difficulty level" });
//   } else {
//     next();
//   }
// }

// function validateId(req, res, next) {
//   let id = req.params.id;

//   db.findById(id)
//     .then(item => {
//       if (item) {
//         next();
//       } else {
//         res.status(400).json({
//           errorMessage: `A guide with an ID of ${id} does not exist!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ errorMessage: "Error occured" });
//     });
// }
