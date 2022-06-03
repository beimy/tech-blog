const router = require('express').Router();

const error = require('./error');
const userRoutes = require('./user');
const adminRoutes = require('./admin');

router.use('/admin', adminRoutes)
router.use('/', userRoutes);

module.exports = router;