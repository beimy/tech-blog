const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');

 
User.hasMany(Post);
User.hasMany(Comment);
Post.belongsTo(User);
// Post.belongsTo(Category);
Category.hasMany(Post);

Post.hasMany(Comment);
Post.hasMany(Tag);
Comment.belongsTo(Post);
Comment.belongsTo(User);
Comment.hasMany(Tag);

Tag.belongsToMany(Post, {
  through: "post_tags"
});
Tag.belongsToMany(Comment, {
  through: "comment_tags"
});


module.exports = {User, Comment, Post, Category, Tag};

