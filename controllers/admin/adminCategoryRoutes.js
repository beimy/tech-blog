const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

//get all category
router.get('/', async(req, res) => {
  try {
    res.status(200).json({ message: 'Get all categories called from admin routes'})
  } catch (err) {
    res.status(500).json({message: `Unexpected error found in admin get all categories route ${err}`})
  }
})

//get category by id
router.get('/:id', async(req, res) => {
  try {
    res.status(200).json({message: 'get categories by id called from admin routes'})
  } catch (err) {
    res.status(500).json({message: `Unexpected error found in admin get category by id route: ${err}`})
  }
})

//create new category
router.post('/', async(req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json({ message: `Unexpected error found in admin create new category route: ${err}`})
  }
})

//edit category by id

//delete category by id

module.exports = router