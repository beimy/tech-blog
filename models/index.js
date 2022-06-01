const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');

User.hasMany(Post, {
    foreignKey: 'user_id'
});
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  


module.exports = {User, Comment, Post, Category, Tag};

