const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const aboutRoutes = require('./aboutRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const error = require('../error');
const postRoutes = require('./postRoutes');
const loginRoutes = require('./loginRoutes');
const searchRoutes = require('./searchRoutes');
const tagRoutes = require('./tagRoutes')

router.use('/search', searchRoutes);
router.use('/about', aboutRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);
router.use('/user-login', loginRoutes);
router.use('/post', postRoutes);
router.use('/tag', tagRoutes);
router.use('/', homeRoutes);
router.use(error.get404);

module.exports = router;