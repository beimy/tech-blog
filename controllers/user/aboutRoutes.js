const router = require('express').Router();
const sequelize = require('../../config/connection');




/*
================================================
About ROUTES default: localhost:3010/about/
================================================
*/

// DEFAULT => RENDER About-PAGE
router.get('/', async(req,res) => {
  try {

      res.status(200).render('about-us', {
        pageTitle: 'About - Rabbit Hole',
        userNav: true,
        mainCSS: true,
        mainJS: true,
      })
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in About Page Route: ${err}`});
    console.log(err);
  }
})



  module.exports = router;