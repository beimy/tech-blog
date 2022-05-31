const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const error = require('../error');


router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);
router.use(error.get404);

module.exports = router;