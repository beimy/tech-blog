const router = require('express').Router();

const error = require('./error');
const adminRoutes = require('./admin');
const userRoutes = require('./user');

router.use('/admin', adminRoutes);
router.use('/', userRoutes);

module.exports = router;