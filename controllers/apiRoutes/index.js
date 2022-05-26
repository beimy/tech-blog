const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const searchRoutes = require('./searchRoutes');
const userRoutes = require('./userRoutes');
const voteRoutes = require('./voteRoutes');

router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/search', searchRoutes);
router.use('/user', userRoutes);
router.use('/vote', voteRoutes);

module.exports = router