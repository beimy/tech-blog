const router = require('express').Router();
const sequelize = require('../../config/connection');




/*
================================================
About ROUTES default: localhost:3010/about/
================================================
*/

// DEFAULT => RENDER About-PAGE
router.get('/about', async(req, res) => {
    res.status(200).render('aboutPage', {
      pageTitle: 'About',
      userNav: true,
      mainCSS: true,
      mainJS: true,
    })
  })

  module.exports = router;