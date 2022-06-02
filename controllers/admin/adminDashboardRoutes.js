const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

//render admin dashboard

module.exports = router