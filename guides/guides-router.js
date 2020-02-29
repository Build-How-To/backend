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

module.exports = router;
