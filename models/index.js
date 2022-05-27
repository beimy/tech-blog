const User = require('./Users');
const Post = require('./Post');
// const Vote = require('vote');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id'
})

User.hasMany(Comment, {
  foreignKey: 'user_id'
})

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

module.exports = {
  User,
  Post,
  Comment
};