const router = require('express').Router();

const adminDashboardRoutes = require('./adminDashboardRoutes');
const adminCategoryRoutes = require('./adminCategoryRoutes');
const adminCommentRoutes = require('./adminCommentRoutes');
const adminPostRoutes = require('./adminPostRoutes');
const adminUserRoutes = require('./adminUserRoutes');
const adminTagRoutes = require('./adminTagRoutes');
const adminLoginRoutes = require('./adminLoginRoutes');
const error = require('../error');

router.use('/dashboard', adminDashboardRoutes);
router.use('/categories', adminCategoryRoutes);
router.use('/comments', adminCommentRoutes);
router.use('/login', adminLoginRoutes);
router.use('/posts', adminPostRoutes);
router.use('/users', adminUserRoutes);
router.use('/tags', adminTagRoutes);
router.use(error.get404);

module.exports = router;