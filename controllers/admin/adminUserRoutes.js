const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../../models');
const withAuth = require('../../utils/auth');

//get all users

//get user by id

//get user by username

//get user by email

//edit user => admin status

//edit user => username

//edit user => email

//edit user => isolate/deactivate/ban

//edit user => other

//create new user

//delete user => archive user - user posts - user comments

//delete user => delete user and all user data 

module.exports = router