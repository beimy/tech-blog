const router = require('express').Router();
const sequelize = require('../../config/connection');




/*
================================================
About ROUTES default: localhost:3010/about/
================================================
*/

// DEFAULT => RENDER About-PAGE
router.get('/', async(req, res) => {
    res.status(200).render('about-us', {
      pageTitle: 'About - Rabbit Hole',
      userNav: true,
      mainCSS: true,
      mainJS: true,
    })
  })

  module.exports = router;