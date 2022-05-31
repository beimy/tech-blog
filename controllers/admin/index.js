const router = require('express').Router();

const adminRoutes = require('./adminRoutes');

router.use('/admin', adminRoutes);

module.exports = router;