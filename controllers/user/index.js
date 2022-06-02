const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const error = require('../error');
const postRoutes = require('./postRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);
router.use('/user-login', loginRoutes);
router.use('/posts', postRoutes);
router.use('/', homeRoutes);
router.use(error.get404);

module.exports = router;