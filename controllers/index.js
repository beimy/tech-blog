const router = require('express').Router();

const error = require('./error');
const userRoutes = require('./user');

router.use('/', userRoutes);

module.exports = router;