const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

//get all posts

//get all posts associated with one user

//get all posts associated with a tag

//get all posts associated with a category

//get one post by id

//get one pst by title

//edit post category

//edit post tags

//create new post as admin

//delete post => archive post and comments

//delete post => remove post and comments from database

module.exports = router